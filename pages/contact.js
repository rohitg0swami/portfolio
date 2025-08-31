import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiExternalLink, HiArrowRight, HiCheckCircle, HiPaperAirplane } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import * as yup from "yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { NextSeo } from "next-seo";

const contactSchema = yup.object({
    name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(contactSchema),
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const submitForm = async (data) => {
        setIsLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "2c60b403-a092-41a6-a3bb-309ea6e5544d",
                    name: data.name,
                    email: data.email,
                    message: data.message,
                }),
            });
            const result = await response.json();
            
            if (result.success) {
                setSubmitted(true);
                reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            // Handle error state here if needed
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-accent-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-400/10 to-accent-600/10 rounded-full blur-3xl animate-bounce-slow"></div>
            </div>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4054073151944400"
                    crossOrigin="anonymous"
                ></script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "How can I contact Rohit Goswami?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "You can contact me via email at rohitgoswamigi@gmail.com or through LinkedIn.",
                                    },
                                },
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "mainEntityOfPage": "https://rohitgoswami.com/contact",
                            "url": "https://rohitgoswami.com/contact",
                            "name": "Contact Rohit Goswami",
                            "description": "Reach out to Rohit Goswami for inquiries, collaborations, or any questions. Contact via email, LinkedIn, or phone.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+91-97299-72493",
                                "contactType": "Customer Service",
                                "areaServed": "Global",
                                "availableLanguage": "English"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/rohitgoswami",
                                "https://github.com/rohitgoswami",
                                "mailto:rohitgoswamigi@gmail.com"
                            ]
                        }`,
                    }}
                />
            </Head>
            <NextSeo
                title="Contact | Rohit Goswami"
                description="Reach out to Rohit Goswami for inquiries, collaborations, or any questions. Contact via email, LinkedIn, or phone."
                openGraph={{
                    title: "Contact | Rohit Goswami",
                    description:
                        "Reach out to Rohit Goswami for inquiries, collaborations, or any questions. Contact via email, LinkedIn, or phone.",
                    url: "https://rohitgoswami.com/contact",
                }}
            />
            
            <main id="main-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-20" role="main" aria-label="Contact page">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                        Let's <span className="gradient-text">Connect</span>
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="lg:col-span-1 space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="modern-card p-8">
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Get in Touch</h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <HiMail className="w-6 h-6 text-primary-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-500">Email</p>
                                        <a
                                            href="mailto:rohitgoswamigi@gmail.com"
                                            className="text-neutral-900 hover:text-accent-600 transition-colors duration-200"
                                        >
                                            rohitgoswamigi@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <HiPhone className="w-6 h-6 text-primary-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-500">Phone/WhatsApp</p>
                                        <a
                                            href="tel:+919729972493"
                                            className="text-neutral-900 hover:text-accent-600 transition-colors duration-200"
                                        >
                                            +91 9729972493
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <HiLocationMarker className="w-6 h-6 text-primary-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-500">Location</p>
                                        <p className="text-neutral-900">India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-neutral-200/50">
                                <p className="text-sm font-medium text-neutral-500 mb-4">Follow me</p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/rohit-goswami-55867219a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-200 hover:scale-105 transition-all duration-200"
                                        aria-label="Visit LinkedIn profile"
                                    >
                                        <FaLinkedin className="w-6 h-6 text-primary-600" />
                                    </a>
                                    <a
                                        href="https://github.com/rohitgoswami"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center hover:bg-primary-200 hover:scale-105 transition-all duration-200"
                                        aria-label="Visit GitHub profile"
                                    >
                                        <FaGithub className="w-6 h-6 text-primary-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="modern-card p-8">
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Send me a message</h2>
                            
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <HiCheckCircle className="w-10 h-10 text-primary-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Message Sent!</h3>
                                    <p className="text-neutral-600 mb-6">Thank you for your message. I'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-ghost"
                                    >
                                        Send another message
                                        <HiArrowRight className="ml-2 w-4 h-4 text-primary-600" />
                                    </button>
                                </motion.div>
                            ) : (
                                <form
                                    ref={form}
                                    onSubmit={handleSubmit(submitForm)}
                                    className="space-y-6"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-3">
                                                Name *
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:shadow-soft ${
                                                    errors.name ? 'border-red-300 bg-red-50' : 'border-neutral-200 hover:border-neutral-300'
                                                }`}
                                                placeholder="Your full name"
                                                {...register("name")}
                                                aria-describedby={errors.name ? "name-error" : undefined}
                                            />
                                            {errors.name && (
                                                <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-3">
                                                Email *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:shadow-soft ${
                                                    errors.email ? 'border-red-300 bg-red-50' : 'border-neutral-200 hover:border-neutral-300'
                                                }`}
                                                placeholder="your.email@example.com"
                                                {...register("email")}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                            />
                                            {errors.email && (
                                                <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                    >
                                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-3">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none hover:shadow-soft ${
                                                errors.message ? 'border-red-300 bg-red-50' : 'border-neutral-200 hover:border-neutral-300'
                                            }`}
                                            placeholder="Tell me about your project or just say hello..."
                                            {...register("message")}
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                        />
                                        {errors.message && (
                                            <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                                        )}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                        className="pt-2"
                                    >
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || isLoading}
                                            className="btn-primary group"
                                            aria-describedby="submit-button-description"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <HiPaperAirplane className="ml-2 w-5 h-5 text-primary-600 transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>
                                        <p id="submit-button-description" className="sr-only">
                                            Submit the contact form to send a message
                                        </p>
                                    </motion.div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
