import {readFileSync} from "fs"

function partOne() {
  const myCards = {
    "A": 14,
    "K": 13,
    "Q": 12,
    "J": 11,
    "T": 10
  }

  const data = readFileSync("input.txt", "utf-8").replace(/\r/g, "");
  const lines = data.split("\n");
  let pointsArr = [];
  for (let index in lines) {
    let cards = lines[index].slice(0, 5).split("");
    let spaceIndex = lines[index].indexOf(" ");
    let points = parseInt(lines[index].slice(spaceIndex + 1, lines[index].length));
    let temp = cards.map(changeCards);
    let newCards = temp.map(ch => parseInt(ch));
    let scoreArr = getCardScore(newCards);
    console.log("hello " + scoreArr);
  }

  function changeCards(ch) {
    for (let entry in myCards) {
      if (ch === entry) {
        return myCards[entry]
      }
    }
    return ch 
  }

  function getCardScore(newCards) {
    let score = 0;
    //console.log(newCards);
    for (let i = 0; i < newCards.length; i++) {
      let temp = 0;
      for (let index in newCards) {
        if (newCards[index] === -1 || parseInt(index) === i) {
          continue;
        }

        if (newCards[i] === newCards[index]) {
          score++;
          temp++;
          newCards[index] = -1;
        }

        if (temp > 1) {
          for (let j = 1; j < temp; j++) {
            score++;
          }
        }
      }

      newCards[i] = -1;
    }

    return score;
  }
}

partOne();