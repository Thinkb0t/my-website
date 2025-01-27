'use client'

import React from 'react'
import { motion } from 'framer-motion'
import CertificationCard from './CertificationCard'
import certificationsData from '@/data/certifications.json'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const CertificationsGrid: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
        Certifications
      </h2>
      
      {certificationsData.certifications.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            {category.category}
          </h3>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {category.items.map((certification, index) => (
              <CertificationCard
                key={`${categoryIndex}-${index}`}
                title={certification.title}
                issuer={certification.issuer}
                year={certification.year}
                description={certification.description}
              />
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  )
}

export default CertificationsGrid
