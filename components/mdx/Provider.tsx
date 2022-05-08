import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "utils/types";

import BlockQuote from "components/mdx/BlockQuote";
import { Code, Pre } from "components/mdx/code";
import Note from "components/mdx/Note";
import { A, H1, H2, H3, H4, H5, Li, P, Ul } from "components/mdx/other";

const mdxComponents: MDXComponents = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	p: P,
	a: A,
	blockquote: BlockQuote,
	pre: Pre,
	code: Code,
	Note,
	ul: Ul,
	li: Li,
};

const MDXProvider: React.FC<MDXRemoteSerializeResult> = (source) => {
	return (
		// @ts-expect-error MDX component types are incorrect
		<MDXRemote {...source} components={mdxComponents} />
	);
};

export default MDXProvider;
