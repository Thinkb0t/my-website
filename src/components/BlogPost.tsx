'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BlogPostProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, category, date, slug }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500 dark:text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          <a
            href={slug}
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-colors duration-200"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogPost
