import React from 'react';
import Highlight, { defaultProps, Language as PrismLanguage } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const CodeBlock: React.FC<{ children: string; className: string }> = ({ children, className }) => {
	const trimmedChildren = children.trim();
	const language = className.replace(/language-/, '');
	const numberColumnWidth = trimmedChildren.split(/\n/).length.toString().length;

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={trimmedChildren}
			language={language as PrismLanguage}
		>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<pre className={`${className} bg-black rounded-lg p-3 border-indigo-400 border-1 shad`}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })}>
							<span
								className="text-gray-700 text-right inline-block"
								style={{ width: `${numberColumnWidth}ch` }}
							>
								{i + 1}
							</span>
							{'   '}
							{line.map((token, key) => (
								<span {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
