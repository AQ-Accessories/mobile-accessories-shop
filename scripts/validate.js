const fs = require('fs');
const path = require('path');

// Extract products directly from the generated TS file
// Simplest way is to run a regex or just read it
const productsContent = fs.readFileSync(path.join(__dirname, '../src/data/products.ts'), 'utf-8');
const match = productsContent.match(/export const products: Product\[\] = (\[.*\]);/s);

if (!match) {
  console.error('Failed to parse products array from src/data/products.ts');
  process.exit(1);
}

const products = eval(match[1]);

let hasErrors = false;
const duplicateIds = new Set();
const seenIds = new Set();
const allowedCategories = ['Chargers', 'Adapters', 'Cables', 'Audio', 'Accessories'];

console.log('--- Starting Data Validation ---');

// 1. Verify 26 products
if (products.length !== 26) {
  console.error(`❌ Expected 26 products, found ${products.length}`);
  hasErrors = true;
} else {
  console.log(`✅ Found exactly 26 products.`);
}

products.forEach(product => {
  // 5. Verify no accidental duplicate product IDs
  if (seenIds.has(product.id)) {
    console.error(`❌ Duplicate Product ID found: ${product.id}`);
    duplicateIds.add(product.id);
    hasErrors = true;
  }
  seenIds.add(product.id);

  // 2. Verify every price
  if (typeof product.price !== 'number' || product.price <= 0 || isNaN(product.price)) {
    console.error(`❌ Invalid price for product ID ${product.id}: ${product.price}`);
    hasErrors = true;
  }

  // 3. Verify every category
  if (!allowedCategories.includes(product.category)) {
    console.error(`❌ Invalid category for product ID ${product.id}: ${product.category}`);
    hasErrors = true;
  }

  // 4. Verify every image filename & check if it exists in public/images/
  if (!product.imageFilename) {
    console.error(`❌ Missing image filename for product ID ${product.id}`);
    hasErrors = true;
  } else {
    const imagePath = path.join(__dirname, '../public/images', product.imageFilename);
    if (!fs.existsSync(imagePath)) {
      console.error(`⚠️ Missing image file in public/images/: ${product.imageFilename} (Product: ${product.name})`);
      // It's a warning or error based on the prompt "report any missing information"
      hasErrors = true;
    }
  }
});

console.log('--- Validation Complete ---');
if (hasErrors) {
  console.error('❌ Validation finished with errors/missing files.');
  process.exit(1);
} else {
  console.log('✅ Validation passed successfully!');
  process.exit(0);
}
