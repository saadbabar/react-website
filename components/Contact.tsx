import React from 'react'
import { siteConfig } from '../siteConfig'

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            LinkedIn
          </a>
          <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            GitHub
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="text-green-400 hover:text-green-300">
            Email
          </a>
        </div>
        <div className="flex justify-center py-5">
          <a href="https://leetcode.com/saadbabar">
            <img src="https://leetcard.jacoblin.cool/saadbabar?animation=true" alt="Leetcode Stats" />
          </a>
        </div>
      </div>
    </section>
  )
}