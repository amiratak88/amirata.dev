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
		<Page title="Recent Posts - Amirata">
			<ReadingContainer>
				<h1 className="mb-12 text-3xl font-bold">Recent Posts</h1>
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
