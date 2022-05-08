import type { RuleMetaData } from "@typescript-eslint/utils/dist/ts-eslint/Rule";

interface Message {
	ruleId: string;
	severity: 1 | 2;
	message: string;
	line: number;
	column: number;
	nodeType: string;
}

interface Result {
	filePath: string;
	messages: Message[];
	errorCount: number;
	warningCount: number;
	fixableErrorCount: number;
	fixableWarningCount: number;
	source: string;
	output?: string;
}

interface Context {
	cwd: string;
	rulesMeta: RuleMetaData<string>;
}

export type Formatter = (results: Result[], context: Context) => string;
