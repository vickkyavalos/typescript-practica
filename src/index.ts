import { calcularPrecioConIVA } from './basico/calculadora.js'; // <- Nota el .js

const precioFinal = calcularPrecioConIVA(100);
console.log(`El precio con IVA es: ${precioFinal}`);