import { Injectable } from '@angular/core';

@Injectable()
export class ServicemoduloService {

  private modulos:Modulo[]=[
    {
      titulo:"Usuarios",
      resumen:"Estos usuarios tienen acceso a la funcionalidad completa de las características de BMC Remedyforce y puede crear y administrar incidentes, problemas, cambios, transmisiones, tareas, artículos de conocimiento, elementos de configuración, solicitudes de servicio, nivel de servicio acuerdos, informes, paneles, Chatter y otros servicios relacionados funciones, incluidas evaluaciones y aprobaciones de cambios. Los usuarios estándar son destinado a usuarios que accederán a una o más áreas de BMC Remedyforce regularmente con el propósito de administrar, asignar o actualizar registros Estos usuarios tienen acceso ilimitado a todas las funciones del usuario en BMC Remedyforce.",
      modulo:"Incidencias",
      imagen:"assets/img/incidentes.png",
      ico:"assets/img/ACL-Systems.png"

    },
    {
      titulo:"Categorias",
      resumen:"Las categorías lo ayudan a clasificar los datos con fines informativos. Al plantear un incidente, los clientes plantean el incidente en una categoría, como hardware y puede configurar un flujo de trabajo que asigna todo el incidentes con categoría de Hardware a la cola Hardware y Mantenimiento.",
      modulo:"Incidencias",
      imagen:"assets/img/incidentes.png",
      ico:"assets/img/ACL-Systems.png"

    },
    {
      titulo:"Plantillas",
      resumen:"Al usar plantillas, puede rellenar previamente los campos en un formulario, lo que reduce la necesidad de ingresar comúnmente. utilizó datos o creó registros para proporcionar un proceso automatizado de flujo de trabajo. Las plantillas te ayudan a configurar flujos de trabajo de uso común, garantizar la coherencia en la forma en que se captura la información aumentar la productividad y la eficiencia, y reducir los errores.",
      modulo:"Incidencias",
      imagen:"assets/img/incidentes.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Flujos de trabajo",
      resumen:"Los flujos de trabajo lo ayudan a automatizar acciones frecuentes en su mesa de servicio. Por ejemplo, puede crear un flujo de trabajo para enviar un mensaje de correo electrónico a los clientes siempre que el estado del incidente planteado por ellos se actualiza. BMC Remedyforce le proporciona algunos flujos de trabajo listos para usar. Todas estos flujos de trabajo están inactivos por defecto.",
      modulo:"Incidencias",
      imagen:"assets/img/incidentes.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Concepto de tarea",
      resumen:"Una tarea BMC Remedyforce es una unidad de trabajo que debe completarse como un paso para resolver unaincidente, problema, solicitud de cambio o liberación. Si la solución a un incidente involucra a más de un acción, procedimiento o proceso, considere dividir la solución en tareas separadas. Dividiendo el la solución en tareas separadas puede ayudarlo a administrar y monitorear el incidente a medida que avanza hacia resolución. Puede crear una tarea a partir de un registro existente o directamente utilizando el formulario de Tarea. Cuando crea una tarea desde un registro, todos los detalles asociados del registro, como el nombre del cliente, categoría y descripción se completan en el formulario de tarea. Si se crea una tarea a partir de un incidente, el número de incidente también se copia a la tarea para que un miembro del personal sepa que el incidente que es relacionado con la tarea.",
      modulo:"Tareas",
      imagen:"assets/img/task.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Campos en el formulario de tareas",
      resumen:"Los elementos comunes se muestran en el formulario. En función del diseño asignado a tu perfil o la interfaz de usuario que está utilizando, es posible que algunos de los campos descritos en la siguiente tabla no estén disponibles en el formulario Nueva tarea que se le muestra. El administrador del sistema puede aplicar filtros a un campo de búsqueda en el formulario de tareas. Aquí hay algunos puntos importantes que lo ayudan a comprender los filtros de búsqueda.",
      modulo:"Tareas",
      imagen:"assets/img/task.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Clonar una tarea",
      resumen:"Si tiene una tarea que debe realizarse para múltiples categorías, puede clonar la tarea, modificar la categoría y reutilizar el registro de la tarea.",
      modulo:"Tareas",
      imagen:"assets/img/task.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Concepto de Cambio",
      resumen:"Change Management le permite realizar cambios de forma controlada, reducir el riesgo de forma oportuna entrega de servicios y se alinea con los objetivos comerciales. Puede evaluar el alcance de un cambio y realizar análisis de impacto y riesgo.",
      modulo:"Cambios",
      imagen:"assets/img/changues.png",
      ico:"assets/img/ACL-Systems.png"
    },
    {
      titulo:"Prueba",
      resumen:"prueba de cambio",
      modulo:"Cambios",
      imagen:"assets/img/changues.png",
      ico:"assets/img/ACL-Systems.png"
    }
  ];

  constructor() { }

  verModulo(palabra:string):Modulo[]{
    let resultado:Modulo[]=[];
    for(let mod of this.modulos){
      let referencia = mod.modulo;
      if(referencia.indexOf(palabra)>=0){
        resultado.push( mod );
      }
    }
    return resultado;
  }

  verResultados(termino:string):Modulo[]{
    let resultado:Modulo[]=[];
    for(let resmod of this.modulos){
      let keyword = resmod.resumen;
      if(keyword.indexOf(termino)>=0){
        resultado.push(resmod);
      }
    }
    return resultado;
  }
}

export interface Modulo{
  titulo:string;
  resumen:any;
  modulo:string;
  imagen:string;
  ico:string;
}
