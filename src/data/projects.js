// SOURCE: old portfolio (src/pages/Projects.jsx). Information below is carried over unchanged.
// `fit: 'contain'` only affects how a tall/narrow screenshot is displayed.
import aiHiring from '../assets/projects/ai-hiring.webp'
import medical from '../assets/projects/medical.webp'
import gatepass from '../assets/projects/gatepass.webp'
import voting from '../assets/projects/voting.webp'
import bookstore from '../assets/projects/bookstore.webp'
import blog from '../assets/projects/blog.webp'
import chat from '../assets/projects/chat.webp'
import portfolio from '../assets/projects/portfolio.webp'
import aiImage from '../assets/projects/ai-image.webp'
import movie from '../assets/projects/movie.webp'
import chrome from '../assets/projects/chrome-extension.webp'
import inventory from '../assets/projects/inventory.webp'

export const projects = [
  { id: 19, title: 'AI Smart Interview & Hiring System', description: 'Built an AI-powered hiring platform for resume analysis, skill matching, interview generation, and automated candidate evaluation..', tags: ['MERN Stack', 'JWT', 'Bcrypt', 'Redux', 'Supabase'], github: 'https://github.com/AslamKhanpathan142/ai-smart-interview-and-hiring-system-with-supabase', live: 'https://ai-smart-interview-and-hiring-syste.vercel.app/', image: aiHiring },
  { id: 1, title: 'Medical Appointment Booking System', description: 'A MERN stack app that allows patients to register, search doctors by specialization, and book appointments in real time.', tags: ['MERN Stack', 'JWT', 'Bcrypt'], github: 'https://github.com/AslamKhanpathan142/smart-medical-appointment-system-with-mern-stack', live: 'https://smart-medical-appointment-system-wi.vercel.app/', image: medical },
  { id: 2, title: 'Online Gatepass Approval System', description: 'A MERN stack web application for managing student gatepass requests and hostel-based rector approvals.', tags: ['MERN Stack', 'JWT', 'Bcrypt'], github: 'https://github.com/AslamKhanpathan142/online-gatepass-approval-system-with-mern-stack', live: 'https://online-gatepass-approval-system-wit.vercel.app/', image: gatepass },
  { id: 3, title: 'Online Voting System', description: 'A secure MERN stack-based online voting system with user authentication, poll creation, and live result display.', tags: ['MERN Stack', 'JWT', 'Bcrypt'], github: 'https://github.com/AslamKhanpathan142/online-voting-system-with-mern-stack', live: 'https://online-voting-system-with-mern-stac.vercel.app/', image: voting },
  { id: 4, title: 'Online Bookstore', description: 'E-commerce bookstore app with authentication, book browsing, filtering, cart, order, and admin features.', tags: ['MERN Stack', 'E-Commerce', 'JWT', 'Bcrypt'], github: 'https://github.com/AslamKhanpathan142/online-book-store-with-mern-stack', live: 'https://online-book-store-with-mern-stack.vercel.app', image: bookstore },
  { id: 5, title: 'Blog App', description: 'A MERN blog app with login/signup, blog posting, editing, and profile view for user-specific content.', tags: ['MERN Stack', 'JWT', 'Bcrypt'], github: 'https://github.com/AslamKhanpathan142/blog-app-with-mern-stack', live: 'https://blog-app-with-mern-stack-ten.vercel.app/', image: blog },
  { id: 6, title: 'Real-Time Chat App', description: 'A real-time messaging app using React, Node.js, and Socket.IO. Supports group and private chat.', tags: ['React', 'Node.js', 'Socket.IO'], github: 'https://github.com/AslamKhanpathan142/real-time-chat-application', image: chat, fit: 'contain' },
  { id: 7, title: 'Portfolio Website', description: 'Modern portfolio with animations and dark mode.', tags: ['React', 'Framer Motion', 'CSS Modules'], github: 'https://github.com/AslamKhanpathan142/portfolio', live: 'https://portfolio-vert-six-50.vercel.app/', image: portfolio },
  { id: 8, title: 'AI Image Generator', description: 'Generates images from user prompts using OpenAI’s DALL·E API. Built with React and Tailwind CSS.', tags: ['React', 'OpenAI', 'API', 'Tailwind CSS'], github: 'https://github.com/AslamKhanpathan142/ai-image-generator-openai-react', live: 'https://aslamkhanpathan142.github.io/ai-image-generator-openai-react/', image: aiImage },
  { id: 9, title: 'Movie Search App', description: 'Search movies using the OMDb API. Features favorites list and detailed view.', tags: ['React', 'API', 'CSS', 'React Router'], github: 'https://github.com/AslamKhanpathan142/movie-search-app', image: movie },
  { id: 10, title: 'Chrome Extension - Productivity Tracker', description: 'Tracks time spent on websites with a React-based Chrome extension.', tags: ['React', 'Chrome API', 'JavaScript', 'Extension'], github: 'https://github.com/AslamKhanpathan142/chrome-extension-for-personal-productivity-tracker', image: chrome, fit: 'contain' },
  { id: 11, title: 'Inoventry Grocery Manager', description: 'React Native inventory app for grocery owners to manage and update stock items.', tags: ['React Native', 'JavaScript', 'Mobile App', 'Inventory System'], github: 'https://github.com/AslamKhanpathan142/inoventry-grocery-manager-with-react-native', image: inventory, fit: 'contain' },
]

// Same filter set as the old portfolio.
export const projectFilters = ['MERN Stack', 'React', 'Node.js', 'React Native']
