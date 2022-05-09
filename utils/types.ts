export interface MDXComponents {
	[key: string]: React.ComponentType<any>;
}

// TODO: fix the types in DefinitelyTyped
export interface TailwindCSSDefaultTheme {
	fontFamily: { sans: string[] };
}
