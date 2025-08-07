'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '@/lib/sanity';
import { ClockIcon, BanknotesIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

interface CountdownData {
  headerText: string;
  discountPercentage: number;
  originalPrice: string;
  discountedPrice: string;
  buttonText: string;
  buttonLink: string;
  offerDescription: string;
  expiredMessage: string;
}

const CountdownSection = () => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  });
  
  const [isActive, setIsActive] = useState(true);
  const [countdownData, setCountdownData] = useState<CountdownData | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  // Fetch the countdown data from Sanity (excluding countdown duration)
  useEffect(() => {
    client
      .fetch(`*[_type == "countdown"][0]{
        headerText,
        discountPercentage,
        originalPrice,
        discountedPrice,
        buttonText,
        buttonLink,
        offerDescription,
        expiredMessage
      }`)
      .then((data: CountdownData) => setCountdownData(data))
      .catch(console.error);
  }, []);

  // Simulated countdown - resets on every page refresh (3 minutes = 180 seconds)
  useEffect(() => {
    let remainingTime = 180; // 3 minutes in seconds
    setIsActive(true);
    setIsExpired(false);

    const calculateTimeRemaining = (): TimeRemaining => {
      if (remainingTime <= 0) {
        setIsActive(false);
        setIsExpired(true);
        return { hours: 0, minutes: 0, seconds: 0, total: 0 };
      }
      
      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const seconds = remainingTime % 60;
      
      return { 
        hours, 
        minutes, 
        seconds,
        total: remainingTime
      };
    };

    // Initial calculation
    setTimeRemaining(calculateTimeRemaining());

    // Set up interval for countdown
    const interval = setInterval(() => {
      remainingTime--;
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);
      
      if (remainingTime <= 0) {
        clearInterval(interval);
        setIsActive(false);
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  if (!countdownData) {
    return (
      <div className="py-10 md:py-16" id="offers">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
            <div className="bg-gray-300 h-32"></div>
            <div className="p-8">
              <div className="bg-gray-300 h-8 mb-4"></div>
              <div className="bg-gray-300 h-16 mb-4"></div>
              <div className="bg-gray-300 h-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <h3 className="text-lg font-bold uppercase tracking-wider">
                {countdownData.headerText}
              </h3>
              <SparklesIcon className="h-6 w-6 text-yellow-300 ml-2" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Save {countdownData.discountPercentage}% For A Limited Time!
            </h2>
            <p className="text-blue-100">
              {countdownData.offerDescription}
            </p>
          </div>
          
          {/* Price Section */}
          <div className="px-6 py-8 sm:px-10 text-center">
            <div className="mb-6">
              <span className="inline-block text-xl line-through text-gray-400 mr-3">
                {countdownData.originalPrice}
              </span>
              <span className="inline-block text-3xl sm:text-4xl font-bold text-blue-700">
                {countdownData.discountedPrice}
              </span>
              <div className="mt-2 inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                {countdownData.discountPercentage}% OFF - Limited Time!
              </div>
            </div>
            
            {/* Countdown Timer */}
            {isActive && (
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <ClockIcon className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    🔔 Offer Ends In:
                  </h4>
                </div>
                
                <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                  <div className="bg-gradient-to-b from-red-100 to-red-50 border border-red-200 rounded-lg p-2 sm:p-3 min-w-16 text-center shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-red-600">
                      {formatTime(timeRemaining.hours)}
                    </div>
                    <div className="text-xs text-red-500 uppercase font-medium">Hours</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-red-400">:</div>

                  <div className="bg-gradient-to-b from-red-100 to-red-50 border border-red-200 rounded-lg p-2 sm:p-3 min-w-16 text-center shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-red-600">
                      {formatTime(timeRemaining.minutes)}
                    </div>
                    <div className="text-xs text-red-500 uppercase font-medium">Minutes</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-red-400">:</div>

                  <div className="bg-gradient-to-b from-red-100 to-red-50 border border-red-200 rounded-lg p-2 sm:p-3 min-w-16 text-center shadow-sm">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-2xl sm:text-3xl font-bold text-red-600"
                    >
                      {formatTime(timeRemaining.seconds)}
                    </motion.div>
                    <div className="text-xs text-red-500 uppercase font-medium">Seconds</div>
                  </div>
                </div>

                {/* Urgency Message */}
                <motion.div 
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-4 text-red-600 font-semibold text-sm"
                >
                  ⚡ Don't miss out! Limited time offer!
                </motion.div>
              </div>
            )}

            {/* Expired Message */}
            {isExpired && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 text-orange-700 rounded-lg"
              >
                <div className="flex items-center justify-center mb-2">
                  
                  <p className="font-bold text-lg"> {countdownData.expiredMessage}</p>
                </div>
              </motion.div>
            )}
            
            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href={countdownData.buttonLink}
                className={`block w-full sm:w-auto sm:mx-auto sm:inline-block ${
                  isActive 
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl" 
                    : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl animate-pulse"
                } text-white text-lg font-bold py-4 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                <div className="flex items-center justify-center">
                  <BanknotesIcon className="h-5 w-5 mr-2" />
                  {countdownData.buttonText}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
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

