export const siteConfig = {
  name: "Muhammad Saad Babar",
  tagline: "CS Student | Seeking Technical & Business Internships for Summer 2025",
  navTitle: "Technical Portfolio",
  experience: [
    {
      title: "Autonomous Systems Intern, Machine Learning",
      company: "Noblis",
      period: "June 2024 - August 2024",
      description: "Prototyped a pipeline that would generate synthetic edge case images to train a LLM. These images were generated to capture anomalies that happen in traffic-prone areas and images where objects (humans) go undetected. Additionally, we focused on researching reinforcement learning and implementing CLIP and Proximal Policy algorithms in the pipeline. Main tech stack included Python, Jupyter, YOLOv8, and Gitlab",
      
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
      name: "Wire Transfer Model",
      description: "Made banking simulator to replicate how users are autheticated and how transactions are processed through using a priority queue to determine a custom order",
      technologies: ["C++", "Command Line Parsing", "Data Structures"]
    },
    {
      name: "WallStreetBets NLP Sentiment Analyzer",
      description: "The main function of this program is to extract information from the latest posts on a subreddit and present the top-performing stocks for a given day, using Natural Language Processing (NLP) to analyze the content of the posts. This full-stack implementation integrates multiple APIs, processes data, and visually presents insights into stock trends on WallStreetBets. The program filters data to ensure that only stocks listed on US exchanges like the NYSE or NASDAQ are included, as it's specifically designed for the US markets. Additionally, I created custom functions to simplify data processing, such as recognizing company names as they are casually mentioned in the forum (e.g., identifying 'Rivian' instead of the full name 'Rivian Automotive, Inc'). I also implemented unit tests to validate the functionality of these custom parsing functions, ensuring the program works as expected.",
      technologies: ["Django", "PostgreSQL", "TypeScript", "Python", "d3.js", "Reddit API", "Django REST Framework", "Unit Testing", "Financial Modelling Prep API"],
      sourceCode: "https://github.com/saadbabar/popularStocks", // Add the source code link here
      deployedLink: "" // Add the deployed product link here
    },
    {
      name: "Instagram Clone",
      description: "I developed an Instagram clone with Flask, focusing on user authentication, post creation, and real-time updates. The application features client-side dynamic pages and REST API endpoints for CRUD operations, allowing users to create, edit, and delete posts or comments. I implemented logic to ensure users could only delete their own comments, and handled database updates accordingly. Additionally, I used JavaScript event handlers to create a double-tap 'like' feature, enhancing user interaction. The project includes multiple pages such as login, feed, account management, and more.",
      technologies: ["Flask", "HTML/CSS", "Python", "React.js", "JavaScript", "REST APIs", "Encryption"]
    }
    // Add more projects as needed
    
  ],
  education: {
    university: "University of Michigan, Ann Arbor",
    degree: "Bachelor of Science in Computer Science",
    graduationDate: "May 2026",
    courses: [
      "Data Structures and Algorithms",
      "Computer Security",
      "Software Engineering",
      "Web Systems",
      "Human-Centered Software Design & Development",
      "Computer Organization",
      "Foundations of Computer Science & Computational Theory",
      "Applied Linear Algebra",
      "Discrete Mathematics",
      "Programming in C++",
      "Probability and Statistics for Engineers"
    ],
    skills: [
      "Python", "C/C++", "JavaScript", "React", "Next.js", "HTML/CSS", "LaTex", "R",
      "SQL", "Git", "Machine Learning", "Data Analysis", "PyTorch", "Jupyter"
    ]
  },
  contact: {
    linkedin: "https://linkedin.com/in/muhammadsaadbabar",
    github: "https://github.com/saadbabar",
    email: "saadbabar.dev@gmail.com"
  }
}