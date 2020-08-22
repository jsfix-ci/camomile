import ts from '@wessberg/rollup-plugin-ts';

const pkg = require('./package.json');

export default [
  {
    input: './src/camomile.ts',
    output: [
      {
        exports: 'named',
        format: 'cjs',
        file: pkg.main,
      },
      {
        exports: 'named',
        format: 'esm',
        file: pkg.module,
      },
    ],
    plugins: [
      ts(),
    ],
  },
  {
    input: './src/cli.ts',
    output: [
      {
        format: 'cjs',
        file: pkg.bin.camomile,
      },
    ],
    plugins: [
      ts({
        tsconfig: (config) => ({ ...config, declaration: false }),
      }),
    ],
  }];
