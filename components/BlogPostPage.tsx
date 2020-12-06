import Page, { PageProps } from 'components/Page';
import { H1 } from 'components/mdx/other';
import MDXProvider from 'components/mdx/Provider';
import ReadingContainer from 'components/ReadingContainer';

type BlogPostPageProps = PageProps & { frontMatter: BlogFrontMatterWithDate };

const BlogPostPage: React.FC<BlogPostPageProps> = ({
	frontMatter: { title, publishedAt },
	children
}) => {
	const publishedAtText = Intl.DateTimeFormat('en-US', {
		// @ts-ignore
		dateStyle: 'medium'
	}).format(publishedAt);

	return (
		<Page title={`${title} - Blog - Amirata`}>
			<ReadingContainer>
				<p className="text-gray-500 text-sm text-right">{publishedAtText}</p>
				<H1>{title}</H1>
				<MDXProvider>{children}</MDXProvider>
			</ReadingContainer>
		</Page>
	);
};

export default BlogPostPage;
