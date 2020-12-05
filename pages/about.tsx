import Page from 'components/Page';

const About = () => {
	return (
		<Page title="About - Amirata">
			<div
				className="w-full mx-auto"
				style={{ boxSizing: 'content-box', maxWidth: '78ch' /* three alphabets */ }}
			>
				<h1 className="text-3xl font-bold mb-12">About</h1>
				<p className="text-lg text-indigo-400">Coming soon</p>
			</div>
		</Page>
	);
};

export default About;
