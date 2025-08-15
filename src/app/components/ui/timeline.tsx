"use client";
import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  if (!Array.isArray(items)) {
    console.error('Timeline: items prop must be an array');
    return null;
  }

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-12 pb-8"
        >
          <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            {item.icon || (
              <div className="h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600" />
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.date}
            </p>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};