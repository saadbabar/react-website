"use client";

import { siteConfig } from "@/siteConfig";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleJob = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="experience"
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Experience
        </motion.h2>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-10 flex"
            >
              {/* Glowing Timeline Dot */}
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg flex items-center justify-center z-10">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="absolute inset-0 animate-pulse bg-blue-500 opacity-30 blur-lg rounded-full"></div>
              </div>
              <motion.div
                className="ml-6 bg-gray-800 bg-opacity-75 backdrop-blur-lg rounded-lg shadow-lg p-6 flex-grow transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <button
                    onClick={() => toggleJob(index)}
                    className="bg-gray-700 text-gray-300 rounded-full px-2 py-1 transition-all hover:bg-gray-600"
                  >
                    {openIndex === index ? <FaCaretUp /> : <FaCaretDown />}
                  </button>
                </div>
                <p className="text-gray-400">{job.company}</p>
                <p className="text-sm text-gray-500 mb-0">{job.period}</p>

                {/* Expanding Job Description */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 mt-2">{job.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}

          {/* Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-5 w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-40 blur-md"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experience;
