import { readdir, readFile } from "fs/promises";
import * as matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize as originalSerialize } from "next-mdx-remote/serialize";
import pathMod from "path";
import validator from "validator";
import z from "zod";

import { isoDatetimeCompare } from "./temporal";

const PostFrontmatterSchema = z
	.object({
		title: z.string().nonempty(),
		intro: z.string().nonempty().optional(),
		publishedAt: z.string().refine(
			// checking for `T` in the string along with `strictSeparator: true`
			// to ensure it's a datetime and not a date
			(value) =>
				validator.isISO8601(value, { strict: true, strictSeparator: true }) && value.includes("T"),
			"String must be a valid ISO8601 datetime",
		),
	})
	.strict();

type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>;

export interface SerializeResult extends MDXRemoteSerializeResult {
	frontmatter: PostFrontmatter;
}

export async function serialize(slug: string): Promise<SerializeResult> {
	const source = await readFile(pathMod.join("posts", `${slug}.mdx`), { encoding: "utf-8" });
	const mdxSource = await originalSerialize(source, { parseFrontmatter: true });

	PostFrontmatterSchema.parse(mdxSource.frontmatter);

	return mdxSource as SerializeResult;
}

export interface PostPreview extends PostFrontmatter {
	slug: string;
}

async function matterRead(fileName: string): Promise<matter.GrayMatterFile<string>> {
	return matter.read(pathMod.join("posts", fileName));
}

async function listPostFileNames(): Promise<string[]> {
	return (await readdir(pathMod.join("posts"), { withFileTypes: true }))
		.filter((e) => e.isFile() && e.name.endsWith(".mdx"))
		.map((e) => e.name);
}

export async function listSortedPostPreviews(): Promise<PostPreview[]> {
	const fileNames = await listPostFileNames();

	const matterFiles = await Promise.all(fileNames.map(matterRead));
	const postPreviews = matterFiles.map((mf) => {
		PostFrontmatterSchema.parse(mf.data);
		return {
			...(mf.data as PostFrontmatter),
			// @ts-expect-error TODO: fix gray-matter types
			slug: pathMod.parse(mf.path).name,
		};
	});

	const sortedPostPreviews = postPreviews.sort((a, b) =>
		isoDatetimeCompare(b.publishedAt, a.publishedAt),
	);

	return sortedPostPreviews;
}

export async function listSlugs(): Promise<string[]> {
	const fileNames = await listPostFileNames();
	return fileNames.map((fn) => pathMod.parse(fn).name);
}
