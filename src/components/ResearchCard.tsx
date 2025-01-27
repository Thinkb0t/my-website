'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ResearchCardProps {
  title: string
  area: string
  status: string
  description: string
  keyPoints: string[]
  technologies: string[]
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  area,
  status,
  description,
  keyPoints,
  technologies
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
          {status}
        </span>
      </div>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Area: {area}
        </span>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Key Focus Areas:
        </h4>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ResearchCard
