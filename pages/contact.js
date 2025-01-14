import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import Popup from "../components/ContactSubmitPopup";

emailjs.init("yKa48bbuNsDFFFVWj");

const contactSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

const Contact = () => {
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(contactSchema),
    });

    const [submitted, setSubmitted] = useState(false);

    const submitForm = async (e) => {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "2c60b403-a092-41a6-a3bb-309ea6e5544d",
                name: form.current.name.value,
                email: form.current.email.value,
                message: form.current.message.value,
            }),
        });
        const result = await response.json();
        setSubmitted(true);
        reset();
        if (result.success) {
            console.log(result);
        }
    };
    return (
        <div className="flex items-center">
            <Head>
                <title>Contact | Rohit Goswami</title>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4054073151944400"
                    crossorigin="anonymous"
                ></script>
            </Head>
            <div className="h-screen max-w-screen-xl px-4 py-16 mx-auto md:pt-32 md:p-20">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <h1 className="font-bold text-6xl text-yellow-600 pt-20">
                            Let&#39;s Talk
                        </h1>
                        <p className="max-w-xl text-lg pt-4">
                            LinkedIn:{" "}
                            <a
                                className="text-yellow-600 hover:underline"
                                href="https://www.linkedin.com/in/rohit-goswami-55867219a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                rohit-goswami-55867219a
                            </a>{" "}
                            <br />
                            Email:{" "}
                            <a
                                className="text-yellow-600 hover:underline"
                                href="mailto:rohitgoswamigi@gmail.com"
                            >
                                rohitgoswamigi@gmail.com
                            </a>
                            <br />
                            Phone/WhatsApp:{" "}
                            <a
                                className="text-yellow-600 hover:underline"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                +91 9729972493
                            </a>{" "}
                        </p>
                    </div>

                    <div className="p-8 rounded-lg lg:p-12 lg:col-span-3">
                        <form
                            ref={form}
                            onSubmit={handleSubmit(submitForm)}
                            className="space-y-4"
                        >
                            <div>
                                <label className="sr-only">Name</label>
                                <input
                                    className="w-full p-3 text-sm rounded-lg border border-black"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                    {...register("name")}
                                />
                                <p>
                                    <span className="text-red-600">
                                        {errors.name?.message}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <label className="sr-only">Email</label>
                                <input
                                    className="w-full p-3 text-sm rounded-lg border border-black"
                                    placeholder="Email address"
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                />
                                <p>
                                    <span className="text-red-600">
                                        {errors.email?.message}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <label className="sr-only">Message</label>
                                <textarea
                                    className="w-full p-3 text-sm rounded-lg border border-black"
                                    placeholder="Message"
                                    type="text"
                                    rows="8"
                                    name="message"
                                    {...register("message")}
                                ></textarea>
                                <p>
                                    <span className="text-red-600">
                                        {errors.message?.message}
                                    </span>
                                </p>
                            </div>

                            <div className="mt-4">
                                {!submitted ? (
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto space-x-2 hover:bg-yellow-600"
                                    >
                                        <span className="font-medium">
                                            {" "}
                                            Send{" "}
                                        </span>
                                        <IoIosSend size="20px" />
                                    </button>
                                ) : submitted ? (
                                    <Popup
                                        title="Message Sent! &#128077;"
                                        message="Thank you for your message. I will get back to you within 24 hours."
                                    />
                                ) : (
                                    <Popup
                                        title="Error Sending Message!"
                                        message="If this error keeps occuring please contact me directly through email and/or LinkedIn"
                                    />
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
