import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One fortune cookie line for a trader who was just liquidated.
// The cookie's classic "lucky numbers" slot, filled with the trade itself:
// 125x leverage, gone in 3 minutes, balance left: 0.
const ENTRY =
  "Your lucky numbers are 125, 3, and 0: the leverage, the minutes, and the balance left.";
const MAX_CHARS = 160;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, over the ${MAX_CHARS} cap`);
}
if (ENTRY.trim().length === 0 || ENTRY.split(/\s+/).length > 20) {
  throw new Error("entry must be one line of 1-20 words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
