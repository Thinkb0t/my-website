'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaEye } from 'react-icons/fa'

const ResumeSection: React.FC = () => {
  const handleView = () => {
    window.open('/resume-view', '_blank')
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Resume
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          View and download my resume to learn more about my education, research experience, and certifications.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleView}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FaEye />
            <span>View Resume</span>
          </button>
          <a
            href="/resume-view"
            onClick={(e) => {
              e.preventDefault()
              window.open('/resume-view', '_blank')
              setTimeout(() => {
                const printWindow = window.open('/resume-view', '_blank')
                if (printWindow) {
                  printWindow.print()
                }
              }, 1000)
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default ResumeSection