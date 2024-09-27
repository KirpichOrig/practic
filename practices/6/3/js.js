'use strict';

let num = prompt("Введите цифру:");
let container = document.getElementById('container');

for (let i = 0; i < num; i++) {
  let block = document.createElement('div');
  block.textContent = `Блок ${i + 1}`;
  container.appendChild(block);
}