// Calculadora de IVA
// Crea una función llamada calcularPrecioConIVA que reciba un precio (number) y un iva opcional (number, por defecto 21). La función debe devolver el total. Asegúrate de tipar tanto los parámetros como el retorno.

export function calcularPrecioConIVA(numero:number, iva: number = 21){
    const total = numero +( numero * iva/100 )
    return total
}
