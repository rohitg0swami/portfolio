import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaNode, FaReact, FaGithub, FaAws, FaDatabase, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSqlite, SiC, SiCplusplus, SiJavascript, SiTypescript } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            color: "primary",
            skills: [
                { name: "React", icon: FaReact, level: "Expert" },
                { name: "JavaScript", icon: SiJavascript, level: "Expert" },
                { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
                { name: "HTML5", icon: FaHtml5, level: "Expert" },
                { name: "CSS3", icon: FaCss3Alt, level: "Expert" },
            ]
        },
        {
            title: "Backend",
            color: "secondary",
            skills: [
                { name: "Node.js", icon: FaNode, level: "Expert" },
                { name: "Python", icon: FaPython, level: "Advanced" },
                { name: "MySQL", icon: SiMysql, level: "Advanced" },
                { name: "SQLite", icon: SiSqlite, level: "Intermediate" },
                { name: "MongoDB", icon: FaDatabase, level: "Intermediate" },
            ]
        },
        {
            title: "Tools & Others",
            color: "accent",
            skills: [
                { name: "Git/GitHub", icon: FaGithub, level: "Expert" },
                { name: "AWS", icon: FaAws, level: "Intermediate" },
                { name: "C", icon: SiC, level: "Intermediate" },
                { name: "C++", icon: SiCplusplus, level: "Intermediate" },
                { name: "Analytics", icon: FaCode, level: "Advanced" },
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const skillVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'bg-success-500';
            case 'Advanced': return 'bg-warning-500';
            case 'Intermediate': return 'bg-primary-500';
            default: return 'bg-neutral-500';
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full py-16"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={cardVariants}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Technologies and tools I use to bring ideas to life with clean, efficient, and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="modern-card p-8 h-full">
                                <div className="text-center mb-8">
                                    <h3 className={`text-2xl font-bold mb-2 text-${category.color}-600`}>
                                        {category.title}
                                    </h3>
                                    <div className={`w-16 h-1 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 mx-auto rounded-full`}></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={skillVariants}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group relative"
                                        >
                                            <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-soft cursor-pointer">
                                                <div className={`p-3 rounded-lg bg-gradient-to-br from-${category.color}-100 to-${category.color}-200 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                    <skill.icon className={`w-6 h-6 text-${category.color}-600`} />
                                                </div>
                                                <h4 className="font-semibold text-neutral-800 text-center text-sm mb-2">
                                                    {skill.name}
                                                </h4>
                                                <div className="flex items-center space-x-2">
                                                    <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></div>
                                                    <span className="text-xs text-neutral-600 font-medium">
                                                        {skill.level}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skill Proficiency Legend */}
                <motion.div
                    variants={cardVariants}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center space-x-6 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-soft">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-success-500"></div>
                            <span className="text-sm font-medium text-neutral-700">Expert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                            <span className="text-sm font-medium text-neutral-700">Advanced</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                            <span className="text-sm font-medium text-neutral-700">Intermediate</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Skills;
