import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { indigo, deepOrange } from '@mui/material/colors';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Material-UI Dark Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: indigo,
    secondary: deepOrange,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
});

// Smooth scroll to top on route change
const scrollToTop = () => {
  scroll.scrollToTop();
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {/* Navbar (Bootstrap) */}
          <Navbar />

          {/* Main Content (Tailwind) */}
          <main className="pt-16"> {/* Offset for fixed navbar */}
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Education />
                    <Contact />
                  </>
                } 
              />
              {/* Add other routes if needed */}
            </Routes>
          </main>

          {/* Footer (MUI + Tailwind) */}
          <Footer />

          {/* Back-to-Top Button (MUI) */}
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            aria-label="Back to top"
          >
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
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;