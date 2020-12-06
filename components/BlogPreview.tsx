import * as React from 'react';
import Link from 'next/link';

interface BlogPreviewProps {
	title: string;
	text: string;
	slug: string;
	publishedAt: string;
	// updatedAt: string;
	// minutesToRead: number;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, text, slug, publishedAt }) => {
	const formattedPublishedAt = Intl.DateTimeFormat('en-US', {
		// @ts-ignore
		dateStyle: 'medium'
	}).format(new Date(publishedAt));

	return (
		<div>
			<div className="flex items-baseline mb-2">
				<h2 className="text-indigo-400 text-xl font-semibold">
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h2>
				<p className="text-gray-500 text-sm ml-auto">{formattedPublishedAt}</p>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default BlogPreview;
