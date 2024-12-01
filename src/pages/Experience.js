import { motion } from 'framer-motion';
import { FaBriefcase, FaHandsHelping, FaMedal } from 'react-icons/fa';


const Experience = () => {
  const experiences = {
    professional: [
      {
        title: "Stage Développeur web",
        company: "C2S",
        period: "Février 2024 - Mars 2024",
        description: "Développement d'applications web complexes utilisant React, Node.js et des CMS. Dans une équipe de 4 développeurs.",
        technologies: ["React", "Node.js", "Wordpress", "Odoo", "git"]
      },
      {
        title: "Stage Concepteur d'application mobile",
        company: "Idelly",
        period: "Avril 2024 - Mai 2024",
        description: "Création d'interface utilisateur modernes et réactives. Création et gestion de base de données, équipe de 2 développeurs.",
        technologies: ["React native", "SQL", "Expo Go", "docker", "git"]
      }
    ],
    volunteer: [
      {
        title: "Voyage humanitaire à Saint-Louis(Sénégal)",
        organization: "Le tilleul",
        period: "Octobre 2022",
        description: "Forage de puits, distribution de médicaments, de matériel scolaire et sportifs."
      },
      {
        title: "Ambassadeur Next-u",
        organization: "Next-u",
        period: "2023-2024",
        description: "promouvoir l'école Next-u lors des salons et JPO ."
      }
    ],
    achievements: [
      {
        title: "Champion Régional crawl 50m",
        domain: "Compétition de Natation",
        year: "2020",
        description: "1ère place au 50m crawl, et participation à la finale nationale."
      },
      {
        title: "Certifications Openclassrooms",
        domain: "Front-end, Back-end, etc...",
        year: "2023-2024",
        description: "Diverses certifications front-end, back-end, comprenant des modules tel que : JavaScript, React, Python, Git, UI/UX etc..."
      },
      {
        title: "TOEIC via Global Exam (en cours)",
        domain: "Anglais",
        year: "2023-2024",
        description: "Certification en anglais professionnel validant un niveau B2"
      },
      {
        title: "Projet Voltaire (en cours)",
        domain: "Certification du niveau de Français",
        year: "2023-2024",
        description: "Niveau Excellence en orthographe et grammaire française"
      }
      
    ]
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* En-tête */}
      <motion.div
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mon Parcours
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Un aperçu de mon parcours professionnel, de mes engagements et de mes réalisations.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Expérience Professionnelle */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <FaBriefcase className="text-3xl text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold text-purple-400" >Expérience Professionnelle</h2>
          </div>
          
          <motion.div
            className="space-y-8"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.professional.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-purple-500"
                variants={itemVariants}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full" />
                <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-purple-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.company}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Expérience Bénévole */}
        <section className="mb-20">
          <div className="flex items-center mb-12">
            <FaHandsHelping className="text-3xl text-pink-400 mr-4" />
            <h2 className="text-3xl font-bold text-pink-400" >Engagement Bénévole</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.volunteer.map((vol, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{vol.title}</h3>
                <p className="text-purple-400 mb-2">{vol.organization}</p>
                <p className="text-gray-400 mb-2">{vol.period}</p>
                <p className="text-gray-300">{vol.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Réalisations */}
        <section>
          <div className="flex items-center mb-12">
            <FaMedal className="text-3xl text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-yellow-400" >Réalisations</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <span className="text-yellow-400">{achievement.year}</span>
                </div>
                <p className="text-purple-400 mb-2">{achievement.domain}</p>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Experience; 