import * as React from 'react';

// W wrapped
// E enhanced
const withClassName = <T extends { [x: string]: any }>(W: React.FC<T>) => {
	const E: React.FC<T & { className?: string }> = ({ className, ...wrappedProps }) => {
		const elementsTree = W(wrappedProps as T);
		if (!elementsTree) return null;
		if (!className) return elementsTree;

		const newClassName = elementsTree.props.className
			? `${elementsTree.props.className} ${className}`
			: className;

		return React.cloneElement(
			elementsTree,
			{ ...elementsTree.props, className: newClassName },
			elementsTree.props.children
		);
	};

	return E;
};

export default withClassName;
