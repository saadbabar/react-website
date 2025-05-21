export const siteConfig = {
  name: "Muhammad Saad Babar",
  tagline: "CS Student | Interested in Full Stack Development, High-Performance Computing, and Tech Consulting",
  navTitle: "Technical Portfolio",
  experience: [
    {
      title: "Software Engineer Intern @ Criteo",
      company: "",
      period: "Ann Arbor, Michigan | May 2025 - August 2025",
      description: `Interned for the Forcastings and Bookings Team working on Criteo's Retail Media Planning UI
      
      Contributed to the development of Criteo’s customer-facing retail media planning UI, enhancing advertiser capabilities to self-serve campaign forecasting and impression estimation using historical and real-time data.

Implemented new UI features within an Angular/.NET microservices architecture, enabling dynamic updates of inventory projections and budget simulations such as adding the CPM bid (Cost Per Impression) feature which only showed up if Auction was selected for buy type.

Collaborated within a 6+ engineer Agile team, resolving JIRA-tracked issues and participating in daily standups and 2-week sprint planning to support iterative product delivery.

Tech Stack: C#, .NET Core, Angular, Git, Geritt, JIRA, Confluence, TypeScript`
      
    },
    {
      title: "ML Intern - Autonomous Systems @ Noblis",
      company: "",
      period: "Reston, Virginia | June 2024 - August 2024",
      description: `Interned under the Surface Transportation Team
      
      Contributed to R&D efforts in generative AI for simulating rare and high-risk roadway edge cases, improving training coverage for autonomous vehicle perception systems.

Designed a reinforcement learning feedback loop for image generation: synthesized scenes using text-to-image models, evaluated object detection vs. ground truth, and applied CLIP-based reward signals to iteratively optimize prompts and generate more challenging scenarios.

Sourced and curated diverse image datasets to support model generalization across edge-case conditions (occluded pedestrians, low-visibility signage) from various sources like Kaggle and Hugging Face.

I also presented project outcomes to company executives at the end of project, highlighting key improvements and the benefits of AI integration

Tech Stack: Python, PyTorch, YOLOv8, CUDA`
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
    graduationDate: "December 2025",
    courses: [
      "EECS 281: Data Structures and Algorithms",
      "EECS 388: Computer Security",
      "EECS 481: Software Engineering",
      "EECS 485: Web Systems",
      "EECS 497: Human-Centered Software Design & Development",
      "EECS 370: Computer Organization",
      "EECS 376: Theory of Computation",
      "MATH 214: Applied Linear Algebra",
      "EECS 203: Discrete Mathematics",
      "EECS 280: Programming in C++",
      "IOE 265: Probability and Statistics for Engineers",
      "EECS 482: Operating Systems - Upcoming",
      "EECS 201: Computer Science Pragmatics - Upcoming"
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