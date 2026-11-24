// dev-excuse-prod — Make the AI Judge Laugh: Developer Excuses
// Competition: u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
// Writes one funny single-line developer excuse to /output/entry.txt.
//
// The chosen line won an internal draft-off of 10 candidates against the
// judge's five criteria (in order): on-topic excuse, a twist a developer
// recognises that reveals what really happened, authentic dev voice, lands
// fast with nothing to trim, and fresh. Runner-up was "It worked in staging
// because staging has one user, and his name is me." — the winner beats it
// on speed (two short beats, 66 chars) and on the twist: the evidence
// itself is the thing that's broken.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The logs say it's fine. The logs are also the thing that's broken.";

// Self-check the house gate before writing: 1–200 chars, one line, not
// only whitespace. Fail loudly here rather than shipping an invalid entry.
if (
  EXCUSE.length < 1 ||
  EXCUSE.length > 200 ||
  EXCUSE.includes("\n") ||
  /^\s*$/.test(EXCUSE)
) {
  throw new Error("excuse fails the gate: must be one line of 1-200 chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} chars to /output/entry.txt`);
