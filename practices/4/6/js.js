'use strict';

const checkAge = age => age > 18 || confirm('Родители разрешили?');

console.log(checkAge(20));
console.log(checkAge(15));