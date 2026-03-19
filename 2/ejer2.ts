// 1. Decorador de Método estándar (TypeScript 5.0+)
function MedirRendimiento(metodoOriginal: Function, context: ClassMethodDecoratorContext) {
    // Obtenemos el nombre del método desde el nuevo objeto 'context'
    const nombreMetodo = String(context.name);

    // Retornamos la nueva función que reemplazará a la original
    return async function (this: any, ...args: any[]) {
        console.log('⏱️ [Monitor] Iniciando medición para: ${nombreMetodo}...');

        const inicio = performance.now();

        // Ejecutamos el método original manteniendo su contexto (this) y argumentos
        const resultado = await metodoOriginal.apply(this, args);

        const fin = performance.now();
        const tiempo = (fin - inicio).toFixed(2);

        console.log('✅ [Monitor] El método ${nombreMetodo} finalizó en ${tiempo} ms.\n');

        return resultado;
    };
}

// 2. Aplicamos el decorador en nuestra clase
class EditorVideo {
    @MedirRendimiento
    public async aplicarFiltrosYRenderizar(nombreClip: string): Promise<void> {
        console.log('🎬 Procesando frames, renderizando audio y exportando: ${nombreClip}');
        // Simulamos un proceso que toma 1.5 segundos
        return new Promise(resolve => setTimeout(resolve, 1500));
    }
}

// 3. Prueba
async function ejecutarMotor() {
    console.log("--- Iniciando Motor de Renderizado ---");
    const editor = new EditorVideo();

    await editor.aplicarFiltrosYRenderizar("Corto_ZestyTheFox_Ep1.mp4");

    console.log("--- Cola de procesamiento finalizada ---");
}

ejecutarMotor();