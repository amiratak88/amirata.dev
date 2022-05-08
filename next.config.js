const withPlugins = require('next-compose-plugins');

const withMdxEnahcned = require('next-mdx-enhanced')({
	layoutPath: 'components/mdx-layouts',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	// remarkPlugins: [],
	// rehypePlugins: [],
	usesSrc: false,
	extendFrontMatter: {
		/**
		 * this function extends the front matter. But we're also using
		 * it as a way to validate the required front matter keys for
		 * blog posts.
		 * @typedef { import('./types/blog').BlogFrontMatter } BlogFrontMatter
		 * @type { (mdxContent: string, frontMatter: Partial<BlogFrontMatter>) => BlogFrontMatter }
		 */
		process: (_mdxContent, frontMatter) => {
			return {
				...frontMatter,
				title: frontMatter.title,
				intro: frontMatter.intro,
				publishedAt: frontMatter.publishedAt
			};
		}
		// phase: 'prebuild|loader|both'
	}
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
// title: 'Advent of Code 2020 Day 1 Solution',
// intro: 'TypeScript code plus explanation',
// publishedAt: '2020-12-07T04:20-0500',
// __resourcePath: 'blog/aoc-2020-1.mdx'

// title: 'Advent of Code 2020 Day 3 Solution',
// intro: 'TypeScript code plus explanation',
// publishedAt: '2020-12-12T18:21-0500',
// __resourcePath: 'blog/aoc-2020-3.mdx',
// __scans: {}
