export const siteConfig = {
  name: "Muhammad Saad Babar",
  tagline: "CS Student | Seeking Technical & Business Internships for Summer 2025",
  navTitle: "Technical Portfolio",
  experience: [
    {
      title: "Software Engineer Intern, Autonomous Systems",
      company: "Noblis",
      period: "June 2024 - August 2024",
      description: "Developed pipeline code using Reinforcement Learning to generate synthetic image datasets to train object detection models for surface transportation. The goal was to generate edge case images to train the models on for detecting objects on roads. Using PyTorch, YOLOv8, and Stable Diffusion, our job was to integrate all these technologies that would help us refine text prompts to generate satisfactory images that can be used to train a custom model. \nTechnologies: Python, PyTorch, Reinforcement Learning, OpenAI API, YOLOv8, Gitlab, NumPy, Pandas"
      
    },
    {
      title: "Data Entry Assoicate",
      company: "RHB Laboratories",
      period: "January 2022 - April 2022",
      description: "Entered insurace CPT codes into database using company's software"
    }
  ],
  projects: [
    {
      name: "Leetcode Reminder",
      description: "Developed Chrome Extension to send daily reminders to users to practice Leetcode problems using spaced repitition to retain knowledge",
      technologies: ["Django", "PostgreSQL", "JavaScript"],
      sourceCode: "https://github.com/saadbabar/LC-Reminder", // Add the source code link here
      deployedLink: "" // Add the deployed product link here
    },
    {
      name: "Instagram Clone",
      description: "Developed Instagram clone with a focus on user authentication, post creation, and real-time updates using Flask and similar functionality to Instagram",
      technologies: ["Flask", "Jinja2", "HTML/CSS"]
    },
    // Add more projects as needed
    {
      name: "Wire Transfer Model",
      description: "Made banking simulator to replicate how users are autheticated and how transactions are processed through using a priority queue to determine a custom order",
      technologies: ["C++", "Command Line Parsing", "Data Structures"]
    }
  ],
  education: {
    university: "University of Michigan, Ann Arbor",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "April 2026",
    courses: [
      "Data Structures and Algorithms",
      "Web Systems",
      "Human-Centered Software Design & Development",
      "Computer Organization",
      "Foundations of Computer Science & Computational Theory",
      "Applied Linear Algebra",
      "Discrete Mathematics",
      "Programming and Introductory Data Structures",
      "Probability and Statistics for Engineers"
    ],
    skills: [
      "Python", "C++", "JavaScript", "React", "Next.js", "HTML/CSS", "LaTex", "R",
      "SQL", "Git", "Machine Learning", "Data Analysis", "PyTorch", "Jupyter"
    ]
  },
  contact: {
    linkedin: "https://linkedin.com/in/muhammadsaadbabar",
    github: "https://github.com/saadbabar",
    email: "saad.mbbr@gmail.com"
  }
}