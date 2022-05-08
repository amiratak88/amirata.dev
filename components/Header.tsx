import Link from "next/link";

const Header: React.FC = () => {
	return (
		<div className="w-full flex items-baseline p-4">
			<p className="text2xl font-semibold uppercase tracking-widest">Amirata</p>
			<div className="ml-3 space-x-2">
				<Link href="/blog">Blog</Link>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</div>
	);
};

export default Header;
