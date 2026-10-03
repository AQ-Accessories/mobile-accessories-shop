import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFilePath = path.join(__dirname, '../src/data/products.ts');
const videosDir = path.join(__dirname, '../public/videos/products');

const productsContent = fs.readFileSync(productsFilePath, 'utf-8');

const objRegex = /"name":\s*"([^"]+)",[\s\S]*?"imageFilename":\s*"([^"]+)"/g;
let match;
const products = [];

while ((match = objRegex.exec(productsContent)) !== null) {
  products.push({
    name: match[1].replace(/\\"/g, '"'),
    imageFilename: match[2]
  });
}

const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

let renamedCount = 0;

products.forEach(p => {
  const currentVideoName = p.imageFilename.replace(/\.jpg$/i, '.mp4').toLowerCase(); 
  const slug = generateSlug(p.name);
  const newVideoName = `${slug}.mp4`;
  
  const currentPath = path.join(videosDir, currentVideoName);
  const newPath = path.join(videosDir, newVideoName);
  
  if (fs.existsSync(currentPath)) {
    fs.renameSync(currentPath, newPath);
    console.log(`Renamed: ${currentVideoName} -> ${newVideoName}`);
    renamedCount++;
  } else {
    // try exact case just in case
    const exactCasePath = path.join(videosDir, p.imageFilename.replace(/\.jpg$/i, '.mp4'));
    if (fs.existsSync(exactCasePath)) {
      fs.renameSync(exactCasePath, newPath);
      console.log(`Renamed: ${path.basename(exactCasePath)} -> ${newVideoName}`);
      renamedCount++;
    } else {
      // In case they already got renamed by a previous run
      if (fs.existsSync(newPath)) {
        console.log(`Already renamed: ${newVideoName}`);
        renamedCount++;
      } else {
        console.log(`Could not find expected file for ${p.name}: ${currentVideoName}`);
      }
    }
  }
});

console.log(`\nTotal renamed: ${renamedCount}`);
