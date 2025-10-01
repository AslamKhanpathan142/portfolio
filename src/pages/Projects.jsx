import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { Helmet } from "react-helmet";
import Voting from "../assets/Voting.png"
import Medical from "../assets/medical.png"
import Book from "../assets/home.png"
import vlog from "../assets/vlog.png"
import chat from "../assets/chat.png"
import AIimage from "../assets/AIimage.png"
import movie from "../assets/movie.png"
import crome from "../assets/c.png"
import invortry from "../assets/create.png"
import portfolio from "../assets/portfolio.png"

// Sample project data
const projects = [
  {
    id: 1,
    title: "MEDICAL APPOINTMENT BOOKING SYSTEM",
    description: "A MERN stack app that allows patients to register, search doctors by specialization, and book appointments in real time.",
    tags: ["MERN Stack", "Redux", "JWT"],
    image: Medical,
  },
  {
    id: 2,
    title: "ONLINE VOTING SYSTEM",
    description: "A secure MERN stack-based online voting system with user authentication, poll creation, and live result display.",
    tags: ["MERN Stack", "JWT"],
    github: "https://github.com/AslamKhanpathan142/online-voting-system-with-mern-stack",
    live: "https://online-voting-system-with-mern-stac.vercel.app/",
    image: Voting,
  },
  {
    id: 12,
    title: "Online Bookstore",
    description: "E-commerce bookstore app with authentication, book browsing, filtering, cart, order, and admin features.",
    tags: ["MERN Stack", "E-Commerce", "JWT"],
    github: "https://github.com/AslamKhanpathan142/online-book-store-with-mern-stack",
    live: "https://online-book-store-with-mern-stack.vercel.app",
    image: Book
  },
  {
    id: 11,
    title: "Blog App",
    description: "A MERN blog app with login/signup, blog posting, editing, and profile view for user-specific content.",
    tags: ["MERN Stack", "JWT"],
    github: "https://github.com/AslamKhanpathan142/blog-app-with-mern-stack",
    live: "https://blog-app-with-mern-stack-ten.vercel.app/",
    image: vlog
  },
  {
    id: 4,
    title: "Real-Time Chat App",
    description: "A real-time messaging app using React, Node.js, and Socket.IO. Supports group and private chat.",
    tags: ["React", "Node.js", "Socket.IO"],
    github: "https://github.com/AslamKhanpathan142/real-time-chat-application",
    live: "#",
    image: chat,
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Generates images from user prompts using OpenAI’s DALL·E API. Built with React and Tailwind CSS.",
    tags: ["React", "OpenAI", "API", "Tailwind CSS"],
    github: "https://github.com/AslamKhanpathan142/ai-image-generator-openai-react",
    live: "https://aslamkhanpathan142.github.io/ai-image-generator-openai-react/",
    image: AIimage,
  },
  {
    id: 7,
    title: "Movie Search App",
    description: "Search movies using the OMDb API. Features favorites list and detailed view.",
    tags: ["React", "API", "CSS", "React Router"],
    github: "https://github.com/AslamKhanpathan142/movie-search-app",
    live: "https://movie-search-app-taupe-psi.vercel.app/",
    image: movie,
  },
  {
    id: 11,
    title: "Chrome Extension - Productivity Tracker",
    description: "Tracks time spent on websites with a React-based Chrome extension.",
    tags: ["React", "Chrome API", "JavaScript", "Extension"],
    github: "https://github.com/AslamKhanpathan142/chrome-extension-for-personal-productivity-tracker",
    live: "#",
    image: crome,
  },
  {
    id: 12,
    title: "Inoventry Grocery Manager",
    description: "React Native inventory app for grocery owners to manage and update stock items.",
    tags: ["React Native", "JavaScript", "Mobile App", "Inventory System"],
    github: "https://github.com/AslamKhanpathan142/inoventry-grocery-manager-with-react-native",
    live: "#",
    image: invortry,
  },
  {
    id: 13,
    title: "Portfolio Website",
    description: "Modern portfolio with animations and dark mode.",
    tags: ["React", "Framer Motion", "CSS Modules"],
    github: "#",
    live: "#",
    image: portfolio,
  }
]

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  // Filter projects by tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-40">
      {/* SEO Head */}
      <Helmet>
        <title>Projects | MERN Stack Developer</title>
        <meta
          name="description"
          content="My portfolio projects built with React, Node.js, and MongoDB"
        />
      </Helmet>

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          My <span className="text-blue-600">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of my recent works as a MERN stack developer.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        {["MERN Stack", "React", "Node.js", "React Native"].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tag
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          )
        )}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.map((project, indx) => (
            <motion.div
              key={indx}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
