import * as React from 'react';

export const H1: React.FC = ({ children }) => (
	<h1 className="text-4xl font-extrabold text-indigo-400 mb-4">{children}</h1>
);
export const H2: React.FC = ({ children }) => (
	<h2 className="text-3xl font-extrabold text-indigo-400 mb-4">{children}</h2>
);
export const H3: React.FC = ({ children }) => (
	<h3 className="text-2xl font-extrabold text-indigo-400 mb-4">{children}</h3>
);
export const H4: React.FC = ({ children }) => (
	<h4 className="text-xl font-extrabold text-indigo-400 mb-4">{children}</h4>
);
export const H5: React.FC = ({ children }) => (
	<h5 className="text-lg font-extrabold text-indigo-400 mb-4">{children}</h5>
);
export const P: React.FC = ({ children }) => <p className="text-lg mb-7 leading-8">{children}</p>;
export const InlineCode: React.FC = ({ children }) => (
	<code
		className="rounded-md px-1 mx-1 font-mono text-base"
		style={{ backgroundColor: '#d7b34829', color: '#ffef00d6', border: '2px solid #d7b348bd' }}
	>
		{children}
	</code>
);
