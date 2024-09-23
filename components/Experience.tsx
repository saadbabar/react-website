import React from 'react'
import { siteConfig } from '../siteConfig'

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Space-Time Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
          <div className="space-y-12">
            {siteConfig.experience.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  title: string
  company: string
  period: string
  description: string
  isLeft: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, period, description, isLeft }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
      <div className={`${isLeft ? 'ml-8 md:ml-0 md:mr-auto md:w-1/2' : 'mr-8 md:mr-0 md:ml-auto md:w-1/2'} p-4 bg-opacity-30 bg-gray-800 backdrop-filter backdrop-blur-lg border border-gray-700 rounded-lg`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{company} | {period}</p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}

export default Experience