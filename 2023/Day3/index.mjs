import { readFileSync } from 'fs';

function partOne() {
  const data = readFileSync('input.txt', 'utf-8');
  console.log(data);
}