import json from '@rollup/plugin-json';
import sveltePreprocess from 'svelte-preprocess';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
	input: './src/main.js',
	output: {
		file: './public/bundle.js',
		format: 'cjs',
	},
	plugins: [json(), sveltePreprocess(), nodeResolve(), commonjs],
};
