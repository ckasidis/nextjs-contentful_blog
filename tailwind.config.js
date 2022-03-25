const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.rose,
				secondary: colors.blue,
				neutral: colors.gray,
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
