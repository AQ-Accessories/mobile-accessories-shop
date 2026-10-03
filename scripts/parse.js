const fs = require('fs');
const text = fs.readFileSync('products.txt', 'utf-8');
const blocks = text.split('PRODUCT ').filter(Boolean);
const products = blocks.map(block => {
  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
  const idStr = lines[0];
  const nameIdx = lines.indexOf('Name:') + 1;
  const priceIdx = lines.indexOf('Price:') + 1;
  const catIdx = lines.indexOf('Category:') + 1;
  const descIdx = lines.indexOf('Description:') + 1;
  const imgIdx = lines.indexOf('Image filename:') + 1;
  return {
    id: idStr,
    name: lines[nameIdx],
    price: parseInt(lines[priceIdx]),
    category: lines[catIdx],
    description: lines[descIdx],
    imageFilename: lines[imgIdx]
  };
});
const code = `import { Product } from '../types/product';\n\nexport const products: Product[] = ${JSON.stringify(products, null, 2)};\n`;
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/products.ts', code);
console.log('Created src/data/products.ts');
