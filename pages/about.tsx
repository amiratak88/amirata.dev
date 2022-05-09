import { NextPage } from "next/types";

import Page from "components/Page";
import ReadingContainer from "components/ReadingContainer";

const About: NextPage = () => {
	return (
		<Page title="About - Amirata">
			<ReadingContainer>
				<h1 className="mb-12 text-3xl font-bold">About</h1>
				<p className="text-lg text-indigo-400">Coming soon</p>
			</ReadingContainer>
		</Page>
	);
};

export default About;
