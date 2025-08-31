import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { HiExternalLink, HiCode, HiSparkles } from "react-icons/hi";
import PropTypes from "prop-types";

/**
 * Creative Project Card Component with dynamic interactions
 */
const Project = ({
    title,
    link,
    imageSrc,
    altText,
    description,
    skills,
    index = 0,
    category = "web-app"
}) => {
    // Process skills array with better validation
    const skillsArray = Array.isArray(skills)
        ? skills
        : skills?.split(', ').filter(skill => skill.trim()) || [];

    // Motion values for creative interactions
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Creative animation variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -15,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const sparkleVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.8],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    // Creative color schemes based on category
    const colorSchemes = {
        "web-app": {
            gradient: "from-purple-500 via-pink-500 to-red-500",
            bgGradient: "from-purple-50 via-pink-50 to-red-50",
            darkBgGradient: "from-purple-900/20 via-pink-900/20 to-red-900/20"
        },
        "api": {
            gradient: "from-blue-500 via-cyan-500 to-teal-500",
            bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
            darkBgGradient: "from-blue-900/20 via-cyan-900/20 to-teal-900/20"
        },
        "mobile": {
            gradient: "from-green-500 via-emerald-500 to-teal-500",
            bgGradient: "from-green-50 via-emerald-50 to-teal-50",
            darkBgGradient: "from-green-900/20 via-emerald-900/20 to-teal-900/20"
        }
    };

    const colorScheme = colorSchemes[category] || colorSchemes["web-app"];

    return (
        <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
            }}
            className="group relative modern-card overflow-hidden transition-all duration-500 cursor-pointer"
            role="article"
            aria-labelledby={`project-title-${index}`}
        >
            {/* Creative Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.bgGradient} dark:${colorScheme.darkBgGradient} blur-xl`} />
                <div className={`absolute -inset-1 bg-gradient-to-r ${colorScheme.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rotate-45 opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-125" />

            {/* Sparkle Effects */}
            <motion.div
                variants={sparkleVariants}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
            >
                <HiSparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>

            {/* Main Content Container */}
            <div className="relative z-10 transform-gpu">
                {/* Image Section with Creative Overlay */}
                <div className="relative overflow-hidden rounded-t-2xl">
                    <div className={`aspect-w-16 aspect-h-9 bg-gradient-to-br ${colorScheme.bgGradient} dark:${colorScheme.darkBgGradient}`}>
                        <Image
                            src={imageSrc}
                            alt={altText || `Screenshot of ${title} project`}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                            loading={index < 2 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                        />
                    </div>

                    {/* Creative Overlay */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/95 backdrop-blur-lg text-neutral-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`View ${title} project (opens in new tab)`}
                            >
                                <HiExternalLink className="w-4 h-4" />
                                View Project
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                    {/* Creative Header */}
                    <header className="flex items-start justify-between mb-4">
                        <motion.h3
                            id={`project-title-${index}`}
                            className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                        >
                            {title}
                        </motion.h3>
                        <motion.div
                            className="flex items-center space-x-2 opacity-60 group-hover:opacity-100 transition-all duration-300"
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                            aria-hidden="true"
                        >
                            <HiCode className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                        </motion.div>
                    </header>

                    {/* Creative Description */}
                    <motion.p
                        className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 line-clamp-3"
                        whileHover={{ scale: 1.01 }}
                    >
                        {description}
                    </motion.p>

                    {/* Creative Skills Tags */}
                    {skillsArray.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                            {skillsArray.map((skill, skillIndex) => (
                                <motion.span
                                    key={`${skill}-${skillIndex}`}
                                    role="listitem"
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorScheme.gradient} text-white shadow-lg transform hover:scale-105 transition-all duration-200`}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                                >
                                    {skill.trim()}
                                </motion.span>
                            ))}
                        </div>
                    )}

                    {/* Creative Footer */}
                    <footer className="mt-6 pt-4 border-t border-gradient-to-r from-transparent via-neutral-200 to-transparent dark:from-transparent dark:via-neutral-700 dark:to-transparent">
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group/link"
                            whileHover={{ x: 5 }}
                            aria-label={`Learn more about ${title} (opens in new tab)`}
                        >
                            <span className="relative">
                                Learn more
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover/link:w-full transition-all duration-300" />
                            </span>
                            <HiExternalLink className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                        </motion.a>
                    </footer>
                </div>
            </div>
        </motion.article>
    );
};

// PropTypes for better type checking and documentation
Project.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string,
    description: PropTypes.string.isRequired,
    skills: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    index: PropTypes.number,
    category: PropTypes.oneOf(['web-app', 'api', 'mobile'])
};

Project.defaultProps = {
    altText: "",
    index: 0,
    category: "web-app"
};

export default Project;
