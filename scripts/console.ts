import { Intl, Temporal } from "@js-temporal/polyfill";
import repl from "repl";

const r = repl.start();
r.context.dateTimeString = "2020-12-07T04:20-0500";
r.context.dateTimeStringWithTimeZoneExtension = "2020-12-07T04:20-0500[America/New_York]";
r.context.Temporal = Temporal;
r.context.Intl = Intl;
