import Link from "next/link";
import { PostPreview } from "utils/blog";
import { formatZonedDateTime, zonedDateTimeFromISOString } from "utils/temporal";

const BlogPreview: React.FC<PostPreview> = ({ title, intro, slug, publishedAt }) => {
	const publishedAtZonedDateTime = zonedDateTimeFromISOString(publishedAt);
	const formattedPublishedAt = formatZonedDateTime(publishedAtZonedDateTime, "B");

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
			{!!intro && <p>{intro}</p>}
		</div>
	);
};

export default BlogPreview;
