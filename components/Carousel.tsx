"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
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

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
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
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg h-[550px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Carousel */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority={currentIndex === 0}
            className="object-cover w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <h3 className="text-2xl font-bold">{images[currentIndex].alt}</h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm left-4 top-1/2 hover:bg-white/40 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute z-10 p-2 transform -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm right-4 top-1/2 hover:bg-white/40 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
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