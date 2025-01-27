'use client'

import React from 'react'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram 
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import socialData from '@/data/social.json'

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram
}

interface SocialLinksProps {
  className?: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialData.social.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap]
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
            aria-label={`Visit ${link.name}`}
          >
            <Icon size={24} />
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialLinks