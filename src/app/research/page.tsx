'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ResearchCard from '@/components/ResearchCard'
import researchData from '@/data/research.json'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const ResearchPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
        >
          Research Projects
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          Exploring the intersection of neuroscience, quantum computing, and artificial intelligence to push the boundaries of human-computer interaction.
        </motion.p>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchData.research.map((project, index) => (
            <ResearchCard
              key={index}
              title={project.title}
              area={project.area}
              status={project.status}
              description={project.description}
              keyPoints={project.keyPoints}
              technologies={project.technologies}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ResearchPage
