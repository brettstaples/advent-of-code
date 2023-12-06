import { readFileSync } from "fs"

const data = readFileSync("input.txt", "utf-8");
let total = 0;
let count = 0;
for (const ch of data) {
  count++;
  if (ch === "(") {
    total++;
  } else {
    total--;
  }

  if (total === -1) {
    break;
  }
}

console.log(count);