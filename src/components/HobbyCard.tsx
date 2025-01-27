'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HobbyCardProps {
  name: string
  description: string
  icon: string
}

const HobbyCard: React.FC<HobbyCardProps> = ({ name, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start space-x-4">
        <span className="text-4xl">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default HobbyCard
