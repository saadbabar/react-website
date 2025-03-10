import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "../siteConfig";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


const Typewriter = dynamic(() => import("react-typewriter-effect"), { ssr: false });


const TypingAnimation = () => {
  return (
    <div className="text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 text-shadow-md">
      <Typewriter
        text="CS Student | Interested in Full Stack Development, High-Performance Computing, and Tech Consulting"
        cursorColor="white"
        typeSpeed={50}
        deleteSpeed={30}
        delay={1000}
      />
    </div>
  );
};


const SlideImage = () => {
  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg"
    >
      <Image
        src="/IMG_8009.jpeg"
        alt="Hero Image"
        fill
        className="object-cover object-center"
      />
    </motion.div>
  );
};


export function Hero() {
  console.log("Hero component rendering");

  return (
    <div id="home" className="relative flex flex-col items-center justify-center h-screen bg-[rgb(23,28,40)] text-center">
      <div className="mb-6">
        <SlideImage />
      </div>
      <h1 className="text-5xl md:text-6xl font-cursive mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-shadow-lg">
        {siteConfig.name}
      </h1>
      <TypingAnimation />
      <div className="flex justify-center space-x-6 text-2xl mt-4">
        <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
          <FaLinkedin />
        </a>
        <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
          <FaGithub />
        </a>
        <a href={`mailto:${siteConfig.contact.email}`} className="text-green-400 hover:text-green-300">
          <AiOutlineMail />
        </a>
      </div>
    </div>
  );
}

export default Hero;
