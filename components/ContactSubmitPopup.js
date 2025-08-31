import Link from "next/link";

const ContactSubmitPopup = (props) => {
    return (
        <div>
            <div
                className="p-8 bg-white border border-primary-100 shadow-lg rounded-2xl"
                role="alert"
            >
                <div className="items-left sm:flex">
                    <p className="mt-8 text-lg font-medium sm:mt-0">
                        {props.title}
                    </p>
                </div>

                <p className="mt-4 text-neutral-500">{props.message}</p>

                <div className="mt-6 sm:flex">
                    <Link href="/" className="px-12 py-3 text-sm font-medium text-white bg-neutral-900 rounded shadow active:bg-accent-600 hover:bg-accent-600 focus:outline-none focus:ring">
                        OK
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactSubmitPopup;
