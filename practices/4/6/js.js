'use strict';

let age = parseInt(prompt("Введите ваш возраст: "));

const checkAge = (age) => age < 18 || confirm("Родители разрешили?");
const checkAge2 = (age) => (age < 18 ? true : confirm("Родители разрешили?"));

checkAge();