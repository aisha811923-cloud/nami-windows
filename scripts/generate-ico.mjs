import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const srcPng = path.resolve('build/icon.png');
const outIco = path.resolve('build/icon.ico');

async function main() {
  const sizes = [256, 128, 64, 48, 32, 16];
  const buffers = await Promise.all(
    sizes.map((size) => sharp(srcPng).resize(size, size).png().toBuffer())
  );

  const icoBuffer = await pngToIco(buffers);
  fs.writeFileSync(outIco, icoBuffer);
  console.log(`Generated ${outIco} (${icoBuffer.length} bytes)`);
}

main().catch((err) => {
  console.error('Failed to generate icon.ico:', err);
  process.exit(1);
});
