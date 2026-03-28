// Ejercicio: El Sistema de Seguridad de un Casino
// Imagina que tienes que gestionar diferentes tipos de acceso (VIP, Empleado, Jugador). El
// sistema debe validar la identidad de forma asíncrona (como si consultara una base de datos) y
// auditar cada intento de entrada.
// Los Requisitos:


// 4. Clase Hija AccesoVIP: Implementa la validación asíncrona (usa un setTimeout con
// Promise para simular la demora).

// 1. Interfaz IUsuario: Debe tener id, nombre y un método obtenerPerfil().
export interface IUsuario {
    id: number
    nombre:string
    obtenerPerfil(): string
}

// 3. Decorador @LogAcceso: Debe imprimir en consola el nombre del método que se está
// ejecutando y cuánto tardó la validación.
export function LogAcceso (metodo:Function, context:ClassMemberDecoratorContext){
    return async function (this:any,...args:any[]){
        const nombreMetodo = String(context.name);
        console.log (nombreMetodo);
        console.time('Tiempo: ')

        const resultado = await metodo.apply(this, args);

        console.timeEnd('Tiempo: ')
        return resultado
    }

}

// 2. Clase Abstracta Acceso:
// ○ Propiedad nivelSeguridad: numérico.
// ○ Método abstracto validarPermisos(): debe ser asíncrono (Promise<boolean>).
export abstract class Acceso {
    protected nivelSeguridad: number
   constructor(nivelSeguridad: number) {
        this.nivelSeguridad = nivelSeguridad
   }
    abstract validarPermisos (user: IUsuario):
    Promise<boolean>
   
}

// 4. Clase Hija AccesoVIP: Implementa la validación asíncrona (usa un setTimeout con
// Promise para simular la demora).

export class AccesoVIP extends Acceso{
    @LogAcceso
    async validarPermisos(user: IUsuario): Promise<boolean> {
        return new Promise( resolve => {
            setTimeout(() => {
                const VIP = user.id <= 10;
                resolve(VIP)
            }, 1000);
        } )
    }

}

