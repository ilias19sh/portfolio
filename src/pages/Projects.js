import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { animationPageTransition } from '../components/context/AnimationPageTransition';

const Projects = () => {
  const projects = [
    {
      title: "Nextu App",
      description: "Application complète style réseau sociaux, comprenant le front-end, le back-end, la base de données, etc... et système d'authentification'",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "UML", "Vite"],
      image: "/Images/nextuapp.png", 
      githubLink: "https://github.com/ilias19sh/nextuapp",
      liveLink: "https://portfolio-ilias.vercel.app",
    },
    {
      title: "TemoinX",
      description: "Projet lors d'un code camp d'une semaine, une application qui permet de signaler via une carte interactive et de récupérer les statistiques en fonction de ces signalements. Système d'authentification",
      technologies: ["React.js", "Node.js", "PostgreSQL", "UML", "API Google Maps"],
      image: "/Images/code_camp.png", 
      githubLink: "https://github.com/ilias19sh/Code_camp",
      liveLink: "https://portfolio-ilias.vercel.app",
    },
    {
      title: "Usine connectée",
      description: "Projet de groupe, création d'une usine connectée en Arduino, avec une balance, un micro-onde, une interface de gestion, etc...",
      technologies: ["Arduino", "C++", "Strawberry"],
      image: "/Images/arduino.jpg", 
      githubLink: "https://github.com/ilias19sh/portfolio",
      liveLink: "https://portfolio-ilias.vercel.app",
    },
    {
      title: "App Django",
      description: "Projet réalisé lors de la piscine webtech en 1 semaine, cette application Django permet de répertorier des footballeurs ainsi que leurs clubs de foot.",
      technologies: ["Django", "Python"],
      image: "/Images/django.jpg", 
      githubLink: "https://github.com/ilias19sh/Projet_django",
      liveLink: "https://portfolio-ilias.vercel.app",
    },
    {
      title: "Portfolio Personnel",
      description: "Portfolio créé avec React et Tailwind CSS, présentant mes compétences et projets.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/Images/Portfolio.png", 
      githubLink: "https://github.com/votre-username/portfolio",
      liveLink: "https://portfolio-ilias.vercel.app",
    },
    {
        title: "Application de réservation pour évènement sportif",
        description: "Possibilité de réserver un billet en fonction de l'évènement sportif choisi, de le supprimer ou de modifier le nom du client.",
        technologies: ["Next.js", "Tailwind CSS", "LocalStorage"],
        image: "/Images/Vanilla.png",
        githubLink: "https://github.com/ilias19sh/projetjs11-2024",
        liveLink: "https://votre-ecommerce.com",
      },
    {
      title: "Application E-commerce",
      description: "Application de e-commerce visant à une vente de produits du FcBarcelone X Nike lors de mon voyage à Barcelone.",
      technologies: ["React", "Postgresql", "Directus", "Docker","API Stripe"],
      image: "/Images/Barcelone-projet.png",
      githubLink: "https://github.com/ilias19sh/Projet-Barcelone",
      liveLink: "https://votre-ecommerce.com",
    },
    {
        title: "Panier E-commerce faite en 1h",
        description: "Panier de e-commerce que j'ai fait en 1h pour mon évaluation finale à Barcelone",
        technologies: ["React, CSS"],
        image: "/Images/finaltask-barcelone.png",
        githubLink: "https://github.com/ilias19sh/Final_task_Ilias",
        liveLink: "https://votre-ecommerce.com",
      },
      {
        title: "Horloge avec plusieurs fonctionnalités.",
        description: "Application d'horloge avec plusieurs fonctionnalités comme le chronomètre, le minuteur et l'alarme.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "/Images/Horloge.png",
        githubLink: "https://github.com/ilias19sh/",
        liveLink: "https://votre-ecommerce.com",
      },
      {
        title: "Générateur de programme de musculation",
        description: "Projet en React que j'ai du rendre lors de ma période a Dublin. Plusieurs fonctionnalités comme le choix du sexe, du niveau, du but, du programme, etc.",
        technologies: ["React, CSS, JSON"],
        image: "/Images/Projet-fitjungle.png",
        githubLink: "https://github.com/gekikho/FitJungle",
        liveLink: "https://votre-ecommerce.com",
      },
      {
        title: "Jeu d'attaque one piece coup par coup",
        description: "Mon premier projet en React, un jeu d'attaque one piece avec comme fonctionnalités le choix du personnage, le choix de l'équipe adverse, et le choix des attaques.",
        technologies: ["React, CSS, JSON"],
        image: "/Images/projet-onepiece.png",
        githubLink: "https://github.com/ilias19sh/projet-react",
        liveLink: "https://votre-ecommerce.com",
      }
  ];

  return (
    <motion.div
      className="min-h-screen pt-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationPageTransition}
    >
      {/* En-tête */}
      <motion.div
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mes Projets
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Découvrez une sélection de mes projets dans l'ordre chronologique du plus récent au plus ancien.
        </p>
      </motion.div>

      {/* Grille de projets */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 