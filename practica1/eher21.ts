// // 1. Creamos el Decorador de Método (formato estándar TS 5+)
// function MedirRendimiento<This, Args extends unknown[], Return>(
//   metodoOriginal: (this: This, ...args: Args) => Promise<Return> | Return,
//   context: ClassMethodDecoratorContext<
//     This,
//     (this: This, ...args: Args) => Promise<Return> | Return
//   >
// ) {
//   return async function (this: This, ...args: Args): Promise<Return> {
//     console.log(`⏱ [Monitor] Iniciando medición para: ${String(context.name)}...`);

//     const inicio = performance.now();
//     const resultado = await metodoOriginal.apply(this, args);
//     const fin = performance.now();

//     const tiempo = (fin - inicio).toFixed(2);
//     console.log(`✅ [Monitor] El método ${String(context.name)} finalizó en ${tiempo} ms.\n`);

//     return resultado;
//   };
// }

// // 2. Aplicamos el decorador en nuestra clase
// class EditorVideo {
//   @MedirRendimiento
//   public async aplicarFiltrosYRenderizar(nombreClip: string): Promise<void> {
//     console.log(`🎬 Procesando frames, renderizando audio y exportando: ${nombreClip}`);
//     return new Promise((resolve) => setTimeout(resolve, 1500));
//   }
// }

// // 3. Prueba de escritorio
// async function ejecutarMotor() {
//   console.log("--- Iniciando Motor de Renderizado ---");
//   const editor = new EditorVideo();

//   await editor.aplicarFiltrosYRenderizar("Corto_ZestyTheFox_Ep1.mp4");
//   await editor.aplicarFiltrosYRenderizar("Inspiracional_Forja_Estoica_Short.mp4");

//   console.log("--- Cola de procesamiento finalizada ---");
// }

// ejecutarMotor();