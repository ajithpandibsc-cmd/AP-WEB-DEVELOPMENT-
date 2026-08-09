const sharp = require('sharp');
const fs = require('fs');
(async () => {
  try {
    const svg = fs.readFileSync('public/logo-square.svg');
    await sharp(svg).resize(64,64).png().toFile('public/favicon-64.png');
    await sharp(svg).resize(32,32).png().toFile('public/favicon-32.png');
    console.log('Favicons created: public/favicon-64.png, public/favicon-32.png');
  } catch (e) {
    console.error('Failed to create favicons', e);
    process.exit(1);
  }
})();
