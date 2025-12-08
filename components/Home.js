import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { HiArrowRight, HiDownload } from "react-icons/hi";

const Home = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50/30 to-success-50/20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-800/10 to-primary-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-success-600/10 to-success-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-600/5 to-success-600/5 rounded-full blur-3xl animate-bounce-slow"></div>
            </div>

            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Rohit Goswami",
                            "jobTitle": "Software Engineer",
                            "description": "Crafting seamless digital experiences with expert coding on both sides of the spectrum.",
                            "url": "https://rohitgoswami.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/rohitgoswami",
                                "https://github.com/rohitgoswami"
                            ]
                        }`,
                    }}
                />
            </Head>

            <main id="main-content" className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20" role="main" aria-label="Welcome section">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-800/10 to-success-600/10 border border-primary-200 text-sm font-medium text-primary-800 mb-8">
                            👋 Welcome to my digital space
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-balance"
                    >
                        <span className="text-neutral-900">Hi, I'm </span>
                        <span className="gradient-text">Rohit Goswami</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-semibold mb-8 text-neutral-700"
                    >
                        Senior Software Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
                    >
                        Crafting seamless digital experiences with expert coding on both sides of the spectrum. 
                        Passionate about building scalable solutions and modern web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link href="/contact" className="btn-primary group">
                            Get In Touch
                            <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <Link href="/projects" className="btn-secondary group">
                            View My Work
                            <HiDownload className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        className="mt-16 flex justify-center"
                    >
                        <div className="animate-bounce">
                            <svg
                                className="w-6 h-6 text-neutral-400"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

export default Home;
