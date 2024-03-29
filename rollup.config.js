// Import rollup plugins
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { copy } from '@web/rollup-plugin-copy';
import minifyLiterals from 'rollup-plugin-minify-html-literals-v3';

export default {
    input: 'src/lms-calendar.ts',
    plugins: [
        resolve(),
        typescript(),
        minifyLiterals(),
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
        }),
        copy({
            patterns: ['images/**/*'],
        }),
    ],
    output: {
        format: 'esm',
        sourcemap: true,
        file: 'build/lms-calendar.bundled.js',
    },
    preserveEntrySignatures: 'strict',
};
