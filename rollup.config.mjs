import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
    input: 'tools/firebase/entry.js',
    output: {
        file: 'assets/libs/firebase-bundle.mjs',
        format: 'es',                 // Creator の ESM として読ませる
        inlineDynamicImports: true,   // 1ファイルに確実にまとめる
    },
    plugins: [
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        resolve({
            browser: true,                       // Node 用ではなく Web 用エントリを選ぶ（重要）
            exportConditions: ['browser', 'module', 'import'],
        }),
        commonjs(),
        terser(),                                // サイズ削減（デバッグ時は外す）
    ],
};