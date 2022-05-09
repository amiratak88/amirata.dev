const ReadingContainer: React.FCWithChildren = ({ children }) => {
	return (
		<div className="mx-auto w-full px-3 pb-20" style={{ maxWidth: "83ch" /* three alphabets */ }}>
			{children}
		</div>
	);
};

export default ReadingContainer;
