import { Card, CardContent, CardMedia, Typography, Button, Chip, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Website",
      tech: ["React", "Bootstrap", "Node.js", "MongoDB"],
      desc: "A responsive healthcare platform with appointment booking, doctor profiles, and patient management system. Features dynamic UI with dark/light mode and multilingual support.",
      image: "https://i.pinimg.com/736x/5d/b0/a3/5db0a3674b2a20f3dafe9aa64e249794.jpg",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "AI Interview Bot",
      tech: ["Python", "NLP", "TensorFlow", "FastAPI"],
      desc: "An intelligent interview assistant that analyzes resumes and generates personalized questions. Uses natural language processing to evaluate responses and provide feedback.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      tech: ["React", "Redux", "Express", "Stripe"],
      desc: "Full-stack e-commerce solution with product management, shopping cart, user authentication, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Task Management App",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      desc: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1139&q=80",
      github: "#",
      demo: "#",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements with glow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
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
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full group"
            >
              <Card className="h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm group-hover:border-blue-500/30 group-hover:shadow-blue-500/20">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-70"></div>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20 shadow-lg shadow-blue-500/30">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-20">
                    <div className="flex space-x-2">
                      <IconButton 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                        size="small"
                      >
                        <GitHub fontSize="small" />
                      </IconButton>
                      <IconButton 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                        size="small"
                      >
                        <Launch fontSize="small" />
                      </IconButton>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Typography variant="h5" component="h3" className="font-bold mb-2 text-white">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" className="mb-4 text-gray-400">
                    {project.desc}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex}
                        label={tech}
                        size="small"
                        className="bg-gray-700 text-blue-300 font-medium border border-gray-600"
                      />
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      variant="contained" 
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-4 bg-gray-700 hover:bg-gray-600 text-white shadow-md hover:shadow-blue-500/30 transition-all"
                    >
                      Code
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<Launch />}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-4 border-blue-500 text-blue-300 hover:bg-blue-500/10 hover:shadow-blue-500/20 transition-all"
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Want to see more?</h3>
          <p className="text-gray-400 mb-6">Check out my GitHub profile for more projects and contributions</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              size="large"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
              className="rounded-full px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-blue-500/40 transition-all"
            >
              View GitHub Profile
            </Button>
          </motion.div>
        </motion.div>
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

export default Projects;