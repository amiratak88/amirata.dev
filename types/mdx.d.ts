declare module '@mdx-js/react' {
	import * as React from 'react';
	type ComponentType =
		| 'a'
		| 'blockquote'
		| 'code'
		| 'del'
		| 'em'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'hr'
		| 'img'
		| 'inlineCode'
		| 'li'
		| 'ol'
		| 'p'
		| 'pre'
		| 'strong'
		| 'sup'
		| 'table'
		| 'td'
		| 'thematicBreak'
		| 'tr'
		| 'ul';
	export type Components = {
		[key in ComponentType]?: React.ComponentType<any>;
	};
	export interface MDXProviderProps {
		children: React.ReactNode;
		components: Components;
	}
	export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module '*.mdx' {
	export const frontMatter: BlogFrontMatter[];
}

type BlogFrontMatter = {
	title: string;
	publishedAt: string;
	intro: string;
	__resourcePath: string;
};

type BlogFrontMatterWithDate = Omit<BlogFrontMatter, 'publishedAt'> & {
	publishedAt: Date;
};
