import { motion } from 'framer-motion';
import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* CRT Scanlines Overlay */}
      <div className="absolute inset-0 bg-crt-lines opacity-30 z-20 pointer-events-none"></div>
      
      {/* CRT Screen Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-purple-500/10 z-10 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 z-30">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2"
        >
          <p className="text-cyan-400 font-semibold mb-2 glitch-text" data-text="Hello, I'm">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight crt-glow">
            S. Agathiyan
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-cyan-200"
          >
            <span className="crt-glow-text bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              Full Stack Developer
            </span> <span className="mx-2 crt-glow">|</span> 
            <span className="crt-glow-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              AI/ML Enthusiast
            </span>
          </motion.div>
          
          <p className="text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 crt-glow">
            I create seamless digital experiences with modern technologies, 
            specializing in building responsive web applications with cutting-edge tools.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contact"
              className="px-8 py-3 rounded crt-button crt-glow"
            >
              Hire Me
            </Button>
            
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<Download />}
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded border-2 crt-button-outline crt-glow"
            >
              Resume
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {['React', 'Node.js', 'Python', 'MongoDB', 'Java', 'TensorFlow'].map((tech) => (
              <motion.span 
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-black/30 px-4 py-2 rounded text-sm border border-cyan-500/30 crt-glow"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CRT Style Circular Profile Picture */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center md:w-1/2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* CRT Monitor Outer Bezels */}
            <div className="absolute -inset-8 bg-gray-800 rounded-full border-4 border-gray-700 shadow-2xl"></div>
            <div className="absolute -inset-4 bg-gray-900 rounded-full border-2 border-gray-600"></div>
            
            {/* CRT Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full blur-md"></div>
            
            {/* CRT Screen */}
            <div className="relative rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-inner crt-screen">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-crt-scanlines rounded-full z-10 pointer-events-none"></div>
              
              {/* Screen content */}
              <img 
                src="https://i.pinimg.com/736x/4f/2e/01/4f2e01c66e04c60eecc085861be24b3f.jpg" 
                alt="S. Agathiyan" 
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Screen flicker effect */}
              <div className="absolute inset-0 bg-white rounded-full opacity-0 animate-flicker pointer-events-none"></div>
            </div>
            
            {/* CRT Power Light */}
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-red-500 rounded-full crt-power-light shadow-lg"></div>
            
            {/* CRT Adjustments Knobs */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 shadow"></div>
              <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 shadow"></div>
              <div className="w-6 h-6 rounded-full bg-gray-700 border border-gray-600 shadow"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center crt-glow">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-crt-lines {
          background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 4px;
        }
        
        .bg-crt-scanlines {
          background-image: linear-gradient(to bottom, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 2px;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes flicker {
          0% { opacity: 0; }
          5% { opacity: 0.1; }
          10% { opacity: 0; }
          15% { opacity: 0.3; }
          20% { opacity: 0; }
          25% { opacity: 0.2; }
          30% { opacity: 0; }
          100% { opacity: 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-flicker {
          animation: flicker 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .crt-glow {
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.5);
        }
        
        .crt-glow-text {
          filter: drop-shadow(0 0 2px rgba(0, 255, 255, 0.7));
        }
        
        .crt-screen {
          box-shadow: 
            inset 0 0 10px rgba(0, 255, 255, 0.5),
            0 0 20px rgba(0, 255, 255, 0.3);
        }
        
        .crt-button {
          background: linear-gradient(to bottom, #1976d2, #0d47a1);
          border: 1px solid #42a5f5;
          box-shadow: 0 0 10px rgba(33, 150, 243, 0.7);
        }
        
        .crt-button-outline {
          border: 2px solid #ab47bc;
          box-shadow: 0 0 10px rgba(186, 104, 200, 0.7);
          color: #ce93d8;
        }
        
        .crt-power-light {
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
          animation: pulse 2s infinite;
        }
        
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-text::before {
          color: rgba(255, 0, 0, 0.8);
          z-index: -1;
          transform: translateX(2px);
        }
        
        .glitch-text::after {
          color: rgba(0, 0, 255, 0.8);
          z-index: -2;
          transform: translateX(-2px);
        }
        
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default Hero;