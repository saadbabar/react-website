import React, { useEffect } from 'react'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'

const Home = () => {
  useEffect(() => {
    // Remove the hash from the URL if present
    if (window.location.hash) {
      window.history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Head>
        <title>Saad Portfolio</title>
        <meta name="description" content="Personal website of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="pt-16">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
export default Home
