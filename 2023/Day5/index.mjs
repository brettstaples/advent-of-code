import { readFileSync } from "fs"

function partOne() {
  const data = readFileSync("input.txt", "utf-8").replace(/\r/g, "").split("\n").filter(ch => ch !== "");
  const check = "t";
  let arr = [];
  let lowest = Infinity;
  for (let i = 0; i < data.length; i++) {
    if (data[i].match(/seeds/)) {
      arr[0] = data[i].slice(7, data[i].length).split(" ");
      continue;
    }

    if (data[i].match(/seed-to-soil/)) {
      arr[1] = getArray(i+1, data, check);
    }

    if (data[i].match(/soil-to-fertilizer/)) {
      arr[2] = getArray(i+1, data, check);
    }
    
    if (data[i].match(/fertilizer-to-water/)) {
      arr[3] = getArray(i+1, data, check);
    }
    
    if (data[i].match(/water-to-light/)) {
      arr[4] = getArray(i+1, data, check);
    }
    
    if (data[i].match(/light-to-temperature/)) {
      arr[5] = getArray(i+1, data, check);
    }
    
    if (data[i].match(/temperature-to-humidity/)) {
      arr[6] = getArray(i+1, data, check);
    }
    
    if (data[i].match(/humidity-to-location/)) {
      let j = i + 1;
      let str = "";
      while (j < data.length) {
        str += data[j];
        str += " ";
        j++;
      }

      arr[7] = str.split(" ").filter(ch => ch !== "");
    }
  }

  for (let i = 0; i < arr[0].length; i++) {
    let index = i;
    let number = parseInt(arr[0][index]);
    for (let j = 1; j <= 7; j++) {
      number = seedNumber(number, arr, j);
      //console.log(number);
    }

    if (number < lowest) {
      lowest = number;
    }
  }

  console.log(lowest);

  function getArray(j, data, strToCheck) {
    let temp = "";
    while (!data[j].match(strToCheck)) {
      temp += data[j];
      temp += " ";
      j++
    }

    return temp.split(" ").filter(ch => ch !== "");
  }

  /**
   * 
   * @param {number} num This is the seed number
   * @param {number[][]} arr This is the full array to search through
   * @param {number} index This is the index of the array to look through
   * @returns 
   */
  function seedNumber(num, arr, index) {
    let count = 0;
    for (let i = 0; i < arr[index].length / 3; i++) {
        if (parseInt(arr[index][1 + count]) <= num && num < parseInt(arr[index][1 + count]) + parseInt(arr[index][2 + count])) {
          let temp = parseInt(arr[index][0 + count]) - parseInt(arr[index][1 + count]);
          return num + temp;
        }

        count += 3;
    }
    
    return num;
   }
 
}



partOne();