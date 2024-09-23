import React from 'react'
import { siteConfig } from '../siteConfig'

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-left">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{siteConfig.education.university}</h3>
            <p className="text-xl mb-4">{siteConfig.education.degree}</p>
            <p className="mb-4">Graduation: {siteConfig.education.graduationDate}</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Relevant Courses</h4>
            <ul className="list-disc list-inside">
              {siteConfig.education.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 bg-gray-700 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {siteConfig.education.skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-xs px-2 py-1 rounded">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education