import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

// Constants
const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/workflows", label: "Workflows" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
    {
        href: "https://github.com/rohitgoswami",
        icon: BsGithub,
        label: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/rohit-goswami-55867219a",
        icon: BsLinkedin,
        label: "LinkedIn"
    }
];

const SCROLL_THRESHOLD = 10;

// Style constants
const NAV_LINK_BASE_STYLES = "relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg group";
const NAV_LINK_ACTIVE_STYLES = "text-primary-600 bg-primary-50";
const NAV_LINK_INACTIVE_STYLES = "text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50";
const UNDERLINE_BASE_STYLES = "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full";
const UNDERLINE_ACTIVE_STYLES = "w-full";
const NAV_CONTAINER_BASE_STYLES = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
const NAV_CONTAINER_SCROLLED_STYLES = "bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-soft";
const NAV_CONTAINER_TRANSPARENT_STYLES = "bg-transparent";

// Custom hooks
const useScrollDetection = (threshold = SCROLL_THRESHOLD) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    return { isOpen, toggle, close };
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, navItems, socialLinks, currentPath }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white/95 backdrop-blur-md border-l border-neutral-200/50 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-6 border-b border-neutral-200/50">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 p-1.5">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Logo"
                                            width={20}
                                            height={20}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="font-semibold text-neutral-900">Menu</span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
                                >
                                    <AiOutlineClose className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="flex-1 px-6 py-8">
                                <div className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link 
                                                href={item.href}
                                                onClick={onClose}
                                                className={`block px-3 py-3 text-sm font-medium transition-all duration-200 rounded-lg group ${
                                                    currentPath === item.href
                                                        ? "text-primary-600 bg-primary-50"
                                                        : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50/50"
                                                }`}
                                            >
                                                {item.label}
                                                <span
                                                    className={`block mt-1 h-0.5 bg-primary-600 transition-all duration-200 ${
                                                        currentPath === item.href ? "w-full" : "w-0 group-hover:w-full"
                                                    }`}
                                                />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Social Links */}
                            <div className="p-6 border-t border-neutral-200/50">
                                <div className="flex justify-center space-x-6">
                                    {socialLinks.map(({ href, icon: Icon, label }) => (
                                        <a
                                            key={href}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-primary-50"
                                            aria-label={label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                    <div className="flex items-center">
                                        <ThemeToggle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const Navbar = () => {
    const router = useRouter();
    const isScrolled = useScrollDetection();
    const { isOpen, toggle: handleMobileNav, close: closeMobileMenu } = useMobileMenu();

    const NavLink = ({ href, children, onClick }) => (
        <Link 
            href={href}
            onClick={onClick}
            className={`${NAV_LINK_BASE_STYLES} ${
                router.pathname === href ? NAV_LINK_ACTIVE_STYLES : NAV_LINK_INACTIVE_STYLES
            }`}
        >
            {children}
            <span
                className={`${UNDERLINE_BASE_STYLES} ${
                    router.pathname === href ? UNDERLINE_ACTIVE_STYLES : ""
                }`}
            />
        </Link>
    );

    const SocialIcon = ({ href, icon: Icon, label }) => (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 rounded-lg hover:bg-primary-50"
            aria-label={label}
        >
            <Icon className="w-5 h-5" />
        </a>
    );

    return (
        <>
            {/* Main Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${NAV_CONTAINER_BASE_STYLES} ${
                    isScrolled ? NAV_CONTAINER_SCROLLED_STYLES : NAV_CONTAINER_TRANSPARENT_STYLES
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 p-2 group-hover:scale-105 transition-transform duration-200">
                                <Image
                                    src="/images/logo.png"
                                    alt="Rohit Goswami"
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-semibold text-lg text-neutral-900 hidden sm:block">
                                Rohit Goswami
                            </span>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {NAV_ITEMS.map((item) => (
                                <NavLink key={item.href} href={item.href}>
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-2">
                            {SOCIAL_LINKS.map(({ href, icon, label }) => (
                                <SocialIcon key={href} href={href} icon={icon} label={label} />
                            ))}
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={handleMobileNav}
                            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {isOpen ? (
                                <AiOutlineClose className="w-6 h-6" />
                            ) : (
                                <AiOutlineMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isOpen}
                onClose={closeMobileMenu}
                navItems={NAV_ITEMS}
                socialLinks={SOCIAL_LINKS}
                currentPath={router.pathname}
            />
        </>
    );
};

export default Navbar;
