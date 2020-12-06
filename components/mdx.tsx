import * as React from 'react';
import { MDXProvider as OriginalMDXProvider, Components as MDXComponents } from '@mdx-js/react';
import CodeBlock from 'components/CodeBlock';

export const H1: React.FC = ({ children }) => (
	<h1 className="text-4xl font-extrabold text-indigo-400 mb-4">{children}</h1>
);
const H2: React.FC = ({ children }) => (
	<h2 className="text-3xl font-extrabold text-indigo-400 mb-4">{children}</h2>
);
const H3: React.FC = ({ children }) => (
	<h3 className="text-2xl font-extrabold text-indigo-400 mb-4">{children}</h3>
);
const H4: React.FC = ({ children }) => (
	<h4 className="text-xl font-extrabold text-indigo-400 mb-4">{children}</h4>
);
const H5: React.FC = ({ children }) => (
	<h5 className="text-lg font-extrabold text-indigo-400 mb-4">{children}</h5>
);
const P: React.FC = ({ children }) => <p className="text-lg mb-7 leading-8">{children}</p>;
const InlineCode: React.FC = ({ children }) => (
	<code
		className="rounded-md px-1 mx-1 font-mono text-base"
		style={{ backgroundColor: '#d7b34829', color: '#ffef00d6', border: '2px solid #d7b348bd' }}
	>
		{children}
	</code>
);

const mdxComponents: MDXComponents = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	code: CodeBlock,
	p: P,
	inlineCode: InlineCode
};

export const MDXProvider: React.FC = ({ children }) => {
	return <OriginalMDXProvider components={mdxComponents}>{children}</OriginalMDXProvider>;
};
