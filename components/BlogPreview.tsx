import * as React from 'react';
import Link from 'next/link';

interface BlogPreviewProps {
	title: string;
	// subtitle?: string;
	text: string;
	slug: string;
	// publishedAt: string;
	// updatedAt: string;
	// minutesToRead: number;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, text }) => {
	return (
		<div>
			<h2 className="text-indigo-400 text-xl font-semibold mb-2">{title}</h2>
			<p>{text}</p>
		</div>
	);
};

export default BlogPreview;
