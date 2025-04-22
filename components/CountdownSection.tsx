"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, BanknotesIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const CountdownSection = () => {
  // Set your offer details here
  const originalPrice = "₦10,000";
  const discountedPrice = "₦5,000";
  // Set the end date (adjust as needed for testing)
  // Using a ref to avoid re-renders
  const endDateRef = useRef(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()); // 3 days from now
  const buttonText = "Reserve Your Spot Now";
  const buttonLink = "/payment"; // Change to your payment page link

  // Time remaining state
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  });
  
  // Is countdown active
  const [isActive, setIsActive] = useState(true);

  // Calculate time remaining
  useEffect(() => {
    const calculateTimeRemaining = (): TimeRemaining => {
      const now = new Date();
      const targetDate = new Date(endDateRef.current);
      const timeDifference = targetDate.getTime() - now.getTime();
      
      // Check if countdown is over
      if (timeDifference <= 0) {
        setIsActive(false);
        return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
      }
      
      // Calculate remaining time units
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      return { 
        days, 
        hours, 
        minutes, 
        seconds,
        total: timeDifference
      };
    };
    
    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());
    
    // Set up interval for countdown
    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
      
      // Clear interval when countdown is over
      if (remaining.total <= 0) {
        clearInterval(interval);
        setIsActive(false);
      }
    }, 1000);
    
    // Clean up
    return () => clearInterval(interval);
  }, []); // Empty dependency array - only run once on mount

  // Format time with leading zeros
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  // Determine if we need to show days
  const showDays = timeRemaining.days > 0;

  return (
    <div className="py-10 md:py-16" id='offers'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 sm:px-10 text-white text-center">
            <div className="flex items-center justify-center mb-3">
              <SparklesIcon className="h-6 w-6 text-yellow-300 mr-2" />
              <h3 className="text-lg font-bold uppercase tracking-wider">Limited Time Offer</h3>
              <SparklesIcon className="h-6 w-6 text-yellow-300 ml-2" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Save 50% {showDays ? "For A Limited Time" : "Today Only"}!
            </h2>
            <p className="text-blue-100">
              {showDays 
                ? "This special discount is only available for a limited time." 
                : "This special discount expires at the end of the day."}
            </p>
          </div>
          
          {/* Price Section */}
          <div className="px-6 py-8 sm:px-10 text-center">
            <div className="mb-6">
              <span className="inline-block text-xl line-through text-gray-400 mr-3">
                {originalPrice}
              </span>
              <span className="inline-block text-3xl sm:text-4xl font-bold text-blue-700">
                {discountedPrice}
              </span>
              <div className="mt-2 inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {showDays ? "Limited Time Discount!" : "Discount Valid Today Only!"}
              </div>
            </div>
            
            {/* Countdown Timer */}
            {isActive && (
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <ClockIcon className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    Offer Ends In:
                  </h4>
                </div>
                
                <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                  {/* Days - only shown when needed */}
                  {showDays && (
                    <>
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                          {formatTime(timeRemaining.days)}
                        </div>
                        <div className="text-xs text-gray-500 uppercase">Days</div>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-400">:</div>
                    </>
                  )}
                  
                  {/* Hours */}
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.hours)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Hours</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">:</div>
                  
                  {/* Minutes */}
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.minutes)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Minutes</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">:</div>
                  
                  {/* Seconds */}
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.seconds)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Seconds</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Expired Message - shown when countdown reaches zero */}
            {!isActive && (
              <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg">
                <p className="font-medium">This offer has expired!</p>
                <p className="text-sm mt-1">Contact us for current pricing options.</p>
              </div>
            )}
            
            {/* Call to Action Button */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href={buttonLink}
                className={`block w-full sm:w-auto sm:mx-auto sm:inline-block bg-gradient-to-r ${
                  isActive 
                    ? "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
                    : "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
                } text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                <div className="flex items-center justify-center">
                  <BanknotesIcon className="h-5 w-5 mr-2" />
                  {isActive ? buttonText : "Contact Us"}
                </div>
              </a>
            </motion.div>
            
            {/* Trust Badge */}
            <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Secure Payment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownSection;