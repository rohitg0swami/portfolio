import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { DefaultSeo } from "next-seo"; // Import DefaultSeo from next-seo
import defaultSEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-white">
            <DefaultSeo {...defaultSEO} />
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
