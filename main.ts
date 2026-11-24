// Entry for "Make the AI Judge Laugh: the Office Joke Open".
// Writes this entry's one office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I called a meeting about having too many meetings, and someone replied-all asking if it could have been an email.";

// One line, written exactly as-is: no trailing newline, so the gate
// counts precisely the joke and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
