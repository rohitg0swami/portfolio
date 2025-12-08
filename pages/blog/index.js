import { useState } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiSearch, HiClock, HiTag, HiArrowRight } from "react-icons/hi";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CATEGORIES = [
    { id: "all", label: "All Posts", color: "from-primary-800 to-primary-600" },
    { id: "csharp", label: "C# & .NET Core", color: "from-primary-700 to-success-600" },
    { id: "react", label: "React", color: "from-accent-600 to-success-500" },
    { id: "javascript", label: "JavaScript", color: "from-warning-500 to-warning-600" },
    { id: "web-development", label: "Web Development", color: "from-success-600 to-success-500" },
];

export default function Blog({ posts }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPosts = posts.filter((post) => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <NextSeo
                title="Blog - Rohit Goswami | Tech Articles & Tutorials"
                description="Explore articles and tutorials on C#, .NET Core, React, JavaScript, and modern web development."
                openGraph={{
                    title: "Blog - Rohit Goswami",
                    description: "Tech articles and tutorials on C#, .NET Core, React, and web development",
                }}
            />

            <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-success-50/10 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Tech Blog</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Insights, tutorials, and best practices on C#, .NET Core, React, and modern web development
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-2xl mx-auto mb-8"
                    >
                        <div className="relative">
                            <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    selectedCategory === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                        : "bg-white text-neutral-700 border border-neutral-200 hover:border-primary-300 hover:shadow-md"
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </motion.div>

                    {/* Blog Posts Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, index) => (
                                <BlogCard key={post.slug} post={post} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-neutral-500 text-lg">No posts found. Try adjusting your search or filter.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}

const BlogCard = ({ post, index }) => {
    const categoryColor = CATEGORIES.find(c => c.id === post.category)?.color || CATEGORIES[0].color;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="financial-card group cursor-pointer"
        >
            <Link href={`/blog/${post.slug}`}>
                <div>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColor} text-white`}>
                            <HiTag className="w-3 h-3 mr-1" />
                            {post.categoryLabel}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-800 transition-colors duration-200">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                        <div className="flex items-center gap-1">
                            <HiClock className="w-4 h-4" />
                            <span>{post.readTime} min read</span>
                        </div>
                        <span>{post.date}</span>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-2 py-1 rounded bg-neutral-100 text-neutral-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Read More Link */}
                    <div className="flex items-center text-sm font-medium text-primary-800 group-hover:text-success-600 transition-colors duration-200">
                        <span>Read article</span>
                        <HiArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export async function getStaticProps() {
    const contentDirectory = path.join(process.cwd(), "content/blog");

    // Create directory if it doesn't exist
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });

        // Return empty posts array if directory is new
        return {
            props: {
                posts: [],
            },
        };
    }

    const filenames = fs.readdirSync(contentDirectory);

    const posts = filenames
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => {
            const filePath = path.join(contentDirectory, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            // Calculate read time (rough estimate)
            const wordsPerMinute = 200;
            const wordCount = content.split(/\s+/g).length;
            const readTime = Math.ceil(wordCount / wordsPerMinute);

            return {
                slug: filename.replace(".md", ""),
                title: data.title || "Untitled",
                excerpt: data.excerpt || content.substring(0, 150) + "...",
                category: data.category || "web-development",
                categoryLabel: CATEGORIES.find(c => c.id === (data.category || "web-development"))?.label || "Web Development",
                date: data.date || new Date().toLocaleDateString(),
                tags: data.tags || [],
                readTime: readTime,
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: {
            posts,
        },
    };
}
