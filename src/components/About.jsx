import React from "react";
import profileImage from "../assets/1761889823526.jpg"; // adjust path if needed

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Me
          </span>
        </h2>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
              <img
                src={profileImage}
                alt="Nikhil Pavan"
                className="relative rounded-2xl w-full max-w-md shadow-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900"></h3>

            <p className="text-lg text-gray-600 leading-relaxed">
            Dynamic MCA student specializing in Artificial Intelligence and Machine Learning, passionate about transforming data into intelligent, real-world solutions. 
            Proficient in data analysis, model development, and deep learning, with a strong drive for innovation in automation and predictive analytics. 
            Eager to leverage my technical expertise, collaborate on impactful projects, and grow as a forward-thinking technology professional.
              
            </p>

            {/*<p className="text-lg text-gray-600 leading-relaxed">
              My journey in technology is driven by a commitment to continuous
              learning and innovation. I thrive in challenging environments
              where I can apply my technical expertise and contribute to
              meaningful projects.
            </p>*/}

            {/* Info Grid */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
