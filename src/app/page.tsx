'use client'

import React from 'react'
import Hero from '@/components/Hero'
import CertificationsGrid from '@/components/CertificationsGrid'
import ResearchCard from '@/components/ResearchCard'
import BlogPost from '@/components/BlogPost'
import ContactSection from '@/components/ContactSection'
import researchData from '@/data/research.json'
import blogData from '@/data/blog.json'

interface Research {
  title: string
  area: string
  status: string
  description: string
  keyPoints: string[]
  technologies: string[]
}

interface BlogPost {
  title: string
  summary: string
  date: string
  tags: string[]
}

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Certifications Section */}
      <section className="w-full">
        <CertificationsGrid />
      </section>

      {/* Research Section */}
      <section className="w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Research Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchData.research.map((project, index) => (
            <ResearchCard
              key={index}
              title={project.title}
              area={project.area}
              description={project.description}
              technologies={project.technologies}
              status={project.status}
              keyPoints={project.keyPoints}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.slice(0, 4).map((post, index) => (
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
      </section>

      {/* Contact Section */}
      <section className="w-full mb-20">
        <ContactSection />
      </section>
    </div>
  )
}
