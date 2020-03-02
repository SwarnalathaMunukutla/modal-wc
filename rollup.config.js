import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
// import babel from 'rollup-plugin-babel';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [{
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		babel({
            exclude: 'node_modules/**'
        }),
		resolve(), // tells Rollup how to find  node_modules
		commonjs(), // converts node modules to ES modules
		production && terser(), // minify, but only in production
	]
},
{
	input: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
	output: {
		file: 'public/polyfills.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find  node_modules
		commonjs(), // converts node modules to ES modules
		production && terser() // minify, but only in production
	]
}
]
;
