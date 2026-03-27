// Parte 2: Simulacros de Trabajo Real (Desafíos Arquitectónicos)
// Acá subimos el nivel. Estos simulacros integran Genéricos y Decoradores , conceptos clave para cuando empecemos a usar frameworks como Angular y Nest.js en las próximas unidades.

// Simulacro 1: Plataforma de Dropshipping (El poder de los Genéricos)
// Están desarrollando el backend para una tienda de comercio electrónico sin inventario propio. Se conectan a distintas APIs de proveedores y cada proveedor devuelve estructuras de datos diferentes (algunos devuelven indumentaria, otros tecnología).
// Creen una interfaz genérica RespuestaProveedor<T> que estandarice las respuestas. Debe tener: codigoEstado (number), mensaje (string), y datos (de tipo genérico T).
// Definan dos interfaces distintas: ProductoRopa (con talle y color) y ProductoElectronico (con voltaje y garantía).
// Creen funciones simuladas que devuelvan una RespuestaProveedor<ProductoRopa> y otra RespuestaProveedor<ProductoElectronico>.
// Objetivo: Notar cómo una sola interfaz genérica les sirve para tipar de forma segura múltiples respuestas, evitando el uso del tipo any.


interface respuestaProveedor<T>{
    codigoEstado : number, 
    mensaje :string,
    datos : T
}


interface ProductoRopa{
    nombre: string,
    talle : number, 
    color :string
}

interface productoElectronico{
    voltaje : number, 
    garantia : boolean
}

function ObtenerRespuestaProveedor() : respuestaProveedor<ProductoRopa>{
    return {
        codigoEstado : 220, 
        mensaje : "mensaje de no se que",
        datos : {
            nombre: "remera",
            talle : 2, 
            color : "negro"
        }
    }

}

function ObtenerRespuestaProveedor1(): respuestaProveedor<productoElectronico>{
    return {
        codigoEstado : 300, 
        mensaje : "mensaje de no se que",
        datos : {
            voltaje : 50, 
            garantia : true
        }
    }


}

const respuesta = ObtenerRespuestaProveedor()
const respuesta2 = ObtenerRespuestaProveedor1()