import { SiReact, SiJavascript, SiBootstrap, SiTailwindcss, SiReactrouter, SiNodedotjs, SiExpress, SiPython, SiMongodb, SiSupabase, SiRedis, SiGit, SiGithub, SiPostman } from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa'
import { LuMonitorSmartphone, LuGlobe, LuPlug, LuKeyRound, LuShieldCheck, LuLayers, LuDatabase, LuSparkles, LuScanText, LuFileText, LuWandSparkles, LuListOrdered, LuTableProperties, LuCode } from 'react-icons/lu'

// skill name (as written in profile.js) -> [icon, brand color shown on hover]
export const skillIcon = {
  'React.js': [SiReact, '#61dafb'], JavaScript: [SiJavascript, '#f7df1e'], HTML: [FaHtml5, '#e34f26'], CSS: [FaCss3Alt, '#1572b6'],
  Bootstrap: [SiBootstrap, '#9b6bff'], 'Tailwind CSS': [SiTailwindcss, '#38bdf8'], 'React Router': [SiReactrouter, '#f44250'],
  'React Native': [SiReact, '#61dafb'], 'Responsive Design': [LuMonitorSmartphone, '#8b8cff'],
  'Node.js': [SiNodedotjs, '#6cc24a'], 'Express.js': [SiExpress, '#e4e4e7'], Python: [SiPython, '#4b8bbe'], 'RESTful APIs': [LuGlobe, '#8b8cff'],
  'API Integration': [LuPlug, '#8b8cff'], Authentication: [LuKeyRound, '#8b8cff'], 'Role-Based Access Control (RBAC)': [LuShieldCheck, '#8b8cff'],
  'Queue-Based Workers': [LuListOrdered, '#8b8cff'], MongoDB: [SiMongodb, '#47a248'], SQL: [LuDatabase, '#8b8cff'], Supabase: [SiSupabase, '#3ecf8e'],
  Redis: [SiRedis, '#ff4438'], 'CRUD Operations': [LuTableProperties, '#8b8cff'], 'Generative AI': [LuSparkles, '#c4b5fd'], 'Gemini API': [LuSparkles, '#8ab4ff'],
  OCR: [LuScanText, '#8b8cff'], 'Document Processing': [LuFileText, '#8b8cff'], Lovable: [LuWandSparkles, '#ff7ab6'], 'MERN Stack': [LuLayers, '#8b8cff'],
  Git: [SiGit, '#f05133'], GitHub: [SiGithub, '#e4e4e7'], Postman: [SiPostman, '#ff6c37'], 'VS Code': [LuCode, '#3b9eff'],
  'Object-Oriented Programming (Java)': [FaJava, '#f89820'], DBMS: [LuDatabase, '#8b8cff'],
}
export const homeTech = ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'Redis', 'Supabase', 'Tailwind CSS', 'Git']
