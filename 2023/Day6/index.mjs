import { readFileSync } from "fs"

function partOne() {
  const data = readFileSync("input.txt", "utf-8").replace(/\r/, "").replace(/ +/g, " ").split("\n");
  const time = data[0].split(" ").slice(1, data[0].length - 1).map(ch => parseInt(ch));
  const distance = data[1].split(" ").slice(1, data[1].length - 1).map(ch => parseInt(ch));
  let total = 1;
  let sum = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j <= time[i]; j++) {
      let speed = j;
      let totalDistance = speed * (time[i] - j);
      if (totalDistance > distance[i]) {
        sum++;
      }
    }

    total *= sum;
    sum = 0;
  }

  console.log(total);
}

partOne();