import { Intl, Temporal } from "@js-temporal/polyfill";
import path from "path";
import repl from "repl";
import validator from "validator";
import z from "zod";

const r = repl.start();

r.context.dateTimeString = "2020-12-07T04:20-0500";
r.context.dateTimeStringWithTimeZoneExtension = "2020-12-07T04:20-0500[America/New_York]";
r.context.Intl = Intl;
r.context.path = path;
r.context.schema = z
	.object({
		title: z.string().nonempty(),
		intro: z.string().nonempty().optional(),
		publishedAt: z
			.string()
			.refine(
				(value) =>
					validator.isISO8601(value, { strict: true, strictSeparator: true }) &&
					value.includes("T"),
			),
	})
	.strict();
r.context.Temporal = Temporal;
r.context.validator = validator;
r.context.z = z;
