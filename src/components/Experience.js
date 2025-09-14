import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Work, School, Code, Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      date: "July 2024 - May 2025",
      title: "Full Stack Developer",
      company: "SD Pro Solutions Pvt Ltd",
      description: "Developed MERN stack applications with RESTful APIs and database integration. Implemented responsive designs and optimized performance.",
      icon: <Work />,
      color: "primary",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      date: "Apr - Jun 2024",
      title: "Healthcare Website Project",
      company: "Personal Project",
      description: "Built responsive healthcare platform using React and Bootstrap with appointment booking system and doctor profiles.",
      icon: <Code />,
      color: "secondary",
      skills: ["React", "Bootstrap", "JavaScript", "CSS3"]
    },
    {
      date: "May 2023",
      title: "B.Tech in Information Technology",
      company: "VSB Engineering College, Karur",
      description: "Graduated with CGPA 8.3. Completed courses in Web Technologies, Database Systems, and Software Engineering.",
      icon: <School />,
      color: "success",
      skills: ["Java", "Python", "SQL", "Algorithms"]
    },
    {
      date: "Dec 2023 - May 2024",
      title: "Full Stack Development Course",
      company: "Hejex Technology, Chennai",
      description: "Completed intensive MERN stack training program with hands-on projects and real-world applications.",
      icon: <Star />,
      color: "warning",
      skills: ["MERN Stack", "Git", "Deployment", "Agile Methodology"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements with glow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and educational milestones
          </p>
        </motion.div>

        <Timeline position="alternate" className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TimelineDot 
                    color={exp.color} 
                    className="relative group"
                    sx={{ 
                      backgroundColor: `rgba(25, 118, 210, 0.2)`,
                      borderColor: `rgba(25, 118, 210, 0.5)`,
                      '&:hover': {
                        boxShadow: '0 0 15px rgba(25, 118, 210, 0.5)'
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    {exp.icon}
                  </TimelineDot>
                </motion.div>
                {index < experiences.length - 1 && (
                  <TimelineConnector 
                    sx={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      width: '2px'
                    }} 
                  />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl shadow-lg border border-gray-700 backdrop-blur-sm transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/30
                    ${index % 2 === 0 ? 'bg-gradient-to-br from-blue-900/30 to-gray-800/50' : 'bg-gradient-to-br from-purple-900/30 to-gray-800/50'}`}
                >
                  <p className="text-sm text-blue-300 mb-2 font-medium">{exp.date}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-200 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/4 top-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"
        ></motion.div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 4s infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;