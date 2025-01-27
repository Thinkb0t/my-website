'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBrain } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import socialData from '@/data/social.json'

const Thinkbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic)
  }

  const resetChat = () => {
    setSelectedTopic(null)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 mb-4 w-80"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close Thinkbot"
            >
              <IoClose size={24} />
            </button>

            <div className="max-h-96 overflow-y-auto">
              {selectedTopic ? (
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {socialData.thinkbot.topics.find(t => t.label === selectedTopic)?.response}
                  </p>
                  <button
                    onClick={resetChat}
                    className="text-purple-600 dark:text-purple-400 text-sm hover:underline"
                  >
                    ← Back to topics
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {socialData.thinkbot.defaultResponse}
                  </p>
                  <div className="grid gap-2">
                    {socialData.thinkbot.topics.map((topic) => (
                      <button
                        key={topic.label}
                        onClick={() => handleTopicClick(topic.label)}
                        className="text-left px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-purple-600 dark:bg-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
      >
        <FaBrain size={24} />
        <span className="sr-only">Open Thinkbot</span>
      </motion.button>
    </div>
  )
}

export default Thinkbot