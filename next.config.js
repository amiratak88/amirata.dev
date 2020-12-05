const withPlugins = require('next-compose-plugins');

const withMdxEnahcned = require('next-mdx-enhanced')({
	layoutPath: 'components/mdx-layouts',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	// remarkPlugins: [],
	// rehypePlugins: [],
	usesSrc: false
	// extendFrontMatter: {
	// 	process: (mdxContent, frontMatter) => {},
	// 	phase: 'prebuild|loader|both'
	// },
	// scan: {
	// 	pattern: /something/,
	// 	transform: (match) => {}
	// },
	// onContent: (mdxContent) => {},
	// reExportDataFetching: false
});

const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/blog',
				permanent: false
			}
		];
	},
	pageExtensions: ['tsx', 'mdx']
};

module.exports = withPlugins([withMdxEnahcned], nextConfig);
