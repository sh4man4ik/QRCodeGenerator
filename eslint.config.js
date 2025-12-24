import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],

		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
				project: './tsconfig.json'
			},
			globals: {
				console: 'readonly',

				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				location: 'readonly',
				history: 'readonly',
				screen: 'readonly',

				localStorage: 'readonly',
				sessionStorage: 'readonly',
				indexedDB: 'readonly',

				alert: 'readonly',
				confirm: 'readonly',
				prompt: 'readonly',

				fetch: 'readonly',
				Headers: 'readonly',
				Request: 'readonly',
				Response: 'readonly',

				Audio: 'readonly',
				Image: 'readonly',
				FileReader: 'readonly',
				File: 'readonly',
				Blob: 'readonly',
				MediaSource: 'readonly',
				MediaStream: 'readonly',

				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				setImmediate: 'readonly',
				clearImmediate: 'readonly',
				requestAnimationFrame: 'readonly',
				cancelAnimationFrame: 'readonly',

				Event: 'readonly',
				CustomEvent: 'readonly',
				MouseEvent: 'readonly',
				KeyboardEvent: 'readonly',
				EventTarget: 'readonly',
				addEventListener: 'readonly',
				removeEventListener: 'readonly',
				dispatchEvent: 'readonly',

				MutationObserver: 'readonly',
				IntersectionObserver: 'readonly',
				ResizeObserver: 'readonly',
				PerformanceObserver: 'readonly',

				URL: 'readonly',
				URLSearchParams: 'readonly',
				encodeURIComponent: 'readonly',
				decodeURIComponent: 'readonly',
				encodeURI: 'readonly',
				decodeURI: 'readonly',
				btoa: 'readonly',
				atob: 'readonly',

				crypto: 'readonly',

				globalThis: 'readonly',
				structuredClone: 'readonly',
				queueMicrotask: 'readonly',

				describe: 'readonly',
				it: 'readonly',
				test: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				expect: 'readonly',
				jest: 'readonly',

				require: 'readonly',
				module: 'readonly',
				exports: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				Buffer: 'readonly',
				global: 'readonly',

				React: 'readonly',
				JSX: 'readonly',

				ObjectId: 'readonly'
			}
		},

		plugins: {
			'@typescript-eslint': tsPlugin
		},

		rules: {
			semi: ['error', 'always'],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-undef': 'warn',
			'prefer-const': 'off'
		}
	}
];
