import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import copyToClipboard from "copy-to-clipboard";
import Highlight, { defaultProps, Language as PrismLanguage } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import withClassName from "utils/with-class-name";

const InlineCode: React.FCWithChildren = ({ children }) => (
	<code
		className="mx-1 rounded-md px-1 font-mono text-base"
		style={{ backgroundColor: "#d7b34829", color: "#ffef00d6", border: "2px solid #d7b348bd" }}
	>
		{children}
	</code>
);

const _CopyButton: React.FC<{ onClick: MouseEventHandler<HTMLButtonElement> }> = ({ onClick }) => {
	return (
		<button
			aria-label="Copy the code to clipboard"
			className={`invisible rounded-lg border-3 border-gray-700 px-2 py-1 text-gray-700 hover:border-gray-500 hover:text-gray-500 group-hover:visible`}
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
	children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, shouldShowLineNumbers }) => {
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
				<code className={`${className} group block overflow-auto whitespace-pre`} ref={ref}>
					<div
						role="alert"
						className={`absolute rounded-md border-2 border-green-400 bg-green-900 p-1.5 text-center font-sans text-green-400 transition-all duration-300 ${
							showCopySuccess ? "visible top-3 opacity-100" : "invisible top-5 opacity-0"
						} left-1/2 -translate-x-1/2 transform`}
					>
						Copied!
					</div>
					<CopyButton className="absolute top-3 right-3" onClick={onCopyButtonClick} />
					{tokens.map((line, i) => (
						<div
							key={i}
							{...getLineProps({ line, key: i })}
							className="prism-line code-line table-row"
						>
							{shouldShowLineNumbers && (
								<span className="table-cell select-none pr-4 text-right text-gray-700">
									{i + 1}
								</span>
							)}
							<span className="table-cell">
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</span>
						</div>
					))}
				</code>
			)}
		</Highlight>
	);
};

interface CodeProps {
	children: string;
	className?: string;
	nonumber?: boolean;
}

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
		<div className="relative mb-7 overflow-hidden whitespace-pre rounded-lg bg-black p-3">
			{children}
		</div>
	);
};
