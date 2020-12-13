import Header from 'components/Header';
import Head from 'next/head';

type Props = {
	title: string;
};

const Page: React.FC<Props> = ({ title, children }) => {
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
