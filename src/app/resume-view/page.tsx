'use client'

import React, { useEffect } from 'react'
import resumeData from '@/data/resume.json'

const ResumePage = () => {
  useEffect(() => {
    if (window) {
      window.print()
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 bg-white text-black print:px-0">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{resumeData.personal.name}</h1>
        <p className="text-xl text-gray-600 mb-2">{resumeData.personal.title}</p>
        <p className="text-gray-600">{resumeData.personal.email}</p>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <p className="text-gray-700">{resumeData.personal.summary}</p>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Education</h2>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Projects */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Research Projects</h2>
        <div className="space-y-4">
          {resumeData.research.projects.map((project, index) => (
            <div key={index}>
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <p className="text-gray-600 mt-1">
                Technologies: {project.technologies.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold mb-2">Technical Skills</h3>
            <p className="text-gray-700">{resumeData.skills.technical.join(', ')}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Research Skills</h3>
            <p className="text-gray-700">{resumeData.skills.research.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Professional Approach */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">Professional Approach</h2>
        <div className="space-y-2">
          <p className="text-gray-700">{resumeData.approach.philosophy}</p>
          <p className="text-gray-700">{resumeData.approach.focus}</p>
        </div>
      </div>
    </div>
  )
}

export default ResumePage