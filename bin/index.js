#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const projectName = process.argv[2];

async function createProject() {
  if (!projectName) {
    console.error('❌ Please specify a project name:');
    console.log('  npm create @steijnveer/file-based-router my-app');
    console.log('  or');
    console.log('  npm create @steijnveer/file-based-router .');
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectName);
  
  if (fs.existsSync(targetDir) && projectName !== '.') {
    console.error(`❌ Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  if (projectName !== '.')
    await mkdir(targetDir, { recursive: true });

  console.log(`\n🚀 Creating a new file-based-router project in ${targetDir}\n`);

  const templateDir = path.join(__dirname, '../template');
  await copyDir(templateDir, targetDir);

  const pkgPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    pkg.name = projectName === '.' ? path.basename(targetDir) : projectName;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  }

  console.log('✅ Project created successfully!\n');
  console.log('📦 Next steps:');
  
  if (projectName !== '.')
    console.log(`  cd ${projectName}`);
  
  console.log('  npm install');
  console.log('  fbr dev\n');
}

async function copyDir(src, dest) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src);

  for (const entry of entries) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    const stats = await stat(srcPath);

    if (stats.isDirectory())
      await copyDir(srcPath, destPath);
    else {
      await copyFile(srcPath, destPath);
      console.log(`  📄 ${entry}`);
    }
  }
}

createProject().catch((error) => {
  console.error('❌ Error creating project:', error.message);
  process.exit(1);
});
