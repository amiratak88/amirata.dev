module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: ['./pages/**/*.tsx', './pages/**/*.mdx', './components/**/*.tsx'],
	// purge: {
	// 	enabled: true,
	// 	content: ['./pages/**/*.tsx', './pages/**/*.mdx', './components/**/*.tsx']
	// These options are passed through directly to PurgeCSS
	// options: {
	// 	safelist: ['bg-red-500', 'px-4'],
	// }
	// },
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'"IBM Plex Sans"',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				]
			}
		}
	},
	variants: {
		margin: ({ after }) => after(['first', 'last'])
	},
	plugins: []
};
