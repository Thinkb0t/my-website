'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CertificationCardProps {
  title: string
  issuer: string
  year: number
  description: string
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  year,
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {issuer} • {year}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  )
}

export default CertificationCard
