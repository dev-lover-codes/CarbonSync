import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('fonts.gstatic.com')) {
        console.log(`[font-strip] Stripping CDN font from: ${file}`);
        // Regex to match font="..." with the remote Orbitron url
        content = content.replace(/\s*font=["']https:\/\/fonts\.gstatic\.com\/[^"']+["']/g, '');
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  });
}

processDir(srcDir);
console.log('[font-strip] Completed successfully.');
