import { siteConfig } from "@/siteConfig";

export function Education() {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{education.university}</h3>
          <p className="text-gray-600 mb-2">{education.degree}</p>
          <p className="text-gray-600 mb-4">Graduation: {education.graduationDate}</p>
          
          <h4 className="text-xl font-semibold mb-2 text-gray-800">Relevant Courses</h4>
          <ul className="list-disc list-inside mb-4">
            {education.courses.map((course, index) => (
              <li key={index} className="text-gray-600">{course}</li>
            ))}
          </ul>
          
          <h4 className="text-xl font-semibold mb-2 text-gray-800">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {education.skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
