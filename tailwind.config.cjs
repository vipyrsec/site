/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			{
				default: {
					primary: '#1D4249',
					secondary: '#192022',
					accent: '#003D96',
					neutral: '#B2CCE3',
					'base-100': '#1D4249',
					info: '#60AFFF',
					success: '#329F5B',
					warning: '#BF4E30',
					error: '#FF715B'
				}
			}
		]
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
