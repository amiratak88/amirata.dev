module next {
	export type NextAPIHandler = (
		req: import("next").NextApiRequest,
		res: import("next").NextApiResponse,
	) => void;
}

// TODO: Find a better way to handle
type BlogFrontMatter = import("./blog").BlogFrontMatter;
type BlogFrontMatterWithMetadata = import("./blog").BlogFrontMatterWithMetadata;

namespace React {
	type FCWithChildren<P = {}> = FC<P & { children: React.ReactNode }>;
}
