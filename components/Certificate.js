import Image from "next/image";
import { motion } from "framer-motion";
import { HiExternalLink, HiBadgeCheck } from "react-icons/hi";

const Certificate = ({
    title,
    verifyLink,
    imageSrc,
    altText,
    description,
    skills,
}) => {
    const skillsArray = skills.split(', ');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group modern-card overflow-hidden hover:shadow-elegant transition-all duration-300"
        >
            <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center min-h-[300px] p-4">
                    <a
                        href={verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate: ${title}`}
                        className="block w-full max-w-md"
                    >
                        <Image
                            src={imageSrc}
                            alt={altText}
                            width={600}
                            height={480}
                            className="object-contain w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        />
                    </a>
                </div>

                {/* Hover overlay with verification link */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                        href={verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-neutral-900 hover:bg-white transition-colors duration-200"
                        aria-label="Verify certificate"
                    >
                        Verify
                        <HiExternalLink className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                        {title}
                    </h3>
                    <div className="flex items-center space-x-2 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                        <HiBadgeCheck className="w-5 h-5 text-primary-500" />
                    </div>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {skillsArray.map((skill, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-50 to-secondary-50 text-accent-700 border border-accent-200/50"
                        >
                            {skill.trim()}
                        </span>
                    ))}
                </div>

                <div className="pt-4 border-t border-neutral-200/50">
                    <a
                        href={verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                        View Certificate
                        <HiExternalLink className="ml-1 w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default Certificate;
