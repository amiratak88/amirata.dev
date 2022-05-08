import * as React from "react";

// W wrapped
// E enhanced
const withStyle = <T extends { [x: string]: any }>(W: React.FC<T>) => {
	const E: React.FC<T & { style?: React.CSSProperties }> = ({ style, ...wrappedProps }) => {
		const elementsTree = W(wrappedProps as T);
		if (!elementsTree) return null;
		if (!style) return elementsTree;

		return React.cloneElement(
			elementsTree,
			{ ...elementsTree.props, style: { ...elementsTree.props.style, ...style } },
			elementsTree.props.children,
		);
	};

	return E;
};

export default withStyle;
