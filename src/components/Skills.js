import React from "react";
import { 
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaAws,
  FaDocker
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiSpring,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiJest,
  SiMocha,
  SiPostman,
  SiVercel,
  SiHeroku,
  SiNetlify,
  SiJenkins,
  SiPytest,
  SiIntellijidea,
  SiPycharm,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";

// ScikitLearn icon component
const ScikitLearn = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm-3.75-9.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm3.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
  </svg>
);

const Skills = () => {
  // Skill categories with icons and items
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 90 },
        { name: "HTML5", icon: <SiHtml5 />, level: 95 },
        { name: "CSS3", icon: <SiCss3 />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 80 },
        { name: "Java", icon: <FaJava />, level: 75 },
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 88 },
        { name: "Redux", icon: <SiRedux />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 85 },
        { name: "Material UI", icon: "🎭", level: 80 },
        { name: "Responsive Design", icon: "📱", level: 95 },
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 80 },
        { name: "Spring Boot", icon: <SiSpring />, level: 70 },
        { name: "Django", icon: <SiDjango />, level: 75 },
        { name: "Flask", icon: <SiFlask />, level: 70 },
        { name: "RESTful APIs", icon: "🔗", level: 85 },
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "MySQL", icon: <SiMysql />, level: 75 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
        { name: "SQLite", icon: <SiSqlite />, level: 75 },
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      color: "from-red-500 to-rose-500",
      skills: [
        { name: "NumPy", icon: <SiNumpy />, level: 75 },
        { name: "pandas", icon: <SiPandas />, level: 70 },
        { name: "scikit-learn", icon: <ScikitLearn />, level: 65 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 60 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      color: "from-indigo-500 to-violet-500",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Docker", icon: <FaDocker />, level: 70 },
        { name: "AWS", icon: <FaAws />, level: 65 },
        { name: "Jenkins", icon: <SiJenkins />, level: 60 },
        { name: "VS Code", icon: "📝", level: 90 },
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={categoryVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/30 transition-all duration-300 group"
            >
              {/* Category header with gradient */}
              <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills list */}
              <div className="p-5 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg group-hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center mr-3 text-xl bg-gray-800 rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden mr-2">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional tools section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Development Tools</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: "📝", name: "VS Code" },
              { icon: <SiIntellijidea className="text-red-500 text-3xl" />, name: "IntelliJ" },
              { icon: <SiPycharm className="text-green-500 text-3xl" />, name: "PyCharm" },
              { icon: <SiPostman className="text-orange-500 text-3xl" />, name: "Postman" },
              { icon: <SiNpm className="text-red-500 text-3xl" />, name: "npm" },
              { icon: "📦", name: "Maven" },
              { icon: <SiHeroku className="text-purple-500 text-3xl" />, name: "Heroku" },
              { icon: <SiNetlify className="text-teal-400 text-3xl" />, name: "Netlify" },
              { icon: <SiVercel className="text-white text-3xl" />, name: "Vercel" },
              { icon: <SiJest className="text-red-600 text-3xl" />, name: "Jest" },
              { icon: <SiMocha className="text-yellow-600 text-3xl" />, name: "Mocha" },
              { icon: <SiPytest className="text-blue-600 text-3xl" />, name: "PyTest" },
            ].map((tool, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-700/50 rounded-xl hover:bg-cyan-900/20 transition-all"
              >
                <div className="text-3xl mb-2">
                  {tool.icon}
                </div>
                <span className="mt-2 text-sm text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;