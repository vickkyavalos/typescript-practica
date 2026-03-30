// Declara un array de strings llamado tareas. Crea una función agregarTarea que reciba una nueva tarea y la añada al array, pero solo si la tarea no existe ya (evitar duplicados).

export let tareas: string[] = [
    "Estudiar",
    "Limpiar",
    "Bañar al perro"
];

export function agregarTarea (nuevaTarea: string){
    let existe= false;

    for (let tarea of tareas){
        if (tarea === nuevaTarea) {
            existe= true;
            break
        }
    }
    if (!existe){
        tareas.push(nuevaTarea);
        console.log(`${nuevaTarea} agregada a la lista`);
    }else{
        console.log(`${nuevaTarea} ya está en la lista`)
    }


}