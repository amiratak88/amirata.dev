type FrontMatterMetadata = {
	__resourcePath: string;
	__scan: Record<string, string>;
};

export type BlogFrontMatter = {
	title: string;
	intro: string;
	publishedAt: string;
};

export type BlogFrontMatterWithMetadata = BlogFrontMatter & FrontMatterMetadata;
