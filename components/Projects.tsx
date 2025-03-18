"use client";

import { siteConfig } from "@/siteConfig";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// Stagger animation for projects
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

export function Projects() {
  return (
    <motion.section
      id="projects"
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
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.videoUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-700">
                    <ReactPlayer url={project.videoUrl} controls width="100%" height="200px" />
                  </div>
                )}

                <div className="flex gap-4">
                  {"sourceCode" in project && project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-all"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Source Code
                    </a>
                  )}
                  {"deployedLink" in project && project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-all"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
