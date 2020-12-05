import Header from 'components/Header';
import Head from 'next/head';

export interface PageProps {
	title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
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
