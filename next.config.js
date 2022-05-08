/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/blog",
				permanent: false,
			},
		];
	},
	pageExtensions: ["tsx", "mdx"],
};

module.exports = nextConfig;
