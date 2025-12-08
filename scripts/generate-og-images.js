/**
 * Open Graph Image Generator
 *
 * This script uses Puppeteer to generate OG images from HTML templates.
 * Install dependencies first: npm install --save-dev puppeteer
 *
 * Usage: node scripts/generate-og-images.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const templates = [
    { name: 'homepage', output: 'og-image.jpg' },
    { name: 'about', output: 'og-about.jpg' },
    { name: 'projects', output: 'og-projects.jpg' },
    { name: 'blog', output: 'og-blog.jpg' }
];

async function generateOGImages() {
    console.log('🚀 Starting OG image generation...\n');

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    for (const template of templates) {
        try {
            console.log(`📸 Generating ${template.output}...`);

            const page = await browser.newPage();

            // Set viewport to OG image dimensions
            await page.setViewport({
                width: 1200,
                height: 630,
                deviceScaleFactor: 2 // 2x for retina displays
            });

            // Load the HTML template
            const templatePath = path.join(process.cwd(), 'og-templates', `${template.name}.html`);
            const templateContent = fs.readFileSync(templatePath, 'utf8');

            await page.setContent(templateContent, {
                waitUntil: 'networkidle0'
            });

            // Take screenshot
            const outputPath = path.join(process.cwd(), 'public', template.output);
            await page.screenshot({
                path: outputPath,
                type: 'jpeg',
                quality: 90
            });

            console.log(`✅ Generated: ${template.output}\n`);

            await page.close();
        } catch (error) {
            console.error(`❌ Error generating ${template.output}:`, error.message);
        }
    }

    await browser.close();
    console.log('🎉 All OG images generated successfully!');
}

// Run if called directly
if (require.main === module) {
    generateOGImages().catch(console.error);
}

module.exports = { generateOGImages };
