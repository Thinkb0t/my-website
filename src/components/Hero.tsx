'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'
import researchData from '@/data/research.json'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
            >
              Independent Researcher & Tech Enthusiast
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Exploring the convergence of {researchData.interests.primary.slice(0, 3).join(", ")} and more
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {researchData.interests.primary.map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-x-4"
            >
              <a
                href="/about"
                className="inline-block px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-full font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
              >
                Learn More
              </a>
              <a
                href="/research"
                className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                View Research
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
