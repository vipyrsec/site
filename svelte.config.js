import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},

			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],

			smartypants: {
				dashes: 'oldschool'
			},

			remarkPlugins: [],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-gh-pages' : ''
		}
	}
};

export default config;
