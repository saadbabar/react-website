import { siteConfig } from "@/siteConfig";

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
              <div className="ml-6 bg-white rounded-lg shadow-md p-6 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-blue-300" style={{ zIndex: 0 }}></div>
        </div>
      </div>
    </section>
  );
}
