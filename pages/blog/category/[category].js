import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiClock, HiTag, HiArrowRight } from "react-icons/hi";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CATEGORIES = [
    { id: "csharp", label: "C# & .NET Core", color: "from-primary-700 to-success-600" },
    { id: "react", label: "React", color: "from-accent-600 to-success-500" },
    { id: "javascript", label: "JavaScript", color: "from-warning-500 to-warning-600" },
    { id: "web-development", label: "Web Development", color: "from-success-600 to-success-500" },
];

export default function CategoryPage({ category, posts }) {
    const router = useRouter();
    const categoryInfo = CATEGORIES.find(c => c.id === category) || CATEGORIES[0];

    return (
        <>
            <NextSeo
                title={`${categoryInfo.label} Articles - Rohit Goswami`}
                description={`Browse all articles about ${categoryInfo.label}`}
                openGraph={{
                    title: `${categoryInfo.label} Articles`,
                    description: `Browse all articles about ${categoryInfo.label}`,
                }}
            />

            <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-success-50/10 pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm font-medium text-neutral-700 hover:text-primary-800 transition-colors duration-200"
                        >
                            <HiArrowLeft className="w-4 h-4 mr-2" />
                            Back to All Posts
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-800 to-success-600 text-white mb-6">
                            <HiTag className="w-5 h-5 mr-2" />
                            <span className="font-semibold">{categoryInfo.label}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">{categoryInfo.label} Articles</span>
                        </h1>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            {posts.length} {posts.length === 1 ? 'article' : 'articles'} found
                        </p>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post, index) => (
                                <BlogCard key={post.slug} post={post} index={index} categoryColor={categoryInfo.color} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-neutral-500 text-lg mb-6">No posts found in this category yet.</p>
                            <Link href="/blog" className="btn-primary">
                                Browse All Posts
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}

const BlogCard = ({ post, index, categoryColor }) => {
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

export async function getStaticPaths() {
    const paths = CATEGORIES.map((category) => ({
        params: { category: category.id },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { category } = params;
    const contentDirectory = path.join(process.cwd(), "content/blog");

    // Create directory if it doesn't exist
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return {
            props: {
                category,
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

            // Calculate read time
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
        .filter((post) => post.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: {
            category,
            posts,
        },
    };
}
