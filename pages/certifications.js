import { NextSeo } from "next-seo";
import Certificate from "../components/Certificate";

const Certifications = () => {
    return (
        <div className="h-screen mx-5 sm:mx-auto pt-32">
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

            <h1 className="font-bold text-3xl text-center mb-10">
                Certifications
            </h1>
            <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
                {/* Certificate 1 */}
                <Certificate
                    title="Introduction to Microsoft Azure Cloud Services"
                    verifyLink="https://www.coursera.org/account/accomplishments/verify/5FQ7GIYV4S6Y"
                    imageSrc="/images/azure.jpg" // Replace with the actual image path
                    altText="Introduction to Microsoft Azure Cloud Services"
                    description="This Coursera certification verifies the successful completion of the 'Introduction to Microsoft Azure Cloud Services' course. The course covered fundamental cloud computing concepts, Microsoft Azure architecture, key services such as Virtual Machines, Storage, Networking, and Databases, as well as cost management strategies. It also introduced security, compliance, and deployment models within Azure."
                    skills="Cloud Computing, Microsoft Azure, Virtual Machines, Azure Storage, Networking, Cost Management, Security & Compliance"
                />

                {/* Certificate 2 */}
                <Certificate
                    title="Object-Oriented Design"
                    verifyLink="https://www.coursera.org/account/accomplishments/verify/BP6FAVQ2HAPP"
                    imageSrc="/images/objectoriented.jpg" // Replace with the actual image path
                    altText="Object-Oriented Design"
                    description="This Coursera certification verifies the successful completion of the 'Object-Oriented Design' course. The course covered core principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and abstraction. It also explored design patterns, UML diagrams, SOLID principles, and best practices for designing scalable and maintainable software systems."
                    skills="Object-Oriented Programming, Design Patterns, UML, SOLID Principles, Software Architecture, Code Reusability"
                />
            </div>
        </div>
    );
};

export default Certifications;
