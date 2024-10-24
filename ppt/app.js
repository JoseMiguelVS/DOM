const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceuser');
const imgCompu = document.querySelector('#choicecompu');
const resultado = document.querySelector('#result h1 span');

const choices = Array.from(images).map(image => image.getAttribute('data-id'));

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src;
    imgUser.src = imageUser;
    play(choiceUser);
}

const play = (choiceUser) => {
    const choiceCompu = choices[Math.floor(Math.random() * choices.length)];
    imgCompu.src = `${choiceCompu}.png`; // Ajusta esta ruta según tus imágenes
    let message = '';

    if (choiceUser === choiceCompu) {
        message = 'Empate';
    } else if (
        (choiceUser === 'piedra' && choiceCompu === 'tijeras') ||
        (choiceUser === 'papel' && choiceCompu === 'piedra') ||
        (choiceUser === 'tijeras' && choiceCompu === 'papel')
    ) {
        message = 'Ganaste';
    } else {
        message = 'Perdiste';
    }

    resultado.innerText = message;
}

images.forEach(image => image.addEventListener('click', getChoiceUser));
