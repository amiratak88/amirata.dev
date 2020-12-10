import * as React from 'react';
import { P as _P, InlineCode } from 'components/mdx/other';
import withStyle from 'utils/withStyle';
const P = withStyle(_P);

type Props = {
	type?: 'success' | 'info' | 'warning' | 'danger';
};

const typeColorsMap: Record<NonNullable<Props['type']>, [string, string]> = {
	success: ['#0d2726', '#00cc88'],
	info: ['rgb(28, 53, 79)', 'rgb(9, 125, 196)'],
	warning: ['#272318', '#ff8000'],
	danger: ['#271b18', '#ff0000']
};

const transformString = (str: string): React.ReactNode => {
	const result = [];
	let openIdx = 0;
	let openTick = false;
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (char === '`') {
			const strSlice = str.slice(openIdx, i);
			if (openTick) {
				result.push(InlineCode({ children: strSlice }));
				openTick = false;
			} else {
				result.push(strSlice);
				openTick = true;
			}
			openIdx = i + 1;
		}
	}

	if (openIdx < str.length - 1) {
		result.push(str.slice(openIdx));
	}

	return result;
};

const transformChildren = (children: React.ReactNode): React.ReactNode => {
	if (typeof children === 'string') {
		return transformString(children);
	}

	if (Array.isArray(children)) {
		return children.map((child) => (typeof child === 'string' ? transformString(child) : child));
	}

	return children;
};

const Note: React.FC<Props> = ({ children, type = 'info' }) => {
	const [backgroundColor, borderColor] = typeColorsMap[type];

	return (
		<aside
			className="p-6 mb-7 border"
			style={{
				backgroundColor,
				borderColor,
				borderRadius: '20px'
			}}
		>
			<P style={{ marginBottom: 0 }}>{transformChildren(children)}</P>
		</aside>
	);
};

export default Note;
