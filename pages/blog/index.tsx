import { GetStaticProps, NextPage } from "next/types";
import { listSortedPostPreviews, PostPreview } from "utils/blog";

import BlogPostPreview from "components/BlogPostPreview";
import Page from "components/Page";
import ReadingContainer from "components/ReadingContainer";

interface Props {
	postPreviews: PostPreview[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const postPreviews = await listSortedPostPreviews();

	return {
		props: { postPreviews },
	};
};

const Blog: NextPage<Props> = ({ postPreviews }) => {
	return (
		<Page title="Recent Blogs - Amirata">
			<ReadingContainer>
				<h1 className="text-3xl font-bold mb-12">Recent Blogs</h1>
				<div className="space-y-8">
					{postPreviews.map((preview) => (
						<BlogPostPreview key={preview.slug} {...preview} />
					))}
				</div>
			</ReadingContainer>
		</Page>
	);
};

export default Blog;
