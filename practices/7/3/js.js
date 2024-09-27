'use strict';

document.getElementById('toggleBtn').onclick = function() {
  const textDiv = document.getElementById('text');
  if (textDiv.style.display === 'none') {
    textDiv.style.display = 'block';
  } else {
    textDiv.style.display = 'none';
  }
};