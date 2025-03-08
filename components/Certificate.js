import Image from "next/image";

const Certificate = ({
    title,
    verifyLink,
    imageSrc,
    altText,
    description,
    skills,
}) => {
    return (
        <section className="p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl">
            <h1 className="font-bold text-lg md:text-xl text-yellow-600 pb-4">
                {title}
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
                <div className="aspect-w-5 aspect-h-3">
                    <a
                        href={verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <Image
                                src={imageSrc}
                                alt={altText}
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                    </a>
                </div>
                <blockquote className="sm:col-span-2">
                    <p className="text-xs md:text-base">{description}</p>
                    <cite className="inline-flex items-center mt-8 not-italic">
                        <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                        <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                            {skills}
                        </p>
                    </cite>
                </blockquote>
            </div>
        </section>
    );
};

export default Certificate;
