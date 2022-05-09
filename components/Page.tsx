import Head from "next/head";

import Header from "components/Header";

interface Props {
	title: string;
}

const Page: React.FCWithChildren<Props> = ({ title, children }) => {
	return (
		<div className="w-full">
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			{children}
		</div>
	);
};

export default Page;
