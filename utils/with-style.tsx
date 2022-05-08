import * as React from "react";

type StylishFunctionComponent<T extends { [x: string]: any }> = React.FC<
	T & { style?: React.CSSProperties }
>;

// W wrapped
// E enhanced
const withStyle = <T extends { [x: string]: any }>(W: React.FC<T>): StylishFunctionComponent<T> => {
	const E: StylishFunctionComponent<T> = ({ style, ...wrappedProps }) => {
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
