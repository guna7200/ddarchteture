import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir);

console.log(`Processing ${files.length} files in ${imagesDir}...`);

const MAX_SIZE = 195 * 1024; // 195 KB limit

async function processImage(file) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.avif'].includes(ext)) return;

    const filePath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const webpPath = path.join(imagesDir, `${baseName}.webp`);

    let quality = 80;
    let maxDim = 1920;

    let buffer;
    try {
        const metadata = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);

        if (metadata.width && metadata.width > maxDim) {
            pipeline = pipeline.resize({ width: maxDim, fit: 'inside', withoutEnlargement: true });
        }

        buffer = await pipeline.webp({ quality }).toBuffer();

        while (buffer.length > MAX_SIZE && quality > 20) {
            quality -= 10;
            if (quality < 50 && maxDim > 1200) {
                maxDim = 1200;
            } else if (quality < 35 && maxDim > 800) {
                maxDim = 800;
            }

            let retryPipeline = sharp(filePath);
            if (metadata.width && metadata.width > maxDim) {
                retryPipeline = retryPipeline.resize({ width: maxDim, fit: 'inside', withoutEnlargement: true });
            }
            buffer = await retryPipeline.webp({ quality }).toBuffer();
        }

        fs.writeFileSync(webpPath, buffer);
        const kbSize = (buffer.length / 1024).toFixed(1);
        console.log(`✓ ${baseName}.webp - ${kbSize} KB (quality: ${quality})`);
    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
}

async function run() {
    for (const file of files) {
        await processImage(file);
    }
    console.log('Finished WebP conversion and compression!');
}

run();
