// @ts-ignore
import resolve from 'rollup-plugin-node-resolve';
// @ts-ignore
import commonjs from 'rollup-plugin-commonjs';
// @ts-ignore
import sourceMaps from 'rollup-plugin-sourcemaps';
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json';

const pkg = require('./package.json');

export default {
  input: `src/index.ts`,
  output: [
    { file: pkg.main, format: 'umd', sourcemap: true, name: camelCase(pkg.name) },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    sourceMaps(),
  ],
}
