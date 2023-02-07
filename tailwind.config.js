const defaultTheme = /** @type {import('utils/types').TailwindCSSDefaultTheme} */ (
	require("tailwindcss/defaultTheme")
);

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./{pages,components}/**/*.tsx", "./posts/**/*.mdx"],
	theme: {
		extend: {
			fontFamily: { sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans] },
			borderWidth: { 3: "3px" },
			fontSize: { "10xl": ["10rem", "1"] },
			listStyleType: { circle: "circle", square: "square" },
		},
	},
};
