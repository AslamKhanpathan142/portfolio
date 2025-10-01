import { motion } from "framer-motion";
import { useState } from "react";
import Profile from "/profile.jpg";
import { FiMail } from "react-icons/fi";
// import Head from 'next/head';

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Data
  const skills = {
    frontend: [
      "React",
      "React Native",
      " JavaScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
      "Bootstrap",
      "CSS",
    ],
    backend: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "Socket.io"],
    tools: ["Git", "GitHub", "VS Studio/Code", "Postman"],
  };

  const experiences = [
    {
      year: "May 2025 – July 2025",
      role: "WEB DEVELOPMENT",
      company: "CODTECH IT Solutions Private Limited",
      description:
        "Built responsive and interactive web applications using React.js with modular component-based architecture ",
      highlights: [
        "Integrated external APIs (like OMDb and Weather API) for dynamic data rendering and real-time user interaction ",
        "Implemented client-side routing with React Router and maintained code using Git and GitHub ",
      ],
    },
  ];

  const education = [
    {
      year: "July 2023 – Present",
      degree: "BCA in Computer Applications",
      institution: "GANPAT UNIVERSITY",
      description:
        "Pursuing a Bachelor of Computer Applications (BCA) with a strong focus on full-stack development and modern web technologies.",
      courses: [
        "Web Development",
        "DBMS",
        "OOP in Java",
        "Operating Systems",
        "Programming languages",
      ],
    },
    {
      year: "May 2023 ",
      degree: "12th (Commerce)",
      institution: "RBSE (Board of Secondary Education, Rajasthan)",
      description:
        "Completed 12th in Commerce from RBSE (Board of Secondary Education, Rajasthan), with a foundation in business, economics, and accounting.",
      courses: ["Mathematics", "Accounting "],
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* <head> */}
      <title>About | MERN Stack Developer</title>
      <meta
        name="description"
        content="Professional portfolio of a MERN stack developer"
      />
      {/* </head> */}

      <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pt-20">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate{" "}
              <span className="font-semibold text-indigo-600">
                MERN Stack Developer
              </span>{" "}
              creating modern, scalable web applications.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            variants={slideUp}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="col-span-1">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <img
                    src={Profile}
                    alt="Professional headshot of MERN stack developer with laptop on desk"
                    className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Mo Aslam Khan
                  </h2>
                  <p className="text-gray-500 mb-4">MERN Stack Developer</p>
                  <p className="text-gray-600 mb-4">
                    I build responsive, high-quality web applications using
                    modern technologies and clean code practices.
                  </p>
                  <div className="flex space-x-4">
                    <SocialIcon
                      platform="github"
                      url="https://github.com/AslamKhanpathan142"
                    />
                    <SocialIcon
                      platform="linkedin"
                      url="https://www.linkedin.com/in/mo-aslam-khan/"
                    />
                    <a
                      href="mailto:khanaslampathan142@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiMail size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Professional Summary
                </h3>
                <p className="text-gray-600 mb-4">
                  I am a dedicated and results-driven MERN Stack Developer with
                  hands-on experience in building dynamic, responsive, and
                  full-featured web applications. Skilled in MongoDB,
                  Express.js, React.js, and Node.js, I focus on writing clean,
                  maintainable code and delivering seamless user experiences.
                </p>
                <p className="text-gray-600 mb-4">
                  With a strong understanding of both frontend and backend
                  technologies, I am passionate about problem-solving and
                  continuously improving my craft to build impactful digital
                  products.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <StatCard number="10+" label="Projects Completed" />
                  <StatCard number="1" label="Internship Completed" />
                  <StatCard number="2+" label="Years of MERN Stack Practice" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div variants={slideUp} className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap border-b border-gray-200">
              <TabButton
                active={activeTab === "skills"}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </TabButton>
              <TabButton
                active={activeTab === "experience"}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </TabButton>
              <TabButton
                active={activeTab === "education"}
                onClick={() => setActiveTab("education")}
              >
                Education
              </TabButton>
            </div>
          </motion.div>

          {/* Tabs Content */}
          <motion.div variants={fadeIn} className="max-w-5xl mx-auto pb-20">
            {/* Skills Tab */}
            {activeTab === "skills" && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-8"
              >
                <SkillCategory
                  title="Frontend Technologies"
                  skills={skills.frontend}
                  icon={<CodeIcon />}
                  color="from-blue-400 to-blue-600"
                />
                <SkillCategory
                  title="Backend Technologies"
                  skills={skills.backend}
                  icon={<ServerIcon />}
                  color="from-purple-400 to-purple-600"
                />
                <SkillCategory
                  title="DevOps & Tools"
                  skills={skills.tools}
                  icon={<ToolIcon />}
                  color="from-indigo-400 to-indigo-600"
                />
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Timeline items={experiences} />
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <Timeline items={education} isEducation />
              </motion.div>
            )}
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

// Subcomponents
const SocialIcon = ({ platform, url }) => {
  const icons = {
    github: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
    linkedin: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    twitter: (
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    ),
  };

  const colors = {
    github: "text-gray-800 hover:text-gray-900",
    linkedin: "text-blue-600 hover:text-blue-700",
    twitter: "text-blue-400 hover:text-blue-500",
  };

  return (
    <a
      href={url}
      className={`${colors[platform]} transition-colors duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        {icons[platform]}
      </svg>
    </a>
  );
};

const StatCard = ({ number, label }) => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg text-center border border-gray-100">
    <p className="text-2xl font-bold text-blue-600 mb-1">{number}</p>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-medium text-sm md:text-base ${
      active
        ? "text-blue-600 border-b-2 border-blue-500"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {children}
  </button>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const ServerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const ToolIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const SkillCategory = ({ title, skills, icon, color }) => (
  <motion.div
    // variants={slideUp}
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
  >
    <div className={`bg-gradient-to-r ${color} p-4 flex items-center`}>
      <div className="bg-white p-2 rounded-lg shadow-sm mr-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            // variants={slideUp}
            whileHover={{ y: -3 }}
            className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Timeline = ({ items, isEducation = false }) => (
  <div className="relative">
    {/* Timeline line */}
    <div className="absolute h-full w-0.5 bg-gray-200 left-1 md:left-3 top-0"></div>

    {items.map((item, index) => (
      <motion.div
        key={index}
        // variants={slideUp}
        className="relative pl-10 md:pl-16 mb-8"
      >
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-blue-600">
              {item.year}
            </span>
            {isEducation ? (
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {item.degree}
              </span>
            ) : (
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                {item.role}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {isEducation ? item.institution : item.company}
          </h3>

          <p className="text-gray-600 mb-3">{item.description}</p>

          {!isEducation && item.highlights && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Key Achievements:
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {item.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {isEducation && item.courses && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Key Courses:
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.courses.map((course, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

export default About;
