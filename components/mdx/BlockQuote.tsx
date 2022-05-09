const BlockQuote: React.FCWithChildren = ({ children }) => {
	return (
		<blockquote className="mb-7 flex border-gray-500 py-4 italic text-gray-400 sm:ml-auto sm:w-4/5 sm:border-l-4">
			<p
				aria-hidden
				className="mr-2 h-16 w-16 -translate-x-6 -translate-y-8 transform text-10xl text-indigo-400 text-opacity-20"
			>
				&ldquo;
			</p>
			{children && typeof children === "object" && "props" in children
				? children.props.children
				: children}
		</blockquote>
	);
};

export default BlockQuote;
