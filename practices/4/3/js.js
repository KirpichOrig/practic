'use strict';

let number;
do {
  number = +prompt("Введите число больше 10:", 0);
} while (number <= 10 && number !== null);
