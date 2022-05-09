module.exports = {
	printWidth: 100,
	quoteProps: "consistent",
	trailingComma: "all",
	useTabs: true,

	/** TODO: Find a way to support "@trivago/prettier-plugin-sort-imports"
	 * Prettier doesn't support plugins. You can hack around it with the caveat that
	 * you can use only one plugin at a time. So I removed that plugin in favor of
	 * "prettier-plugin-tailwindcss" for now. 💡 Can we run prettier twice?
	 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
	 */
	// importOrder: ["^components\\/", "^[./]"],
	// importOrderSeparation: true,
	// importOrderSortSpecifiers: true,
	// importOrderCaseInsensitive: true,

	overrides: [
		{
			files: "*.mdx",
			options: {
				printWidth: 78,
			},
		},
	],
};
