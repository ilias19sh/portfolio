import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navItems, currentPath }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-md z-50 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="p-5">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <nav className="mt-8">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={`block py-2 px-4 rounded-lg transition-colors ${
                          currentPath === item.path
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <div className="absolute bottom-8 left-0 w-full px-5">
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex justify-center space-x-6">
                    {/* Vous pouvez ajouter des icônes de réseaux sociaux ici */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 