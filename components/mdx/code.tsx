import React from 'react';
import Highlight, { defaultProps, Language as PrismLanguage } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = {
	children: string;
	className: string;
	nonumber?: boolean;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, nonumber = false }) => {
	const trimmedChildren = children.trim();
	const language = className.replace(/language-/, '');

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={trimmedChildren}
			language={language as PrismLanguage}
		>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<code className={`${className} overflow-auto whitespace-pre block`}>
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })} className="table-row code-line">
							{!nonumber && (
								<span className="text-gray-700 table-cell text-right pr-4 select-none">
									{i + 1}
								</span>
							)}
							<span className="table-cell">
								{line.map((token, key) => (
									<span {...getTokenProps({ token, key })} />
								))}
							</span>
						</div>
					))}
				</code>
			)}
		</Highlight>
	);
};

export const Pre: React.FC = ({ children }) => {
	return (
		<div className="bg-black rounded-lg p-3 overflow-hidden mb-7 whitespace-pre">{children}</div>
	);
};
