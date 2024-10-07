const inputAlto = document.querySelector('#alto');
const inputAncho = document.querySelector('#ancho');
const inputRadio = document.querySelector('#radio');
const inputSombra1 = document.querySelector('#sombra1');
const inputSombra2 = document.querySelector('#sombra2');
const inputSombra3 = document.querySelector('#sombra3');
const div = document.querySelector('div');

//const

let alto = 0;
let ancho = 0;
let radio = 0;
let sombra1 = 0;
let sombra2 = 0;
let sombra3 = 0;

const cambiarAlto = () =>{
    return `${alto}px`;
}

inputAlto.addEventListener('change', (e) =>{
    alto = e.target.value; // lee los datos del range
    div.style.height = cambiarAlto();
});

const cambiarAncho = () =>{
    return `${ancho}px`;
}

inputAncho.addEventListener('change', (e) =>{
    ancho = e.target.value;
    div.style.width = cambiarAncho();
});

const cambiarRadio = () =>{
    return `${radio}px`;
}

inputRadio.addEventListener('change', (e) =>{
    radio = e.target.value;
    div.style.borderRadius = cambiarRadio();
});

const cambiarShadow = () =>{
    return `${sombra1}px ${sombra2}px ${sombra3}px`;
}

inputSombra1.addEventListener('change', (e)=>{
    sombra1 = e.target.value;
    div.style.boxShadow = cambiarShadow();
});
inputSombra2.addEventListener('change', (e)=>{
    sombra2 = e.target.value;
    div.style.boxShadow = cambiarShadow();
});
inputSombra3.addEventListener('change', (e)=>{
    sombra3 = e.target.value;
    div.style.boxShadow = cambiarShadow();
});