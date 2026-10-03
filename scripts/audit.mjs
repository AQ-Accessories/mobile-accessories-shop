import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFilePath = path.join(__dirname, '../src/data/products.ts');
const videosDir = path.join(__dirname, '../public/videos/products');

const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
const nameRegex = /"name":\s*"((?:[^"\\]|\\.)*)"/g;
let match;
const products = [];

while ((match = nameRegex.exec(productsContent)) !== null) {
  products.push(match[1].replace(/\\"/g, '"'));
}

const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const allFiles = fs.existsSync(videosDir) ? fs.readdirSync(videosDir) : [];
const actualFiles = new Set(allFiles);

console.log('--- AUDIT REPORT ---\n');

let missingCount = 0;
let existingCount = 0;
let totalSizeBytes = 0;

products.forEach(name => {
  const slug = generateSlug(name);
  const expectedFilename = `${slug}.mp4`;
  const videoPath = path.join(videosDir, expectedFilename);
  
  if (fs.existsSync(videoPath)) {
    const stats = fs.statSync(videoPath);
    totalSizeBytes += stats.size;
    existingCount++;
    console.log(`✅ FOUND: ${name} -> ${expectedFilename} (${stats.size} bytes)`);
    actualFiles.delete(expectedFilename);
  } else {
    console.log(`${name} → MISSING VIDEO`);
    missingCount++;
  }
});

console.log('\n--- FILENAME MISMATCHES ---');
if (actualFiles.size > 0) {
  actualFiles.forEach(file => {
    console.log(`Found unexpected file: ${file} (does not match any expected product slug)`);
    
    // Add its size to total just to be complete, or maybe not. 
    // The prompt says "confirm the total size of the video assets." 
    // I will include all files in the directory for the total size.
  });
} else {
  console.log('No unexpected files found.');
}

let overallSize = 0;
allFiles.forEach(f => {
  overallSize += fs.statSync(path.join(videosDir, f)).size;
});

console.log('\n-------------------------------');
console.log(`Total Products: ${products.length}`);
console.log(`Videos Found (Matching): ${existingCount} / ${products.length}`);
console.log(`Missing Videos: ${missingCount}`);
console.log(`Mismatched/Unexpected Files: ${actualFiles.size}`);
console.log(`Total Size of Video Assets: ${(overallSize / (1024 * 1024)).toFixed(2)} MB`);
console.log('-------------------------------');
