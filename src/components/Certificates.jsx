import React, { useState } from "react";
import cloudImg from "../assets/certificate/cloud.jpg";
import oracleImg from "../assets/certificate/oracle.jpg";
import genaiImg from "../assets/certificate/ai.jpg";
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      issuer: "ORACLE",
      date: "2025",
      description:
        "A certification that validates foundational knowledge of Artificial Intelligence concepts and Oracle Cloud AI services.",
      image: genaiImg,
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "ORACLE",
      date: "2025",
      description:
        "Certified professional skilled in integrating Generative AI technologies with Oracle’s cloud-based infrastructure and services.",
      image: oracleImg,
    },
    {
      title: "Introduction To Python",
      issuer: "Alison",
      date: "2025",
      description:
        "Python combines simplicity with power, making it ideal for both beginners and professionals to build real-world applications.",
      image:  cloudImg,
       
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">Certificates &</span> <span className="text-blue-500">Certifications</span>
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

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Certificate Preview Image */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4 border border-gray-300 dark:border-gray-700"
                />

                {/* View Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-3xl w-[90%] shadow-lg">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
