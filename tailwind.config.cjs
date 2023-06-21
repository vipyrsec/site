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
					primary: '#DCC388',
					secondary: '#192022',
					accent: '#B2CCE3',
					neutral: '#003D96',
					'base-100': '#DCC388',
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
