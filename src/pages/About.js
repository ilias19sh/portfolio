import { motion } from 'framer-motion';
import { FaCode, FaLaptop, FaGamepad, FaMusic } from 'react-icons/fa';
import { FaLaptopCode, FaGlobeAmericas, FaUserAstronaut } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';

const About = () => {
  const passions = [
    {
      title: "Technologies",
      icon: <FaLaptopCode className="text-3xl text-white" />,
      description: "Passionné par le développement web et les nouvelles technologies. Toujours en veille sur les dernières innovations.",
    },
    {
      title: "MMA",
      icon: <GiBoxingGlove className="text-3xl text-white" />,
      description: "Sport complet alliant technique, stratégie et dépassement de soi. Une discipline qui forge le corps et l'esprit.",
    },
    {
      title: "Voyages",
      icon: <FaGlobeAmericas className="text-3xl text-white" />,
      description: "Découvrir de nouvelles cultures, rencontrer des gens et élargir mes horizons à travers le monde.",
    },
    {
      title: "Astronomie",
      icon: <FaUserAstronaut className="text-3xl text-white" />,
      description: "Fasciné par l'exploration spatiale et les mystères de l'univers. Ce qui me passione le plus, c'est les trous noir.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Section Présentation */}
      <section className="py-20 px-4 md:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            À Propos de Moi
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Étudiant en deuxième année en informatique, passionné par le développement web et la création de projets. 
          Je combine mon envie d'apprendre avec des compétences techniques en constante évolution pour relever des défis ambitieux.
          </p>
        </motion.div>

        {/* Photo et Bio */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/path/to/your/photo.jpg"
                alt="Votre photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-3xl font-bold">Mon Parcours</h2>
            <p className="text-gray-300 leading-relaxed">
              Depuis mon plus jeune âge, je me suis toujours intéressé à la technologie et son potentiel pour améliorer notre quotidien. 
              Cet curiositée m'a naturellement conduit vers le développement web, où je peux combiner créativité et résolution de problèmes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Aujourd'hui, je souhaite me spécialiser dans le développement full stack, avec une affinité particulière pour les technologies modernes 
              comme React, Node.js ainsi que le management de projets.
            </p>
          </motion.div>
        </div>
      </section>

    <section className="py-20 px-4 relative">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-5xl font-blanka text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 pb-4">
          MES PASSIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passions.map((passion, index) => (
            <motion.div 
              key={passion.title}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/10"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500" />
              
              {/* Icône avec gradient personnalisé */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br ${passion.gradient} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
                {passion.icon}
              </div>

              <div className="mt-12 text-center relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {passion.title}
                </h3>
                <p className="text-gray-300/90 leading-relaxed">
                  {passion.description}
                </p>
              </div>

              {/* Effet de bordure brillante au survol */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default About; 