import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copyToClipboard from "copy-to-clipboard";
import Highlight, { defaultProps, Language as PrismLanguage } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import withClassName from "utils/withClassName";

const InlineCode: React.FCWithChildren = ({ children }) => (
	<code
		className="rounded-md px-1 mx-1 font-mono text-base"
		style={{ backgroundColor: "#d7b34829", color: "#ffef00d6", border: "2px solid #d7b348bd" }}
	>
		{children}
	</code>
);

const _CopyButton: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => {
	return (
		<button
			aria-label="Copy the code to clipboard"
			className={`rounded-lg invisible group-hover:visible border-gray-700 hover:border-gray-500 border-3 px-2 py-1 text-gray-700 hover:text-gray-500`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon="copy" size="lg" />
		</button>
	);
};

const CopyButton = withClassName(_CopyButton);

interface CodeBlockProps {
	language: string;
	shouldShowLineNumbers: boolean;
}

const CodeBlock: React.FCWithChildren<CodeBlockProps> = ({
	children,
	language,
	shouldShowLineNumbers,
}) => {
	const trimmedChildren = children.trim();
	const ref = useRef<HTMLDivElement>(null);
	const [showCopySuccess, setShowCopySuccess] = useState(false);

	// hide the message after a certain amount of time
	useEffect(() => {
		if (showCopySuccess) {
			const timeoutId = setTimeout(() => setShowCopySuccess(false), 1200);
			return () => clearTimeout(timeoutId);
		}
	}, [showCopySuccess]);

	const onCopyButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
		if (!ref.current) return;
		const text = Array.from(ref.current?.children)
			.filter((node) => node.className.includes("prism-line"))
			.map((node) => node.lastChild?.textContent ?? "")
			.join("\n");

		if (text) {
			copyToClipboard(text);
			setShowCopySuccess(true);
		}
	};

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={trimmedChildren}
			language={language as PrismLanguage}
		>
			{({ className, tokens, getLineProps, getTokenProps }) => (
				<code className={`${className} overflow-auto whitespace-pre block group`} ref={ref}>
					<div
						role="alert"
						className={`font-sans bg-green-900 text-green-400 border-2 border-green-400 absolute text-center p-1.5 rounded-md transition-all duration-300 ${
							showCopySuccess ? "top-3 opacity-100 visible" : "top-5 opacity-0 invisible"
						} left-1/2 transform -translate-x-1/2`}
					>
						Copied!
					</div>
					<CopyButton className="absolute top-3 right-3" onClick={onCopyButtonClick} />
					{tokens.map((line, i) => (
						<div {...getLineProps({ line, key: i })} className="prism-line table-row code-line">
							{shouldShowLineNumbers && (
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

type CodeProps = {
	children: string;
	className?: string;
	nonumber?: boolean;
};

export const Code: React.FCWithChildren<CodeProps> = ({
	children,
	className,
	nonumber = false,
}) => {
	if (className) {
		const shouldShowLineNumbers = !nonumber;
		const language = className.replace(/language-/, "");

		return <CodeBlock {...{ shouldShowLineNumbers, language }}>{children}</CodeBlock>;
	}

	return <InlineCode>{children}</InlineCode>;
};

export const Pre: React.FCWithChildren = ({ children }) => {
	return (
		<div className="bg-black rounded-lg p-3 overflow-hidden mb-7 whitespace-pre relative">
			{children}
		</div>
	);
};
