import HomePage from "../components/Home";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Rohit Goswami - Software Engineer</title>
                <meta
                    name="description"
                    content="Rohit Goswami, a highly skilled software engineer specializing in web development, backend systems, and scalable solutions. Discover insights, projects, and expertise in building modern applications."
                />
                <meta
                    name="keywords"
                    content="Rohit Goswami, software engineer, software engineer in kaithal, web developer, backend developer, scalable solutions, modern applications, programming, coding, software development, technology, full-stack engineer, cloud solutions, API development"
                />
            </Head>
            <HomePage />
        </div>
    );
}
