import { siteConfig } from "@/siteConfig";
import Image from 'next/image';

const skills = [
  { name: "Python", color: "3776AB", logo: "python" },
  { name: "C++", color: "00599C", logo: "c%2B%2B" },
  { name: "C", color: "00599C", logo: "C"},
  { name: "JavaScript", color: "F7DF1E", logo: "javascript" },
  { name: "R", color: "276DC3", logo: "R"},
  { name: "TypeScript", color: "007ACC", logo: "typescript" },
  { name: "Shell Script", color: "121212", logo: "gnu-bash" },
];

const frameworks = [
  {name: "Cypress", color: "17202C", logo: "cypress"},
  {name: "d3%20js", color: "F9A03C", logo: "d3.js"},
  {name: "Docker", color: "2CA5E0", logo: "docker"},
  {name: "Django", color: "092E30", logo: "django"},
  {name: "Flask", color: "000000", logo: "flask"},
  {name: "next%20js", color: "000000", logo: "nextdotjs"},
  {name: "React", color: "20232A", logo: "react"},
  {name: "Tailwind_CSS", color: "38B2AC", logo: "tailwind-css"},
  {name: "PyTorch", color: "EE4C2C", logo: "pytorch"},
  {name: "Postgres", color: "336791", logo: "postgresql"},
  {name: "SQLite", color: "003B57", logo:"sqlite"}

]

const tools = [
  {name: "powershell", color: "5391FE", logo: "powershell"},
  {name: "iTerm2", color: "000000", logo: "iterm2"},
  {name: "homebrew", color: "FBB040", logo: "homebrew"},
  {name: "Zsh", color: "F15A24", logo: "Zsh"},
  {name: "Amazon_AWS", color: "FF9900", logo: "amazonaws"},
  {name: "VSCode", color: "0078D4", logo: "visual%20studio%20code"},
  {name: "Jupyter", color: "F37626", logo: "Jupyter"},
  { name: "JSON", color: "5E5C5C", logo: "json"},


]

export function Education() {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl p-6 relative">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-48 h-48 relative mb-6 sm:mb-0 sm:ml-4 order-first sm:order-last">
              <Image
                src="/IMG_4615.jpg"
                alt="Education Image"
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: '50% 50%' // Adjust this to focus on your face
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{education.university}</h3>
              <p className="text-gray-600 mb-2">{education.degree}</p>
              <p className="text-gray-600 mb-4">Graduation: {education.graduationDate}</p>
              
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Relevant Courses</h4>
              <ul className="list-disc list-inside mb-4">
                {education.courses.map((course, index) => (
                  <li key={index} className="text-gray-600">{course}</li>
                ))}
              </ul>
              
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {/* {education.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {skill}
                  </span>
                ))} */}
                <div className="badge-container">
                  {skills.map((skill) => (
                    <img
                      key={skill.name}
                      src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
                      alt={skill.name}
                      style={{
                        height: "30px",
                        maxWidth: "auto", // Prevents unwanted resizing
                        objectFit: "contain",
                      }}
                    />
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-2 text-gray-800 w-full">Libraries and Frameworks</h4>
                <div className="frameworks-container">
                  {frameworks.map((f) => (
                    <img
                      key={f.name}
                      src={`https://img.shields.io/badge/${f.name}-${f.color}?style=for-the-badge&logo=${f.logo}&logoColor=white`}
                      alt={f.name}
                      style={{
                        height: "30px",
                        maxWidth: "auto", // Prevents unwanted resizing
                        objectFit: "contain",
                      }}
                    />
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-2 text-gray-800 w-full">Tools</h4>
                <div className="tools-container">
                  {tools.map((f) => (
                    <img
                      key={f.name}
                      src={`https://img.shields.io/badge/${f.name}-${f.color}?style=for-the-badge&logo=${f.logo}&logoColor=white`}
                      alt={f.name}
                      style={{
                        height: "30px",
                        maxWidth: "auto", // Prevents unwanted resizing
                        objectFit: "contain",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center py-5">
                <img src="https://github-readme-stats-ebon-seven-65.vercel.app/api/top-langs/?username=saadbabar&layout=pie&exclude_repo=github-readme-stats,github-stats,LC-Reminder,p3-insta485-clientside,popularStocks&langs_count=5&size_weight=0.5&count_weight=0.5&hide=html,css 
"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
