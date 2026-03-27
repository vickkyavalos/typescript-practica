// Escribe una función formatearUsuario que acepte un nombre (string) y una edad (number). Debe devolver un string que diga: "Usuario: [NOMBRE], Edad: [EDAD] años". Si la edad es mayor a 18, añade al final "(Adulto)".


export function formatearUsuario(nombre:string, edad:number){
    let mensaje= `Usuario: ${nombre}, Edad: ${edad} años`;
    if (edad > 18) {
        mensaje += "Adulto";
    }
    return mensaje

}