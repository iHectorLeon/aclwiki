import { Injectable } from '@angular/core';

@Injectable()
export class ServicearticlesService
{

  private articulos:Modulos []=[
    {
      modulo: "Incidencias",
      descripcion: "La gestión de incidentes le permite ingresar, mantener y resolver problemas del cliente. BMC Remedy le permite construir una base de conocimiento a medida que crea y resuelve incidentes. Mientras trabajas en un problema, BMC Remedy mantiene un seguimiento de auditoría completo y registra la fecha y la hora de cada uno acción, el miembro del personal que realizó el trabajo y el tiempo dedicado a trabajar en problema. Esta información está disponible para ayudar a resolver el próximo problema o generar un informe para administración.",
      imagen:"assets/img/incidentes.png",
      fecha:"04/12/2017"
    },
    {
      modulo: "Tareas",
      descripcion: "Una tarea BMC Remedyforce es una unidad de trabajo que debe completarse como un paso para resolver una incidente, problema, solicitud de cambio o liberación. Si la solución a un incidente involucra a más de un acción, procedimiento o proceso, considere dividir la solución en tareas separadas. Dividiendo el la solución en tareas separadas puede ayudarlo a administrar y monitorear el incidente a medida que avanza hacia resolución. Puede crear una tarea a partir de un registro existente o directamente utilizando el formulario de Tarea. Cuando crea una tarea desde un registro, todos los detalles asociados del registro, como el nombre del cliente, categoría y descripción se completan en el formulario de tarea. Si se crea una tarea a partir de un incidente, el número de incidente también se copia a la tarea para que un miembro del personal sepa que el incidente que es relacionado con la tarea.",
      imagen: "assets/img/task.png",
      fecha:"04/12/2017"
    },
    {
      modulo: "Cambios",
      descripcion: " Change Management le permite realizar cambios de forma controlada, reducir el riesgo de forma oportuna entrega de servicios y se alinea con los objetivos comerciales. Puede evaluar el alcance de un cambio y realizar análisis de impacto y riesgo.",
      imagen: "assets/img/changues.png",
      fecha:"04/12/2017"
    },
    {
      modulo:"Problemas",
      descripcion:"La gestión de problemas gestiona problemas y errores conocidos. La gestión de problemas se centra en reduciendo el número de incidentes; ya sea de forma reactiva, evitando que los incidentes vuelvan a ocurrir, o proactivamente al evitar que ocurran incidentes. Un objetivo de la Gestión de problemas es minimizar las interrupciones del servicio. Crear un problema ayuda a una organización de TI a llegar a la causa raíz",
      imagen:"assets/img/Trouble.png",
      fecha:"04/12/2017"
    }
  ];

  constructor() {
    console.log("Servicio de muestra");
  }

  getArticulos(){
    return this.articulos;
  }

  getModulo( modulo:string ){
    return this.articulos[modulo];
  }
}

export interface Modulos{
  modulo:string;
  descripcion:string;
  imagen:string;
  fecha:string;
}
