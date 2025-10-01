import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaServer, } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress,SiRedux } from 'react-icons/si';



const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Skills data (frontend-only)
  const skillsData = {
    frontend: [
      { icon: <FaReact className="text-blue-500" size={32} />, name: 'React', level: 90 },
      { icon: <SiJavascript className="text-yellow-400" size={32} />, name: 'JavaScript', level: 85 },
      { icon: <FaReact className="text-blue-600" size={32} />, name: 'React Native ', level: 80 },
      { icon: <SiRedux className="text-gray-800" size={32} />, name: 'Redux', level: 70 },
    ],
    backend: [
      { icon: <FaNodeJs className="text-green-600" size={32} />, name: 'Node.js', level: 85 },
      { icon: <SiExpress className="text-gray-500" size={32} />, name: 'Express', level: 80 },
    ],
    database: [
      { icon: <SiMongodb className="text-green-700" size={32} />, name: 'MongoDB', level: 85 },
      { icon: <FaDatabase  className="text-blue-600" size={32} />, name: 'SQL', level: 80 },
    ],
    mobile: [
      { icon: <FaMobile className="text-purple-500" size={32} />, name: 'React Native', level: 80 },
    ]
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <FaReact className="mr-2" /> },
    { id: 'backend', label: 'Backend', icon: <FaServer className="mr-2" /> },
    { id: 'database', label: 'Database', icon: <FaDatabase className="mr-2" /> },
    { id: 'mobile', label: 'Mobile', icon: <FaMobile className="mr-2" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            My <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center px-5 py-3 mx-1 mb-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {skillsData[activeTab].map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedSkill(skill)}
                className={`bg-white rounded-xl p-6 shadow-md cursor-pointer transition-all ${selectedSkill?.name === skill.name ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.name}</h3>
                
                {/* Skill Level Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  />
                </div>
                
                <p className="text-xs text-gray-500">
                  {skill.level < 70 ? 'Intermediate' : skill.level < 85 ? 'Advanced' : 'Expert'}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Skill Detail (Mobile Modal) */}
        <AnimatePresence>
          {selectedSkill && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 lg:hidden"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                      {selectedSkill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{selectedSkill.name}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Proficiency</span>
                      <span>{selectedSkill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                        style={{ width: `${selectedSkill.level}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-800 mb-2">Projects using {selectedSkill.name}:</h4>
                    <ul className="list-disc list-inside text-sm text-blue-700">
                      <li>E-commerce platform (2022)</li>
                      <li>Task management app (2023)</li>
                      <li>Portfolio website (current)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Skills;
