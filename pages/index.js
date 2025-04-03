import HomePage from "../components/Home";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <div>
            <NextSeo
                title="Rohit Goswami - Software Engineer | Kaithal, India"
                description="Rohit Goswami, a highly skilled software engineer specializing in web development, backend systems, and scalable solutions. Discover insights, projects, and expertise in building modern applications."
                keywords="Rohit Goswami, software engineer, software engineer in Kaithal, web developer, backend developer, scalable solutions, modern applications, programming, coding, software development, technology, full-stack engineer, cloud solutions, API development"
                openGraph={{
                    title: "Rohit Goswami - Software Engineer",
                    description:
                        "Rohit Goswami, a highly skilled software engineer specializing in web development, backend systems, and scalable solutions. Discover insights, projects, and expertise in building modern applications.",
                    url: "https://rohitgoswami.com",
                }}
            />
            <HomePage />
        </div>
    );
}
