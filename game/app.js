const lienzo = document.querySelector('#lienzo');
const puntuacion = document.querySelector('#puntuacion');
const mejorP = document.querySelector('#mejorP');
const ctx = lienzo.getContext('2d');
ctx.font = "20px serif";

let bestScore = localStorage.getItem('bestScore')
    ? parseInt(localStorage.getItem('bestScore'), 10)
    : 0;

mejorP.innerText = bestScore;

const snake = [
    {
        x: 2,
        y: 1,
        show: function () {
            ctx.fillText('🐺', this.x * 20, this.y * 20);
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        show: function () {
            ctx.fillText('🐺', this.x * 20, this.y * 20);
        }
    },
    {
        x: 0,
        y: 1,
        xSig: 1,
        ySig: 1,
        show: function () {
            ctx.fillText('🐺', this.x * 20, this.y * 20);
        }
    },
]

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('🐔', this.x * 20, this.y * 20);
    },
    aparece: function () {
        //generar valores this.x y this.y alatorios
        this.x = Math.floor(Math.random() * 28);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
}

function checkEat() {
    let message = 0;
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({ ...snake[1] });
    }
    let mejorPuntuacion = snake.length;
    puntuacion.innerText = mejorPuntuacion;

    if (mejorPuntuacion > bestScore) {
        bestScore = mejorPuntuacion;
        mejorP.innerText = bestScore;
        localStorage.setItem('bestScore', bestScore);
    }
}

function colicion() {
    for (let i = 2; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert("PERDISTE ni modos");
            location.reload();
            break;
        }
    }
}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    })
}

let direction = 1;
let x = 2;
let y = 1;
food.aparece();
setInterval(() => {

    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat();
    colicion();

    if (direction === 1) x++;
    else if (direction == 2) y++;
    else if (direction == 3) x--;
    else y--;
    //validar limites

    if (x > 29) x = 0;
    if (x < 0) x = 29;
    if (y > 20) y = 1;
    if (y < 1) y = 20;

}, 100);

document.querySelector('body').addEventListener('keydown', e => {
    // Validar tecla y cambiar direction
    if (e.key === 'd' || e.key === 'ArrowRight') direction = 1;
    if (e.key === 's' || e.key === 'ArrowDown') direction = 2;
    if (e.key === 'a' || e.key === 'ArrowLeft') direction = 3;
    if (e.key === 'w' || e.key === 'ArrowUp') direction = 4;

})