export const siteConfig = {
  name: "Muhammad Saad Babar",
  tagline: "CS Student | Seeking Technical & Business Internships for Summer 2025",
  navTitle: "Technical Portfolio",
  experience: [
    {
      title: "Software Engineer Intern, Autonomous Systems",
      company: "Noblis",
      period: "June 2024 - August 2024",
      description: "I, along with my team, developed and optimized an end-to-end pipeline for generating synthetic edge case images using technologies such as OpenAI API, Stable Diffusion, and PyTorch. This work significantly expanded training datasets for autonomous vehicle systems by leveraging generative AI to create complex edge cases for object detection models. I automated the ground truth labeling process for over 100 AI-generated images by developing Python scripts utilizing libraries like Openpyxl and Pandas, integrating YOLOv8 for accurate object detection and annotation. Additionally, I engineered a human-in-the-loop framework and introduced reinforcement learning techniques into the prompt optimization pipeline, improving system adaptability and decision-making for edge case scenarios. I presented the project's outcomes to senior executives, showcasing advancements in automation and AI-driven process efficiency, and demonstrating the measurable improvements made to the pipeline. This role was a mix of backend, computer vision, and machine learning engineering.",
      
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
    graduationDate: "May 2026",
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