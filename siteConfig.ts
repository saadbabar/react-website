export const siteConfig = {
  name: "Muhammad Saad Babar",
  tagline: "CS Student | Interested in Full Stack Development, High-Performance Computing, and Tech Consulting",
  navTitle: "Technical Portfolio",
  experience: [
    {
      title: "Machine Learning Intern @ Noblis",
      company: "",
      period: "Reston, Virginia | June 2024 - August 2024",
      description: "Implemented a deep learning pipeline leveraging Python, PyTorch, and CUDA GPU parallel processing to generate synthetic images depicting anomalies in traffic environments. The workflow consisted of: Stable Diffusion (text-to-image generative modeling) integrated with YOLOv8 for object detection and validation. We also were designing a reinforcement learning feedback loop to iteratively optimize generated images. Additionally, we utilized Python for data and process scripting.",
      
    },
    {
      title: "Data Entry Assoicate @ RHB Laboratories",
      company: "",
      period: "Troy, Michigan | January 2022 - April 2022",
      description: "Entered insurace CPT codes into database using company's software. I didn't really pick up any technical skills here, however, I was able to become faster typer"
    }
  ],
  projects: [

    {
      name: "Concurrent File Downloader",
      description: "Utilized C++ and its std::thread library to maximize system performance for downloads. The program allows for users to specify amount of threads they want to allocate for download. I also designed CLI to take an optional argument for the threads, and 2 positional arguments which are the download URL and the output file name, respectively. Additionally, I added a dockerfile for portability and ease of use across platforms.",
      technologies: ["C++", "Multithreading", "OOP", "Docker", "Optimization", "Makefile", "Encapsulation", "Abstraction", "File I/O"],
      sourceCode:"https://github.com/saadbabar/Concurrent-File-Downloader",
      videoUrl: "https://youtu.be/Pi6xgX39M-c"
    },
    {
      name: "Leetcode Reminder",
      description: "Developed Chrome Extension to send daily reminders to users to practice Leetcode problems using spaced repitition to retain knowledge",
      technologies: ["Django", "PostgreSQL", "JavaScript"],
      sourceCode: "https://github.com/saadbabar/LC-Reminder", // Add the source code link here
      deployedLink: "",
      videoUrl: "https://youtu.be/SE2BhQ21nUk"
    },

    {
      name: "WallStreetBets NLP Sentiment Analyzer",
      description: "The main function of this program is to extract information from the latest posts on a subreddit and present the top-performing stocks for a given day, using Natural Language Processing (NLP) to analyze the content of the posts. This full-stack implementation integrates multiple APIs, processes data, and visually presents insights into stock trends on WallStreetBets. The program filters data to ensure that only stocks listed on US exchanges like the NYSE or NASDAQ are included, as it's specifically designed for the US markets. Additionally, I created custom functions to simplify data processing, such as recognizing company names as they are casually mentioned in the forum (e.g., identifying 'Rivian' instead of the full name 'Rivian Automotive, Inc'). I also implemented unit tests to validate the functionality of these custom parsing functions, ensuring the program works as expected.",
      technologies: ["Django", "PostgreSQL", "TypeScript", "Python", "d3.js", "Reddit API", "Django REST Framework", "Unit Testing", "Financial Modelling Prep API"],
      sourceCode: "https://github.com/saadbabar/popularStocks", // Add the source code link here
      deployedLink: "",
      videoUrl: "https://youtu.be/yaM3HXw87Ho?feature=shared"
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
      "Theory of Computation",
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