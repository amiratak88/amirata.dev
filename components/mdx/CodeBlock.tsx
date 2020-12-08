import React from 'react';
import Highlight, { defaultProps, Language as PrismLanguage } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

type Props = {
	children: string;
	className: string;
	nonumber?: boolean;
};

const CodeBlock: React.FC<Props> = ({ children, className, nonumber = false }) => {
	const trimmedChildren = children.trim();
	const language = className.replace(/language-/, '');
	const numberColumnWidth = trimmedChildren.split(/\n/).length.toString().length;

	return (
		<div className="bg-black rounded-lg p-3 overflow-hidden mb-7">
			<Highlight
				{...defaultProps}
				theme={theme}
				code={trimmedChildren}
				language={language as PrismLanguage}
			>
				{({ className, tokens, getLineProps, getTokenProps }) => (
					<pre className={className + ' ' + 'overflow-auto'}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{!nonumber && (
									<span
										className="text-gray-700 text-right inline-block mr-4 select-none"
										style={{ width: `${numberColumnWidth}ch` }}
									>
										{i + 1}
									</span>
								)}
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};

export default CodeBlock;
