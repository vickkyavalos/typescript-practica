// Ejercicio 2: Tracker de Fuerza (Clases y Herencia) Vamos a modelar un pequeño dominio usando Programación Orientada a Objetos.

// Definan una clase base ActividadFisica con una propiedad protegida fecha y un método público obtenerResumen().
// Creen una clase hija llamada EntrenamientoFuerza que herede de ActividadFisica.
// Añadan propiedades privadas para ejercicio (string, ej: "Peso Muerto", "Sentadilla", "Dominadas"), series (number), repeticiones (number) y pesoKg (number).
// Sobrescriban el método obtenerResumen() para que devuelva una cadena calculando el volumen total levantado (series * repeticiones * peso) en ese ejercicio específico.


class ActividadFisica {
    protected fecha: Date;

    constructor(fecha: Date) {
        this.fecha = fecha;
    }

    public obtenerResumen(): string {
        return `Día de actividad: ${this.fecha}`;
    }
}

class EntrenamientoFuerza extends ActividadFisica {
    private ejercicio: string;
    private series: number;
    private repeticiones: number;
    private pesoKg: number;

    constructor(fecha: string, ejercicio: string, series: number, reps: number, peso: number) {
        super(new Date(fecha)); 
        this.ejercicio = ejercicio;
        this.series = series;
        this.repeticiones = reps;
        this.pesoKg = peso;
    }

    // método sobrescrito
    public obtenerResumen(): string {
        const volumenTotal = this.series * this.repeticiones * this.pesoKg;
        return `En ${this.ejercicio} moviste ${volumenTotal}kg el día ${this.fecha}`;
    }

}

const miEntrenamiento = new EntrenamientoFuerza("2026-03-19", "Peso Muerto", 3, 8, 100);
console.log(miEntrenamiento.obtenerResumen());