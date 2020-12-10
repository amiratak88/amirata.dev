const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: ['./pages/**/*.tsx', './pages/**/*.mdx', './components/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: { sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans] },
			borderWidth: { 3: '3px' },
			fontSize: { '10xl': ['10rem', '1'] }
		}
	},
	variants: {
		margin: ({ after }) => after(['first', 'last']),
		visibility: ({ after }) => after(['group-hover'])
	},
	plugins: []
};
