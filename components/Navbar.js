import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Constants
const NAV_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
        href: "/projects",
        label: "Projects",
        hasDropdown: true,
        dropdownItems: [
            { href: "/projects", label: "All Projects" },
            { href: "/workflows", label: "Workflows" },
        ]
    },
    {
        href: "/blog",
        label: "Blog",
        hasDropdown: true,
        dropdownItems: [
            { href: "/blog", label: "All Posts" },
            { href: "/blog/category/csharp", label: "C# & .NET Core" },
            { href: "/blog/category/react", label: "React" },
            { href: "/blog/category/javascript", label: "JavaScript" },
            { href: "/blog/category/web-development", label: "Web Development" },
        ]
    },
    { href: "/certifications", label: "Certifications" },
    { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
    {
        href: "https://github.com/rohitgoswami",
        icon: BsGithub,
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/rohit-goswami-55867219a",
        icon: BsLinkedin,
        label: "LinkedIn",
    },
];

const SCROLL_THRESHOLD = 10;

// Custom hooks
const useScrollDetection = (threshold = SCROLL_THRESHOLD) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
};

const useMobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    return { isOpen, toggle, close };
};

// Dropdown Menu Component
const DropdownMenu = ({ items, isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2 z-50"
                    onMouseLeave={onClose}
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-50 hover:text-primary-800 transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Mobile Menu Component
const MobileMenu = ({
    isOpen,
    onClose,
    navItems,
    socialLinks,
    currentPath,
}) => {
    const [expandedItem, setExpandedItem] = useState(null);

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
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 300,
                        }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white border-l border-neutral-200 shadow-2xl md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-800 to-primary-600 p-1.5">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Logo"
                                            width={20}
                                            height={20}
                                            className="w-full h-full object-contain"
                                            priority
                                        />
                                    </div>
                                    <span className="font-semibold text-neutral-900">
                                        Menu
                                    </span>
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
                                            {item.hasDropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                                                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-neutral-700 hover:text-primary-800 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                                                    >
                                                        <span>{item.label}</span>
                                                        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item.label ? 'rotate-180' : ''}`} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {expandedItem === item.label && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 pt-2 space-y-2">
                                                                    {item.dropdownItems.map((dropItem) => (
                                                                        <Link
                                                                            key={dropItem.href}
                                                                            href={dropItem.href}
                                                                            onClick={onClose}
                                                                            className="block px-3 py-2 text-sm text-neutral-600 hover:text-primary-800 hover:bg-neutral-50 rounded-lg transition-all duration-200"
                                                                        >
                                                                            {dropItem.label}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={onClose}
                                                    className={`block px-3 py-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                                                        currentPath === item.href
                                                            ? "text-primary-800 bg-primary-50"
                                                            : "text-neutral-700 hover:text-primary-800 hover:bg-neutral-50"
                                                    }`}
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mobile CTA Button */}
                                <div className="mt-6">
                                    <Link
                                        href="/contact"
                                        onClick={onClose}
                                        className="block w-full px-6 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-success-600 to-success-500 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                                    >
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Social Links */}
                            <div className="p-6 border-t border-neutral-200">
                                <div className="flex justify-center space-x-6">
                                    {socialLinks.map(
                                        ({ href, icon: Icon, label }) => (
                                            <a
                                                key={href}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-neutral-600 hover:text-primary-800 transition-colors duration-200 rounded-lg hover:bg-neutral-50"
                                                aria-label={label}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

// Desktop Nav Link with Dropdown
const NavLinkWithDropdown = ({ item, currentPath }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
            <Link
                href={item.href}
                className={`relative px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg group flex items-center gap-1 ${
                    currentPath === item.href || item.dropdownItems?.some(d => d.href === currentPath)
                        ? "text-primary-800"
                        : "text-neutral-900 hover:text-primary-800"
                }`}
            >
                {item.label}
                {item.hasDropdown && <HiChevronDown className="w-4 h-4" />}
                <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary-800 transition-all duration-200 ${
                        currentPath === item.href || item.dropdownItems?.some(d => d.href === currentPath)
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                    }`}
                />
            </Link>
            {item.hasDropdown && (
                <DropdownMenu
                    items={item.dropdownItems}
                    isOpen={isDropdownOpen}
                    onClose={() => setIsDropdownOpen(false)}
                />
            )}
        </div>
    );
};

const Navbar = () => {
    const router = useRouter();
    const isScrolled = useScrollDetection();
    const {
        isOpen,
        toggle: handleMobileNav,
        close: closeMobileMenu,
    } = useMobileMenu();

    return (
        <>
            {/* Main Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white backdrop-blur-md border-b border-neutral-200 shadow-sm"
                        : "bg-white border-b border-neutral-100"
                }`}
                style={{ height: "70px" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo Section */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 group"
                        >
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-800 to-primary-600 p-2 group-hover:scale-105 transition-transform duration-200">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>
                            <span className="font-semibold text-lg text-neutral-900 hidden sm:block">
                                Rohit Goswami
                            </span>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-1">
                            {NAV_ITEMS.map((item) => (
                                <NavLinkWithDropdown
                                    key={item.href}
                                    item={item}
                                    currentPath={router.pathname}
                                />
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 text-base font-semibold text-white bg-gradient-to-r from-success-600 to-success-500 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            >
                                Get In Touch
                            </Link>
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
