import * as React from 'react';

const ReadingContainer: React.FC = ({ children }) => {
	return (
		<div className="w-full mx-auto pb-20 px-3" style={{ maxWidth: '83ch' /* three alphabets */ }}>
			{children}
		</div>
	);
};

export default ReadingContainer;
