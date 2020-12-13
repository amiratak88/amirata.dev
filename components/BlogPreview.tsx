import * as React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

interface BlogPreviewProps {
	title: string;
	text: string;
	slug: string;
	publishedAt: string;
	// updatedAt: string;
	// minutesToRead: number;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, text, slug, publishedAt }) => {
	const formattedPublishedAt = dayjs(publishedAt).format('MMM D, YY');

	return (
		<div>
			<div className="flex items-baseline mb-2">
				<h2 className="text-indigo-400 text-xl font-semibold hover:underline">
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h2>
				<p className="text-gray-500 text-sm ml-auto whitespace-nowrap pl-10">
					{formattedPublishedAt}
				</p>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default BlogPreview;
