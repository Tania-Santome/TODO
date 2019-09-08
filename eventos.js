var contenedorTareas = document.querySelector('.tareas');

function pintarTareas(pListaTareas) {
    contenedorTareas.innerHTML = "";

    for (tarea of pListaTareas) {
        pintarUnaTarea(tarea);
    }

    if (pListaTareas.length == 0) {
        document.getElementById('notareas').style.display = "block";
    }
}


function pintarUnaTarea(pTarea) {
    //boton eliminar
    var btnEliminar = document.createElement('a');
    var textEliminar = document.createTextNode('Eliminar');
    btnEliminar.appendChild(textEliminar);

    btnEliminar.href = '#';
    btnEliminar.title = 'Eliminar';

    //setAtribute modifica cualquier atributo de html pasado por parametro // getAtribute lo lee
    btnEliminar.setAttribute('onclick', 'borrarTarea(' + pTarea.idTarea + ')');

    //titulo de la tarea
    var tituloTarea = document.createElement('h2');
    var textoTarea = document.createTextNode(pTarea.titulo);
    tituloTarea.appendChild(textoTarea);

    //articulo o tarea completa.

    var mitarea = document.createElement('article');
    mitarea.className = pTarea.prioridad;
    mitarea.dataset.id = pTarea.idTarea;

    mitarea.appendChild(tituloTarea);
    mitarea.appendChild(btnEliminar);

    contenedorTareas.appendChild(mitarea);
    document.getElementById('notareas').style.display = "none";
}

pintarTareas(listaTareas);

//capturar los elementos del formulario de insercion para añadir la tarea.

var btnGuardar = document.getElementById('guardar');

btnGuardar.addEventListener('click', recogerTarea);

function recogerTarea(e) {
    e.preventDefault();

    var titulo = document.getElementById('tituloTarea').value;
    var prioridad = document.getElementById('prioridad').value;

    if (titulo != "" && prioridad != "") {
        document.getElementById('mensaje').innerText = "";


        if (document.getElementById('selectprioridad') != "") {
            addTarea(titulo, prioridad)
            pintarTareas(listaTareas);
            document.getElementById('selectprioridad').value = "";

        }
        else {
            pintarUnaTarea(addTarea(titulo, prioridad));
        }


        document.getElementById('tituloTarea').value = "";
        document.getElementById('prioridad').value = "";

    }
    else {
        document.getElementById('mensaje').innerText = "Debes completar todos los campos";
    }
}

//filtros

var selector = document.getElementById('selectprioridad');

selector.addEventListener('change', recogerPrioridad);

function recogerPrioridad(e) {

    var prioridad = e.target.value;

    if (prioridad == "") {
        pintarTareas(listaTareas);
    }
    else {
        var listaFiltrada = filtraTareas(prioridad);
        pintarTareas(listaFiltrada);
    }


}

//busqueda

var buscador = document.getElementById('search');

buscador.addEventListener('input', recogerBusqueda);

function recogerBusqueda(e) {

    var palabraBuscar = e.target.value;

    // console.log(palabraBuscar);

    var listaBusqueda = buscarTarea(palabraBuscar);
    //console.log(listaBusqueda);

    pintarTareas(listaBusqueda);

}