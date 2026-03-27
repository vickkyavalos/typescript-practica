let sintipo: any = "holaaaa";
console.log(sintipo);
console.log(typeof sintipo);

let sintipo1: any = 4; //no es recomendable el any
console.log(sintipo1);
console.log(typeof sintipo1);

//////////////////////////////////////////////////////////////////////////////////////////
//FUNCIONES
function obtenerPrimerElemento<T>(lista: T[]): T {
  return lista[0];
}

const num = obtenerPrimerElemento([10, 20, 30]); 
const texto = obtenerPrimerElemento(["a", "b"]); 


//Funciones con tipos explicitos - Define qué entra y qué sale (parametros y retono).
function sumar(a: number, b: number): number {
  return a + b;
}

//Funciones de flechas
const saludar = (nombre: string): string => {
  return `Hola, ${nombre}`;
};

//void = no va retornar nada

//parametros opcionales
function sumar2(valor1: number, valor2: number, valor3?: number): number {
    if (valor3) {
        return valor1 +  valor2 + valor3;
    } else {
        return valor1 + valor2;
    }
}

console.log(sumar2(6, 6));

//////////////////////////////////////////////////////////////////////////////////////////
