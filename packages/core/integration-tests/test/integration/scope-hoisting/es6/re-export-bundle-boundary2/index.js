import t from "./library/components.js";

globalThis.output = import("./async.js").then((c) => [c.default, t().a]);
