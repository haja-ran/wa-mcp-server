const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// Create temp directory
const tempDir = path.join(os.tmpdir(), 'vscode-extension-package-' + Date.now());
fs.mkdirSync(tempDir, { recursive: true });

console.log(`Packaging in temp directory: ${tempDir}`);

// Files to copy
const filesToCopy = [
  'out',
  'package.json',
  'README.md',
  'LICENSE',
  'tsconfig.json'
];

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(tempDir, file);

  if (fs.existsSync(src)) {
    if (fs.statSync(src).isDirectory()) {
      // Copy directory recursively
      execSync(`cp -r "${src}" "${dest}"`);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
});

// Modify package.json to remove vscode:prepublish
const packageJsonPath = path.join(tempDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (packageJson.scripts && packageJson.scripts['vscode:prepublish']) {
    delete packageJson.scripts['vscode:prepublish'];
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }
}

// Run vsce package in temp directory
try {
  execSync('npx vsce package --allow-missing-repository', { 
    cwd: tempDir, 
    stdio: 'inherit' 
  });
  
  // Find the .vsix file and copy it back
  const files = fs.readdirSync(tempDir);
  const vsixFile = files.find(file => file.endsWith('.vsix'));
  
  if (vsixFile) {
    const srcVsix = path.join(tempDir, vsixFile);
    const destVsix = path.join(__dirname, vsixFile);
    fs.copyFileSync(srcVsix, destVsix);
    console.log(`Packaged extension: ${destVsix}`);
  }
} catch (error) {
  console.error('Packaging failed:', error.message);
  process.exit(1);
} finally {
  // Clean up temp directory
  try {
    fs.rmSync(tempDir, { recursive: true, force: true });
  } catch (e) {
    console.warn('Failed to clean up temp directory:', e.message);
  }
}