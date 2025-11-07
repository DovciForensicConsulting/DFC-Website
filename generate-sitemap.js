// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, copyFileSync, existsSync } = require('fs');
const { Readable } = require('stream');
const path = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const stream = new SitemapStream({ hostname: 'https://www.dovciforensic.com' });

const buildDir = path.join(__dirname, 'build');
const sitemapPath = path.join(buildDir, 'sitemap.xml');
const robotsSrc = path.join(__dirname, 'public', 'robots.txt');
const robotsDest = path.join(buildDir, 'robots.txt');

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    // Ensure build/ exists
    require('fs').mkdirSync(buildDir, { recursive: true });
    
    createWriteStream(sitemapPath).write(data.toString());
    console.log('sitemap.xml generated at:', sitemapPath);

    // Copy robots.txt
    if (existsSync(robotsSrc)) {
      copyFileSync(robotsSrc, robotsDest);
      console.log('robots.txt copied to build/');
    } else {
      console.warn('robots.txt not found in public/ — skipping copy');
    }
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });