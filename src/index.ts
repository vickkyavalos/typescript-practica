// import { calcularPrecioConIVA } from './basico/calculadora.js'; 
import { AccesoVIP, IUsuario } from '../src/avanzylogica/casino'

// const precioFinal = calcularPrecioConIVA(100);
// console.log(`El precio con IVA es: ${precioFinal}`);


const usuarioPrueba : IUsuario = {
    id: 2,
    nombre: "Vicky",
    obtenerPerfil: () => "nose"
}

const acceso= new AccesoVIP(10) 

acceso.validarPermisos(usuarioPrueba).then((resultado)=>{
    if (resultado) {
        console.log("es VIP");
    }else
        console.log("acceso denegado");
})