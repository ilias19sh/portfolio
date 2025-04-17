import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowDown, FaChevronLeft, FaChevronRight, FaPlane, FaHeart } from 'react-icons/fa';
import { animationPageTransition } from '../components/context/AnimationPageTransition';
import SectionTransition from '../components/shared/SectionTransition';
import { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Mission Humanitaire - Sénégal",
      date: "Octobre 2022",
      description: "Participation à un projet de construction d'école et formation en informatique pour les jeunes",
      image: '/Images/voyage-senegal.png',
      type: "humanitaire",
    },
    {
      title: "Formation Front-End - Dublin",
      date: "Novembre 2023",
      description: "Formation avancée en Html, Css et JavaScript chez un campus partenaire",
      image: "/Images/Dublin.jpg",
      type: "professionnel",
    },
    {
      title: "Formation E-commerce - Barcelone",
      date: "Octobre 2024",
      description: "Formation en React chez un campus partenaire et visites d'entreprises",
      image: "/Images/Barcelone.JPG",
      type: "professionnel",
    },
    {
      title: "Formation jeu vidéo - Toronto (à venir)",
      date: "Avril-Mai 2026",
      description: "Formation en Unity et C# chez un campus partenaire",
      image: "/Images/Toronto.avif",
      type: "professionnel",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <motion.div 
      className="min-h-screen pt-20 text-gray-800 dark:text-white transition-colors duration-300"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationPageTransition}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 ">
        {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center overflow-hidden">
          {/* Fond animé */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-pink-600/30 mix-blend-multiply" />
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="absolute inset-0 bg-[url('/path/to/your/background.jpg')] bg-cover bg-center opacity-20" />
            </motion.div>
          </div>

          {/* Contenu principal */}
          <div className="relative z-10 text-center space-y-8">
            <motion.h1
              className="text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                ILIAS HANFAOUI
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Étudiant en vue du titre de concepteur développeur d'applications (RNCP6)
            </motion.p>

            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/Projects')}
              >
                Voir mes projets
              </motion.button>
              <motion.a
                className="px-8 py-3 border border-purple-500 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/CV-ilias2025.pdf"
                download
              >
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown className="text-2xl text-gray-400" />
          </motion.div>
        </section>
        
        {/* Featured Section */}
        <SectionTransition>
          <section className="py-20 px-4">
 <div className="max-w-6xl mx-auto">
   <h2 className="text-4xl font-blanka text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
     MES VOYAGES
   </h2>
    {/* Carrousel */}
   <div className="relative">
     <div className="overflow-hidden rounded-xl">
       <motion.div 
         className="flex"
         animate={{ x: currentSlide * -100 + '%' }}
         transition={{ type: "spring", stiffness: 300, damping: 30 }}
       >
         {slides.map((slide, index) => (
           <div key={index} className="w-full flex-shrink-0">
             <div className="relative h-[500px] group">
               <img 
                 src={slide.image} 
                 alt={slide.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                   <div className="flex items-center gap-2 mb-3">
                     {slide.type === 'humanitaire' ? (
                       <FaHeart className="text-pink-500" />
                     ) : (
                       <FaPlane className="text-blue-500" />
                     )}
                     <span className="text-sm text-white/80">{slide.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                   <p className="text-white/80">{slide.description}</p>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </motion.div>
     </div>
      {/* Boutons de navigation */}
     <button 
       onClick={prevSlide}
       className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white transition-all"
     >
       <FaChevronLeft />
     </button>
     <button 
       onClick={nextSlide}
       className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 rounded-full text-white transition-all"
     >
       <FaChevronRight />
     </button>
      {/* Indicateurs */}
     <div className="flex justify-center gap-2 mt-4">
       {slides.map((_, index) => (
         <button
           key={index}
           onClick={() => setCurrentSlide(index)}
           className={`w-3 h-3 rounded-full transition-all ${
             currentSlide === index 
               ? 'bg-purple-500 w-6' 
               : 'bg-gray-400 hover:bg-gray-600'
           }`}
         />
       ))}
     </div>
   </div>
 </div>
</section>
        </SectionTransition>

        {/* Autres sections avec des délais différents */}
        <SectionTransition delay={0.2}>
          {/* ... */}
        </SectionTransition>
      </div>

    </motion.div>
    
  );
  
};


export default Home; 