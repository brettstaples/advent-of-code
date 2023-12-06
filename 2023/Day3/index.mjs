import { readFileSync } from 'fs';

function partOne() {
  const data = readFileSync('input.txt', 'utf-8').replace(/\r/g, '');
  let arrData = data.split('\n');
  let total = 0;
  for (let i = 0; i < arrData.length; i++) {
    while (arrData[i].search(/[0-9]/g) !== -1) {
      let index = arrData[i].search(/[0-9]/);
      let number = arrData[i].match(/[0-9]+/);
      let newStr = "";
      if (checkToAdd(arrData, arrData[i], index, number[0], i)) {
        total += parseInt(number[0]);
      }

      for (let j = 0; j < number[0].length; j++) {
        newStr += ".";
      }
      
      let backStr = arrData[i].slice(0, index);
      let frontStr = arrData[i].slice(index + number[0].length, arrData[i].length);
      arrData[i] = backStr + newStr + frontStr;
    }
  }

  console.log(total);

  function checkToAdd(arr, arrElement, index, numStr, lineNumber) {
    for (let i = index - 1; i <= index + numStr.length; i++) {
      if (arr[lineNumber - 1] && arr[lineNumber - 1][i]?.match(/[^0-9\.]/)) {
        return true;
      }
     
      if (arr[lineNumber + 1] && arr[lineNumber + 1][i]?.match(/[^0-9\.]/)) {
        return true;
      }
    }

    if (arrElement[index - 1]?.match(/[^0-9\.]/) || arrElement[index + numStr.length]?.match(/[^0-9\.]/)) {
      return true;
    }

    return false;
  }
}

partOne();