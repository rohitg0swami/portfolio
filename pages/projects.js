import { NextSeo } from "next-seo";

const projects = () => {
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

            <h1 className="font-bold text-3xl text-center"></h1>
            <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
                <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
                    <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                        Lottery Wheels App
                    </h1>
                    <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                        <div className="aspect-w-5 aspect-h-3">
                            <a
                                href="https://lotterywheelsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-yellow-600">
                                    Visit Lottery Wheels App
                                </div>
                            </a>
                        </div>
                        <blockquote className="sm:col-span-2">
                            <p className="text-xs md:text-base">
                                Lottery Wheels App is a tool designed to help
                                users increase their chances of winning in
                                lottery systems. It allows users to optimize
                                their number selections by generating wheeling
                                systems. If you would like to learn more about
                                this app or start using it, please visit the
                                official website linked below.
                            </p>
                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                                    JavaScript, React, Node.js, HTML, CSS
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>
                <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
                    <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                        Lottery Wheels Admin Panel
                    </h1>
                    <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                        <div className="aspect-w-5 aspect-h-3">
                            <a
                                href="https://admin.lotterywheelsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-yellow-600">
                                    Visit Lottery Wheels Admin Panel
                                </div>
                            </a>
                        </div>
                        <blockquote className="sm:col-span-2">
                            <p className="text-xs md:text-base">
                                The Lottery Wheels Admin Panel allows
                                administrators to manage user data, monitor the
                                lottery wheeling systems, and make updates to
                                the app. It provides a centralized interface for
                                overseeing the operation and performance of the
                                Lottery Wheels system. Visit the admin panel
                                below to access the management features.
                            </p>
                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                                    JavaScript, React, Node.js, HTML, CSS
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>
                <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
                    <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                        Lottery Wheels API Documentation
                    </h1>
                    <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                        <div className="aspect-w-5 aspect-h-3">
                            <a
                                href="https://api.lotterywheelsapp.com/swagger/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-yellow-600">
                                    Visit Lottery Wheels API Documentation
                                </div>
                            </a>
                        </div>
                        <blockquote className="sm:col-span-2">
                            <p className="text-xs md:text-base">
                                The Lottery Wheels API is a set of endpoints
                                designed to power the app and its admin panel.
                                The API is built using .NET Core 8, and it
                                handles all interactions with the MySQL database
                                for data storage and retrieval. To explore the
                                full API, its endpoints, and their usage, you
                                can visit the Swagger documentation linked
                                below. The CI/CD pipeline ensures seamless
                                deployment of the API updates.
                            </p>
                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                                    .NET Core 8, MySQL, Swagger, CI/CD Pipeline
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>

                <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
                    <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                        Trust Management System
                    </h1>
                    <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                        <div className="aspect-w-5 aspect-h-3">
                            <a
                                href="http://bkgt.rohitgoswami.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-yellow-600">
                                    Visit Trust Management System
                                </div>
                            </a>
                        </div>
                        <blockquote className="sm:col-span-2">
                            <p className="text-xs md:text-base">
                                The Trust Management System helps track and
                                manage the record of contributions made by
                                individual people and groups. It offers detailed
                                reports on contribution tracking and helps
                                manage the overall financial records of a trust
                                or charitable organization. Built using React,
                                the system provides a modern and responsive
                                interface for handling trust contributions
                                effectively.
                            </p>
                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                                    TypeScript, React, HTML, CSS
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>

                <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
                    <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                        Trust Management API Documentation
                    </h1>
                    <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                        <div className="aspect-w-5 aspect-h-3">
                            <a
                                href="https://api.bkgt.rohitgoswami.com/swagger/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-yellow-600">
                                    Visit Trust Management API Documentation
                                </div>
                            </a>
                        </div>
                        <blockquote className="sm:col-span-2">
                            <p className="text-xs md:text-base">
                                The Trust Management API provides a
                                comprehensive set of endpoints for managing and
                                tracking individual and group contributions.
                                This API is built using .NET Core 8 and
                                interacts with a MySQL database to store and
                                manage data. The Swagger documentation offers
                                detailed insights into the API's functionality,
                                allowing developers to test and integrate the
                                services. The CI/CD pipeline ensures that
                                updates and deployments are handled efficiently.
                            </p>
                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                                    .NET Core 8, MySQL, Swagger, CI/CD Pipeline
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default projects;
