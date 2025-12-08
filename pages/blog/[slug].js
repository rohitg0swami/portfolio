import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft, HiClock, HiTag, HiCalendar } from "react-icons/hi";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export default function BlogPost({ post, content }) {
    const sanitizedContent = DOMPurify.sanitize(content);

    return (
        <>
            <NextSeo
                title={`${post.title} - Rohit Goswami`}
                description={post.excerpt}
                openGraph={{
                    title: post.title,
                    description: post.excerpt,
                    type: "article",
                    article: {
                        publishedTime: post.date,
                        tags: post.tags,
                    },
                }}
            />

            <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50/20 to-success-50/10 pt-24 pb-16">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Article Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12"
                    >
                        {/* Category Badge */}
                        <div className="mb-4">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-800 to-success-600 text-white">
                                <HiTag className="w-4 h-4 mr-1" />
                                {post.categoryLabel}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                            {post.title}
                        </h1>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-neutral-600 text-sm">
                            <div className="flex items-center gap-2">
                                <HiCalendar className="w-4 h-4" />
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <HiClock className="w-4 h-4" />
                                <span>{post.readTime} min read</span>
                            </div>
                        </div>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-lg bg-white border border-neutral-200 text-sm text-neutral-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.header>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 md:p-12"
                    >
                        <div
                            className="prose prose-lg max-w-none
                                prose-headings:text-neutral-900 prose-headings:font-bold
                                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:text-neutral-700 prose-p:leading-relaxed
                                prose-a:text-primary-800 prose-a:no-underline hover:prose-a:text-success-600
                                prose-strong:text-neutral-900 prose-strong:font-semibold
                                prose-code:text-primary-800 prose-code:bg-primary-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                                prose-pre:bg-neutral-900 prose-pre:text-neutral-100
                                prose-blockquote:border-l-4 prose-blockquote:border-primary-800 prose-blockquote:pl-4 prose-blockquote:italic
                                prose-ul:list-disc prose-ol:list-decimal
                                prose-li:text-neutral-700
                                prose-img:rounded-xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />
                    </motion.div>

                    {/* Footer - Back to Blog */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-12 pt-8 border-t border-neutral-200"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-base font-medium text-primary-800 hover:text-success-600 transition-colors duration-200"
                        >
                            <HiArrowLeft className="w-5 h-5 mr-2" />
                            Back to all articles
                        </Link>
                    </motion.div>
                </article>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const contentDirectory = path.join(process.cwd(), "content/blog");

    // Create directory if it doesn't exist
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return {
            paths: [],
            fallback: false,
        };
    }

    const filenames = fs.readdirSync(contentDirectory);

    const paths = filenames
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => ({
            params: {
                slug: filename.replace(".md", ""),
            },
        }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const htmlContent = marked(content);

    // Calculate read time
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/g).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);

    const CATEGORIES = [
        { id: "csharp", label: "C# & .NET Core" },
        { id: "react", label: "React" },
        { id: "javascript", label: "JavaScript" },
        { id: "web-development", label: "Web Development" },
    ];

    return {
        props: {
            post: {
                slug,
                title: data.title || "Untitled",
                excerpt: data.excerpt || "",
                category: data.category || "web-development",
                categoryLabel: CATEGORIES.find(c => c.id === (data.category || "web-development"))?.label || "Web Development",
                date: data.date || new Date().toLocaleDateString(),
                tags: data.tags || [],
                readTime: readTime,
            },
            content: htmlContent,
        },
    };
}
