import { H1, H2, H3, H4, H5, P, InlineCode, A } from 'components/mdx/other';
import CodeBlock from 'components/mdx/CodeBlock';
import Note from 'components/mdx/Note';
import BlockQuote from 'components/mdx/BlockQuote';
import { MDXProvider as OriginalMDXProvider, Components as MDXComponents } from '@mdx-js/react';

const mdxComponents: MDXComponents & { Note: typeof Note } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	code: CodeBlock,
	p: P,
	inlineCode: InlineCode,
	Note,
	blockquote: BlockQuote,
	a: A
};

const MDXProvider: React.FC = ({ children }) => {
	return <OriginalMDXProvider components={mdxComponents}>{children}</OriginalMDXProvider>;
};

export default MDXProvider;
