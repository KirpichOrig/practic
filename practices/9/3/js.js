'use strict';

let numberOfBlocks = prompt("Введите количество блоков:", 0);
numberOfBlocks = parseInt(numberOfBlocks);

for (let i = 0; i < numberOfBlocks; i++) {
  let block = document.createElement("div");
  block.textContent = `Блок ${i + 1}`;
  document.body.appendChild(block);
}