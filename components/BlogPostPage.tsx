import Page from 'components/Page';
import { H1 } from 'components/mdx/other';
import MDXProvider from 'components/mdx/Provider';
import ReadingContainer from 'components/ReadingContainer';
import { Temporal, Intl } from '@js-temporal/polyfill';

const BlogPostPage: React.FC<{ frontMatter: BlogFrontMatterWithMetadata }> = ({
	frontMatter: { title, publishedAt },
	children
}) => {
	const publishedAtTemporal = Temporal.ZonedDateTime.from(publishedAt);
	const zonedPublishedAtTemporal = publishedAtTemporal.withTimeZone(Temporal.Now.timeZone());
	const formattedPublishedAt = Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric'
	}).format(zonedPublishedAtTemporal);

	return (
		<Page title={`${title} - Blog - Amirata`}>
			<ReadingContainer>
				<p className="text-gray-500 text-sm text-right">{formattedPublishedAt}</p>
				<H1>{title}</H1>
				<MDXProvider>{children}</MDXProvider>
			</ReadingContainer>
		</Page>
	);
};

export default BlogPostPage;
