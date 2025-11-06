import React from "react";
import {
  TrendingUp,
  Brain,
  Users,
  MessageSquare,
  Eye,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "C Programming", image: "https://img.icons8.com/color/96/c-programming.png" },
    { name: "C++", image: "https://img.icons8.com/color/96/c-plus-plus-logo.png" },
    { name: "Python", image: "https://img.icons8.com/color/96/python--v1.png" },
    { name: "React", image: "https://icons8.com/icon/voJ15GoZniHZ/external-react-a-javascript-library-for-building-user-interfaces-logo-filled-tal-revivo.png" },
    { name: "Microsoft Word", image: "https://img.icons8.com/color/96/ms-word.png" },
    { name: "GitHub", image: "https://img.icons8.com/glyph-neue/96/github.png" },
    { name: "SQL", image: "https://img.icons8.com/ios-filled/96/sql.png" },
    { name: "HTML", image: "https://img.icons8.com/color/96/html-5--v1.png" },
    { name: "Data Visualization", image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-data-visualization-marketing-technology-flaticons-lineal-color-flat-icons-2.png" },
  ];



  const qualities = [
    "Motivated",
    "Committed",
    "Disciplined",
    "Respectfulness",
    "Positive Thinker",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Skills
          </span>
        </h2>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-lg hover:border-indigo-500 transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="font-semibold text-gray-800">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          

          {/* Personal Qualities */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
              Personal Qualities
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {qualities.map((quality, index) => (
                <span
                  key={quality}
                  className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 shadow-md transition-transform transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
