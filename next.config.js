const withPlugins = require('next-compose-plugins');

const mdx = require('@next/mdx')({ extension: /\.mdx$/ });

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

module.exports = withPlugins([mdx], nextConfig);
