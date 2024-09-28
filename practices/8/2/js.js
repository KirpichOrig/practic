'use strict';
 
const originalColor = window.getComputedStyle(document.body).backgroundColor;

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.getElementById('btnR').addEventListener('mousedown', function() {
  changeBackgroundColor('red');
});
document.getElementById('btnG').addEventListener('mousedown', function() {
  changeBackgroundColor('green');
});
document.getElementById('btnB').addEventListener('mousedown', function() {
  changeBackgroundColor('blue');
});

document.getElementById('btnR').addEventListener('mouseup', function() {
  document.body.style.backgroundColor = originalColor;
});
document.getElementById('btnG').addEventListener('mouseup', function() {
  document.body.style.backgroundColor = originalColor;
});
document.getElementById('btnB').addEventListener('mouseup', function() {
  document.body.style.backgroundColor = originalColor;
});
