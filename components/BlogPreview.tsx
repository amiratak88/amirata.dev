import { Intl, Temporal } from "@js-temporal/polyfill";
import Link from "next/link";
import * as React from "react";

interface BlogPreviewProps {
	title: string;
	text: string;
	slug: string;
	publishedAt: string;
	// updatedAt: string;
	// minutesToRead: number;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, text, slug, publishedAt }) => {
	const publishedAtTemporal = Temporal.ZonedDateTime.from(publishedAt);
	const zonedPublishedAtTemporal = publishedAtTemporal.withTimeZone(Temporal.Now.timeZone());
	const formattedPublishedAt = Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(zonedPublishedAtTemporal);

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
