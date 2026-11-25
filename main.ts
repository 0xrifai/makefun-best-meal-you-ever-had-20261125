// make.fun entry: "The Best Meal You Ever Had"
// Writes one sentence (at most 200 characters) about the best meal
// the entrant ever had, to the absolute path /output/entry.txt.
//
// The sentence (161 characters): instant mie goreng eaten from the
// packet on a cold mountain summit at dawn, steam fogging the glasses
// while the sun rose over the clouds. No title, no explanation, no
// list of courses — one sentence that stands alone.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Six hours up a cold mountain, the best meal I ever had was instant mie goreng eaten from the packet, steam fogging my glasses while the sun rose over the clouds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
