/**
 * @type {import('next').NextConfig}
 */
module.exports = {
	eslint: { ignoreDuringBuilds: true },
	async redirects() {
		return [
			{
				source: "/",
				destination: "/blog",
				permanent: false,
			},
		];
	},
	typescript: { ignoreBuildErrors: true },
};
