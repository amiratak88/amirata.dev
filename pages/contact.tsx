import { NextPage } from "next/types";

import Page from "components/Page";
import ReadingContainer from "components/ReadingContainer";

const Contact: NextPage = () => {
	return (
		<Page title="Contact - Amirata">
			<ReadingContainer>
				<h1 className="mb-12 text-3xl font-bold">Contact</h1>
				<p className="text-lg text-indigo-400">Coming soon</p>
			</ReadingContainer>
		</Page>
	);
};

export default Contact;
