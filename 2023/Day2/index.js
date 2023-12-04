import { readFileSync } from 'fs';

function partOne() {
  const data = readFileSync('input.txt', 'utf-8').replace(/\r/g, '');
  const lines = data.split('\n');
  
  //use .match and regular expressions
  let total = 0;
  for (let i = 0; i < lines.length; i++) {
    let id = lines[i].match(/[0-9]+/);
    let parsedId = parseInt(id);
    let isLower = 1;
    //console.log(trueId);

    let correctLine = lines[i].match(/[0-9]+ [brg]/g);
    if (correctLine === null) {
      continue;
    }

    for (let j = 0; j < correctLine.length; j++) {

      if (correctLine[j].match(/b/)) {
        if (parseInt(correctLine[j]) > 14) {
          isLower = 0;
        }

      } else if (correctLine[j].match(/g/)) {
        if (parseInt(correctLine[j]) > 13) {
          isLower = 0;
        }

      } else if (correctLine[j].match(/r/)) {
        if (parseInt(correctLine[j]) > 12) {
          isLower = 0;
        }
      }
    }

    if (isLower) {
      total += parsedId;
    } else {
      isLower = 1;
    }
  }

  console.log(total);

  function isSpace(value) {
    return value !== ' ';
  }

}

partOne();