const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('--- STARTING VERCEL MULTI-PROJECT BUILD ---');

// 1. Build main-site
console.log('Building main-site...');
execSync('npm run build -w main-site', { stdio: 'inherit' });

// 2. Build parent-ui
console.log('Building parent-ui...');
execSync('npm run build -w parent-ui', { stdio: 'inherit' });

// 3. Create target directory inside main-site dist
const parentDestDir = path.join(__dirname, 'main-site/dist/parent');
if (!fs.existsSync(parentDestDir)) {
    fs.mkdirSync(parentDestDir, { recursive: true });
}

// 4. Helper to recursively copy directories
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach(function(childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// 5. Copy parent-ui/dist contents to main-site/dist/parent
console.log('Copying parent-ui build into main-site/dist/parent...');
copyRecursiveSync(path.join(__dirname, 'parent-ui/dist'), parentDestDir);

// 6. Copy vercel.json to main-site/dist/vercel.json
const vercelJsonSrc = path.join(__dirname, 'vercel.json');
const vercelJsonDest = path.join(__dirname, 'main-site/dist/vercel.json');
if (fs.existsSync(vercelJsonSrc)) {
    fs.copyFileSync(vercelJsonSrc, vercelJsonDest);
    console.log('Copied vercel.json to main-site/dist/vercel.json');
}

console.log('--- VERCEL MULTI-PROJECT BUILD COMPLETED SUCCESSFULLY ---');
