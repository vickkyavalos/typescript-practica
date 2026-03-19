
// Ejercicio 1: Auditoría de Hardware (Interfaces y Estructuras de Control)
// Imaginen que están armando un script para el área de IT que evalúa si las computadoras de los desarrolladores cumplen con los requisitos mínimos.
// Creen una interfaz llamada Notebook que tenga las propiedades: marca (string), modelo (string), procesador (string), memoriaRam (number) y tieneSSD (boolean).
// Creen una función llamada evaluarEquipo que reciba un objeto de tipo Notebook.
// Usando estructuras de control (if/else), la función debe retornar un mensaje de aprobación si la notebook tiene 8 GB de RAM o más y cuenta con un SSD. Si no, debe sugerir un upgrade.
// Prueba: Instancien un objeto con las características de una Lenovo IdeaPad (ej. i5-7200U, 12 GB de RAM, y SSD de 256 GB) y pasen ese objeto por la función.

// mayor o igual que (≥)

interface notebook {
    marca: string;
    modelo: string;
    memoriaRam: number;
    tieneSSD: boolean;
}

function evaluarEquipo(equipo: notebook) {
    if (equipo.memoriaRam >= 8 && equipo.tieneSSD === true) {
        console.log("Cuenta con un buen SSD y RAM, buena pc :D");
    } else {
        console.log("Deberías mejorar tu pc");
    }
}

const miNotebook: notebook = {
    marca: "Lenovo",
    modelo: "IdeaPad (ej. i5-7200U)",
    memoriaRam: 16,
    tieneSSD: true
};

evaluarEquipo(miNotebook);