'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaCalendar, FaFileAlt, FaDownload } from 'react-icons/fa'
import SocialLinks from '@/components/SocialLinks'
import socialData from '@/data/social.json'

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

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-12"
      >
        {/* Get in Touch Section */}
        <motion.section variants={item} className="text-center">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'd love to hear from you! Whether you're interested in my research, have questions, or want to collaborate, feel free to reach out.
          </p>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <HiMail className="text-2xl text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Email
                </h2>
              </div>
              <a
                href={`mailto:${socialData.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {socialData.email}
              </a>
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Connect with me
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Schedule Meeting */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaCalendar className="text-2xl text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Schedule a Meeting
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Schedule a meeting with me using the form below.
              </p>
              <a
                href={socialData.meetingForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </motion.section>

        {/* Resume Section */}
        <motion.section
          variants={item}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <FaFileAlt className="text-2xl text-purple-600 dark:text-purple-400" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Resume
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={socialData.resume.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FaFileAlt />
              <span>Preview Resume</span>
            </a>
            <a
              href={socialData.resume.downloadUrl}
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
            >
              <FaDownload />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}