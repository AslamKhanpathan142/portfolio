import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import Voting from "../assets/Voting.png";
import Medical from "../assets/medical.png";
import Profile from "/profile.jpg";

const HomePage = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Project preview data (frontend-only)
  const projects = [
    {
      id: 1,
      title: "MEDICAL APPOINTMENT BOOKING SYSTEM",
      description:
        "Built a full-featured medical appointment platform enabling patients to register, search doctors by specialization, and book appointments in real time.",
      tags: ["MERN STACK"],
      image: Medical,
    },
    {
      id: 2,
      title: "ONLINE VOTING SYSTEM",
      description:
        "Developed a secure Online Voting System using MERN stack with user login, poll creation, and live result display.",
      tags: ["MERN STACK"],
      image: Voting,
    },
  ];

  // Tech stack with animation variants
  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "SQL" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className=" pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-semibold text-blue-600 mb-2"
              >
                Hi, I'm{" "}
                <span className=" text-3xl font-bold">Mo Aslam Khan</span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
              >
                MERN Stack Developer
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 max-w-lg"
              >
                I craft responsive and scalable web applications using the MERN
                stack and industry-standard tools.
              </motion.p>

              <div className="flex flex-wrap gap-4 mb-12">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 1 }}
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center shadow-md hover:shadow-lg transition-all"
                >
                  Contact Me <FiArrowRight className="ml-2" />
                </motion.a>

                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  className="px-6 py-3 bg-white text-gray-800 rounded-lg border border-gray-200 flex items-center shadow-sm hover:shadow-md transition-all"
                >
                  View Resume
                </motion.a>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-500">Find me on:</span>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/AslamKhanpathan142"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://www.linkedin.com/in/mo-aslam-khan/"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="mailto:khanaslampathan142@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <FiMail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Image/Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
                {/* Replace with your image */}
                <img
                  src={Profile}
                  alt="MERN stack developer working on laptop"
                  className="absolute inset-0 w-full h-full "
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
                <div className="bg-white p-2 rounded-full shadow-lg flex space-x-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      onHoverStart={() => setHoveredTech(tech.name)}
                      onHoverEnd={() => setHoveredTech(null)}
                      className="p-2 bg-gray-50 rounded-full cursor-pointer"
                    >
                      <div className="text-2xl text-gray-700">{tech.icon}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Bubble */}
      {hoveredTech && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm shadow-lg"
        >
          {hoveredTech}
        </motion.div>
      )}

      {/* Projects Preview */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Some of my recent work as a full-stack developer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                      >
                        {tag}
                      </span>
                      
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all"
            >
              View All Projects <FiArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              My <span className="text-blue-600">Tech Stack</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tools and technologies I work with daily
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl text-gray-700 mb-3">{tech.icon}</div>
                <h3 className="text-lg font-medium text-gray-800">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
