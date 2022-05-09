import * as React from "react";

type ClassyFunctionComponent<T extends { [x: string]: any }> = React.FC<T & { className?: string }>;

// W wrapped
// E enhanced
const withClassName = <T extends { [x: string]: any }>(
	W: React.FC<T>,
): ClassyFunctionComponent<T> => {
	const E: ClassyFunctionComponent<T> = ({ className, ...wrappedProps }) => {
		const elementsTree = W(wrappedProps as T);
		if (!elementsTree) return null;
		if (!className) return elementsTree;

		const newClassName = elementsTree.props.className
			? `${elementsTree.props.className} ${className}` // eslint-disable-line @typescript-eslint/restrict-template-expressions
			: className;

		return React.cloneElement(
			elementsTree,
			{ ...elementsTree.props, className: newClassName },
			elementsTree.props.children,
		);
	};

	return E;
};

export default withClassName;
