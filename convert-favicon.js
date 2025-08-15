const fs = require('fs');
const path = require('path');

// Read the SVG file
const svgPath = path.join(__dirname, 'public', 'favicon.svg');
const svgContent = fs.readFileSync(svgPath, 'utf8');

// Convert to base64
const base64 = Buffer.from(svgContent).toString('base64');
const dataUrl = `data:image/svg+xml;base64,${base64}`;

console.log('Base64 encoded SVG data URL:');
console.log(dataUrl);
