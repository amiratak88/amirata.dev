import { Temporal } from "@js-temporal/polyfill";
import BlogPreview from "components/BlogPreview";
import Page from "components/Page";
import ReadingContainer from "components/ReadingContainer";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

type Props = {
	blogs: {
		title: string;
		intro: string;
		slug: string;
		publishedAt: string;
	}[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const blogDirectory = path.join("pages", "blog");
	const paths = await readdir(blogDirectory);
	const frontMatters = (await Promise.all(
		paths
			.filter((p) => /\.mdx$/.test(p))
			.map(async (p) => ({
				content: await readFile(path.join(blogDirectory, p), "utf8"),
				path: p,
			})),
	).then((data) =>
		data.map((d) => {
			const frontMatter = matter(d.content).data;
			return {
				...frontMatter,
				title: frontMatter.title,
				intro: frontMatter.intro,
				publishedAt: frontMatter.publishedAt,
				__resourcePath: d.path,
				__scan: {},
			};
		}),
	)) as BlogFrontMatterWithMetadata[];

	const blogs = frontMatters
		.map((matter) => {
			return {
				title: matter.title,
				intro: matter.intro,
				publishedAt: matter.publishedAt,
				slug: matter.__resourcePath.replace(/^.*?([\w-]+)\.mdx$/, "$1"),
			};
		})
		.sort((a, b) => {
			const publishedAtA = Temporal.ZonedDateTime.from(a.publishedAt);
			const publishedAtB = Temporal.ZonedDateTime.from(b.publishedAt);

			return Temporal.ZonedDateTime.compare(publishedAtA, publishedAtB);
		})
		.map((blog) => ({ ...blog, publishedAt: blog.publishedAt.toString() }));

	return {
		props: { blogs },
	};
};

const Blog = ({ blogs }: Props) => {
	return (
		<Page title="Recent Blogs - Amirata">
			<ReadingContainer>
				<h1 className="text-3xl font-bold mb-12">Recent Blogs</h1>
				<div className="space-y-8">
					{blogs.map(({ title, intro, slug, publishedAt }) => (
						<BlogPreview
							slug={slug}
							key={slug}
							title={title}
							text={intro}
							publishedAt={publishedAt}
						/>
					))}
				</div>
			</ReadingContainer>
		</Page>
	);
};

export default Blog;
