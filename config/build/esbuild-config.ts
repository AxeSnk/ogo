import { BuildOptions } from 'esbuild';
import path from 'path';

const mode = process.env.MODE || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments: string[]) {
  return path.resolve(__dirname, '../..', ...segments)
}

const config: BuildOptions = {
  outdir: resolveRoot('build'),
  entryPoints: [resolveRoot('src', 'index.tsx')],
  entryNames: 'bundle',
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: isProd,
  sourcemap: isDev,
}

export default config;
