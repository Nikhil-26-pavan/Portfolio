import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (B.C.A)",
      institution: "Vidyasagar University, Midnapore",
      period: "2019 - 2022",
      percentage: "82.57%",
      description:
        "Comprehensive study of computer applications, programming, and software development.",
    },
    {
      degree: "Intermediate (PCM)",
      institution: "Sri Chaitanya Junior College, Vijayawada",
      period: "2017 - 2019",
      percentage: "74%",
      description:
        "Physics, Chemistry, and Mathematics with focus on analytical and problem-solving skills.",
    },
    {
      degree: "Matriculation",
      institution: "Kendriya Vidyalaya No-1 A/F/S, Kalaikunda",
      period: "2016 - 2017",
      percentage: "60.08%",
      description:
        "Foundation education with emphasis on core subjects and holistic development.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-blue-500">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-blue-200 dark:bg-blue-800 rounded-full"></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-12 pb-12 last:pb-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg shadow-md">
                🎓
              </div>

              {/* Education Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-semibold">
                    {edu.percentage}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
