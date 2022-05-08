import Link from "next/link";

export const H1: React.FCWithChildren = ({ children }) => (
	<h1 className="text-4xl font-extrabold text-indigo-400 mb-4">{children}</h1>
);
export const H2: React.FCWithChildren = ({ children }) => (
	<h2 className="text-3xl font-extrabold text-indigo-400 mb-4">{children}</h2>
);
export const H3: React.FCWithChildren = ({ children }) => (
	<h3 className="text-2xl font-extrabold text-indigo-400 mb-4">{children}</h3>
);
export const H4: React.FCWithChildren = ({ children }) => (
	<h4 className="text-xl font-extrabold text-indigo-400 mb-4">{children}</h4>
);
export const H5: React.FCWithChildren = ({ children }) => (
	<h5 className="text-lg font-extrabold text-indigo-400 mb-4">{children}</h5>
);
export const P: React.FCWithChildren = ({ children }) => (
	<p className="text-lg mb-7 last:mb-0 leading-8">{children}</p>
);
export const A: React.FCWithChildren<{ href: string }> = ({ children, href }) => {
	const isExternal = href.startsWith("http"); // TODO: this logic can be improved
	const className = "text-yellow-400 hover:underline";

	return isExternal ? (
		<a href={href} className={className} target="_blank">
			{children}
		</a>
	) : (
		<span className={className}>
			<Link href={href}>{children}</Link>
		</span>
	);
};
export const Ul: React.FCWithChildren = ({ children }) => <ul className="mdx-ul">{children}</ul>;
export const Li: React.FCWithChildren = ({ children }) => <li className="mdx-li">{children}</li>;
