import Page from 'components/Page';

const Contact = () => {
	return (
		<Page title="Contact - Amirata">
			<div
				className="w-full mx-auto"
				style={{ boxSizing: 'content-box', maxWidth: '78ch' /* three alphabets */ }}
			>
				<h1 className="text-3xl font-bold mb-12">Contact</h1>
				<p className="text-lg text-indigo-400">Coming soon</p>
			</div>
		</Page>
	);
};

export default Contact;
