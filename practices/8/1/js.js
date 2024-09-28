'use strict';

document.getElementById("clickButton").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
    setTimeout(() => this.style.backgroundColor = "", 300);
});

document.getElementById("hoverButton").addEventListener("mouseover", function () {
    this.style.backgroundColor = "red";
});
document.getElementById("hoverButton").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
});

document.getElementById("dblClickButton").addEventListener("dblclick", function () {
    this.style.backgroundColor = "yellow";
    setTimeout(() => this.style.backgroundColor = "", 300);
});