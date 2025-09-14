import { Card, CardContent, Typography, Chip } from '@mui/material';
import { School, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background elements with glow */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey and professional certifications
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <School className="text-blue-400" fontSize="large" />
                      <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div>
                      <Typography variant="h5" component="div" className="text-white font-bold">
                        Bachelor of Technology in Information Technology
                      </Typography>
                      <Typography className="text-gray-300">
                        VSB Engineering College, Karur
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Typography variant="body2" className="text-gray-400">
                      July 2019 – June 2023
                    </Typography>
                    <Chip 
                      label="CGPA: 8.3" 
                      className="bg-blue-900/50 text-blue-300 border border-blue-700/50 hover:bg-blue-800/60 transition-colors duration-300" 
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* HSC */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <School className="text-purple-400" fontSize="large" />
                      <div className="absolute inset-0 bg-purple-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div>
                      <Typography variant="h6" component="div" className="text-white font-bold">
                        Higher Secondary Education (HSC)
                      </Typography>
                      <Typography className="text-gray-300">
                        St. Joseph's Higher Secondary School, Manjakuppam, Cuddalore
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Typography variant="body2" className="text-gray-400">
                      June 2018 – April 2019
                    </Typography>
                    <Chip 
                      label="Score: 61%" 
                      className="bg-purple-900/50 text-purple-300 border border-purple-700/50 hover:bg-purple-800/60 transition-colors duration-300" 
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* SSLC */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:shadow-green-500/20 hover:border-green-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <School className="text-green-400" fontSize="large" />
                      <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div>
                      <Typography variant="h6" component="div" className="text-white font-bold">
                        Secondary School Education (SSLC)
                      </Typography>
                      <Typography className="text-gray-300">
                        St. Joseph's Higher Secondary School, Manjakuppam, Cuddalore
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Typography variant="body2" className="text-gray-400">
                      June 2015 – April 2016
                    </Typography>
                    <Chip 
                      label="Score: 71%" 
                      className="bg-green-900/50 text-green-300 border border-green-700/50 hover:bg-green-800/60 transition-colors duration-300" 
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certification */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <TrendingUp className="text-orange-400" fontSize="large" />
                      <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div>
                      <Typography variant="h6" component="div" className="text-white font-bold">
                        Full Stack Development Course
                      </Typography>
                      <Typography className="text-gray-300">
                        Hejex Technology, Chennai
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Typography variant="body2" className="text-gray-400">
                      December 2023 – May 2024
                    </Typography>
                    <Chip 
                      label="MERN Stack" 
                      className="bg-orange-900/50 text-orange-300 border border-orange-700/50 hover:bg-orange-800/60 transition-colors duration-300" 
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
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
export default Education;