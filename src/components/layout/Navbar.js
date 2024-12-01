import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { title: 'Accueil', path: '/' },
    { title: 'À Propos', path: '/about' },
    { title: 'Expériences', path: '/experience' },
    { title: 'Compétences', path: '/skills' },
    { title: 'Projets', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/">
            <motion.div
              className="text-3xl font-blanka mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
                IH
              </motion.div>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`relative px-3 py-2 ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.title}
                    {location.pathname === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                        layoutId="navbar-underline"
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-around"
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <span className="w-full h-0.5 bg-current transform transition-transform" />
                <span className="w-full h-0.5 bg-current transform transition-transform" />
                <span className="w-full h-0.5 bg-current transform transition-transform" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        currentPath={location.pathname}
      />
    </>
  );
};

export default Navbar; 