import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/main.js',
    output: {
      file: './dist/LMSCalendar.js',
      format: 'umd',
    },
    plugins: [
      nodeResolve()
    ]
  },
];
