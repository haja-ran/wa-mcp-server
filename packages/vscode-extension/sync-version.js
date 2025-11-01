const fs = require('fs');
const path = require('path');

// Sync version with MCP package
function syncVersion() {
  const mcpPackagePath = path.join(__dirname, '..', 'mcp', 'package.json');
  const extensionPackagePath = path.join(__dirname, 'package.json');

  if (!fs.existsSync(mcpPackagePath)) {
    console.error('Error: MCP package.json not found');
    process.exit(1);
  }

  try {
    const mcpPackage = JSON.parse(fs.readFileSync(mcpPackagePath, 'utf8'));
    const extensionPackage = JSON.parse(fs.readFileSync(extensionPackagePath, 'utf8'));

    console.log(`MCP package version: ${mcpPackage.version}`);
    console.log(`VSCode extension version: ${extensionPackage.version}`);

    if (mcpPackage.version !== extensionPackage.version) {
      console.log(`Syncing version from ${extensionPackage.version} to ${mcpPackage.version}`);
      extensionPackage.version = mcpPackage.version;
      fs.writeFileSync(extensionPackagePath, JSON.stringify(extensionPackage, null, 2));
      console.log('✅ Version synced successfully');
    } else {
      console.log('✅ Versions already in sync');
    }
  } catch (error) {
    console.error('Error syncing version:', error.message);
    process.exit(1);
  }
}

syncVersion();