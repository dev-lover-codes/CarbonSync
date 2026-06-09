import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Translate arguments: replace '--hostname' with '--host'
const rawArgs = process.argv.slice(2);
const modifiedArgs = rawArgs.map(arg => arg === '--hostname' ? '--host' : arg);

console.log(`[dev-wrapper] Intercepted CLI args: ${rawArgs.join(' ')}`);
console.log(`[dev-wrapper] Launching Vite with: ${modifiedArgs.join(' ')}`);

// Spawn local vite from node_modules
const vitePath = path.resolve(projectRoot, 'node_modules', '.bin', 'vite');
const child = spawn(vitePath, modifiedArgs, {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
