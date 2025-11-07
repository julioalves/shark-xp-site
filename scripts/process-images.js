import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = {
    sm: 300,
    md: 600,
    lg: 900
};

async function processImages() {
    const sourceDir = path.join(dirname(__dirname), 'public', 'img');
    const directories = ['', 'speakers'];

    for (const dir of directories) {
        const currentDir = path.join(sourceDir, dir);
        try {
            const files = await fs.readdir(currentDir);
            
            for (const file of files) {
                if (file.match(/\.(jpg|jpeg|png)$/i)) {
                    const filePath = path.join(currentDir, file);
                    const filename = path.parse(file).name;
                    const ext = path.parse(file).ext;

                    // Process each size
                    for (const [size, width] of Object.entries(sizes)) {
                        const outputFilename = `${filename}-${size}${ext}`;
                        const outputPath = path.join(currentDir, outputFilename);

                        await sharp(filePath)
                            .resize(width, null, {
                                withoutEnlargement: true,
                                fit: 'inside'
                            })
                            .jpeg({ quality: 80 })
                            .toFile(outputPath);

                        console.log(`Generated ${outputFilename}`);
                    }

                    // Generate WebP version
                    const webpFilename = `${filename}.webp`;
                    const webpPath = path.join(currentDir, webpFilename);
                    
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);

                    console.log(`Generated ${webpFilename}`);
                }
            }
        } catch (error) {
            console.error(`Error processing directory ${dir}:`, error);
        }
    }
}

processImages().catch(console.error);