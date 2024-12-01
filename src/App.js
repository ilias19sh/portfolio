import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCircles = () => {
      circles.forEach(circle => {
        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = mouseX - centerX;
        const distY = mouseY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 150) {
          const angle = Math.atan2(distY, distX);
          const force = (150 - distance) / 150;
          
          const moveX = Math.cos(angle) * force * -50;
          const moveY = Math.sin(angle) * force * -50;

          circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          circle.style.transform = '';
        }
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-all duration-300 overflow-hidden">
          <div className="circles">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="circle" style={{ '--i': i }}></div>
            ))}
          </div>
          <div className="relative z-10">
            <Navbar />
            <AppRoutes />
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;