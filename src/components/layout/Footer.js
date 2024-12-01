import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ilias19sh' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/ilias-hanfaoui-a0a336293/' },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <motion.div
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              whileHover={{ scale: 1.05 }}
            >
              Ilias Hanfaoui
            </motion.div>
            <p className="text-gray-400">
              Étudiant passioné par la programmation et le développement web
            </p>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white" >Navigation Rapide</h3>
            <ul className="space-y-2">
              {['Accueil', 'À Propos', 'Expériences', 'Compétences', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white" >Me Contacter</h3>
            <p className="text-gray-400 mb-4">ilias.hanfaoui3@gmail.com</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-xl"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ilias Hanfaoui. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 