'use client'

import React from 'react'
import { motion } from 'framer-motion'
import researchData from '@/data/research.json'
import ResumeSection from '@/components/ResumeSection'

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

const AboutPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {/* About Section */}
      <motion.section variants={item} className="mb-12">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          About Me
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          As an independent researcher, I am driven by an insatiable curiosity to explore the frontiers of technology and human understanding. My work spans across neuroscience, quantum computing, AI, data science, and embedded systems, reflecting my belief in the power of interdisciplinary approaches to innovation.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I am committed to lifelong learning and believe in the transformative power of science and technology to create meaningful innovations that benefit society.
        </p>
      </motion.section>

      {/* Education Section */}
      <motion.section variants={item} className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Education</h2>
        <div className="space-y-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">BSc in Zoology</h3>
            <p className="text-gray-600 dark:text-gray-400">Union Christian College, Aluva (2017-2020)</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">BA in Psychology (Honours)</h3>
            <p className="text-gray-600 dark:text-gray-400">Indira Gandhi National Open University (2021-2024)</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Chartered Accountancy (CA)</h3>
            <p className="text-gray-600 dark:text-gray-400">ICAI (2025-Present)</p>
          </div>
        </div>
      </motion.section>

      {/* Research Interests Section */}
      <motion.section variants={item} className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Research Interests</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="flex flex-wrap gap-2 mb-4">
            {researchData.interests.primary.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">{researchData.interests.focus}</p>
        </div>
      </motion.section>

      {/* Personal Interests Section */}
      <motion.section variants={item} className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Personal Interests</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Active Pursuits</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Football</li>
                <li>Cycling</li>
                <li>Fencing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Other Interests</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Gaming</li>
                <li>Reading across diverse topics</li>
                <li>Continuous learning</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section variants={item} className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Personal Philosophy</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I believe in learning from mistakes and maintaining a growth mindset. My approach to life and work is guided by minimalism and value-driven principles, focusing on creating meaningful impact through continuous learning and innovation.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I am always open to collaboration and believe that the best innovations come from combining diverse perspectives and disciplines.
          </p>
        </div>
      </motion.section>

      {/* Resume Section */}
      <ResumeSection />
    </motion.div>
  )
}

export default AboutPage
