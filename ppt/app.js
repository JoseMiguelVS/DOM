//obtener datos de un conjunto o declarar variables
const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const imgCompu = document.querySelector('#choicecompu');
const resultado = document.querySelector('#result span');

const choices = Array.from(images).map(image => image.getAttribute);

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
    //pintar imagen de choices
    imgUser.src = imageUser;
    //llamar la funcion play
    play(choiceUser)
}
const getChoiseCompu = (e) => {
    const image = e.target;
    const choices = ['piedra', 'papel', 'tijeras'];
    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    const imageCompu = image.src;
    imgCompu.src = imageCompu;
    // play(choiceCompu);
}

const play = choiceUser => {
    const choiseUser = getChoiceUser;
    const choiceCompu = getChoiseCompu;
    let message = '';

    if (choiseUser == choiceCompu) {
        message = 'Empate';
    } else if (choiseUser === 'piedra' && choiceCompu === 'tijeras' ||
        choiseUser === 'papel' && choiceCompu === 'piedra' ||
        choiseUser === 'tijeras' && choiceCompu === 'papel') {
        message = 'ganaste'
    } else {
        message = 'perdiste'
    }
    resultado.innerText = message;
}

images.forEach(image => image.addEventListener('click', getChoiceUser));