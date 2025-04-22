"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface ScrollToTopProps {
  scrollThreshold?: number;
  iconSize?: number;
  position?: {
    bottom: number;
    right: number;
  };
  backgroundColor?: string;
  iconColor?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  scrollThreshold = 300,
  iconSize = 24,
  position = {
    bottom: 32,
    right: 32
  },
  backgroundColor = 'bg-blue-600',
  iconColor = 'text-white'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed p-3 ${backgroundColor} hover:opacity-90 ${iconColor} rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          style={{ 
            bottom: `${position.bottom}px`, 
            right: `${position.right}px` 
          }}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUpIcon 
            style={{ width: `${iconSize}px`, height: `${iconSize}px` }} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;