const router = [
  // nodo 1 ------------------------------------------
  {
    normasEstandares: "/ruta/regulaciones/normas_estandares",
  },
  {
    estandarCalidad: "/ruta/regulaciones/estandares_calidad",
  },
  {
    herramientalAsegu: "/ruta/regulaciones/herramientas_calidad",
  },
  // nodo 2 --------------------------------------------
  {
    tecnicaValidacion: "/ruta/control/tecnicas-validacion",
  },
  {
    revisionRequerimiento: "/ruta/control/revision-requerimientos",
  },
  {
    trazabilidadRequerimiento: "/ruta/control/trazabilidad-requerimientos",
  },
  // nodo 3 -----------------------------------------------------
  {
    evaluacionDisenioSistema: "/ruta/validacion/evaluacion_sistemas",
  },
  {
    revisionArquitectonica: "/ruta/validacion/revision-arquitectonica",
  },
  {
    pruevaDisenio: "/ruta/validacion/Pruebas_disenio",
  },
  // nodo 4 -----------------------------------------------------
  {
    proyectSoftware: "/ruta/exito/gestion_proyecto_software",
  },
  {
    planificacionSoftware: "/ruta/exito/planificacion_control",
  },
  {
    habilidadesLiderazgo: "/ruta/exito/habilidades_liderazgo",
  },
];
const routes = Object.freeze(router);
export default routes;
