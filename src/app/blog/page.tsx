'use client'

import React from 'react'
import BlogPost from '@/components/BlogPost'
import blogData from '@/data/blog.json'

export default function BlogPage() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
        Blog Posts
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogData.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            excerpt={post.summary}
            date={post.date}
            category={post.tags[0]}
            slug={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
          />
        ))}
      </div>
    </div>
  )
}
