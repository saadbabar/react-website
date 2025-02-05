import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { siteConfig } from '../siteConfig'
import { FaRegCopyright, FaLinkedin, FaGithub} from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';

export function Hero() {
  console.log("Hero component rendering");
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createStars() // Recreate stars when resizing
    }

    let stars: { x: number; y: number; radius: number; brightness: number; pulsateSpeed: number }[] = []

    const createStars = () => {
      stars = []
      for (let i = 0; i < 500; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.7 + 0.1, // Reduced size
          brightness: Math.random() * 0.2 + 0.5, // Reduced brightness
          pulsateSpeed: Math.random() * 0.001 + 0.0005 // Slower pulsation
        })
      }
    }

    createStars()
    resizeCanvas()

    function animate(time: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.brightness = 0.5 + Math.sin(time * star.pulsateSpeed) * 0.2
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate(0)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden">
          <Image
            src="/IMG_6402.jpg"
            alt="Hero Image"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: '25% 30%' // Adjusted to focus more on the face
            }}
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-shadow-lg">
          {siteConfig.name}
        </h1>
        <p className="text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 text-shadow-md">
          {siteConfig.tagline}
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            <FaLinkedin/>
          </a>
          <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
            <FaGithub/>
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="text-green-400 hover:text-green-300">
            <AiOutlineMail/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero