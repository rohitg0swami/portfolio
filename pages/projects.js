import { NextSeo } from "next-seo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useMemo, useEffect, useRef } from "react";
import Project from "../components/Project";
import {
    HiSearch,
    HiFilter,
    HiSparkles,
    HiCube,
    HiLightningBolt,
} from "react-icons/hi";

// Project data - could be moved to a separate data file for better organization
const PROJECTS_DATA = [
    {
        id: "lottery-wheels-app",
        title: "Lottery Wheels App",
        link: "https://lotterywheelsapp.com/",
        imageSrc: "/images/projects/lottery.png",
        altText:
            "Lottery Wheels App - A tool for optimizing lottery number selections",
        description:
            "Lottery Wheels App is a comprehensive tool designed to help users increase their chances of winning in lottery systems. It allows users to optimize their number selections by generating sophisticated wheeling systems based on mathematical algorithms.",
        skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
        category: "web-app",
        featured: true,
    },
    {
        id: "lottery-admin-panel",
        title: "Lottery Wheels Admin Panel",
        link: "https://admin.lotterywheelsapp.com/",
        imageSrc: "/images/projects/lotteryweb.png",
        altText:
            "Lottery Wheels Admin Panel - Management interface for lottery system",
        description:
            "The Lottery Wheels Admin Panel provides administrators with a powerful centralized interface to manage user data, monitor lottery wheeling systems performance, and make real-time updates to the application.",
        skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
        category: "web-app",
        featured: false,
    },
    {
        id: "lottery-api",
        title: "Lottery Wheels API",
        link: "/projects",
        imageSrc: "/images/projects/lotteryapi.png",
        altText:
            "Lottery Wheels API Documentation - Backend API for lottery system",
        description:
            "A robust REST API built with .NET Core 8 that powers the Lottery Wheels application. Features comprehensive endpoints for data management, user authentication, and lottery system operations with MySQL database integration.",
        skills: [".NET Core 8", "MySQL", "Swagger", "CI/CD Pipeline"],
        category: "api",
        featured: false,
    },
    {
        id: "trust-management-system",
        title: "Trust Management System",
        link: "http://bkgt.rohitgoswami.com/",
        imageSrc: "/images/projects/bkgtweb.png",
        altText:
            "Trust Management System - Financial tracking for charitable organizations",
        description:
            "A comprehensive system for tracking and managing contributions from individuals and groups. Provides detailed financial reporting, contribution analytics, and streamlined management for trust and charitable organizations.",
        skills: ["TypeScript", "React", "HTML", "CSS"],
        category: "web-app",
        featured: true,
    },
    {
        id: "trust-api",
        title: "Trust Management API",
        link: "/projects",
        imageSrc: "/images/projects/bkgtapi.png",
        altText:
            "Trust Management API - Backend for contribution tracking system",
        description:
            "A scalable API built with .NET Core 8 for managing trust contributions and financial records. Features secure data handling, comprehensive reporting endpoints, and seamless integration with MySQL database.",
        skills: [".NET Core 8", "MySQL", "Swagger", "CI/CD Pipeline"],
        category: "api",
        featured: false,
    },
];

// Animation variants for better performance
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

// Floating particles component
const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-sm"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        x: [0, Math.random() * 200 - 100, 0],
                        y: [0, Math.random() * 200 - 100, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [gridLayout, setGridLayout] = useState("grid"); // grid, masonry, diagonal
    const containerRef = useRef(null);

    // Scroll-based animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

    // Filter and search projects
    const filteredProjects = useMemo(() => {
        return PROJECTS_DATA.filter((project) => {
            const matchesCategory =
                selectedCategory === "all" ||
                project.category === selectedCategory;
            const matchesSearch =
                !searchTerm ||
                project.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                project.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                project.skills.some((skill) =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    // Get unique categories with creative names
    const categories = useMemo(() => {
        const cats = [
            ...new Set(PROJECTS_DATA.map((project) => project.category)),
        ];
        return [
            {
                id: "all",
                name: "All Projects",
                icon: HiSparkles,
                color: "from-purple-500 to-pink-500",
            },
            ...cats.map((cat) => ({
                id: cat,
                name: cat
                    .replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase()),
                icon: cat === "web-app" ? HiCube : HiLightningBolt,
                color:
                    cat === "web-app"
                        ? "from-purple-500 to-pink-500"
                        : "from-blue-500 to-cyan-500",
            })),
        ];
    }, []);

    // Creative layout variants
    const getGridVariants = (layout) => {
        switch (layout) {
            case "masonry":
                return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr";
            case "diagonal":
                return "flex flex-col items-center gap-16";
            default:
                return "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8";
        }
    };

    // Structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects | Rohit Goswami",
        description:
            "Explore the creative projects developed by Rohit Goswami, showcasing innovative full-stack development solutions.",
        url: "https://rohitgoswami.com/projects",
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: PROJECTS_DATA.length,
            itemListElement: PROJECTS_DATA.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "SoftwareApplication",
                    name: project.title,
                    description: project.description,
                    url: project.link,
                    applicationCategory: project.category,
                    operatingSystem: "Web Browser",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                    },
                },
            })),
        },
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30"
        >
            {/* Creative Background Effects */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ y: backgroundY, opacity }}
            >
                {/* Animated gradient orbs */}
                <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl animate-bounce"></div>
                <div
                    className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "4s" }}
                ></div>

                {/* Geometric patterns */}
                <div className="absolute top-20 left-20 w-32 h-32 border-2 border-purple-300/20 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rotate-12 animate-pulse"></div>
                <div
                    className="absolute top-1/2 left-10 w-16 h-16 border border-pink-300/30 rounded-full animate-ping"
                    style={{ animationDelay: "1s" }}
                ></div>
            </motion.div>

            {/* Floating Particles */}
            <FloatingParticles />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <NextSeo
                title="Creative Projects | Rohit Goswami"
                description="Explore innovative and creative projects by Rohit Goswami. From interactive web applications to cutting-edge APIs, discover the artistry in code."
                openGraph={{
                    title: "Creative Projects | Rohit Goswami",
                    description:
                        "Explore innovative and creative projects by Rohit Goswami. From interactive web applications to cutting-edge APIs, discover the artistry in code.",
                    url: "https://rohitgoswami.com/projects",
                    type: "website",
                    images: [
                        {
                            url: "/images/projects/lottery.png",
                            width: 1200,
                            height: 630,
                            alt: "Creative Projects Showcase",
                        },
                    ],
                }}
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "creative portfolio, interactive projects, full-stack developer, React, Node.js, .NET Core, innovative web development",
                    },
                ]}
            />

            <main
                id="main-content"
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20"
                role="main"
                aria-label="Creative Projects showcase"
            >
                {/* Creative Header */}
                <motion.header
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.5,
                            type: "spring",
                            stiffness: 200,
                        }}
                        className="inline-block mb-6"
                    >
                        <div className="relative">
                            <HiSparkles className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                            Creative
                        </span>
                        <br />
                        <span className="text-neutral-900">Projects</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Where{" "}
                        <span className="font-semibold text-purple-600">
                            creativity
                        </span>{" "}
                        meets
                        <span className="font-semibold text-pink-600">
                            {" "}
                            technology
                        </span>{" "}
                        - explore my journey of transforming ideas into digital
                        experiences
                    </motion.p>
                </motion.header>

                {/* Creative Search & Filter Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-16"
                >
                    <div className="max-w-4xl mx-auto">
                        {/* Search Bar */}
                        <motion.div
                            className={`relative mb-8 transition-all duration-300 ${isSearchFocused ? "scale-105" : "scale-100"}`}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative">
                                <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input
                                    type="text"
                                    placeholder="Search creative projects..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className="w-full pl-12 pr-6 py-4 text-lg rounded-2xl border-2 border-neutral-200 bg-white/80 backdrop-blur-lg text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 shadow-lg"
                                    aria-label="Search creative projects"
                                />
                                {searchTerm && (
                                    <motion.button
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        onClick={() => setSearchTerm("")}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-neutral-300 rounded-full flex items-center justify-center hover:bg-neutral-400 transition-colors"
                                        aria-label="Clear search"
                                    >
                                        ×
                                    </motion.button>
                                )}
                            </div>
                            {isSearchFocused && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl -z-10"
                                />
                            )}
                        </motion.div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {categories.map((category, index) => {
                                const IconComponent = category.icon;
                                return (
                                    <motion.button
                                        key={category.id}
                                        onClick={() =>
                                            setSelectedCategory(category.id)
                                        }
                                        className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                                            selectedCategory === category.id
                                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl scale-105"
                                                : "bg-white/80 backdrop-blur-lg text-neutral-700 hover:bg-white shadow-lg hover:scale-105"
                                        }`}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        aria-pressed={
                                            selectedCategory === category.id
                                        }
                                    >
                                        <IconComponent className="w-4 h-4" />
                                        {category.name}
                                        {selectedCategory === category.id && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Layout Toggle */}
                        <motion.div
                            className="flex justify-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {[
                                { id: "grid", name: "Grid", icon: "⊞" },
                                { id: "masonry", name: "Masonry", icon: "⊟" },
                                { id: "diagonal", name: "Diagonal", icon: "⋰" },
                            ].map((layout) => (
                                <motion.button
                                    key={layout.id}
                                    onClick={() => setGridLayout(layout.id)}
                                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                                        gridLayout === layout.id
                                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                                            : "bg-white/60 backdrop-blur-lg text-neutral-600 hover:bg-white/80"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="mr-2">{layout.icon}</span>
                                    {layout.name}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Creative Projects Grid */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mb-20"
                    aria-label={`Showing ${filteredProjects.length} creative project${filteredProjects.length !== 1 ? "s" : ""}`}
                >
                    {filteredProjects.length > 0 ? (
                        <div className={getGridVariants(gridLayout)}>
                            {filteredProjects.map((project, index) => {
                                if (gridLayout === "diagonal") {
                                    const isEven = index % 2 === 0;
                                    return (
                                        <motion.div
                                            key={project.id}
                                            initial={{
                                                opacity: 0,
                                                x: isEven ? -100 : 100,
                                                rotate: isEven ? -5 : 5,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                rotate: 0,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                delay: index * 0.2,
                                                type: "spring",
                                                stiffness: 100,
                                            }}
                                            className={`w-full max-w-2xl ${isEven ? "self-start" : "self-end"}`}
                                        >
                                            <Project
                                                {...project}
                                                index={index}
                                                category={project.category}
                                            />
                                        </motion.div>
                                    );
                                }

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{
                                            opacity: 0,
                                            y: 50,
                                            scale: 0.9,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100,
                                        }}
                                        className={
                                            gridLayout === "masonry"
                                                ? "break-inside-avoid"
                                                : ""
                                        }
                                    >
                                        <Project
                                            {...project}
                                            index={index}
                                            category={project.category}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                                className="text-8xl mb-6"
                            >
                                🎨
                            </motion.div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                No Creative Projects Found
                            </h3>
                            <p className="text-neutral-600 text-lg">
                                Try adjusting your search or explore different
                                categories to discover amazing projects!
                            </p>
                        </motion.div>
                    )}
                </motion.section>

                {/* Creative Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="text-center"
                >
                    <div className="relative max-w-4xl mx-auto">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-3xl transform rotate-1"></div>

                        <div className="relative modern-card p-12 rounded-3xl overflow-hidden">
                            {/* Animated background elements */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                                <div
                                    className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse"
                                    style={{ animationDelay: "2s" }}
                                ></div>
                            </div>

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 1.8,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                            >
                                <HiSparkles className="w-16 h-16 text-purple-500 mx-auto mb-6 animate-pulse" />
                            </motion.div>

                            <motion.h2
                                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 }}
                            >
                                Ready to Create Something Amazing?
                            </motion.h2>

                            <motion.p
                                className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8 }}
                            >
                                Let's collaborate and bring your creative vision
                                to life with cutting-edge technology and
                                innovative design.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-6 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 }}
                            >
                                <motion.a
                                    href="/contact"
                                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Start creating amazing projects together"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <HiLightningBolt className="w-5 h-5" />
                                        Start Creating
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.a>

                                <motion.a
                                    href="/about"
                                    className="group px-8 py-4 bg-white/80 backdrop-blur-lg text-neutral-900 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="Learn more about my creative journey"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <HiCube className="w-5 h-5" />
                                        Learn More
                                    </span>
                                </motion.a>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    );
};

export default Projects;
