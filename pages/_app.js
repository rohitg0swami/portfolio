import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { DefaultSeo } from "next-seo"; // Import DefaultSeo from next-seo
import defaultSEO from "../next-seo.config";
import Script from "next/script"; // Import the Script component

function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
            {/* Skip to main content link for accessibility */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-0CXL37MGEY"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CXL37MGEY');
          `,
                }}
            />
            <DefaultSeo {...defaultSEO} />
            <Navbar />

            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
