/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animate'),
		require('@tailwindcss/typography')
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				purplelove1: '#cc2b5e',
				purplelove2: '#753a88',
				greenbeach1: '#02aab0',
				greenbeach2: '#00cdac',
			}
		}
	}
};

module.exports = config;
