import React from 'react'
import Hero from './Hero'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'

const CosmicPortfolio = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
export default CosmicPortfolio
