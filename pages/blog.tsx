import Page from 'components/Page';
import BlogPreview from 'components/BlogPreview';

const blogs: Omit<Parameters<typeof BlogPreview>[0], 'children'>[] = [
	{
		title: 'Advent Of Code 2020 - Day 1',
		text:
			"In this blog, I'm going to explain my solution to advent of code 2020 - day 1 puzzle Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quis dolorem magni impedit numquam itaque odio. Culpa doloribus alias, fugiat, eligendi quaerat necessitatibus id ullam odit dolor omnis illum eveniet!...",
		slug: 'advent-of-code-2020-day-1'
	},
	{
		title: 'Advent Of Code 2020 - Day 2',
		text:
			"In this blog, I'm going to explain my solution to advent of code 2020 - day 2 puzzle Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam minima est assumenda iste dolorum iure voluptates, sequi labore ea exercitationem distinctio laboriosam itaque dolore veniam doloremque molestiae? Illum, quod necessitatibus....",
		slug: 'advent-of-code-2020-day-2'
	}
];

const Blog: React.FC = () => {
	return (
		<Page title="Blog - Amirata">
			<div
				className="w-full mx-auto"
				style={{ boxSizing: 'content-box', maxWidth: '78ch' /* three alphabets */ }}
			>
				<h1 className="text-3xl font-bold mb-12">Recent Blogs</h1>
				<div className="space-y-8">
					{blogs.map((blog) => (
						<BlogPreview {...blog} key={blog.slug} />
					))}
				</div>
			</div>
		</Page>
	);
};

export default Blog;
