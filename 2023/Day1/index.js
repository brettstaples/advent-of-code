// const str = "brettBRETT1125";
// console.log(str);
// const replaced = str.replace(/[^0-9]/g, "s"); // returns a string
// console.log(replaced);

// const matches = str.match(/[A-Z]+/g); // returns array or null
// console.log(matches);

// const x = [ 1, 2, 3 ];
// const numStr = x.reduce((acc, next) => acc += next.toString());
// const number = parseInt(numStr);
// console.log(number);

// // series of at least one lower case letter followed by either an underscore, space or nothing and then followed by another series of at least one lower case letter

// const arr = ["ABC", "a_b", "ab cd", "ab", "A b", "a_B"];
// const result = [];
// for (const s of arr) {
//   if (s.match(/[a-z]+[_ ]?[a-z]+/)) {
//     result.push(s);
//   }
// }
// console.log(result);

// const oneWord = result.join("");
// console.log(oneWord);

// const y = [1, 2, 3];
// console.log(y.map(n => n.toString()).join(""));
import { readFileSync } from 'fs';

function partOne() {
  const data = readFileSync('input.txt', 'utf-8');
  const lines = data.split("\n");
  const number = lines.map(a => a.split());
  let totalSum = 0;
  for (let i = 0; i < number.length; i++) {
    let string = '';
    for (let j = 0; j < lines[i].length - 1; j++) {
      if (isNumber(lines[i][j])) {
        string += lines[i][j];
        break;
      }
    }

    for (let k = lines[i].length - 1; k >= 0; k--) {
      if (isNumber(lines[i][k])) {
        string += lines[i][k];
        break;
      }
    }

    let numberToAdd = parseInt(string);
    totalSum += numberToAdd;
  }

  console.log(totalSum);

  function isNumber(value) {
    return value.match(/[0-9]/);
  }
}

function partTwo() {

}


partOne();
partTwo();