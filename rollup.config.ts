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
const libraryName = 'there-is-another-one-todo-library';

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true, globals: { "lodash": "Lodash" } },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies)
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
