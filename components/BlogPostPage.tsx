import Page, { PageProps } from 'components/Page';
import { MDXProvider } from 'components/mdx';

type BlogPostPageProps = PageProps;

const BlogPostPage: React.FC<BlogPostPageProps> = ({ title, children }) => {
	return (
		<Page title={title}>
			<div
				className="w-full mx-auto"
				style={{ boxSizing: 'content-box', maxWidth: '78ch' /* three alphabets */ }}
			>
				<div>
					<MDXProvider>{children}</MDXProvider>
				</div>
			</div>
		</Page>
	);
};

export default BlogPostPage;
