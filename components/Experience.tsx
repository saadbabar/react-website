import { siteConfig } from "@/siteConfig";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

function ToggleDescription({
  isVisible,
  onToggle,
  }: {
    isVisible: boolean
    onToggle: () => void;
}) {

  return (
    <div className="">
      <button
        onClick={onToggle}
        className="bg-gray-200 rounded-full px-2 py-1 "
      >
        {isVisible ? <FaCaretUp/> : <FaCaretDown/>}
      </button>
    </div>
  );
}

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleJob = (index: number) => {
    setOpenIndex(openIndex == index ? null : index)
  }
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="relative">
          {siteConfig.experience.map((job, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
              </div>
              <div className="ml-4 bg-gray-100 rounded-lg shadow-md p-4 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  
                  
                    <ToggleDescription 
                      isVisible={openIndex === index}
                      onToggle={() => toggleJob(index)}
                    /> 
                  
                </div>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 mb-0">{job.period}</p>
                
                  <div
                    className={`
                      transition-all
                      duration-300
                      ease-in-out
                      overflow-hidden
                      ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                    `}
                    >
                    <p className="text-gray-700 mt-2">{job.description}</p>
                  </div>
                

              </div>
            </div>
          ))}
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-blue-300" style={{ zIndex: 0 }}></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
