import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFilePath = path.join(__dirname, '../src/data/products.ts');
const videosDir = path.join(__dirname, '../public/videos/products');
const registryFilePath = path.join(__dirname, '../src/data/video-registry.json');

// Ensure videos directory exists
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// Read products.ts to get product names
const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
const nameRegex = /"name":\s*"((?:[^"\\]|\\.)*)"/g;
let match;
const products = [];

while ((match = nameRegex.exec(productsContent)) !== null) {
  // unescape quotes
  products.push(match[1].replace(/\\"/g, '"'));
}

const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

console.log('\n--- Video Validation Report ---');
let missingCount = 0;
let existingCount = 0;
const validSlugs = [];

products.forEach(name => {
  const slug = generateSlug(name);
  const videoFile = `${slug}.mp4`;
  const videoPath = path.join(videosDir, videoFile);
  
  if (fs.existsSync(videoPath)) {
    console.log(`✅ Found: ${videoFile} (Product: ${name})`);
    existingCount++;
    validSlugs.push(slug);
  } else {
    console.log(`❌ Missing: ${videoFile} (Product: ${name})`);
    missingCount++;
  }
});

console.log('-------------------------------');
console.log(`Total Products: ${products.length}`);
console.log(`Videos Found: ${existingCount}`);
console.log(`Videos Missing: ${missingCount}`);
console.log('-------------------------------\n');

// Write registry so frontend knows which videos actually exist
fs.writeFileSync(registryFilePath, JSON.stringify(validSlugs, null, 2));
console.log('✅ Updated src/data/video-registry.json');
