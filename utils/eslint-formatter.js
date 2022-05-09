/**
 * Copied from NextJS ESLint formatter with minor modifications
 * @see https://github.com/vercel/next.js/blob/26459ef097b0dc9bae43d414a36e3c1eaa30aac1/packages/next/lib/eslint/customFormatter.ts
 */

const chalk = require("chalk");
const pathMod = require("path");

/** @type {import('./eslint-formatter').Formatter} */
module.exports = function eslintFormatter(results, context) {
	const incorrectResults = results.filter(
		({ errorCount, warningCount }) => errorCount + warningCount > 0,
	);
	if (!incorrectResults.length) return chalk.green("✔ No ESLint warnings or errors");

	let output = "\n";

	incorrectResults.forEach(({ filePath, messages }) => {
		let fileName = pathMod.posix.normalize(
			pathMod.relative(context.cwd, filePath).replace(/\\/g, "/"),
		);

		if (!fileName.startsWith(".")) {
			fileName = "./" + fileName;
		}

		output += chalk.cyan(fileName) + "\n";

		messages.forEach(({ message, severity, line, column, ruleId }) => {
			if (line && column) {
				output =
					output + chalk.yellow(line.toString()) + ":" + chalk.yellow(column.toString()) + "  ";
			}

			if (severity === 1) {
				output += chalk.yellow.bold("Warning") + ": ";
			} else {
				output += chalk.red.bold("Error") + ": ";
			}

			output += message;

			if (ruleId) {
				output += "  " + chalk.gray.bold(ruleId) + "\n";
			}
		});

		output += "\n";
	});

	return output;
};
