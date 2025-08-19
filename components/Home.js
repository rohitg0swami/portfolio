import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
    return (
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
                        delay: 0.6,
                    },
                },
            }}
        >
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

            <div className="flex px-4 md:py-32 mx-auto h-screen items-center">
                <div className="text-center mx-auto">
                    <h1 className="text-4xl text-black font-extrabold md:text-6xl">
                        Rohit Goswami
                    </h1>
                    <h1 className="text-4xl text-yellow-600 font-extrabold md:text-6xl">
                        Sr. Software Engineer
                    </h1>
                    <p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-black">
                        Crafting seamless digital experiences with expert coding
                        on both sides of the spectrum.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
                        <Link href="/contact">
                            <a className="px-12 py-3 text-sm font-medium text-culturedWhite bg-black rounded shadow active:bg-yellow-600  hover:bg-yellow-600 focus:outline-none focus:ring">
                                Contact Me
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
