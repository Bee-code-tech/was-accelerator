"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  autoSlideInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlideInterval = 5000,
  showArrows = true,
  showDots = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Improved slide variants for smoother transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Load image dimensions when current image changes
  useEffect(() => {
    const img = new window.Image();
    img.src = images[currentIndex]?.src;
    
    img.onload = () => {
      setImageDimensions({
        width: images[currentIndex].width || img.naturalWidth,
        height: images[currentIndex].height || img.naturalHeight
      });
    };
  }, [currentIndex, images]);

  // Auto slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval, handleNext, isPaused]);

  if (!images.length) return null;

  return (
    <div className="flex flex-col space-y-4">
      {/* Carousel Container with Dynamic Size */}
      <div 
        ref={containerRef}
        className="relative mx-auto overflow-hidden rounded-2xl shadow-lg"
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Carousel with improved animation */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width || 500}
              height={images[currentIndex].height || 500}
              priority={currentIndex === 0}
              className="block" 
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Updated for better visibility */}
        {showArrows && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute z-10 p-3 transform -translate-y-1/2 rounded-full bg-black/25 hover:bg-black/40 text-white left-4 top-1/2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute z-10 p-3 transform -translate-y-1/2 rounded-full bg-black/25 hover:bg-black/40 text-white right-4 top-1/2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Title Section - Moved outside the image container */}
      <div className="text-center px-2">
        <h3 className="text-xl font-semibold text-gray-800">{images[currentIndex].alt}</h3>
      </div>

      {/* Dot indicators - Moved below the image */}
      {showDots && (
        <div className="flex justify-center items-center space-x-2 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-blue-600 w-6 h-2" // Active dot is a rounded rectangle
                  : "bg-gray-300 w-2 h-2 hover:bg-blue-400" // Inactive dots are circles
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;