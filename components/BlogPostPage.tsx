import Page, { PageProps } from 'components/Page';
import { MDXProvider, H1 } from 'components/mdx';

type BlogPostPageProps = PageProps & { frontMatter: { title?: string; publishedAt?: string } };

const BlogPostPage: React.FC<BlogPostPageProps> = ({ frontMatter, children }) => {
	const title = frontMatter.title ?? '';
	// @ts-ignore
	const publishedAtDateObj = new Date(frontMatter.publishedAt ?? null);
	// const publishedAtText = publishedAtDateObj.get
	const publishedAtText = Intl.DateTimeFormat('en-US', {
		// @ts-ignore
		dateStyle: 'medium'
	}).format(publishedAtDateObj);
	// .replace(/^([A-Z][a-z]{2} \d{1,2}), \d+$/, '$1');

	return (
		<Page title={title}>
			<div
				className="w-full mx-auto pb-20"
				style={{ boxSizing: 'content-box', maxWidth: '78ch' /* three alphabets */ }}
			>
				<H1>{title}</H1>
				<p>{publishedAtText}</p>
				<MDXProvider>{children}</MDXProvider>
			</div>
		</Page>
	);
};

export default BlogPostPage;
