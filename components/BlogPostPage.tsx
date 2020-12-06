import Page, { PageProps } from 'components/Page';
import { MDXProvider, H1 } from 'components/mdx';

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
			<div className="w-full mx-auto pb-20 px-3" style={{ maxWidth: '80ch' /* three alphabets */ }}>
				<p className="text-gray-500 text-sm text-right">{publishedAtText}</p>
				<H1>{title}</H1>
				<MDXProvider>{children}</MDXProvider>
			</div>
		</Page>
	);
};

export default BlogPostPage;
