"use client";

import Image from "next/image";
import { siteConfig } from "@/siteConfig";
import { motion } from "framer-motion";

// const skills = [
//   { name: "Python", color: "3776AB", logo: "python" },
//   { name: "C++", color: "00599C", logo: "c%2B%2B" },
//   { name: "C", color: "00599C", logo: "C"},
//   { name: "JavaScript", color: "F7DF1E", logo: "javascript" },
//   { name: "R", color: "276DC3", logo: "R"},
//   { name: "TypeScript", color: "007ACC", logo: "typescript" },
//   { name: "Shell Script", color: "121212", logo: "gnu-bash" },
// ];

// const frameworks = [
//   {name: "Cypress", color: "17202C", logo: "cypress"},
//   {name: "d3%20js", color: "F9A03C", logo: "d3.js"},
//   {name: "Docker", color: "2CA5E0", logo: "docker"},
//   {name: "Django", color: "092E30", logo: "django"},
//   {name: "Flask", color: "000000", logo: "flask"},
//   {name: "next%20js", color: "000000", logo: "nextdotjs"},
//   {name: "React", color: "20232A", logo: "react"},
//   {name: "Tailwind_CSS", color: "38B2AC", logo: "tailwind-css"},
//   {name: "PyTorch", color: "EE4C2C", logo: "pytorch"},
//   {name: "Postgres", color: "336791", logo: "postgresql"},
//   {name: "SQLite", color: "003B57", logo:"sqlite"}

// ]

// const tools = [
//   {name: "powershell", color: "5391FE", logo: "powershell"},
//   {name: "iTerm2", color: "000000", logo: "iterm2"},
//   {name: "homebrew", color: "FBB040", logo: "homebrew"},
//   {name: "Zsh", color: "F15A24", logo: "Zsh"},
//   {name: "Amazon_AWS", color: "FF9900", logo: "amazonaws"},
//   {name: "VSCode", color: "0078D4", logo: "visual%20studio%20code"},
//   {name: "Jupyter", color: "F37626", logo: "Jupyter"},
//   { name: "JSON", color: "5E5C5C", logo: "json"},


// ]

export function Education() {
  const { education } = siteConfig;

  return (
    <motion.section
      id="education"
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
          Education
        </motion.h2>

        {/* <motion.div
          className="bg-gray-800 bg-opacity-75 backdrop-blur-lg rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        > */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white">{education.university}</h3>
            <p className="text-gray-400">{education.degree}</p>
            <p className="text-gray-500 mb-6">Graduation: {education.graduationDate}</p>
          </div>

          <h4 className="text-xl font-semibold mb-4 text-blue-400">Relevant Courses</h4>
          <motion.ul
            className="list-disc list-inside mb-6 text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {education.courses.map((course, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {course}
              </motion.li>
            ))}
          </motion.ul>

          {/* <h4 className="text-xl font-semibold mb-4 text-purple-400">Programming Languages</h4> */}
          {/* <motion.div className="flex flex-wrap gap-3"> */}
            {/* {skills.map((skill) => ( */}
              {/* <motion.div
                // key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg"
              > */}
                {/* <Image */}
                  {/* // src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
                  // alt={skill.name}
                  // width={120}
                  // height={30}
                /> */}
              {/* </motion.div> */}
            {/* ))} */}
          {/* </motion.div> */}

          {/* <h4 className="text-xl font-semibold mt-6 mb-4 text-blue-400">Frameworks</h4>
          <motion.div className="flex flex-wrap gap-3">
            {frameworks.map((f) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-2 bg-gray-700 rounded-lg shadow-md"
              >
                <Image
                  src={`https://img.shields.io/badge/${f.name}-${f.color}?style=for-the-badge&logo=${f.logo}&logoColor=white`}
                  alt={f.name}
                  width={120}
                  height={30}
                />
              </motion.div>
            ))}
          </motion.div>

          <h4 className="text-xl font-semibold mt-6 mb-4 text-purple-400">Tools</h4>
          <motion.div className="flex flex-wrap gap-3">
            {tools.map((f) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-2 bg-gray-700 rounded-lg shadow-md"
              >
                <Image
                  src={`https://img.shields.io/badge/${f.name}-${f.color}?style=for-the-badge&logo=${f.logo}&logoColor=white`}
                  alt={f.name}
                  width={120}
                  height={30}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-center text-xl font-semibold text-blue-400 mb-4">GitHub Contributions</h3>
            <img
              alt="GitHub Readme Stats"
              loading="lazy"
              width="400"
              height="300"
              decoding="async"
              src="https://github-readme-stats-ebon-seven-65.vercel.app/api/top-langs/?username=saadbabar&layout=pie&exclude_repo=github-readme-stats,github-stats,LC-Reminder,p3-insta485-clientside,popularStocks&langs_count=5&size_weight=0.5&count_weight=0.5&hide=html,css"
              className="rounded-lg shadow-lg border border-gray-700"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
