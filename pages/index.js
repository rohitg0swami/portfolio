import HomePage from "../components/Home";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://rohitgoswami.com/#person",
        name: "Rohit Goswami",
        url: "https://rohitgoswami.com",
        image: "https://rohitgoswami.com/profile.jpg",
        jobTitle: "Full Stack Developer",
        description: "Crafting seamless digital experiences with expert coding on both sides of the spectrum.",
        worksFor: {
            "@type": "Organization",
            name: "Independent Developer"
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Kaithal",
            addressRegion: "Haryana",
            addressCountry: "IN"
        },
        sameAs: [
            "https://github.com/rohitgoswami",
            "https://linkedin.com/in/rohitgoswami"
        ],
        knowsAbout: [
            "Web Development",
            "Backend Systems",
            "Full Stack Development",
            "React",
            "Next.js",
            "Node.js",
            "JavaScript",
            "C#",
            ".NET Core"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://rohitgoswami.com/#website",
        url: "https://rohitgoswami.com",
        name: "Rohit Goswami Portfolio",
        description: "Full Stack Developer Portfolio showcasing projects and expertise",
        publisher: {
            "@id": "https://rohitgoswami.com/#person"
        },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://rohitgoswami.com/blog?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <div>
            <NextSeo
                title="Rohit Goswami - Software Engineer | Kaithal, India"
                description="Rohit Goswami is a software engineer specializing in web development, backend systems, and scalable solutions. Explore his portfolio, projects, and expertise."
                canonical="https://rohitgoswami.com"
                keywords="Rohit Goswami, software engineer, software engineer in Kaithal, web developer, backend developer, scalable solutions, modern applications, programming, coding, software development, technology, full-stack engineer, cloud solutions, API development"
                openGraph={{
                    title: "Rohit Goswami - Software Engineer",
                    description:
                        "Rohit Goswami is a software engineer specializing in web development, backend systems, and scalable solutions. Explore his portfolio, projects, and expertise.",
                    url: "https://rohitgoswami.com",
                    type: "website",
                    images: [
                        {
                            url: "https://rohitgoswami.com/og-image.png",
                            width: 1200,
                            height: 630,
                            alt: "Rohit Goswami - Full Stack Developer"
                        }
                    ]
                }}
                twitter={{
                    handle: "@rohitgoswami",
                    site: "@rohitgoswami",
                    cardType: "summary_large_image"
                }}
            />
            <Head>
                <meta httpEquiv="content-language" content="en-IN" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationSchema)
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteSchema)
                    }}
                />
            </Head>
            <HomePage />
        </div>
    );
}
