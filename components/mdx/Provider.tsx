import { Components as MDXComponents, MDXProvider as OriginalMDXProvider } from "@mdx-js/react";
import BlockQuote from "components/mdx/BlockQuote";
import { CodeBlock, Pre } from "components/mdx/code";
import Note from "components/mdx/Note";
import { A, H1, H2, H3, H4, H5, InlineCode, Li, P, Ul } from "components/mdx/other";

const mdxComponents: MDXComponents & { Note: typeof Note } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	p: P,
	a: A,
	blockquote: BlockQuote,
	pre: Pre,
	code: CodeBlock,
	inlineCode: InlineCode,
	Note,
	ul: Ul,
	li: Li,
};

const MDXProvider: React.FC = ({ children }) => {
	return <OriginalMDXProvider components={mdxComponents}>{children}</OriginalMDXProvider>;
};

export default MDXProvider;
