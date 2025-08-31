import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Certificate from "../components/Certificate";

const Certifications = () => {
    const certifications = [
        {
            title: "Introduction to Microsoft Azure Cloud Services",
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/5FQ7GIYV4S6Y",
            imageSrc: "/images/azure.jpg",
            altText: "Introduction to Microsoft Azure Cloud Services",
            description: "This Coursera certification verifies the successful completion of the 'Introduction to Microsoft Azure Cloud Services' course. The course covered fundamental cloud computing concepts, Microsoft Azure architecture, key services such as Virtual Machines, Storage, Networking, and Databases, as well as cost management strategies. It also introduced security, compliance, and deployment models within Azure.",
            skills: "Cloud Computing, Microsoft Azure, Virtual Machines, Azure Storage, Networking, Cost Management, Security & Compliance"
        },
        {
            title: "Object-Oriented Design",
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/BP6FAVQ2HAPP",
            imageSrc: "/images/objectoriented.jpg",
            altText: "Object-Oriented Design",
            description: "This Coursera certification verifies the successful completion of the 'Object-Oriented Design' course. The course covered core principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and abstraction. It also explored design patterns, UML diagrams, SOLID principles, and best practices for designing scalable and maintainable software systems.",
            skills: "Object-Oriented Programming, Design Patterns, UML, SOLID Principles, Software Architecture, Code Reusability"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-600/10 rounded-full blur-3xl animate-bounce-slow"></div>
            </div>

            <NextSeo
                title="Certifications | Rohit Goswami"
                description="Explore the certifications earned by Rohit Goswami, showcasing expertise in various technologies and frameworks."
                openGraph={{
                    title: "Certifications | Rohit Goswami",
                    description:
                        "Explore the certifications earned by Rohit Goswami, showcasing expertise in various technologies and frameworks.",
                    url: "https://rohitgoswami.com/certifications",
                }}
            />

            <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20" role="main" aria-label="Certifications showcase">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        My <span className="gradient-text">Certifications</span>
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Professional certifications that validate my expertise in cloud computing,
                        software design, and modern development practices.
                    </p>
                </motion.div>

                {/* Certifications List */}
                <div className="space-y-16 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Certificate {...cert} />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <div className="modern-card p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-neutral-900">Continuous Learning</h2>
                        <p className="text-neutral-600 mb-6">
                            I'm committed to staying current with the latest technologies and best practices.
                            These certifications represent my dedication to professional growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary">
                                Get In Touch
                            </a>
                            <a href="/projects" className="btn-secondary">
                                View My Work
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default Certifications;
