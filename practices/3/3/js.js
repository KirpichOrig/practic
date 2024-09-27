'use strict';

let a = parseFloat(prompt("Введите число:"));
let b = parseFloat(prompt("Введите число:"));

let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);