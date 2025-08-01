'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import { ClockIcon, BanknotesIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const CountdownSection = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });
  
  const [isActive, setIsActive] = useState(true);
  const [countdownData, setCountdownData] = useState<any>(null);

  // Fetch the countdown data from Sanity ji
  useEffect(() => {
    client
      .fetch(`*[_type == "countdown"][0]`)
      .then((data) => setCountdownData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!countdownData) return;

    const endDateRef = countdownData.endDate;
    
    const calculateTimeRemaining = (): TimeRemaining => {
      const now = new Date();
      const targetDate = new Date(endDateRef);
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
      
      if (remaining.total <= 0) {
        clearInterval(interval);
        setIsActive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownData]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  const showDays = timeRemaining.days > 0;

  return (
    <div className="py-10 md:py-16" id="offers">
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
              Save 85% {showDays ? "For A Limited Time" : "Today Only"}!
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
                {countdownData?.originalPrice}
              </span>
              <span className="inline-block text-3xl sm:text-4xl font-bold text-blue-700">
                {countdownData?.discountedPrice}
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

                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.hours)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Hours</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">:</div>

                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.minutes)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Minutes</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-400">:</div>

                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 min-w-16 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-700">
                      {formatTime(timeRemaining.seconds)}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Seconds</div>
                  </div>
                </div>
              </div>
            )}

            {/* Expired Message */}
            {!isActive && (
              <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg">
                <p className="font-medium">This offer has expired!</p>
                <p className="text-sm mt-1">Contact us for current pricing options.</p>
              </div>
            )}
            
            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href={countdownData?.buttonLink}
                className={`block w-full sm:w-auto sm:mx-auto sm:inline-block bg-gradient-to-r ${
                  isActive 
                    ? "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
                    : "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700"
                } text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                <div className="flex items-center justify-center">
                  <BanknotesIcon className="h-5 w-5 mr-2" />
                  {isActive ? countdownData?.buttonText : "Contact Us"}
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownSection;
