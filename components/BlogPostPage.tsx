import Page, { PageProps } from 'components/Page';
import { MDXProvider, H1 as _H1 } from 'components/mdx';
import withClassName from 'utils/withClassName';
import withStyle from 'utils/withStyle';
const H1 = withStyle(withClassName(_H1));

type BlogPostPageProps = PageProps & { frontMatter: { title?: string; publishedAt?: Date } };

const BlogPostPage: React.FC<BlogPostPageProps> = ({
	frontMatter: { title = '', publishedAt },
	children
}) => {
	const publishedAtText = publishedAt
		? Intl.DateTimeFormat('en-US', {
				// @ts-ignore
				dateStyle: 'medium'
		  }).format(publishedAt)
		: '';

	return (
		<Page title={`${title} - Blog - Amirata`}>
			<div className="w-full mx-auto pb-20 px-3" style={{ maxWidth: '80ch' /* three alphabets */ }}>
				{!!publishedAtText && <p className="text-gray-500 text-sm text-right">{publishedAtText}</p>}
				<H1>{title}</H1>
				<MDXProvider>{children}</MDXProvider>
			</div>
		</Page>
	);
};

export default BlogPostPage;
