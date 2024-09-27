'use strict';

let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));

if (a > b) {
  [a, b] = [b, a];
}

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}
