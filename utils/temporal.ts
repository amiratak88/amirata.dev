import { Intl, Temporal } from "@js-temporal/polyfill";

export function zonedDateTimeFromISOString(value: string): Temporal.ZonedDateTime {
	const instant = Temporal.Instant.from(value);
	const zonedDateTime = instant.toZonedDateTime({
		timeZone: Temporal.Now.timeZone(),
		calendar: "iso8601",
	});

	return zonedDateTime;
}

const knownFormatOptions = {
	A: {
		month: "long",
		day: "numeric",
		year: "numeric",
	},
	B: {
		month: "short",
		day: "numeric",
		year: "numeric",
	},
} as const;

export function formatZonedDateTime(
	zonedDateTime: Temporal.ZonedDateTime,
	formatOptionsOrId: keyof typeof knownFormatOptions | Intl.DateTimeFormatOptions,
): string {
	const formatOptions =
		typeof formatOptionsOrId === "string"
			? knownFormatOptions[formatOptionsOrId]
			: formatOptionsOrId;

	return Intl.DateTimeFormat("en-US", formatOptions).format(zonedDateTime);
}

export function isoDatetimeCompare(a: string, b: string): Temporal.ComparisonResult {
	return Temporal.Instant.compare(Temporal.Instant.from(a), Temporal.Instant.from(b));
}
