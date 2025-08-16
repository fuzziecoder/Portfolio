'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileWarning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth <= 768;

    if (isMobile) {
      setIsVisible(true);
      
      // Start countdown
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setIsVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          className="bg-white dark:bg-neutral-900 rounded-2xl p-8 mx-4 max-w-sm text-center shadow-2xl border border-gray-200 dark:border-neutral-700"
        >
          {/* Mobile Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>

          {/* Message */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Mobile View Detected
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Use desktop for better experience
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Continuing in
            </span>
            <motion.span
              key={countdown}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-2xl font-bold text-red-500"
            >
              {countdown}
            </motion.span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              seconds
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2 mb-4">
            <motion.div
              className="bg-red-500 h-2 rounded-full"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>

          {/* Skip Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Continue Now
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileWarning;
