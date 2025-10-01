import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer links data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "projects" },
        { name: "About", href: "about" },
        { name: "Contact", href: "contact" },
      ],
    },
    {
      title: "Tech Stack",
      links: [
        { name: "React", href: "skills" },
        { name: "Node.js", href: "skills" },
        { name: "MongoDB", href: "skills" },
        { name: "Express", href: "skills" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      href: "https://github.com/AslamKhanpathan142",
      target: "_blank",
      rel: "#",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mo-aslam-khan/",
      target: "_blank",
      rel: "#",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      href: "mailto:khanaslampathan142@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand/Info Column */}
          <motion.div
            whileHover={{ y: -5 }}
            className="col-span-1 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mo Aslam Khan
            </h2>
            <p className="text-gray-300 mb-4">
              I focus on creating smooth, user-friendly web apps with a strong
              eye for design and performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.name}
                  target={link.target}
                  rel={link.rel}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-gray-400 mb-2 sm:mb-0">
            &copy; {currentYear} Mo Aslam Khan. All rights reserved.
          </p>
          <p className="flex items-center text-gray-400">
            Made with <FaHeart className="text-red-500 mx-1" /> in India
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
