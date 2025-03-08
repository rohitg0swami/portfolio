import { NextSeo } from "next-seo";
import Project from "../components/Project";

const Projects = () => {
    return (
        <div className="h-screen mx-5 sm:mx-auto pt-32">
            <NextSeo
                title="Projects | Rohit Goswami"
                description="Explore the projects developed by Rohit Goswami, including Lottery Wheels App, Trust Management System, and more."
                openGraph={{
                    title: "Projects | Rohit Goswami",
                    description:
                        "Explore the projects developed by Rohit Goswami, including Lottery Wheels App, Trust Management System, and more.",
                    url: "https://rohitgoswami.com/projects",
                }}
            />

            <h1 className="font-bold text-3xl text-center mb-10">Projects</h1>
            <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
                {/* Lottery Wheels App */}
                <Project
                    title="Lottery Wheels App"
                    link="https://lotterywheelsapp.com/"
                    imageSrc="/images/projects/lottery.png" // Replace with the actual image path
                    altText="Lottery Wheels App"
                    description="Lottery Wheels App is a tool designed to help users increase their chances of winning in lottery systems. It allows users to optimize their number selections by generating wheeling systems. If you would like to learn more about this app or start using it, please visit the official website linked below."
                    skills="JavaScript, React, Node.js, HTML, CSS"
                />

                {/* Lottery Wheels Admin Panel */}
                <Project
                    title="Lottery Wheels Admin Panel"
                    link="https://admin.lotterywheelsapp.com/"
                    imageSrc="/images/projects/lotteryweb.png" // Replace with the actual image path
                    altText="Lottery Wheels Admin Panel"
                    description="The Lottery Wheels Admin Panel allows administrators to manage user data, monitor the lottery wheeling systems, and make updates to the app. It provides a centralized interface for overseeing the operation and performance of the Lottery Wheels system. Visit the admin panel below to access the management features."
                    skills="JavaScript, React, Node.js, HTML, CSS"
                />

                {/* Lottery Wheels API Documentation */}
                <Project
                    title="Lottery Wheels API Documentation"
                    link="/projects"
                    imageSrc="/images/projects/lotteryapi.png" // Replace with the actual image path
                    altText="Lottery Wheels API Documentation"
                    description="The Lottery Wheels API is a set of endpoints designed to power the app and its admin panel. The API is built using .NET Core 8, and it handles all interactions with the MySQL database for data storage and retrieval. To explore the full API, its endpoints, and their usage, you can visit the Swagger documentation linked below. The CI/CD pipeline ensures seamless deployment of the API updates."
                    skills=".NET Core 8, MySQL, Swagger, CI/CD Pipeline"
                />

                {/* Trust Management System */}
                <Project
                    title="Trust Management System"
                    link="http://bkgt.rohitgoswami.com/"
                    imageSrc="/images/projects/bkgtweb.png" // Replace with the actual image path
                    altText="Trust Management System"
                    description="The Trust Management System helps track and manage the record of contributions made by individual people and groups. It offers detailed reports on contribution tracking and helps manage the overall financial records of a trust or charitable organization. Built using React, the system provides a modern and responsive interface for handling trust contributions effectively."
                    skills="TypeScript, React, HTML, CSS"
                />

                {/* Trust Management API Documentation */}
                <Project
                    title="Trust Management API Documentation"
                    link="/projects"
                    imageSrc="/images/projects/bkgtapi.png" // Replace with the actual image path
                    altText="Trust Management API Documentation"
                    description="The Trust Management API provides a comprehensive set of endpoints for managing and tracking individual and group contributions. This API is built using .NET Core 8 and interacts with a MySQL database to store and manage data. The Swagger documentation offers detailed insights into the API's functionality, allowing developers to test and integrate the services. The CI/CD pipeline ensures that updates and deployments are handled efficiently."
                    skills=".NET Core 8, MySQL, Swagger, CI/CD Pipeline"
                />
            </div>
        </div>
    );
};

export default Projects;
