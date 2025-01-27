'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import { HiMail } from 'react-icons/hi'
import socialData from '@/data/social.json'

const ContactSection = () => {
  return (
    <div className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <div className="space-y-8">
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
              I'd love to hear from you! Whether you're interested in my research, have questions,
              or want to collaborate, feel free to reach out.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <HiMail className="text-2xl text-purple-600 dark:text-purple-400" />
              <a
                href={`mailto:${socialData.email}`}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {socialData.email}
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-center text-gray-800 dark:text-gray-200 font-medium">
                Connect with me
              </h3>
              <SocialLinks className="justify-center" />
            </div>

            <div className="w-full pt-6">
              <a
                href={socialData.meetingForm}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactSection