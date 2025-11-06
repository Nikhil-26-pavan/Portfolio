import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "ORACLE",
      date: "2025",
      description:
        "A certification that validates foundational knowledge of Artificial Intelligence concepts and Oracle Cloud AI services.",
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "ORACLE",
      date: "2025",
      description:
        "Certified professional skilled in integrating Generative AI technologies with Oracle’s cloud-based infrastructure and services.",
    },
    {
      title: "Introducio To Python",
      issuer: "Alison",
      date: "2025",
      description:
        "Python combines simplicity with power, making it ideal for both beginners and professionals to build real-world applications.",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Certificates &{" "}
          <span className="text-blue-500">Certifications</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-1 h-full bg-blue-200 rounded-full"></div>

          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative pl-12 pb-12 last:pb-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg shadow-md">
                🏅
              </div>

              {/* Card Content */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    {cert.issuer}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
