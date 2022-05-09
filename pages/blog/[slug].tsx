import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { listSlugs, serialize, SerializeResult } from "utils/blog";
import { formatZonedDateTime, zonedDateTimeFromISOString } from "utils/temporal";

import { H1 } from "components/mdx/other";
import MDXProvider from "components/mdx/Provider";
import Page from "components/Page";
import ReadingContainer from "components/ReadingContainer";

interface Props {
	source: SerializeResult;
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
	if (!params) throw Error("params is undefned");

	const mdxSource = await serialize(params.slug);
	return { props: { source: mdxSource } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
	const slugs = await listSlugs();

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
};

export const Blog: NextPage<Props> = ({ source }) => {
	const { title, publishedAt } = source.frontmatter;
	const publishedAtZonedDateTime = zonedDateTimeFromISOString(publishedAt);
	const formattedPublishedAt = formatZonedDateTime(publishedAtZonedDateTime, "A");

	return (
		<Page title={`${title} - Blog - Amirata`}>
			<ReadingContainer>
				<p className="text-gray-500 text-sm text-right">{formattedPublishedAt}</p>
				<H1>{title}</H1>
				<MDXProvider {...source} />
			</ReadingContainer>
		</Page>
	);
};

export default Blog;
