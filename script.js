window.addEventListener('load', main);
let circle;
let position = {
    left:50,
    top:50
};
const step =4;

function main() {
    circle = document.querySelector('.circle');
    document.addEventListener('keydown', moveCircle);
    renderCircleAtPosition();
}

function moveCircle(event) {
    updatePosition(event.key);
    renderCircleAtPosition();
}

function updatePosition(key) {
    switch(key) {
        case 'ArrowLeft':
            position.left -= step;
            break;
        case 'ArrowRight':
            position.left += step;
            break;
        case 'ArrowUp':
            position.top -= step;
            break;
        case 'ArrowDown':
            position.top += step;
            break;
    }
}

function renderCircleAtPosition() {
    circle.style.left = position.left + '%';
    circle.style.top = position.top + '%';
}
