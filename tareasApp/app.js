const inputTarea = document.getElementById('tareatxt');
const btnAdd = document.getElementById('addtarea');
const divTareas = document.getElementById('tareas');

const addTarea = () => {
    const tarea = inputTarea.value;
    divTareas.appendChild(createTarea(tarea)); //agregar un hijo, agregar
    inputTarea.value = '';
}

const deleteIteam = (e) => {
    const pa = e.target.parentElement; //accion de borrar
    pa.remove();
}

const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.addEventListener('click', deleteIteam); //se agrega la funcion del boton "eliminar"
    p.innerText = tarea; //Imprime lo que se ingresa por teclado
    button.innerText = 'Eliminar'; //agregar texto a un boton
    div.appendChild(p); //meter algo en otra cosa
    div.appendChild(button);
    return div;
}

btnAdd.addEventListener('click', addTarea);