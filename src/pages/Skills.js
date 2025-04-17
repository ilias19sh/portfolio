import { motion } from 'framer-motion';
import { animationPageTransition } from '../components/context/AnimationPageTransition';
import { SiJavascript, SiNodedotjs, SiPython, SiDocker, SiGit, SiTailwindcss, SiNextdotjs, SiDjango } from 'react-icons/si';
import { FaLightbulb, FaBrain, FaUsers, FaChartLine, FaClock, FaSearchPlus, FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaDatabase, FaPhp } from 'react-icons/fa';


const Skills = () => {
  const hardSkills = [
    { name: 'React', icon: <FaReact />, level: 70, color: 'blue' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 75, color: 'yellow' },
    { name: 'Node.js', icon: <SiNodedotjs />, level: 70, color: 'green' },
    { name: 'Vue.js', icon: <FaVuejs />, level: 70, color: 'green' },
    { name: 'Python', icon: <SiPython />, level: 80, color: 'blue' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 70, color: 'blue' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 65, color: 'blue' },
    { name: 'Django', icon: <SiDjango />, level: 75, color: 'green' },
    { name: 'API REST', icon: <FaLightbulb />, level: 85, color: 'purple' },
    { name: 'React Native', icon: <FaReact />, level: 70, color: 'blue' },
    { name: 'Html', icon: <FaHtml5 />, level: 92, color: 'orange' },
    { name: 'Css', icon: <FaCss3Alt />, level: 88, color: 'blue' },
    { name: 'SQL', icon: <FaDatabase />, level: 85, color: 'pink' },
    { name: 'Php', icon: <FaPhp />, level: 55, color: 'blue' },
    { name: 'Docker', icon: <SiDocker />, level: 65, color: 'blue' },
    { name: 'Git', icon: <SiGit />, level: 80, color: 'orange' },

  ];

  const softSkills = [
    {
        icon: <FaUsers />,
        title: "Esprit d'équipe",
        description: "Investissement dans la collaboration et la communication au sein d'une équipe.",
        color: "blue"
      },
      {
        icon: <FaChartLine />,
        title: "Adaptabilité",
        description: "Capacité à s'adapter rapidement aux nouvelles technologies et situations.",
        color: "yellow"
      },
    {
      icon: <FaBrain />,
      title: "Résolution de problèmes",
      description: "Capacité à analyser et résoudre des problèmes complexes de manière efficace.",
      color: "purple"
    },
    {
      icon: <FaClock />,
      title: "Gestion du temps",
      description: "Organisation efficace et respect des délais dans la gestion de projets.",
      color: "green"
    },
    {
      icon: <FaLightbulb />,
      title: "Rigueur",
      description: "Attention aux détails et engagement pour un code propre et bien documenté",
      color: "pink"
    },
    {
      icon: <FaSearchPlus />,
      title: "Curiosité",
      description: "Veille technologique constante et soif d'apprentissage",
      color: "orange"
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
          Mes Compétences
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Un aperçu de mes compétences techniques et interpersonnelles.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Hard Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-600 mb-12 text-center">Compétences Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hardSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }} 
              >
                <div className="flex items-center mb-4">
                  <div className={`text-2xl mr-3 text-${skill.color}-400`}>{skill.icon}</div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="text-right mt-1 text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-600">Compétences Interpersonnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`text-3xl mb-4 text-${skill.color}-400`}>{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Skills; 