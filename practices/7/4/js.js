'use strict';

const ball = document.getElementById('ball');

document.onclick = function(event) {
  const ballSize = ball.offsetWidth / 2;
  const targetX = event.clientX - ballSize;
  const targetY = event.clientY - ballSize;

  ball.style.transition = 'left 0.5s ease, top 0.5s ease';
  ball.style.left = targetX + 'px';
  ball.style.top = targetY + 'px';
};