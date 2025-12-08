const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://rohitgoswami.com';

// Static pages with priority and change frequency
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/projects', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.9', changefreq: 'daily' },
  { url: '/certifications', priority: '0.7', changefreq: 'monthly' },
  { url: '/workflows', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
];

// Get all blog posts
function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  return files.map(file => {
    const filePath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const slug = file.replace('.md', '');

    return {
      url: `/blog/${slug}`,
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: data.date || new Date().toISOString().split('T')[0],
    };
  });
}

// Get all blog categories
function getBlogCategories() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  const categories = new Set();

  files.forEach(file => {
    const filePath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    if (data.category) {
      categories.add(data.category);
    }
  });

  return Array.from(categories).map(category => ({
    url: `/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`,
    priority: '0.7',
    changefreq: 'weekly',
  }));
}

// Generate sitemap XML
function generateSitemap() {
  const blogPosts = getBlogPosts();
  const blogCategories = getBlogCategories();
  const allPages = [...staticPages, ...blogPosts, ...blogCategories];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map(page => {
    const lastmod = page.lastmod || new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  console.log(`✓ Sitemap generated with ${allPages.length} pages`);
  console.log(`  - ${staticPages.length} static pages`);
  console.log(`  - ${blogPosts.length} blog posts`);
  console.log(`  - ${blogCategories.length} blog categories`);
}

// Run the generator
generateSitemap();
