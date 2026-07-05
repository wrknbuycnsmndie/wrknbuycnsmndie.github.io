import { promises as fs } from 'node:fs';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const distDir = process.argv[2] ?? 'dist';
const threshold = Number(process.env.PAGE_SIZE_LIMIT ?? 14 * 1024);

async function walk(dir, files = []) {
	for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(fullPath, files);
		} else if (entry.isFile() && entry.name.endsWith('.html')) {
			files.push(fullPath);
		}
	}
	return files;
}

const htmlFiles = await walk(distDir);
const rows = [];
let failed = false;

for (const file of htmlFiles) {
	const content = await fs.readFile(file);
	const size = gzipSync(content, { level: 9 }).length;
	rows.push({ file: path.relative(distDir, file), size });
	if (size > threshold) failed = true;
}

rows.sort((a, b) => b.size - a.size);

for (const row of rows) {
	const mark = row.size > threshold ? '✗' : '✓';
	console.log(`${mark} ${String(row.size).padStart(5)} B  ${row.file}`);
}

if (failed) {
	console.error(`\nSome pages exceed ${(threshold / 1024).toFixed(1)} KB gzipped.`);
	process.exit(1);
}

console.log(`\nAll pages are under ${(threshold / 1024).toFixed(1)} KB gzipped.`);
