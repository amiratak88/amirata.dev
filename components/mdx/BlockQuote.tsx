import * as React from 'react';
import { P as _P } from 'components/mdx/other';
import withStyle from 'utils/withStyle';
const P = withStyle(_P);

const BlockQuote: React.FC = ({ children }) => {
	return (
		<blockquote className="mb-7 text-gray-400 italic border-gray-500 py-4 flex sm:w-4/5 sm:ml-auto sm:border-l-4">
			<p
				aria-hidden
				className="w-16 h-16 transform -translate-x-6 -translate-y-8 mr-2 text-indigo-400 text-opacity-20 text-10xl"
			>
				&ldquo;
			</p>
			<P style={{ marginBottom: 0 }}>
				{children && typeof children === 'object' && 'props' in children
					? children.props.children
					: children}
			</P>
		</blockquote>
	);
};

export default BlockQuote;
