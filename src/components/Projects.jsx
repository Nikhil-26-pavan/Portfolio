import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Student LMS",
      description:
        "Developed an interactive education web platform with easy access to courses, resources, and announcements. Built using React, CSS, and JavaScript for a responsive and user-friendly experience.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://edvora-gold-five.vercel.app/",
      details:
        "This interactive portfolio was built to highlight my professional journey with smooth animations, responsive layout, and a minimal, elegant design.",
      features: [
        "Fully responsive layout",
        "Smooth scroll animations",
        "Project modal details",
        "Performance optimized",
      ],
    },
    {
      id: 2,
      title: "Expense Tracker App",
      description:
        "A lightweight React-based Expense Tracker that helps users monitor income and expenses in real time. Users can add, edit, and delete transactions, assign categories, and see an updated balance and transaction history. Data is persisted with localStorage for a seamless experience across sessions. Built with React and Tailwind CSS for a responsive, accessible UI and includes basic validation and optional charts for quick financial insights.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://expence-tracker-smoky-one.vercel.app/",
      details:
        "This interactive portfolio was built to highlight my professional journey with smooth animations, responsive layout, and a minimal, elegant design.",
      features: [
        "Fully responsive layout",
        "Smooth scroll animations",
        "Project modal details",
        "Performance optimized",
      ],
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">My</span> <span className="text-blue-500">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    className="flex-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveLink, "_blank");
                    }}
                  >
                    🔗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-3xl w-full relative shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold mb-2 text-blue-600">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedProject.description}
              </p>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-6"
              />

              <div>
                <h4 className="text-lg font-semibold mb-2">
                  About This Project
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.details}
                </p>

                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                  onClick={() =>
                    window.open(selectedProject.liveLink, "_blank")
                  }
                >
                  View Live Project 🔗
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
