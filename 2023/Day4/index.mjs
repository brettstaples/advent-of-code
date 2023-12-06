import { readFileSync } from "fs";

function partOne() {
  const data = readFileSync("input.txt", "utf-8").replace(/\r/g, "");
  const arrData = data.split("\n");
  let total = 0;

  for (let i = 0; i < arrData.length; i++) {
    let semiIndex = arrData[i].indexOf(": ") + 2;
    let strOfNums = arrData[i].slice(semiIndex, arrData[i].length);
    let pipeIndex = strOfNums.indexOf("|");
    let frontArr = strOfNums.slice(0, pipeIndex - 1).split(/ +/).filter(ch => ch !== "");
    let backArr = strOfNums.slice(pipeIndex + 2, strOfNums.length).split(/ +/).filter(ch => ch !== "");
    // console.log(backArr);
    console.log(arrData[i] + "\n", frontArr + "\n", backArr + "\n", i + "\n");
    let amount = 0;
    for (let j = 0; j < backArr.length; j++) {
      if (frontArr.includes(backArr[j])) {
        if (amount === 0) {
          amount++;
        } else {
          amount *= 2;
        }
      }
    }

    total += amount;
    // console.log(amount);
    // console.log(i);
    // console.log(arrData[i]);
  }

  console.log(total);
}

partOne();