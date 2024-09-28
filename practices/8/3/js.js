const block = document.getElementById("move__block");
let topPos = 240;
let leftPos = 240;

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === 'w') {
        topPos -= 1;
    } else if (key === 's') {
        topPos += 1;
    } else if (key === 'a') {
        leftPos -= 1;
    } else if (key === 'd') {
        leftPos += 1;
    }

    block.style.top = `${topPos}px`;
    block.style.left = `${leftPos}px`;
});