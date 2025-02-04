import { siteConfig } from "@/siteConfig";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

function ToggleDescription({ job }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="p-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-zinc-300 inline rounded-full px-2 py-1"
      >
        {isVisible ? <FaCaretUp/> : <FaCaretDown/>}
      </button>

      {isVisible && (
        <p className="text-gray-700 mt-0">{job.description}</p>
      )}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="relative">
          {siteConfig.experience.map((job, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-4 bg-white rounded-lg shadow-md p-4 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 mb-0">{job.period}</p>
                <ToggleDescription job={job} />
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
