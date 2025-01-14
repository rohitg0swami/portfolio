import { motion } from "framer-motion";
import Head from "next/head";
import { NextSeo } from "next-seo";

const About = () => {
    return (
        <div className="h-screen lg:pl-20 lg:pr-32">
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
            <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
                <div className="flex flex-col md:ml-20 px-10 mt-10">
                    <div className="flex flex-col md:flex-row">
                        <div className=" md:px-8 ">
                            <motion.div
                                className="md:w-96"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {
                                        scale: 0.8,
                                        opacity: 0,
                                    },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.4,
                                        },
                                    },
                                }}
                            >
                                <h1 className="text-3xl font-bold sm:text-4xl mb-8">
                                    Hello, I&#39;m{" "}
                                    <span className="text-yellow-600">
                                        Rohit
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {
                                        scale: 0.8,
                                        opacity: 0,
                                    },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: 1,
                                        },
                                    },
                                }}
                            >
                                <h2 className="font-bold text-3xl text-left mb-5">
                                    I&#39;m a
                                    <span className="text-yellow-600">
                                        {" "}
                                        FullStack Developer
                                    </span>{" "}
                                    with a passion for
                                    <span className="text-yellow-600">
                                        {" "}
                                        Cloud Computing
                                    </span>
                                    .
                                </h2>
                            </motion.div>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1.6,
                                    },
                                },
                            }}
                        >
                            <p className="text-left font-normal mb-5 flex-wrap"></p>
                            <p className="text-left font-normal mb-5 flex-wrap">
                                I am a highly motivated professional, known for
                                my proactive approach and strong communication
                                skills. I excel in meeting tight deadlines while
                                consistently delivering high-quality software
                                that adheres to CMMI standards. My strong
                                foundation in Database Analysis & Design,
                                coupled with a deep understanding of
                                Object-Oriented Programming, enables me to
                                design and implement scalable and maintainable
                                solutions.
                            </p>
                        </motion.div>
                    </div>
                    <div className="text-bold text-3xl mt-10">
                        {/* <Skills /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
