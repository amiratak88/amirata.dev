import Link from "next/link";
import { PostPreview } from "utils/blog";
import { formatZonedDateTime, zonedDateTimeFromISOString } from "utils/temporal";

const BlogPreview: React.FC<PostPreview> = ({ title, intro, slug, publishedAt }) => {
	const publishedAtZonedDateTime = zonedDateTimeFromISOString(publishedAt);
	const formattedPublishedAt = formatZonedDateTime(publishedAtZonedDateTime, "B");

	return (
		<div>
			<div className="mb-2 flex items-baseline">
				<h2 className="text-xl font-semibold text-indigo-400 hover:underline">
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h2>
				<p className="ml-auto whitespace-nowrap pl-10 text-sm text-gray-500">
					{formattedPublishedAt}
				</p>
			</div>
			{!!intro && <p>{intro}</p>}
		</div>
	);
};

export default BlogPreview;
