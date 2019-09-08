function addTarea(pTitulo, pPrioridad) {
    var nuevaTarea = {
        idTarea: contadorTareas,
        titulo: pTitulo,
        prioridad: pPrioridad
    }

    listaTareas.push(nuevaTarea);
    // console.log(listaTareas);
    contadorTareas++;
    return nuevaTarea;
}

function borrarTarea(pId) {
    //buscar que existe una tarea con idTarea se pId

    listaTareas = listaTareas.filter(function (tarea) {
        return tarea.idTarea != pId;
    })

    pintarTareas(listaTareas);
}

function filtraTareas(pPrioridad) {

    var listaTemporal = listaTareas.filter(function (tarea) {
        return tarea.prioridad == pPrioridad;
    });

    return listaTemporal;

}


function buscarTarea(pPalabra) {
    var busqueda = pPalabra.replace(/ /g, ""); //quito los espacios en blanco
    busqueda = busqueda.toLowerCase(); //lo paso a minusculas
    /*
        includes //funcion que busqueda una cadena contenenida en otra
        startsWidth //function que busca una cadena que empiece por otra
        endsWidth //function que busca una cadena que termine por otra

    */
    var listaTemporal = listaTareas.filter(function (tarea) {

        var mitarea = tarea.titulo.replace(/ /g, "").toLowerCase();

        return mitarea.includes(busqueda);
    });

    return listaTemporal;
}