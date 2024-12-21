import normasInternacional from "../../../assets/menu/normas-internacionales.svg";
import estandarasCalidad from "../../../assets/menu/estandares-calidad.svg";
import herramientasAsegCalidad from "../../../assets/menu/herramientas-aseguramiento-calidad.svg";
import tecnicaValidacion from "../../../assets/menu/técnicas_validación.svg";
import revisionRequerimiento from "../../../assets/menu/revision_requerimientos.svg";
import trazabilidadRequerimiento from "../../../assets/menu/trazabilidad_requerimientos.svg";
import evaluacionDisenioSistemas from "../../../assets/menu/evaluar_diseño_sistema.svg";
import revisonArquitectura from "../../../assets/menu/revisión_arquitectonica.svg";
import pruevasDisenio from "../../../assets/menu/pruebas_diseño.svg";
import gestionProyectoSoftware from "../../../assets/menu/gestion_proyectos_software.svg";
import planificacionControl from "../../../assets/menu/planificar_controlar.svg";
import habilidadesLiderazgo from "../../../assets/menu/habilidad_liderazgo.svg";

type typeMenu = {
  nombre: string;
  nombre_next: string;
  lista: {
    nombre: string;
    ruta: string;
    img: string;
  }[];
};

export const MENU: typeMenu[] = [
  {
    nombre: "Regulaciones",
    nombre_next: "Regulaciones de Software de Calidad",
    lista: [
      {
        nombre: "Normas Internacionales (ISO/IEC)",
        ruta: "/ruta/regulaciones/normas_estandares",
        img: normasInternacional,
      },
      {
        nombre: "Estándares de Calidad (IEE/CMMI)",
        ruta: "/ruta/regulaciones/estandares_calidad",
        img: estandarasCalidad,
      },
      {
        nombre: "Herramientas de Aseguramiento de Calidad",
        ruta: "/ruta/regulaciones/herramientas_calidad",
        img: herramientasAsegCalidad,
      },
    ],
  },
  {
    nombre: "Control",
    nombre_next: "Control de Requerimientos y Validación",
    lista: [
      {
        nombre: "Técnicas de Validación",
        ruta: "/ruta/control/tecnicas-validacion",
        img: tecnicaValidacion,
      },
      {
        nombre: "Revisión de Requerimientos",
        ruta: "/ruta/control/revision-requerimientos",
        img: revisionRequerimiento,
      },
      {
        nombre: "Trazabilidad de Requerimientos",
        ruta: "/ruta/control/trazabilidad-requerimientos",
        img: trazabilidadRequerimiento,
      },
    ],
  },
  {
    nombre: "Validación",
    nombre_next: "Validación de documentación del diseño",
    lista: [
      {
        nombre: "Evaluación del Diseño de Sistemas",
        ruta: "/ruta/validacion/evaluacion_sistemas",
        img: evaluacionDisenioSistemas,
      },
      {
        nombre: "Revisión Arquitectónica",
        ruta: "/ruta/validacion/revision-arquitectonica",
        img: revisonArquitectura,
      },
      {
        nombre: "Pruebas de Diseño",
        ruta: "/ruta/validacion/Pruebas_disenio",
        img: pruevasDisenio,
      },
    ],
  },
  {
    nombre: "Éxito",
    nombre_next: "Factores clave para éxito",
    lista: [
      {
        nombre: "Gestión de Proyectos de Software",
        ruta: "/ruta/exito/gestion_proyecto_software",
        img: gestionProyectoSoftware,
      },
      {
        nombre: "Planificación y Control",
        ruta: "/ruta/exito/planificacion_control",
        img: planificacionControl,
      },
      {
        nombre: "Habilidades de Liderazgo",
        ruta: "/ruta/exito/habilidades_liderazgo",
        img: habilidadesLiderazgo,
      },
    ],
  },
];
