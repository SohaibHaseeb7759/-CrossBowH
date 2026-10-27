// Runs the Astro CLI from a path without "#".
// Vite cannot build from a directory whose path contains "#" (it is parsed as a URL fragment).
// If the project path contains "#", we create a symlink in the OS temp directory and run
// Astro through it. If you rename the folder to drop the "#", this simply runs Astro directly.
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, lstatSync, readlinkSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
let root = projectRoot;
const env = { ...process.env };

if (projectRoot.includes('#')) {
  const id = createHash('sha1').update(projectRoot).digest('hex').slice(0, 8);
  root = join(tmpdir(), `crossbowh-${id}`);
  const stale = existsSync(root) && (!lstatSync(root).isSymbolicLink() || readlinkSync(root) !== projectRoot);
  if (stale) rmSync(root, { recursive: false, force: true });
  if (!existsSync(root)) symlinkSync(projectRoot, root, 'dir');
  env.NODE_OPTIONS = [env.NODE_OPTIONS, '--preserve-symlinks', '--preserve-symlinks-main'].filter(Boolean).join(' ');
  env.CROSSBOWH_SYMLINK_ROOT = '1';
}

const cli = join(root, 'node_modules', 'astro', 'astro.js');
const child = spawn(process.execPath, [cli, ...args, '--root', root], { cwd: root, env, stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 1));
