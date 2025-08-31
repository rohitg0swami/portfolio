import { motion } from "framer-motion";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { HiCode, HiCloud, HiDatabase, HiCog } from "react-icons/hi";
import {
    SiDotnet,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiDocker,
    SiMicrosoftazure,
} from "react-icons/si";

import { TbCloudComputing } from "react-icons/tb";

const About = () => {
    const skills = [
        { name: "C#", icon: SiDotnet, level: 95 },
        { name: "JavaScript", icon: SiJavascript, level: 95 },
        { name: "React", icon: SiReact, level: 90 },
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Python", icon: SiPython, level: 80 },
        { name: "Docker", icon: SiDocker, level: 75 },
        { name: "Azure", icon: TbCloudComputing, level: 70 },
    ];

    const highlights = [
        {
            icon: HiCode,
            title: "Full-Stack Development",
            description:
                "Expertise in both frontend and backend technologies, creating seamless end-to-end solutions.",
        },
        {
            icon: HiCloud,
            title: "Cloud Computing",
            description:
                "Proficient in cloud platforms and services, designing scalable cloud-native applications.",
        },
        {
            icon: HiDatabase,
            title: "Database Design",
            description:
                "Strong foundation in database analysis, design, and optimization for high-performance applications.",
        },
        {
            icon: HiCog,
            title: "System Architecture",
            description:
                "Experience in designing and implementing scalable, maintainable software architectures.",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div
                    className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-600/20 rounded-full blur-3xl animate-pulse-slow"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-600/10 rounded-full blur-3xl animate-bounce-slow"></div>
            </div>
            <NextSeo
                title="About Me | Rohit Goswami"
                description="Learn more about Rohit Goswami, a passionate developer and creator."
                openGraph={{
                    title: "About Me | Rohit Goswami",
                    description:
                        "Learn more about Rohit Goswami, a passionate developer and creator.",
                    url: "https://rohitgoswami.com/about",
                }}
            />
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Rohit Goswami",
                            "jobTitle": "FullStack Developer",
                            "description": "I am a highly motivated professional with expertise in Cloud Computing, Database Analysis & Design, and Object-Oriented Programming. I specialize in designing and implementing scalable solutions.",
                            "url": "https://rohitgoswami.com/about",
                            "sameAs": [
                                "https://www.linkedin.com/in/rohitgoswami",
                                "https://github.com/rohitgoswami"
                            ]
                        }`,
                    }}
                />
            </Head>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Hello, I'm <span className="gradient-text">Rohit</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
                        I'm a{" "}
                        <span className="text-primary-600 font-semibold">
                            FullStack Developer
                        </span>{" "}
                        with a passion for{" "}
                        <span className="text-secondary-600 font-semibold">
                            Cloud Computing
                        </span>
                    </p>
                </motion.div>

                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="modern-card p-8">
                            <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                                My Story
                            </h2>
                            <p className="text-neutral-700 leading-relaxed mb-4">
                                I am a highly motivated professional, known for
                                my proactive approach and strong communication
                                skills. I excel in meeting tight deadlines while
                                consistently delivering high-quality software
                                that adheres to CMMI standards.
                            </p>
                            <p className="text-neutral-700 leading-relaxed">
                                My strong foundation in Database Analysis &
                                Design, coupled with a deep understanding of
                                Object-Oriented Programming, enables me to
                                design and implement scalable and maintainable
                                solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="modern-card p-8">
                            <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                                Technical Skills
                            </h2>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.6 + index * 0.1,
                                        }}
                                        className="flex items-center space-x-4"
                                    >
                                        <skill.icon className="w-6 h-6 text-primary-600" />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-neutral-700">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-neutral-500">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-neutral-200 rounded-full h-2">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.8 + index * 0.1,
                                                        duration: 0.8,
                                                    }}
                                                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                        What I Do Best
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-center"
                >
                    <div className="modern-card p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                            Let's Work Together
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            I'm always interested in new opportunities and
                            challenging projects. Let's discuss how we can bring
                            your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary">
                                Get In Touch
                            </a>
                            <a href="/projects" className="btn-secondary">
                                View My Projects
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
