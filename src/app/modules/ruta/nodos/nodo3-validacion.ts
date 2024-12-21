import { Edge, Node } from "@xyflow/react";
import { MENU } from "../../../components/helper/menu";
import {
  iconChat as imgChat,
  iconFoco as imgFoco,
  iconPaginaOficial as imgEstrellaAzul,
  iconVideo as imgVideo,
  iconExperienciaUsuario as imgExperienciaUser,
  iconPruebasIntegracion as imgPruebaIntegra,
} from "../mapa/components/icons/Icons";
import { pagVideo } from "./paginasVideos/pagVid";

export const styleSeccion =
  "bg-transparent text-[var(--t)] text-xl w-[20rem] block bg-clip-text text-transparent font-bold bg-gradient-to-r from-[var(--bg1)] to-[var(--bg2)]";
export const styleText =
  "bg-[var(--c)] rounded-[8px] button cursor-default text-[var(--t)] shadow-[0_0_6px_#BD34FE] text-lg";

export const unionEvaluacionDisenioSistema: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "1",
    targetHandle: "2",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-5",
    source: "10",
    target: "50",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-6",
    source: "10",
    target: "60",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-7",
    source: "10",
    target: "70",
    sourceHandle: "2",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
];
export const nodoEvaluacionDisenioSistema: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 3,
      label: MENU[2].lista[0].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -400, y: 320 },
    data: {
      nodo: 3,
      label: "Definición de Criterios de Evaluación",
      descripcion:
        "Permite establecer parámetros claros y medibles que para evaluar si el diseño del sistema cumple con los requisitos,  estándares de calidad y expectativas de los usuarios.",
      labelTitle: "Establecimiento de Estándares para Evaluar la Calidad",
      ventajas: [
        "Lista detallada de los criterios de evaluación relevantes (ejemplo: rendimiento, usabilidad, mantenibilidad, etc.)",
        "Documentación de estándares o métricas específicas para cada criterio.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Consistencia en la evaluación mediante parámetros establecidos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Reducción de riesgos mediante la detección de problemas antes de la implementación.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Componentes Clave para la Evaluación de la UX",
            info: [
              "Facilidad de Uso: Evaluar si el software es intuitivo y fácil de aprender.",
              "Satisfacción del Usuario: Medir la satisfacción al interactuar con la interfaz.",
              "Eficiencia: Verificar si los usuarios pueden realizar tareas rápidamente y sin frustraciones.",
              "Accesibilidad: Asegurar que el software sea accesible para personas con diversas capacidades.",
              "Navegación Intuitiva: Comprobar que los usuarios puedan moverse de manera natural entre las secciones del software.",
            ],
          },
          {
            nombre: "Criterios para Evaluar la Interfaz de Usuario (UI)",
            info: [
              "Consistencia Visual: Mantener coherencia en los elementos y secciones.",
              "Claridad de los Elementos: Botones, menús y formularios deben ser claros y fáciles de usar.",
              "Diseño Atractivo: Debe ser visualmente agradable sin ser excesiva.",
              "Feedback Visual: Deben existir indicaciones claras sobre el estado de las acciones, como confirmaciones o resultados.",
            ],
          },
          {
            nombre: "Criterios para Medir la Usabilidad",
            info: [
              "Facilidad de Aprendizaje: Debe ser intuitivo, permitiendo que los nuevos usuarios se adapten rápidamente sin instrucciones complicadas.",
              "Eficiencia de Tareas: Los usuarios deben completar tareas de manera ágil, sin pasos innecesarios ni obstáculos.",
              "Tiempo de Respuesta: El software debe ser rápido, reduciendo los tiempos de espera y evitando retrasos.",
            ],
          },
          {
            nombre: "Criterios de Evaluación de la Accesibilidad",
            info: [
              "Tecnologías de Asistencia: Compatibilidad con lectores de pantalla y teclados alternativos.",
              "Cumplimiento de Accesibilidad: Seguir pautas como contraste adecuado y fuentes legibles.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Criterios de Rendimiento",
            info: [
              "Tiempo de respuesta: Evaluar el tiempo que tarda el sistema en procesar y devolver una respuesta a una solicitud del usuario.",
              "Uso de recursos: Medir el consumo de recursos como CPU, memoria y ancho de banda bajo carga normal y alta carga.",
              "Escalabilidad: Asegurar que el sistema pueda manejar incrementos en la carga sin degradar el rendimiento.",
              "Tolerancia a fallos: Verificar que el sistema continúe funcionando correctamente incluso si algunos de sus componentes fallan.",
            ],
          },
          {
            nombre: "Criterios de Seguridad",
            info: [
              "Autenticación y autorización: Verificar que solo los usuarios autorizados puedan acceder a recursos sensibles mediante autenticación fuerte.",
              "Protección de datos: Evaluar las medidas de cifrado en tránsito y en reposo para garantizar la privacidad de los datos.",
              "Resiliencia ante ataques: Comprobar la resistencia a ataques comunes como inyecciones SQL, XSS, CSRF y ataques DDoS.",
              "Auditoría y monitoreo: Asegurar que existan mecanismos de auditoría y monitoreo para detectar actividades maliciosas o inusuales.",
            ],
          },
          {
            nombre: "Criterios de Usabilidad",
            info: [
              "Facilidad de uso: Evaluar la facilidad con la que los usuarios pueden interactuar con el sistema y realizar tareas comunes.",
              "Accesibilidad: Comprobar que la interfaz sea accesible para personas con discapacidades, utilizando estándares como WCAG.",
              "Consistencia de la interfaz: Verificar que los elementos de la interfaz (botones, menús, iconos) sean coherentes y fáciles de entender.",
              "Retroalimentación al usuario: Asegurar que el sistema proporcione retroalimentación clara cuando se realizan acciones importantes, como guardar o eliminar datos.",
            ],
          },
          {
            nombre: "Criterios de Compatibilidad",
            info: [
              "Compatibilidad con dispositivos: Asegurar que el sistema sea accesible desde diversos dispositivos, incluidos móviles, tabletas y equipos de escritorio.",
              "Compatibilidad con navegadores: Verificar que la aplicación funcione correctamente en los navegadores más populares como Chrome, Firefox, Safari y Edge.",
              "Integración con otros sistemas: Evaluar la capacidad del sistema para integrarse con servicios y APIs externas sin problemas de compatibilidad.",
              "Soporte de versiones: Asegurar que las actualizaciones del sistema no interfieran con la compatibilidad de versiones anteriores o con la de sistemas asociados.",
            ],
          },
          {
            nombre: "Criterios de Mantenibilidad",
            info: [
              "Código limpio y organizado: Asegurar que el código esté bien estructurado, comentado y siga buenas prácticas para facilitar el mantenimiento.",
              "Facilidad de actualización: Evaluar si el sistema puede ser actualizado sin interrupciones significativas en el servicio o la experiencia del usuario.",
              "Automatización de pruebas: Verificar que existan pruebas automatizadas para asegurar que el sistema siga funcionando correctamente después de cada actualización.",
              "Documentación técnica: Comprobar que la documentación del sistema sea clara y completa para facilitar la comprensión y modificación por parte de otros desarrolladores.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Definicion_de_Criterios_de_Evaluacion
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Definicion_de_Criterios_de_Evaluacion
          .paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 100, y: 220 },
    data: {
      nodo: 3,
      label: "Identificación de Riesgos de Diseño",
      descripcion:
        "Proceso de detectar y analizar posibles amenazas y vulnerabilidades en la estructura del diseño de un sistema antes de su desarrollo completo.",
      labelTitle: "Identificación Proactiva de Riesgos en el Diseño",
      ventajas: [
        "Análisis de requerimientos completos para conocer todas las expectativas y limitaciones.",
        "Matrices de riesgo para clasificar y priorizar riesgos según su impacto y probabilidad.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reducción de costos a largo plazo mediante la identificación y resolución temprana de posibles fallos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejora en la seguridad y cumplimiento, especialmente en sectores regulados.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Posibles Riesgos Relacionados con la Usabilidad",
            info: [
              "Interfaz Confusa: Riesgo de que los usuarios no comprendan cómo interactuar con el sistema debido a una interfaz poco intuitiva.",
              "Sobrecarga Cognitiva: El diseño puede sobrecargar la mente del usuario con demasiada información o opciones en un solo lugar.",
              "Falta de Retroalimentación: Los usuarios pueden sentirse perdidos si no reciben una retroalimentación clara tras realizar una acción, como al enviar un formulario o hacer clic en un botón.",
              "Inconsistencias en la Navegación: Riesgo de que el usuario se confunda si el comportamiento de la navegación no es coherente a través de las diferentes pantallas.",
              "Lentitud en la Respuesta: Si el sistema tarda mucho en responder o procesar las acciones del usuario, esto podría generar frustración y abandono.",
            ],
          },
          {
            nombre: "Riesgos en la Interfaz de Usuario (UI)",
            info: [
              "Inadecuada Adaptación a Dispositivos Móviles: Riesgo de que el diseño no sea compatible con todos los tamaños de pantalla, lo que afectaría la experiencia en dispositivos móviles.",
              "Contraste Insuficiente: El uso de colores mal combinados puede hacer que los elementos sean difíciles de leer o entender, afectando la accesibilidad.",
              "Elementos Visuales Sobrecargados: Riesgo de que demasiados elementos visuales o animaciones en la UI distraigan al usuario de la tarea principal.",
              "Errores de Diseño Estético: Diseño visualmente inconsistente o poco atractivo que puede afectar la percepción del sistema por parte de los usuarios.",
            ],
          },
          {
            nombre: "Riesgos de Accesibilidad y Inclusividad",
            info: [
              "Falta de Compatibilidad con Tecnologías de Asistencia: El diseño podría no ser compatible con herramientas que asisten a personas con discapacidades, como lectores de pantalla o teclados alternativos.",
              "Inadecuada Alternancia entre Contenido Visual y Auditivo: Si el contenido solo está basado en una forma de comunicación (solo texto o solo audio), esto puede dificultar el acceso a usuarios con discapacidades auditivas o visuales.",
              "Falta de Pautas de Accesibilidad: Riesgo de no seguir las pautas WCAG, lo que puede hacer que el sistema no sea completamente accesible para usuarios con discapacidades.",
              "Diseño de Formularios No Inclusivo: Formularios que no toman en cuenta a todos los usuarios, como no proporcionar opciones para personas con discapacidades o aquellos que no utilizan un idioma común.",
            ],
          },
          {
            nombre: "Riesgos en la Experiencia General del Usuario",
            info: [
              "Riesgo de Abandono por Complicación en el Flujo: Si el flujo de tareas del usuario es demasiado largo o complicado, los usuarios pueden abandonar el sistema antes de completar sus tareas.",
              "Falta de Personalización: Riesgo de que los usuarios no puedan personalizar su experiencia de acuerdo con sus preferencias o necesidades.",
              "Interacciones No Claras: Riesgo de que los botones, menús y otros elementos no estén bien definidos, creando confusión sobre su funcionalidad.",
              "Falta de Contexto: Riesgo de que los usuarios no entiendan su ubicación dentro del sistema o las tareas que deben completar debido a un diseño poco claro.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Riesgos de Complejidad en la Arquitectura",
            info: [
              "Dependencias excesivas entre módulos: Una arquitectura con muchas dependencias interconectadas puede dificultar las modificaciones y la escalabilidad.",
              "Sobrecarga de funcionalidades: Incluir demasiadas funcionalidades en un solo módulo o servicio puede hacer que el sistema sea más difícil de mantener y probar.",
              "Falta de modularidad: La falta de separación clara entre componentes puede complicar la gestión de cambios y la evolución del sistema.",
              "Ciclos de dependencia: Dependencias cíclicas entre componentes pueden generar dificultades para el mantenimiento y la comprensión del flujo de datos.",
            ],
          },
          {
            nombre: "Riesgos de Escalabilidad",
            info: [
              "Escalabilidad limitada: El diseño puede no permitir una fácil expansión a medida que aumentan los usuarios o el volumen de datos.",
              "Cuello de botella en la arquitectura: Componentes clave como bases de datos o servidores de aplicaciones pueden convertirse en puntos de congestión que afectan el rendimiento general.",
              "Falta de balanceo de carga: Un diseño sin un mecanismo eficiente de balanceo de carga puede resultar en una distribución desigual del tráfico y en fallos bajo alta demanda.",
              "Capacidades de almacenamiento insuficientes: El diseño puede no contemplar el crecimiento de los datos a largo plazo, lo que puede afectar el rendimiento o provocar pérdidas de información.",
            ],
          },
          {
            nombre: "Riesgos de Seguridad",
            info: [
              "Vulnerabilidades en puntos de integración: Las interfaces de integración con otros sistemas pueden ser vulnerables a ataques si no se implementan controles adecuados.",
              "Cifrado insuficiente de datos sensibles: El diseño puede no contemplar un cifrado adecuado de datos sensibles, lo que puede exponerlos a riesgos de robo o acceso no autorizado.",
              "Autenticación débil: Un sistema con métodos de autenticación débiles puede ser vulnerable a accesos no autorizados y comprometer la seguridad del sistema.",
              "Falta de control de acceso granular: No establecer niveles de acceso apropiados para diferentes tipos de usuarios puede llevar a una exposición innecesaria de recursos o datos críticos.",
            ],
          },
          {
            nombre: "Riesgos de Usabilidad",
            info: [
              "Interfaz compleja: El diseño de la interfaz puede ser confuso o no intuitivo para los usuarios, lo que lleva a una experiencia de usuario negativa.",
              "Inaccesibilidad para usuarios con discapacidades: Si el diseño no sigue las pautas de accesibilidad, puede excluir a ciertos usuarios, afectando la inclusividad del sistema.",
              "Falta de consistencia: Un diseño inconsistente en cuanto a estilo, iconografía o comportamiento de los componentes puede generar confusión en los usuarios.",
              "Exceso de pasos para completar tareas: Un flujo de usuario complicado con demasiados pasos puede hacer que los usuarios abandonen el proceso o se frustren.",
            ],
          },
          {
            nombre: "Riesgos de Mantenibilidad",
            info: [
              "Código acoplado y difícil de modificar: Si el código no está bien estructurado, la implementación de cambios o mejoras puede resultar costosa y propensa a errores.",
              "Falta de documentación técnica: Sin documentación adecuada, el equipo de desarrollo puede tener dificultades para entender y modificar el sistema a medida que evoluciona.",
              "Falta de pruebas automatizadas: La ausencia de pruebas automatizadas dificulta la validación del sistema y aumenta el riesgo de introducir errores en futuras actualizaciones.",
              "Dependencia de tecnologías obsoletas: Si el diseño se basa en tecnologías obsoletas o poco soportadas, puede ser difícil encontrar soporte o desarrolladores capacitados en ellas.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Identificacion_de_Riesgos_de_Disenio
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Identificacion_de_Riesgos_de_Disenio
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 3,
      label: "Optimización de la Estructura del Sistema",
      descripcion:
        "Implica el análisis y refinamiento de la arquitectura y los componentes internos para mejorar el rendimiento, la eficiencia y la flexibilidad.",
      labelTitle: "Identificación Proactiva de Riesgos en el Diseño",
      ventajas: [
        "Análisis de carga y rendimiento, que mida el impacto de la estructura actual bajo diferentes niveles de uso.",
        "Mapeo de componentes críticos que identifique las áreas con mayor impacto en el rendimiento.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Mejora del rendimiento y reducción de tiempos de respuesta mediante la eliminación de cuellos de botella.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejora en la experiencia del usuario final, que se beneficia de una estructura ágil y rápida.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre:
              "Posibles Riesgos Relacionados con la Arquitectura del Sistema",
            info: [
              "Baja Escalabilidad: El sistema podría no ser capaz de manejar un aumento en la carga de trabajo o usuarios.",
              "Dependencias Innecesarias: Riesgo de incluir dependencias externas que no aporten valor directo, lo que incrementa la complejidad y los riesgos de fallos.",
              "Falta de Modularidad: Un diseño poco modular puede dificultar el mantenimiento y la implementación de nuevas funciones.",
              "Uso Ineficiente de Recursos: Riesgo de que el sistema consuma más recursos de los necesarios, afectando su rendimiento y costos.",
              "Acoplamiento Extremo: Componentes del sistema demasiado interdependientes pueden dificultar cambios o actualizaciones específicas.",
            ],
          },
          {
            nombre: "Riesgos en la Base de Datos y Gestión de Datos",
            info: [
              "Consultas Ineficientes: Las consultas mal diseñadas pueden afectar el tiempo de respuesta del sistema.",
              "Falta de Normalización: Bases de datos mal estructuradas pueden generar redundancias y dificultar su administración.",
              "Ausencia de Respaldo Regular: Riesgo de pérdida de datos debido a fallos inesperados por no contar con respaldos frecuentes.",
              "Inseguridad en los Datos: Si no se implementan buenas prácticas de seguridad, los datos podrían ser vulnerables a ataques.",
              "Desbalanceo en el Uso de Índices: Uso excesivo o ausencia de índices puede impactar el rendimiento de las consultas.",
            ],
          },
          {
            nombre: "Riesgos Relacionados con el Rendimiento del Sistema",
            info: [
              "Tiempos de Respuesta Largos: Un sistema con tiempos de respuesta elevados puede afectar negativamente la experiencia del usuario.",
              "Sobrecarga del Servidor: Riesgo de que el sistema no maneje adecuadamente picos de tráfico, causando caídas o lentitud.",
              "Falta de Pruebas de Estrés: Sin pruebas adecuadas, el sistema podría fallar bajo cargas altas inesperadas.",
              "No Uso de Caché: Falta de almacenamiento en caché puede incrementar el tiempo necesario para entregar datos repetidos.",
              "Mala Optimización de Algoritmos: Algoritmos ineficientes pueden generar cuellos de botella en el rendimiento.",
            ],
          },
          {
            nombre: "Riesgos en la Seguridad del Sistema",
            info: [
              "Ausencia de Encriptación: Riesgo de que datos sensibles no estén protegidos adecuadamente en tránsito o almacenamiento.",
              "Vulnerabilidades en Autenticación: Métodos de autenticación débiles pueden permitir accesos no autorizados.",
              "Falta de Monitoreo Activo: Sin monitoreo continuo, los ataques o anomalías pueden pasar desapercibidos.",
              "Configuraciones Inseguras: Configuraciones predeterminadas o mal implementadas pueden abrir puertas a ataques.",
              "No Actualización de Componentes: El uso de software obsoleto puede exponer el sistema a vulnerabilidades conocidas.",
            ],
          },
          {
            nombre: "Riesgos de Mantenibilidad y Actualización",
            info: [
              "Documentación Incompleta: La falta de documentación clara puede dificultar las actualizaciones y el mantenimiento.",
              "Dependencia de Personal Clave: Riesgo de que solo ciertas personas comprendan completamente el sistema, dificultando su continuidad.",
              "Código Espagueti: Un código mal organizado puede hacer que los cambios sean complejos y propensos a errores.",
              "Falta de Estrategias de Pruebas Automatizadas: Sin pruebas automatizadas, las actualizaciones podrían introducir errores no detectados.",
              "Retrasos en Implementaciones: Procesos no optimizados pueden generar demoras en la implementación de mejoras.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Optimización de Componentes",
            info: [
              "Refactorización de código: Simplificar y organizar el código para mejorar su legibilidad, reducir redundancias y facilitar el mantenimiento.",
              "Modularización: Dividir el sistema en módulos independientes y cohesivos para facilitar la escalabilidad y reutilización.",
              "Uso de patrones de diseño: Implementar patrones como MVC, Singleton o Factory para estructurar mejor los componentes y resolver problemas comunes.",
              "Eliminación de dependencias innecesarias: Reducir las dependencias externas o entre módulos para minimizar el acoplamiento y aumentar la flexibilidad.",
            ],
          },
          {
            nombre: "Optimización de la Base de Datos",
            info: [
              "Normalización de datos: Diseñar esquemas de base de datos eficientes para reducir redundancias y mejorar la consistencia de los datos.",
              "Índices y consultas optimizadas: Implementar índices adecuados y escribir consultas SQL eficientes para mejorar el rendimiento de las operaciones de lectura y escritura.",
              "Particionamiento de datos: Dividir grandes volúmenes de datos en particiones más pequeñas para mejorar el rendimiento y la capacidad de manejo.",
              "Cacheo de consultas frecuentes: Utilizar mecanismos de caché para almacenar los resultados de consultas comunes y reducir la carga en la base de datos.",
            ],
          },
          {
            nombre: "Optimización de la Infraestructura",
            info: [
              "Uso de contenedores: Implementar Docker o tecnologías similares para estandarizar los entornos y facilitar el despliegue.",
              "Escalabilidad horizontal: Diseñar la infraestructura para permitir la adición de más instancias de servidores según sea necesario.",
              "Balanceo de carga: Configurar un balanceador de carga para distribuir el tráfico equitativamente entre los servidores.",
              "Monitoreo y métricas: Implementar herramientas de monitoreo para identificar cuellos de botella y ajustar recursos de manera proactiva.",
            ],
          },
          {
            nombre: "Optimización de la Comunicación entre Componentes",
            info: [
              "Uso de APIs bien diseñadas: Implementar APIs RESTful o GraphQL para estructurar las interacciones entre componentes.",
              "Reducir la latencia: Minimizar el tiempo de respuesta optimizando la comunicación entre los servicios del sistema.",
              "Mensajería asíncrona: Utilizar colas de mensajes como RabbitMQ o Kafka para manejar tareas que no requieren respuesta inmediata.",
              "Compresión de datos: Comprimir los datos que se envían a través de la red para reducir el ancho de banda y los tiempos de transferencia.",
            ],
          },
          {
            nombre: "Optimización de la Experiencia de Usuario",
            info: [
              "Carga progresiva: Implementar técnicas para cargar solo los recursos necesarios en el momento, mejorando los tiempos de carga inicial.",
              "Minimización de archivos: Reducir el tamaño de archivos JavaScript, CSS e imágenes para optimizar el rendimiento en el navegador.",
              "Mejora en la navegación: Asegurar transiciones rápidas y fluidas entre páginas o secciones del sistema.",
              "Pruebas de usabilidad: Realizar pruebas con usuarios finales para identificar áreas de mejora en la estructura y flujo del sistema.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Optimizacion_de_la_Estructura_del_Sistema
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Optimizacion_de_la_Estructura_del_Sistema
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 550, y: 700 },
    data: {
      nodo: 3,
      label: "Revisión de Consistencia en el Diseño",
      descripcion:
        "Proceso de verificar que los elementos de diseño estén alineados y trabajen de manera integrada, respetando las especificaciones y el propósito general del diseño.",
      labelTitle:
        "Aseguramiento de la Consistencia en el Diseño para la Cohesión y Calidad del Sistema",
      ventajas: [
        "Documentación del diseño con un mapa de relaciones y dependencias entre módulos.",
        "Criterios de validación y pruebas que permitan verificar la cohesión en el diseño.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Optimización de la experiencia de usuario al ofrecer una interacción uniforme y lógica en el sistema.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejora de la calidad y estabilidad del sistema al evitar conflictos entre componentes.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Consistencia en la Interfaz de Usuario (UI)",
            info: [
              "Elementos Visuales Coherentes: Asegurar que los botones, íconos, tipografías y colores sean consistentes en todas las pantallas para que el usuario pueda identificar fácilmente las acciones.",
              "Comportamiento Predecible: Los usuarios deben experimentar el mismo comportamiento al interactuar con el sistema en diferentes secciones. Por ejemplo, el clic en un botón debería siempre tener el mismo resultado.",
              "Patrones de Navegación Uniformes: Las barras de navegación y menús deben seguir una estructura coherente a lo largo de todo el sistema para evitar confusión.",
              "Alineación en el Diseño: Todos los elementos visuales deben alinearse correctamente, lo que contribuye a una apariencia ordenada y fácil de usar.",
            ],
          },
          {
            nombre: "Consistencia en la Usabilidad",
            info: [
              "Flujo de Trabajo Sin Interrupciones: El flujo de tareas del usuario debe mantenerse consistente y fluido en todo momento, evitando saltos innecesarios o pasos redundantes.",
              "Acciones y Reacciones Claras: Las respuestas del sistema a las acciones del usuario deben ser predecibles y claras. Por ejemplo, al enviar un formulario, el sistema debe siempre mostrar una confirmación o error.",
              "Estandarización de Funcionalidades: Asegurarse de que las funciones de la aplicación sean consistentes y que las mismas acciones se realicen de la misma forma en todos los contextos.",
              "Accesibilidad Uniforme: Los elementos de la interfaz deben ser accesibles de la misma forma en todas las pantallas, garantizando una experiencia fluida para todos los usuarios.",
            ],
          },
          {
            nombre: "Consistencia en el Diseño Visual",
            info: [
              "Uso Consistente de Colores: Los colores deben seguir una paleta coherente a lo largo de toda la interfaz, lo que facilita la navegación y la comprensión del sistema.",
              "Tipografía Homogénea: Las fuentes utilizadas deben ser consistentes, con un tamaño adecuado para garantizar legibilidad sin importar la pantalla o dispositivo.",
              "Coherencia en la Distribución de Elementos: Los elementos de la interfaz deben estar distribuidos de manera consistente en todas las páginas y pantallas, respetando márgenes y alineación.",
              "Estilo Gráfico Uniforme: La iconografía, imágenes y elementos gráficos deben seguir un estilo visual consistente para no crear una sensación de desorden o confusión.",
            ],
          },
          {
            nombre: "Consistencia en la Accesibilidad",
            info: [
              "Cumplimiento de Normas de Accesibilidad: El sistema debe cumplir con las pautas de accesibilidad (WCAG) de manera consistente, asegurando que todos los usuarios tengan acceso a la información.",
              "Compatibilidad con Herramientas de Asistencia: El diseño debe garantizar que sea compatible de manera coherente con herramientas de asistencia como lectores de pantalla, teclados alternativos y otros dispositivos de apoyo.",
              "Navegación Consistente para Todos los Usuarios: Los usuarios deben poder navegar por el sistema de manera uniforme, sin importar si están usando tecnología de asistencia o no.",
              "Contraste y Tamaño de Fuente Consistentes: Asegurar que los textos sean lo suficientemente legibles y contrastados en todas las pantallas para facilitar la lectura por parte de usuarios con dificultades visuales.",
            ],
          },
          {
            nombre: "Revisión Global de Consistencia",
            info: [
              "Evaluación del Diseño en Diversos Dispositivos: Revisar que el diseño sea consistente en dispositivos de diferentes tamaños (móviles, tabletas, desktops) y que se mantenga funcional y accesible.",
              "Verificación de Interacciones y Respuestas: Probar que las interacciones del usuario, como clics y desplazamientos, sean consistentes en todas las secciones del sistema.",
              "Revisión de Mensajes y Textos: Asegurarse de que los mensajes y textos (como errores, advertencias, instrucciones) sean coherentes en su tono, estilo y ubicación dentro del diseño.",
              "Consistencia en la Marca: Garantizar que los elementos visuales y la interacción con el sistema sigan las directrices de la marca, para mantener una experiencia de usuario coherente con la identidad corporativa.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Consistencia Visual",
            info: [
              "Colores y paleta visual: Verificar que los colores utilizados en todo el sistema sean coherentes y sigan una paleta unificada que refuerce la identidad visual.",
              "Tipografía: Asegurar que las fuentes utilizadas sean consistentes en todo el sistema, respetando tamaños, estilos y jerarquías de texto.",
              "Iconografía: Evaluar que los íconos sean consistentes en estilo, tamaño y significado en todas las interfaces.",
              "Espaciado y márgenes: Comprobar que los márgenes y espaciados entre los elementos sean uniformes, creando una estructura coherente.",
            ],
          },
          {
            nombre: "Consistencia de Navegación",
            info: [
              "Barra de navegación y menús: Asegurar que la disposición y los elementos de navegación sean consistentes en todas las pantallas y dispositivos.",
              "Accesibilidad a funciones clave: Evaluar que funciones esenciales como búsqueda, ayuda, y configuración sean accesibles desde cualquier parte del sistema.",
              "Comportamiento predecible de enlaces: Verificar que los enlaces tengan un comportamiento consistente, con la misma apariencia y acción en todos los contextos.",
              "Estructura de jerarquía: Asegurar que la jerarquía de navegación siga un patrón claro y lógico que no cambie entre pantallas.",
            ],
          },
          {
            nombre: "Consistencia Funcional",
            info: [
              "Comportamiento de botones y formularios: Evaluar que los botones y formularios tengan el mismo comportamiento en todas las secciones, garantizando una experiencia consistente.",
              "Acciones repetitivas: Verificar que las acciones que se repiten en varias partes del sistema tengan una respuesta y funcionalidad consistentes.",
              "Mensajes de error: Asegurar que los mensajes de error sigan el mismo formato y sean claros, evitando confusión en el usuario.",
              "Estilos de entrada y validación: Comprobar que los campos de entrada de datos mantengan un estilo y validación coherentes en todo el sistema.",
            ],
          },
          {
            nombre: "Consistencia de Flujos de Usuario",
            info: [
              "Secuencia de pasos en procesos: Verificar que los flujos de usuario como registro, compra, o inicio de sesión sigan una secuencia lógica y coherente.",
              "Mensajes y notificaciones: Asegurar que los mensajes y notificaciones que se muestran al usuario mantengan un estilo consistente y sean fáciles de entender.",
              "Estabilidad en la interfaz: Comprobar que la interfaz se comporte de la misma manera bajo condiciones similares, sin cambios inesperados.",
              "Feedback del usuario: Garantizar que el sistema ofrezca un feedback adecuado y consistente para cada acción tomada por el usuario.",
            ],
          },
          {
            nombre: "Consistencia de Respuestas a Interacciones",
            info: [
              "Comportamiento de interacciones: Verificar que todas las interacciones con la interfaz, como clics o desplazamiento, sean consistentes en todo el sistema.",
              "Animaciones y transiciones: Asegurar que las animaciones y transiciones entre pantallas sigan un patrón coherente y no sean abruptas.",
              "Respuestas a entrada del usuario: Comprobar que las respuestas del sistema a las acciones del usuario sean claras y uniformes en todos los puntos de la aplicación.",
              "Estado de los controles: Asegurar que los controles (como botones y selectores) mantengan el mismo estado y comportamiento según su contexto.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Revision_de_Consistencia_en_el_Disenio
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Revision_de_Consistencia_en_el_Disenio
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -450, y: 660 },
    data: {
      nodo: 3,
      label: "Evaluación de Escalabilidad y Sostenibilidad",
      descripcion:
        "Permite asegurar que el sistema pueda adaptarse y expandirse en el futuro sin requerir rediseños costosos o complejos, manteniendo su rendimiento y calidad ante posibles cambios.",
      labelTitle: "Preparación para el Crecimiento y Durabilidad del Sistema",
      ventajas: [
        "Plan de expansión que considere escenarios de crecimiento y las tecnologías necesarias para mantener la eficiencia.",
        "Documentación de pruebas de carga para evaluar la respuesta del sistema a picos de demanda.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Optimización del rendimiento del sistema bajo diferentes niveles de carga, mejorando la experiencia del usuario.",
        },
        {
          img: imgFoco,
          descripcion:
            "Uso eficiente de recursos, lo cual permite una operación rentable y responsable a largo plazo.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Evaluación de la Escalabilidad del Diseño",
            info: [
              "Adaptabilidad a Nuevas Funciones: Analizar cómo el sistema puede incorporar nuevas funcionalidades sin comprometer la estructura existente ni la experiencia del usuario.",
              "Rendimiento a Gran Escala: Evaluar cómo el diseño y las funcionalidades se comportan a medida que aumenta el número de usuarios o el volumen de datos procesados.",
              "Facilidad de Expansión: Verificar si el sistema está diseñado para facilitar la adición de nuevas características, como nuevas secciones o integraciones sin alterar el rendimiento o la usabilidad.",
              "Arquitectura Modular: Asegurarse de que el diseño esté basado en principios modulares que permitan escalabilidad en cuanto a componentes sin afectar la integridad global del sistema.",
            ],
          },
          {
            nombre: "Sostenibilidad del Diseño en el Tiempo",
            info: [
              "Mantenimiento Sencillo: Evaluar si el diseño facilita el mantenimiento y las actualizaciones sin grandes esfuerzos, tanto a nivel visual como funcional.",
              "Reutilización de Componentes: Verificar si los componentes del diseño son reutilizables en diferentes contextos dentro del sistema, lo que mejora la eficiencia en las actualizaciones y el mantenimiento.",
              "Compatibilidad con Tecnologías Futuras: Asegurarse de que el diseño esté preparado para integrarse fácilmente con nuevas tecnologías o estándares que puedan surgir en el futuro.",
              "Minimización de la Deuda Técnica: Asegurar que el diseño y la estructura del sistema no generen 'deuda técnica', evitando decisiones que compliquen las futuras mejoras o mantenimiento.",
            ],
          },
          {
            nombre: "Optimización de Recursos para Escalabilidad",
            info: [
              "Uso Eficiente de Recursos: Asegurarse de que el diseño y la implementación estén optimizados para usar eficientemente los recursos del sistema (como memoria, tiempo de procesamiento y ancho de banda).",
              "Adaptación a Cambios en la Demanda: Verificar que el sistema pueda ajustarse automáticamente a picos de demanda sin deteriorar el rendimiento o la experiencia del usuario.",
              "Balance de Carga: Evaluar si el diseño es capaz de distribuir la carga de manera eficiente entre diferentes servidores o instancias para manejar altos volúmenes de tráfico.",
              "Desempeño en la Nube: Revisar cómo el sistema se comporta en arquitecturas basadas en la nube, asegurando que la escalabilidad horizontal sea posible sin afectar la funcionalidad o el diseño visual.",
            ],
          },
          {
            nombre: "Evaluación de la Sostenibilidad Ambiental",
            info: [
              "Eficiencia Energética: Asegurar que el diseño y las tecnologías utilizadas sean eficientes en términos de consumo energético, ayudando a reducir el impacto ambiental.",
              "Uso Responsable de Recursos: Evaluar la cantidad de recursos (como servidores o infraestructura) necesarios para operar el sistema, buscando alternativas más sostenibles si es posible.",
              "Implementación de Prácticas Ecológicas: Fomentar el uso de tecnologías y prácticas que respeten el medio ambiente, como servidores con energía renovable o eficiencia energética en el diseño de software.",
              "Reducción de Residuos Digitales: Asegurarse de que el diseño del sistema minimice los residuos digitales, eliminando procesos innecesarios o ineficientes que generen un mayor consumo de recursos.",
            ],
          },
          {
            nombre: "Escalabilidad de la Experiencia de Usuario",
            info: [
              "Optimización de la Interfaz para Diferentes Dispositivos: Asegurarse de que la interfaz de usuario sea escalable, adaptándose adecuadamente a diferentes dispositivos y tamaños de pantalla sin perder funcionalidad ni usabilidad.",
              "Rendimiento de la UX con Mayor Volumen de Datos: Evaluar cómo la interfaz de usuario maneja grandes cantidades de datos y cómo se muestra esta información de manera eficaz para el usuario sin sobrecargar la interfaz.",
              "Adaptación de la UX a Nuevas Funcionalidades: Verificar si la experiencia de usuario es capaz de adaptarse de manera coherente a nuevas funcionalidades, manteniendo su intuitividad y facilidad de uso.",
              "Facilidad de Personalización para Escalabilidad: Evaluar si la interfaz permite ajustes o personalizaciones por parte de los usuarios para adaptarse a sus necesidades a medida que el sistema se expande.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Escalabilidad Horizontal y Vertical",
            info: [
              "Capacidad de escalar horizontalmente: Evaluar si el sistema puede añadir más instancias de servidores para manejar aumentos en la carga de trabajo.",
              "Capacidad de escalar verticalmente: Determinar si el sistema puede manejar mejoras en hardware, como CPU, memoria o almacenamiento, para soportar mayores demandas.",
              "Elasticidad: Verificar si el sistema puede adaptarse automáticamente a cambios en la carga, aumentando o reduciendo recursos según sea necesario.",
              "Distribución de carga: Asegurar que la arquitectura soporte mecanismos de balanceo de carga para una asignación equitativa de tareas entre los recursos disponibles.",
            ],
          },
          {
            nombre: "Eficiencia en el Uso de Recursos",
            info: [
              "Optimización de consumo de recursos: Verificar que los componentes del sistema utilicen eficientemente CPU, memoria y red.",
              "Minimización de recursos ociosos: Identificar áreas donde se consumen recursos innecesarios y ajustar configuraciones para evitar desperdicios.",
              "Uso de tecnologías ligeras: Implementar frameworks y herramientas que consuman menos recursos sin comprometer la funcionalidad.",
              "Monitoreo y métricas: Configurar sistemas de monitoreo para analizar patrones de uso y realizar ajustes en tiempo real.",
            ],
          },
          {
            nombre: "Sostenibilidad Técnica",
            info: [
              "Compatibilidad con actualizaciones tecnológicas: Evaluar si el sistema puede adaptarse a nuevas versiones de herramientas, bibliotecas y entornos de ejecución.",
              "Mantenibilidad del código: Verificar que el código esté bien documentado y estructurado para facilitar futuros desarrollos o correcciones.",
              "Reducción de dependencias externas: Minimizar el uso de herramientas o bibliotecas que puedan quedar obsoletas o dejar de ser soportadas.",
              "Preparación para la obsolescencia: Diseñar mecanismos para migrar fácilmente a nuevas tecnologías cuando las actuales dejen de ser viables.",
            ],
          },
          {
            nombre: "Escalabilidad de Datos",
            info: [
              "Capacidad de manejar grandes volúmenes de datos: Evaluar si la base de datos y los sistemas asociados pueden soportar un crecimiento exponencial en los datos.",
              "Implementación de particionamiento: Verificar si el sistema soporta técnicas como particionamiento de bases de datos o almacenamiento distribuido.",
              "Procesamiento eficiente de datos: Optimizar procesos intensivos en datos para evitar cuellos de botella en el rendimiento.",
              "Preparación para Big Data: Evaluar la capacidad del sistema para integrarse con tecnologías de análisis de datos a gran escala como Hadoop o Spark.",
            ],
          },
          {
            nombre: "Sostenibilidad Operativa",
            info: [
              "Automatización de procesos: Implementar herramientas para automatizar tareas de mantenimiento y monitoreo.",
              "Reducción de costos operativos: Evaluar si la arquitectura permite ahorrar costos a largo plazo, por ejemplo, mediante el uso de servicios en la nube con escalabilidad bajo demanda.",
              "Minimización del impacto ambiental: Incorporar prácticas sostenibles, como el uso de servidores energéticamente eficientes o la reducción del consumo de energía en procesos críticos.",
              "Estrategia de respaldo y recuperación: Garantizar la sostenibilidad del sistema ante fallos mediante planes de recuperación y copias de seguridad periódicas.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Evaluación_de_Escalabilidad_y_Sostenibilidad
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Evaluación_de_Escalabilidad_y_Sostenibilidad
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: -20, y: 760 },
    data: {
      nodo: 3,
      label: "Análisis de Impacto de Cambios en el Diseño",
      descripcion:
        "Proceso de evaluar cómo los cambios o modificaciones en el diseño de un sistema pueden afectar sus componentes, funcionalidad y rendimiento.",
      labelTitle: "Anticipación de Consecuencias en el Sistema",
      ventajas: [
        "Identificación de componentes interdependientes y análisis de cómo estos serán afectados.",
        "Historial de cambios previo, para conocer cómo modificaciones anteriores impactaron al sistema.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reducción de riesgos al anticipar y gestionar las consecuencias de los cambios en el diseño.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejor planificación y toma de decisiones, ya que se conocen los efectos y recursos necesarios antes de implementar un cambio.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Evaluación de Impacto en la Experiencia del Usuario",
            info: [
              "Identificación de Áreas Afectadas: Analizar qué partes del diseño o de la interfaz se verán alteradas por los cambios propuestos, identificando áreas clave como la navegación, la disposición de elementos y los flujos de usuario.",
              "Evaluación de la Usabilidad Post-Cambio: Verificar cómo los cambios impactan la facilidad de uso, asegurándose de que el nuevo diseño no complica la experiencia del usuario ni introduce barreras innecesarias.",
              "Impacto en la Satisfacción del Usuario: Evaluar cómo los cambios podrían afectar la satisfacción general del usuario, buscando tanto beneficios como posibles frustraciones derivadas de la modificación.",
              "Testeo de Nuevas Funcionalidades: Asegurarse de que las nuevas características o elementos no interfieran con la usabilidad y que los usuarios puedan interactuar con ellas de forma fluida y satisfactoria.",
            ],
          },
          {
            nombre: "Impacto en la Interfaz de Usuario (UI)",
            info: [
              "Consistencia Visual Tras el Cambio: Evaluar si los cambios mantendrán la coherencia visual de la interfaz o si se crearán incongruencias que puedan confundir al usuario.",
              "Alineación con el Estilo General: Verificar que los nuevos elementos o modificaciones respeten el estilo gráfico y la identidad visual del sistema.",
              "Impacto en la Usabilidad de los Elementos: Comprobar si los cambios afectan la claridad de botones, formularios, menús u otros elementos interactivos, asegurando que sigan siendo fáciles de entender y usar.",
              "Revisión de la Retroalimentación Visual: Evaluar cómo los cambios afectan la retroalimentación visual proporcionada al usuario, como indicaciones sobre el estado de las acciones o transiciones.",
            ],
          },
          {
            nombre: "Impacto en el Rendimiento del Sistema",
            info: [
              "Carga y Tiempo de Respuesta: Evaluar si los cambios propuestos afectan la velocidad y el rendimiento general del sistema, especialmente durante tareas de alto rendimiento o cuando se accede a secciones clave del sistema.",
              "Rendimiento en Diferentes Dispositivos: Verificar si los cambios impactan el rendimiento en dispositivos de gama baja o en conexiones lentas, manteniendo una experiencia de usuario eficiente en diversas plataformas.",
              "Uso de Recursos del Sistema: Asegurarse de que los cambios no aumenten innecesariamente el uso de recursos del sistema (como CPU, memoria o ancho de banda), lo que podría afectar negativamente la experiencia de los usuarios.",
              "Pruebas de Carga Post-Cambio: Realizar pruebas de carga para asegurarse de que el sistema siga funcionando sin problemas bajo una alta demanda tras la implementación de los cambios.",
            ],
          },
          {
            nombre: "Impacto en la Escalabilidad y Mantenimiento",
            info: [
              "Sostenibilidad del Diseño Modificado: Evaluar cómo los cambios afectan la capacidad del sistema para escalar y mantenerse en el tiempo, considerando si los cambios pueden dificultar el mantenimiento futuro.",
              "Eficiencia en la Adición de Nuevas Funcionalidades: Comprobar si los cambios facilitan o dificultan la adición de nuevas características o módulos en el futuro, favoreciendo un diseño flexible y extensible.",
              "Complejidad del Mantenimiento Post-Cambio: Analizar si los cambios complican el mantenimiento del sistema a largo plazo, como la necesidad de actualizar múltiples elementos o secciones interdependientes.",
              "Impacto en el Ciclo de Vida del Producto: Verificar cómo los cambios afectarán las fases de evolución y mantenimiento del producto, como las actualizaciones de seguridad o la adición de nuevas versiones.",
            ],
          },
          {
            nombre: "Impacto en la Accesibilidad",
            info: [
              "Cumplimiento de Normativas de Accesibilidad: Evaluar si los cambios cumplen con las pautas de accesibilidad, asegurándose de que el sistema siga siendo accesible para personas con diversas discapacidades.",
              "Impacto en Tecnologías de Asistencia: Verificar si los cambios afectan la compatibilidad con tecnologías de asistencia, como lectores de pantalla o teclados alternativos.",
              "Visibilidad y Contraste: Analizar si los cambios afectan la visibilidad de elementos clave, como botones o texto, especialmente para usuarios con discapacidades visuales o necesidades específicas.",
              "Accesibilidad en Dispositivos Móviles: Asegurarse de que los cambios no afecten la accesibilidad en dispositivos móviles, manteniendo un diseño inclusivo en todas las plataformas.",
            ],
          },
          {
            nombre: "Impacto en la Seguridad y Privacidad",
            info: [
              "Seguridad de los Datos del Usuario: Evaluar si los cambios afectan la forma en que se gestionan los datos personales o sensibles del usuario, asegurando que las medidas de seguridad sean robustas.",
              "Cumplimiento de Regulaciones de Privacidad: Verificar que los cambios sigan cumpliendo con las regulaciones y normativas de privacidad, como GDPR o CCPA.",
              "Exposición de Datos Sensibles: Asegurarse de que los cambios no aumenten la exposición de datos sensibles o privados a actores no autorizados.",
              "Revisión de Seguridad en Funcionalidades Nuevas: Evaluar si las nuevas funcionalidades introducidas con los cambios son seguras y no presentan vulnerabilidades que puedan ser explotadas.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Evaluación del Alcance del Cambio",
            info: [
              "Identificación de áreas afectadas: Determinar qué componentes o módulos del sistema se verán impactados directamente por el cambio.",
              "Evaluación de dependencias: Analizar cómo los cambios en un módulo afectan a otros componentes relacionados dentro del sistema.",
              "Determinación del nivel de riesgo: Clasificar los cambios según su impacto potencial en el rendimiento, la estabilidad y la funcionalidad del sistema.",
              "Priorización de cambios: Ordenar los cambios según su importancia y urgencia, para minimizar interrupciones operativas.",
            ],
          },
          {
            nombre: "Impacto en la Experiencia del Usuario",
            info: [
              "Consistencia en la interfaz: Evaluar cómo los cambios afectarán la apariencia y comportamiento de la interfaz de usuario.",
              "Adaptación de los flujos de usuario: Verificar que los flujos principales no se vean interrumpidos o dificultados por el cambio.",
              "Retroalimentación del usuario: Obtener opiniones de usuarios finales para identificar posibles áreas de fricción antes de implementar el cambio.",
              "Pruebas de usabilidad: Realizar pruebas específicas para evaluar cómo los cambios afectan la experiencia general del usuario.",
            ],
          },
          {
            nombre: "Impacto en el Rendimiento del Sistema",
            info: [
              "Evaluación del uso de recursos: Determinar si los cambios introducen un mayor consumo de CPU, memoria o ancho de banda.",
              "Identificación de cuellos de botella: Analizar si el cambio podría causar ralentizaciones o problemas de rendimiento.",
              "Pruebas de estrés: Simular escenarios de alta carga para evaluar la estabilidad del sistema tras los cambios.",
              "Optimización post-cambio: Realizar ajustes para mantener el rendimiento óptimo después de implementar los cambios.",
            ],
          },
          {
            nombre: "Impacto en la Mantenibilidad del Sistema",
            info: [
              "Complejidad del código: Evaluar si los cambios aumentan la complejidad del código, dificultando el mantenimiento futuro.",
              "Documentación de cambios: Garantizar que todos los cambios realizados estén documentados adecuadamente para futuras referencias.",
              "Compatibilidad con estándares existentes: Verificar que los cambios no rompan patrones o convenciones establecidos.",
              "Capacitación del equipo: Asegurar que el equipo de desarrollo esté preparado para trabajar con los nuevos cambios.",
            ],
          },
          {
            nombre: "Impacto en la Seguridad",
            info: [
              "Identificación de nuevas vulnerabilidades: Analizar si los cambios introducen posibles brechas de seguridad en el sistema.",
              "Validación de integridad: Asegurar que los datos y funciones críticas no se vean comprometidos tras los cambios.",
              "Pruebas de penetración: Realizar pruebas para identificar posibles puntos de acceso no deseados después del cambio.",
              "Cumplimiento normativo: Verificar que los cambios sigan cumpliendo con los estándares y regulaciones de la industria.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaUno.Analisis_de_Impacto_de_Cambios_en_el_Disenio
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaUno.Analisis_de_Impacto_de_Cambios_en_el_Disenio
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const unionRevisionArquitectonica: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "1",
    targetHandle: "2",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-5",
    source: "10",
    target: "50",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-6",
    source: "10",
    target: "60",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-7",
    source: "10",
    target: "70",
    sourceHandle: "2",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-8",
    source: "10",
    target: "80",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-9",
    source: "10",
    target: "90",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
];
export const nodoRevisionArquitectonica: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 3,
      label: MENU[2].lista[1].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -400, y: 320 },
    data: {
      nodo: 3,
      label: "Análisis de Componentes Críticos",
      descripcion:
        "Proceso de identificar y evaluar aquellos componentes del sistema que son esenciales para el funcionamiento y rendimiento global de la arquitectura.",
      labelTitle: "Aseguramiento de la Confiabilidad de la Arquitectura",
      ventajas: [
        "Mapeo de la arquitectura para identificar los componentes que son críticos en función de su rol en el sistema.",
        "Especificaciones de requisitos de rendimiento y seguridad específicos para cada componente crítico.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Mejora de la estabilidad y disponibilidad del sistema, especialmente en escenarios de alta demanda.",
        },
        {
          img: imgFoco,
          descripcion:
            "Optimización de recursos al asignar prioridad de desarrollo, pruebas y monitoreo a los componentes que son esenciales.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Identificación de Componentes Críticos en el Diseño",
            info: [
              "Elementos Clave para la Funcionalidad: Identificar los componentes fundamentales que soportan las funcionalidades principales del sistema, como formularios, menús de navegación y módulos interactivos.",
              "Componentes de Alta Interacción: Analizar los componentes que tienen un alto grado de interacción con los usuarios, como botones, campos de entrada y menús desplegables, para garantizar que sean intuitivos y fáciles de usar.",
              "Secciones Esenciales para la Experiencia del Usuario: Evaluar las secciones críticas que impactan directamente la experiencia del usuario, como la barra de navegación, el panel de control o la página de inicio, asegurándose de que sean accesibles y claras.",
              "Integración de Elementos con Otros Componentes: Verificar cómo los componentes clave interactúan entre sí y con otras partes del sistema, asegurando que haya una integración fluida que no genere confusión o errores de usabilidad.",
            ],
          },
          {
            nombre: "Análisis de Funcionalidades Críticas",
            info: [
              "Procesos Clave para el Usuario: Identificar las funcionalidades esenciales para los usuarios, como la búsqueda, el registro o la gestión de contenido, y evaluar su accesibilidad y eficacia.",
              "Flujos de Trabajo Críticos: Analizar los flujos de trabajo más importantes que los usuarios deben seguir para realizar tareas fundamentales, garantizando que sean eficientes y sin obstáculos.",
              "Impacto de Errores en Componentes Críticos: Evaluar cómo los errores en los componentes clave afectan a la experiencia del usuario y la estabilidad del sistema, y definir estrategias para prevenir o mitigar estos fallos.",
              "Revisión de Funcionalidades para Mantenimiento: Asegurarse de que las funcionalidades críticas sean fácilmente mantenibles a lo largo del tiempo, con el mínimo esfuerzo de actualización o corrección.",
            ],
          },
          {
            nombre: "Evaluación de la Robustez de Componentes Críticos",
            info: [
              "Resiliencia Ante Fallos: Analizar la capacidad de los componentes críticos para mantenerse operativos y funcionar correctamente incluso cuando otros elementos del sistema presenten fallos o errores.",
              "Manejo de Errores en Componentes Clave: Evaluar cómo los componentes clave manejan situaciones inesperadas o errores, asegurando que la interfaz proporcione mensajes claros o soluciones para los usuarios.",
              "Evaluación de Redundancia: Verificar si existen mecanismos de redundancia en componentes críticos que ayuden a mantener el sistema funcionando sin interrupciones, como respaldos o copias de seguridad.",
              "Pruebas de Stress en Componentes Esenciales: Realizar pruebas de estrés para verificar cómo los componentes críticos responden a cargas de trabajo elevadas o situaciones extremas.",
            ],
          },
          {
            nombre: "Impacto en la Usabilidad de Componentes Clave",
            info: [
              "Facilidad de Uso de Componentes Clave: Asegurarse de que los componentes esenciales sean intuitivos y fáciles de interactuar, sin requerir de instrucciones complejas.",
              "Accesibilidad de Funciones Críticas: Evaluar si los componentes críticos son accesibles para todos los usuarios, incluidos aquellos con discapacidades, y cumplir con las pautas de accesibilidad.",
              "Tiempo de Respuesta de Componentes Clave: Verificar que los componentes más importantes respondan rápidamente a las acciones de los usuarios, sin retrasos innecesarios.",
              "Evaluación de la Navegación en Secciones Críticas: Evaluar si la navegación dentro de las secciones clave del sistema es clara y eficiente, permitiendo a los usuarios moverse sin dificultad entre las funcionalidades esenciales.",
            ],
          },
          {
            nombre: "Revisión de la Integridad de los Componentes del Sistema",
            info: [
              "Coherencia en los Elementos de la Interfaz: Verificar que los componentes clave mantengan una apariencia coherente y uniforme en todo el sistema, desde el diseño visual hasta la interactividad.",
              "Validación de los Datos en Componentes Críticos: Evaluar si los componentes críticos validan correctamente los datos que el usuario ingresa, asegurando que no haya errores de entrada que afecten la funcionalidad del sistema.",
              "Manejo de Cambios en Componentes Clave: Analizar cómo los cambios en los componentes críticos afectan al resto del sistema y si hay mecanismos para garantizar que las modificaciones no generen inconsistencias.",
              "Monitoreo de Componentes Críticos: Implementar prácticas de monitoreo para asegurar el funcionamiento continuo de los componentes clave, detectando posibles fallos antes de que impacten a los usuarios.",
            ],
          },
          {
            nombre: "Evaluación de la Seguridad en Componentes Críticos",
            info: [
              "Protección de Datos Sensibles: Asegurarse de que los componentes críticos que manejan datos sensibles, como formularios de pago o información personal, cuenten con medidas de seguridad robustas para proteger la privacidad del usuario.",
              "Autenticación y Autorización en Componentes Críticos: Verificar que los componentes esenciales de autenticación, como el inicio de sesión o la gestión de contraseñas, sean seguros y eficaces para evitar accesos no autorizados.",
              "Prevención de Vulnerabilidades de Seguridad: Evaluar si los componentes críticos tienen medidas para prevenir vulnerabilidades, como la inyección de código o el acceso no autorizado a datos.",
              "Manejo de Incidentes de Seguridad: Establecer protocolos claros para manejar posibles incidentes de seguridad que involucren componentes clave del sistema, garantizando la respuesta rápida y la protección de los datos del usuario.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Identificación de Componentes Críticos",
            info: [
              "Definición de criterios: Establecer qué características hacen que un componente sea crítico, como impacto en el sistema o frecuencia de uso.",
              "Mapeo de dependencias: Identificar cómo los componentes interactúan entre sí y cuáles son esenciales para el funcionamiento general.",
              "Evaluación de impacto: Determinar las consecuencias de la falla de cada componente crítico en el sistema y en los usuarios.",
              "Consulta con expertos: Incluir a desarrolladores y stakeholders para validar los componentes identificados como críticos.",
            ],
          },
          {
            nombre: "Evaluación de Riesgos",
            info: [
              "Análisis de vulnerabilidades: Identificar puntos débiles en los componentes críticos que podrían comprometer su funcionalidad.",
              "Escenarios de falla: Simular posibles fallos para entender el impacto y las formas de mitigarlos.",
              "Probabilidad de falla: Evaluar la probabilidad de que un componente crítico falle bajo diferentes condiciones.",
              "Prioridad de mitigación: Clasificar los riesgos según su impacto y probabilidad para enfocar recursos en las áreas más vulnerables.",
            ],
          },
          {
            nombre: "Pruebas de Desempeño en Componentes Críticos",
            info: [
              "Pruebas de estrés: Someter los componentes críticos a condiciones extremas para medir su resistencia.",
              "Pruebas de recuperación: Verificar cómo los componentes críticos se recuperan después de un fallo o interrupción.",
              "Pruebas de carga: Evaluar el desempeño de los componentes bajo escenarios de carga normal y pico.",
              "Pruebas de integración: Asegurar que los componentes críticos interactúen correctamente con otros módulos del sistema.",
            ],
          },
          {
            nombre: "Mantenimiento y Monitoreo",
            info: [
              "Monitoreo continuo: Implementar herramientas para supervisar el desempeño y estado de los componentes críticos en tiempo real.",
              "Actualizaciones regulares: Planificar y aplicar actualizaciones de software o hardware para mantener los componentes críticos en óptimas condiciones.",
              "Alertas tempranas: Configurar notificaciones automáticas para detectar y actuar ante problemas potenciales.",
              "Documentación: Mantener un registro actualizado de los cambios y problemas asociados a los componentes críticos.",
            ],
          },
          {
            nombre: "Documentación y Mejora Continua",
            info: [
              "Reporte de hallazgos: Crear un informe detallado sobre los componentes críticos, sus riesgos y las pruebas realizadas.",
              "Revisión periódica: Programar revisiones regulares para revalidar los componentes críticos y sus riesgos asociados.",
              "Optimización de recursos: Proponer mejoras en diseño o infraestructura basadas en los resultados del análisis.",
              "Capacitación: Entrenar al equipo en el manejo de los componentes críticos para garantizar una respuesta efectiva ante problemas.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Analisis_de_Componentes_Críticos
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Analisis_de_Componentes_Críticos
          .paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 130, y: 340 },
    data: {
      nodo: 3,
      label: "Escalabilidad y Flexibilidad",
      descripcion:
        "Permite asegurar que el sistema pueda manejar un crecimiento en volumen, tráfico, o usuarios, y que se pueda adaptar a cambios tecnológicos o de negocio futuros, sin comprometer la eficiencia ni la operatividad.",
      labelTitle:
        "Adaptación de la Arquitectura para el Crecimiento y el Cambio",
      ventajas: [
        "Análisis de carga y tráfico previsto, para prever las capacidades necesarias en el futuro.",
        "Evaluación de tecnologías de soporte para garantizar que puedan ampliarse o adaptarse según la demanda.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Adaptabilidad tecnológica para incorporar nuevas herramientas, servicios o requisitos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejor experiencia del usuario debido a una arquitectura que responde bien al aumento en la demanda y cambios en los requisitos.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Evaluación de Escalabilidad en el Diseño",
            info: [
              "Capacidad para Manejar Mayor Tráfico: Verificar si el sistema es capaz de gestionar un aumento significativo en el número de usuarios sin comprometer el rendimiento o la estabilidad.",
              "Escalabilidad Vertical: Evaluar si el sistema puede mejorar su rendimiento aumentando los recursos de hardware (como CPU o RAM) en lugar de necesitar un rediseño completo.",
              "Escalabilidad Horizontal: Comprobar si el sistema puede manejar un aumento de carga añadiendo más instancias o servidores sin afectar la disponibilidad o la experiencia del usuario.",
              "Manejo de Crecimiento en el Tiempo: Evaluar si la arquitectura del sistema permite el crecimiento gradual, manteniendo la eficiencia operativa mientras se expande.",
            ],
          },
          {
            nombre:
              "Flexibilidad del Sistema para Adaptarse a Nuevas Necesidades",
            info: [
              "Capacidad de Adaptación a Cambios de Requerimientos: Verificar si el diseño permite realizar modificaciones o adiciones sin interrumpir la funcionalidad existente.",
              "Modularidad y Reutilización: Evaluar si el sistema está diseñado de manera modular, permitiendo que los componentes puedan reutilizarse o adaptarse según sea necesario.",
              "Facilidad de Integración con Nuevas Tecnologías: Comprobar si el sistema permite integrar fácilmente nuevas herramientas, servicios o tecnologías a medida que surgen sin necesidad de reescribir grandes partes del código.",
              "Flexibilidad en la Personalización: Evaluar si los usuarios o administradores pueden personalizar el sistema según sus necesidades, como cambiar configuraciones, agregar funciones o modificar flujos de trabajo.",
            ],
          },
          {
            nombre: "Evaluación de la Resiliencia en el Diseño Escalable",
            info: [
              "Capacidad de Recuperación Ante Fallos: Evaluar si el sistema puede seguir funcionando de manera eficiente ante la falla de un componente, manteniendo la experiencia del usuario sin interrupciones.",
              "Estrategias de Redundancia: Comprobar si existen mecanismos redundantes que aseguren la continuidad del servicio, como backups, servidores espejo o sistemas de distribución de carga.",
              "Manejo de Cargas Extensas: Analizar si el sistema está preparado para soportar picos de tráfico o condiciones extremas sin comprometer su rendimiento o estabilidad.",
              "Resiliencia en Entornos Distribuidos: Evaluar si el sistema puede funcionar en un entorno distribuido, donde diferentes partes del sistema están en diferentes ubicaciones, manteniendo su integridad y funcionalidad.",
            ],
          },
          {
            nombre: "Optimización de la Escalabilidad y Flexibilidad",
            info: [
              "Optimización de Recursos: Verificar si el sistema utiliza eficientemente los recursos disponibles, lo que ayuda a la escalabilidad horizontal y vertical sin desperdiciar capacidad.",
              "Estrategias de Caching: Evaluar el uso de mecanismos de caching para mejorar el rendimiento y reducir la carga en el sistema, especialmente en aplicaciones con alto tráfico.",
              "Desacoplamiento de Componentes: Evaluar si el sistema está diseñado con un alto grado de desacoplamiento entre sus componentes, lo que facilita su escalabilidad y flexibilidad para adaptarse a nuevas necesidades.",
              "Optimización de Consultas y Bases de Datos: Comprobar si las consultas y el acceso a la base de datos están optimizados para manejar grandes volúmenes de datos sin afectar la velocidad o la capacidad de respuesta.",
            ],
          },
          {
            nombre: "Evaluación de Costos Asociados a la Escalabilidad",
            info: [
              "Costos de Escalabilidad Vertical: Analizar los costos relacionados con la mejora de los recursos de hardware para mejorar el rendimiento y si esto es económicamente viable a largo plazo.",
              "Costos de Escalabilidad Horizontal: Evaluar los costos asociados con la implementación de más servidores o instancias para manejar la carga adicional y si esta opción es la más rentable.",
              "Costos Operacionales de Escalabilidad: Estimar los costos operacionales de mantener un sistema escalable, incluyendo la gestión de servidores, almacenamiento, y redes.",
              "Evaluación de la Relación Costo-Beneficio: Analizar si los beneficios de escalar el sistema compensan los costos asociados con la expansión y cómo esta relación afecta la sostenibilidad a largo plazo.",
            ],
          },
          {
            nombre: "Pruebas de Escalabilidad y Flexibilidad",
            info: [
              "Pruebas de Carga: Realizar pruebas de carga para verificar cómo el sistema maneja un gran volumen de usuarios y tráfico, asegurándose de que siga funcionando de manera eficiente.",
              "Pruebas de Estrés: Ejecutar pruebas de estrés para evaluar cómo el sistema responde a condiciones extremas, como picos de tráfico o fallos de componentes clave.",
              "Pruebas de Integración Continua: Evaluar si el sistema puede manejar actualizaciones regulares y la integración de nuevos componentes sin interrumpir su funcionamiento.",
              "Pruebas de Escalabilidad Progresiva: Verificar si el sistema puede escalar de manera progresiva, agregando recursos gradualmente sin comprometer la estabilidad.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Diseño para Escalabilidad",
            info: [
              "Arquitectura modular: Diseñar el sistema en módulos independientes para facilitar la expansión y mantenimiento.",
              "Uso de recursos en la nube: Implementar soluciones escalables en la nube como AWS, Azure o Google Cloud para manejar picos de demanda.",
              "Base de datos escalable: Utilizar bases de datos que soporten escalabilidad horizontal o vertical, como MongoDB, PostgreSQL o DynamoDB.",
              "Balanceo de carga: Configurar un balanceador de carga para distribuir el tráfico entre múltiples servidores y evitar sobrecargas.",
            ],
          },
          {
            nombre: "Pruebas de Escalabilidad",
            info: [
              "Simulación de aumento de carga: Evaluar cómo el sistema responde al incremento de usuarios o datos.",
              "Pruebas de límite: Identificar el punto en el que el sistema deja de ser eficiente o falla bajo carga extrema.",
              "Medición de tiempos de respuesta: Verificar que el sistema mantenga tiempos aceptables de respuesta al escalar.",
              "Análisis de costos: Asegurar que los costos de escalar el sistema sean sostenibles en función de la carga proyectada.",
            ],
          },
          {
            nombre: "Implementación de Flexibilidad",
            info: [
              "Adaptabilidad de interfaces: Diseñar interfaces que puedan ajustarse a diferentes dispositivos y resoluciones.",
              "Parámetros configurables: Permitir que los administradores del sistema ajusten configuraciones clave sin necesidad de cambios en el código.",
              "Compatibilidad con integraciones: Diseñar APIs que faciliten la integración con otros sistemas o servicios futuros.",
              "Aislamiento de componentes: Asegurar que los cambios en un componente no afecten la funcionalidad de otros módulos.",
            ],
          },
          {
            nombre: "Mantenimiento Escalable",
            info: [
              "Monitoreo proactivo: Utilizar herramientas como Prometheus o New Relic para identificar problemas antes de que afecten el rendimiento.",
              "Actualizaciones sin interrupciones: Implementar estrategias como despliegue azul-verde o canary para realizar actualizaciones sin afectar a los usuarios.",
              "Automatización: Automatizar tareas repetitivas como pruebas, despliegues o monitoreo para mejorar la eficiencia.",
              "Documentación clara: Mantener documentación actualizada para garantizar que el equipo pueda implementar cambios rápidamente.",
            ],
          },
          {
            nombre: "Evaluación Continua",
            info: [
              "Análisis de métricas: Revisar regularmente métricas clave de escalabilidad como tiempos de respuesta, tasa de errores y uso de recursos.",
              "Feedback de usuarios: Recoger opiniones de usuarios finales para identificar necesidades adicionales de flexibilidad.",
              "Revisión de costos: Analizar periódicamente el costo-beneficio de las estrategias de escalabilidad implementadas.",
              "Iteración de estrategias: Ajustar las soluciones de escalabilidad y flexibilidad en función de las necesidades cambiantes del sistema.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Escalabilidad_y_Flexibilidad.tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Escalabilidad_y_Flexibilidad.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 3,
      label: "Optimización de Rendimiento en la Arquitectura",
      descripcion:
        "Consiste en asegurar que el sistema responda de manera eficiente a las solicitudes de los usuarios con un rendimiento consistente, incluso bajo condiciones de alta demanda.",
      labelTitle: "Establecimiento de Estándares para Evaluar la Calidad",
      ventajas: [
        "Medición de rendimiento y detección de puntos críticos que afecten el rendimiento general.",
        "Documentación de las métricas de rendimiento, incluyendo tiempos de respuesta, latencia y tasa de fallos.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reducción de costos operativos al optimizar el uso de recursos de hardware y software.",
        },
        {
          img: imgFoco,
          descripcion:
            "Escalabilidad mejorada, permitiendo que el sistema soporte mayores cargas sin cambios significativos en la arquitectura.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre:
              "Evaluación de los Factores de Rendimiento en la Arquitectura",
            info: [
              "Capacidad de Respuesta: Medir el tiempo de respuesta del sistema bajo diferentes condiciones de carga, asegurando tiempos de respuesta rápidos para una experiencia de usuario fluida.",
              "Uso Eficiente de los Recursos: Evaluar el consumo de recursos como CPU, memoria y almacenamiento, asegurándose de que el sistema no esté utilizando más recursos de los necesarios.",
              "Rendimiento en Escala: Analizar cómo el sistema maneja el crecimiento, tanto en términos de usuarios como de datos, sin degradar el rendimiento.",
              "Optimización de la Latencia: Comprobar si el sistema está diseñado para reducir la latencia, lo que es crucial en aplicaciones que requieren respuestas en tiempo real, como en juegos o aplicaciones financieras.",
            ],
          },
          {
            nombre: "Optimización de Consultas y Acceso a la Base de Datos",
            info: [
              "Índices de Base de Datos: Evaluar si se utilizan índices adecuados para acelerar las consultas y evitar cuellos de botella en el acceso a los datos.",
              "Consultas Eficientes: Verificar si las consultas están optimizadas para minimizar el tiempo de procesamiento y el consumo de recursos.",
              "Cacheo de Consultas: Comprobar si las consultas frecuentes se almacenan en caché para evitar acceder a la base de datos repetidamente, mejorando así el rendimiento general.",
              "Diseño de la Base de Datos: Evaluar el modelo de datos y su estructura, asegurándose de que esté diseñado de forma eficiente para manejar grandes volúmenes de datos sin comprometer el rendimiento.",
            ],
          },
          {
            nombre: "Optimización de la Carga y Distribución de Recursos",
            info: [
              "Balanceo de Carga: Comprobar si el sistema utiliza balanceo de carga para distribuir el tráfico de manera eficiente entre diferentes servidores o servicios, evitando sobrecargas en un solo punto.",
              "Redundancia de Recursos: Evaluar la implementación de recursos redundantes para asegurar que, en caso de fallo de un componente, el sistema siga funcionando sin pérdidas de rendimiento.",
              "Uso de CDN (Redes de Distribución de Contenidos): Analizar el uso de CDNs para distribuir el contenido estático y reducir los tiempos de carga de las páginas en diferentes ubicaciones geográficas.",
              "Compresión de Archivos: Verificar si los archivos de datos y multimedia se comprimen para reducir el tamaño y mejorar los tiempos de carga, especialmente en aplicaciones web.",
            ],
          },
          {
            nombre: "Optimización de la Arquitectura del Sistema",
            info: [
              "Arquitectura Microservicios: Evaluar si la arquitectura basada en microservicios ayuda a escalar y optimizar el rendimiento de manera más eficiente que una arquitectura monolítica.",
              "Desacoplamiento de Componentes: Comprobar si los componentes están desacoplados de manera efectiva, permitiendo su optimización independiente y mejorando el rendimiento general del sistema.",
              "Uso de Contenedores: Verificar si el sistema está implementado usando contenedores como Docker para mejorar la portabilidad y eficiencia del entorno de ejecución.",
              "Optimización de Procesos Asíncronos: Evaluar si los procesos que no requieren interacción inmediata se manejan de manera asíncrona, lo que permite que el sistema siga siendo receptivo mientras realiza tareas pesadas en segundo plano.",
            ],
          },
          {
            nombre: "Optimización del Código y la Implementación",
            info: [
              "Código Limpio y Eficiente: Evaluar si el código está escrito de manera eficiente, evitando operaciones costosas y utilizando las mejores prácticas de optimización.",
              "Uso de Algoritmos Eficientes: Comprobar si los algoritmos utilizados están optimizados en términos de complejidad temporal y espacial, reduciendo el uso de recursos.",
              "Minificación de Archivos: Verificar si los archivos JavaScript, CSS y otros recursos están minificados para reducir el tamaño de los archivos y mejorar el rendimiento de la carga.",
              "Refactorización del Código: Analizar la frecuencia con la que se realiza la refactorización del código para mejorar la eficiencia y eliminar redundancias que puedan afectar el rendimiento.",
            ],
          },
          {
            nombre: "Monitoreo y Medición del Rendimiento",
            info: [
              "Herramientas de Monitoreo: Comprobar si se utilizan herramientas de monitoreo para rastrear el rendimiento en tiempo real y detectar posibles cuellos de botella en la arquitectura.",
              "Pruebas de Carga: Evaluar si se realizan pruebas de carga regulares para verificar cómo el sistema maneja grandes volúmenes de usuarios y datos.",
              "Métricas de Rendimiento: Medir métricas clave como el tiempo de respuesta, la utilización de recursos y la latencia para identificar áreas de mejora.",
              "Análisis de Bottlenecks: Identificar y solucionar los cuellos de botella que puedan estar afectando el rendimiento, como la congestión en las bases de datos o en los servicios de red.",
            ],
          },
          {
            nombre: "Optimización de la Red y Conectividad",
            info: [
              "Reducción de la Latencia de Red: Evaluar si la arquitectura está optimizada para minimizar la latencia de la red, utilizando estrategias como la compresión de datos y la optimización de las rutas de comunicación.",
              "Uso de Protocolos de Comunicación Eficientes: Verificar si se están utilizando protocolos de comunicación eficientes, como HTTP/2 o WebSockets, para mejorar la velocidad de transferencia de datos.",
              "Optimización de la Conectividad Móvil: Evaluar si la arquitectura está optimizada para usuarios móviles, reduciendo el consumo de datos y mejorando la velocidad de carga en redes móviles lentas.",
              "Pruebas de Red: Realizar pruebas de red para identificar posibles problemas de conectividad que puedan estar afectando el rendimiento de la arquitectura.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Análisis Inicial",
            info: [
              "Identificación de cuellos de botella: Usar herramientas como APM (Application Performance Monitoring) para localizar las partes más lentas del sistema.",
              "Revisión de arquitectura: Evaluar si la arquitectura actual cumple con las necesidades de rendimiento y escalabilidad.",
              "Monitoreo de recursos: Analizar el uso de CPU, memoria, disco y red para detectar posibles problemas.",
              "Estudio de patrones de uso: Comprender cómo los usuarios interactúan con el sistema para priorizar áreas de optimización.",
            ],
          },
          {
            nombre: "Optimización de Backend",
            info: [
              "Caching de datos: Implementar sistemas de caché como Redis o Memcached para reducir el tiempo de acceso a datos frecuentemente utilizados.",
              "Optimización de consultas: Revisar y mejorar las consultas a la base de datos para reducir tiempos de ejecución.",
              "Escalabilidad horizontal: Dividir la carga en varios servidores o instancias para mejorar el rendimiento.",
              "Uso de colas de mensajes: Implementar sistemas como RabbitMQ o Kafka para manejar tareas asíncronas y evitar bloqueos.",
            ],
          },
          {
            nombre: "Optimización de Frontend",
            info: [
              "Minimización de recursos: Reducir el tamaño de archivos CSS, JavaScript e imágenes para mejorar los tiempos de carga.",
              "Lazy loading: Cargar recursos solo cuando sean necesarios, como imágenes o componentes no visibles inicialmente.",
              "Reducción de solicitudes HTTP: Combinar archivos y utilizar CDN para disminuir la cantidad y el tiempo de las solicitudes.",
              "Renderización eficiente: Optimizar la renderización de componentes en el navegador, evitando re-renderizados innecesarios.",
            ],
          },
          {
            nombre: "Optimización de Infraestructura",
            info: [
              "Balanceo de carga: Configurar un balanceador de carga para distribuir el tráfico y evitar sobrecargas en servidores específicos.",
              "Uso de contenedores: Utilizar Docker o Kubernetes para manejar aplicaciones de manera eficiente y escalar según la demanda.",
              "Mejoras en red: Implementar CDN para reducir la latencia y mejorar la velocidad de entrega de contenidos.",
              "Actualización de hardware: Considerar mejoras en servidores, almacenamiento o redes para soportar cargas mayores.",
            ],
          },
          {
            nombre: "Pruebas y Monitoreo Continuo",
            info: [
              "Pruebas de estrés y carga: Evaluar el sistema bajo diferentes niveles de uso para identificar mejoras adicionales.",
              "Alertas proactivas: Configurar notificaciones automáticas para detectar problemas de rendimiento en tiempo real.",
              "Comparación de métricas: Comparar el rendimiento antes y después de aplicar optimizaciones para medir el impacto.",
              "Iteración constante: Ajustar y repetir el proceso de optimización con base en los datos obtenidos del monitoreo.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Optimizacion_de_Rendimiento_en_la_Arquitectura
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Optimizacion_de_Rendimiento_en_la_Arquitectura
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 550, y: 600 },
    data: {
      nodo: 3,
      label: "Compatibilidad de la Arquitectura",
      descripcion:
        "Permite garantizar que la arquitectura del sistema es capaz de interactuar y funcionar de manera efectiva con otras aplicaciones, sistemas y tecnologías.",
      labelTitle: "Aseguramiento de la Integración y Eficiencia del Sistema",
      ventajas: [
        "Documentación de estándares de comunicación y protocolos que se utilizarán en la integración.",
        "Pruebas de interoperabilidad con sistemas y plataformas externas, incluyendo herramientas para identificar y resolver problemas de compatibilidad.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reducción de costos de integración, ya que una arquitectura compatible evita la necesidad de modificaciones costosas.",
        },
        {
          img: imgFoco,
          descripcion:
            "Facilita la migración y actualización de tecnologías, asegurando que el sistema se adapte fácilmente a nuevos entornos.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Evaluación de la Compatibilidad con Sistemas Operativos",
            info: [
              "Compatibilidad Multiplataforma: Verificar que la arquitectura sea compatible con diferentes sistemas operativos, como Windows, macOS, Linux, etc., para garantizar el funcionamiento del software en diversas plataformas.",
              "Versiones del Sistema Operativo: Evaluar si la arquitectura funciona adecuadamente en versiones anteriores y actuales de los sistemas operativos, asegurando su accesibilidad para un mayor rango de usuarios.",
              "Dependencias del Sistema: Comprobar si el software depende de herramientas o bibliotecas específicas de un sistema operativo, lo que podría limitar su compatibilidad con otras plataformas.",
            ],
          },
          {
            nombre: "Compatibilidad con Navegadores Web",
            info: [
              "Soporte para Navegadores Principales: Asegurar que la arquitectura sea compatible con los navegadores más populares, como Chrome, Firefox, Safari y Edge, sin causar problemas de rendimiento o funcionalidad.",
              "Compatibilidad con Versiones Anteriores de Navegadores: Verificar si el sistema sigue siendo funcional en versiones anteriores de los navegadores más comunes, especialmente si se espera que el software sea utilizado por una audiencia diversa.",
              "Pruebas de Compatibilidad: Realizar pruebas de compatibilidad entre los diferentes navegadores para detectar inconsistencias visuales o de comportamiento, garantizando una experiencia de usuario coherente en todos ellos.",
            ],
          },
          {
            nombre: "Compatibilidad con Dispositivos Móviles",
            info: [
              "Compatibilidad con iOS y Android: Evaluar si la arquitectura es compatible con las versiones actuales y pasadas de los sistemas operativos móviles más populares, iOS y Android.",
              "Diseño Responsivo: Asegurar que el diseño de la interfaz se ajuste correctamente a diferentes tamaños de pantalla, garantizando una experiencia de usuario optimizada en dispositivos móviles.",
              "Uso de Tecnologías Móviles: Verificar que las tecnologías y herramientas utilizadas sean compatibles con las capacidades móviles, como la optimización para pantallas táctiles o el uso eficiente de la conectividad móvil.",
            ],
          },
          {
            nombre: "Compatibilidad con APIs Externas y Servicios",
            info: [
              "Interoperabilidad con APIs: Evaluar si la arquitectura puede integrarse sin problemas con APIs externas y servicios de terceros, garantizando la transferencia de datos y la comunicación entre sistemas.",
              "Compatibilidad con Protocolos Estándar: Asegurar que la arquitectura soporte protocolos estándar de la industria, como REST, SOAP, GraphQL, o WebSockets, para facilitar la integración con otros sistemas.",
              "Gestión de Versiones de API: Verificar si la arquitectura es capaz de adaptarse a los cambios en las versiones de las APIs y servicios externos, asegurando que no haya interrupciones en la funcionalidad.",
            ],
          },
          {
            nombre: "Compatibilidad con Bases de Datos",
            info: [
              "Compatibilidad con Sistemas de Gestión de Bases de Datos (DBMS): Asegurar que la arquitectura funcione correctamente con los principales DBMS como MySQL, PostgreSQL, MongoDB, Oracle, etc.",
              "Interoperabilidad con Diferentes Tipos de Bases de Datos: Verificar si el sistema puede interactuar con bases de datos relacionales, no relacionales, y de grafos, para adaptarse a las necesidades cambiantes del negocio.",
              "Migración de Base de Datos: Evaluar la capacidad de la arquitectura para realizar migraciones entre diferentes tipos de bases de datos o versiones, asegurando que no haya pérdida de datos ni problemas de compatibilidad.",
            ],
          },
          {
            nombre: "Compatibilidad con Infraestructura y Hardware",
            info: [
              "Compatibilidad con Servidores: Verificar si la arquitectura puede funcionar en una variedad de configuraciones de servidores, como servidores locales, servidores en la nube o servidores híbridos.",
              "Compatibilidad con Dispositivos de Entrada/Salida: Asegurar que el sistema sea compatible con diferentes dispositivos de entrada y salida, como impresoras, escáneres, cámaras, entre otros.",
              "Escalabilidad en Diferentes Entornos: Evaluar si la arquitectura es compatible con diversas infraestructuras de hardware, permitiendo una fácil expansión según las necesidades del sistema.",
            ],
          },
          {
            nombre: "Compatibilidad con Software de Terceros",
            info: [
              "Integración con Herramientas de Productividad: Asegurar que la arquitectura se integre bien con herramientas populares de productividad como Microsoft Office, Google Workspace, entre otras.",
              "Compatibilidad con Plataformas de Colaboración: Evaluar si el sistema es compatible con plataformas de colaboración como Slack, Teams, Zoom, asegurando una experiencia fluida para los usuarios.",
              "Interacción con Software Legacy: Verificar si la arquitectura puede interactuar de manera efectiva con sistemas antiguos (legacy), minimizando la necesidad de reescribir código o modificar el sistema legacy.",
            ],
          },
          {
            nombre:
              "Compatibilidad con Normativas y Estándares Internacionales",
            info: [
              "Cumplimiento de Estándares Internacionales: Asegurar que la arquitectura cumpla con las normativas y estándares internacionales, como ISO, GDPR, PCI-DSS, entre otros.",
              "Compatibilidad con Regulaciones Locales: Verificar que el sistema cumpla con las leyes y regulaciones locales, como las leyes de protección de datos o las normativas del sector en el que opera el software.",
              "Auditoría y Validación: Evaluar la capacidad de la arquitectura para ser auditada y validada según los requisitos de las normativas y estándares aplicables.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Evaluación de Compatibilidad",
            info: [
              "Compatibilidad con sistemas operativos: Verificar que la arquitectura soporte los sistemas operativos necesarios (Windows, macOS, Linux).",
              "Compatibilidad con navegadores: Asegurar que el sistema funcione correctamente en los navegadores principales (Chrome, Firefox, Safari, Edge).",
              "Compatibilidad de hardware: Revisar que los componentes de software sean compatibles con el hardware objetivo, incluyendo servidores y dispositivos cliente.",
              "Versiones de dependencias: Confirmar que las librerías y frameworks utilizados sean compatibles entre sí y con el entorno de ejecución.",
            ],
          },
          {
            nombre: "Pruebas de Compatibilidad",
            info: [
              "Pruebas multiplataforma: Evaluar el rendimiento y la funcionalidad en diferentes plataformas (escritorio, móvil, tablet).",
              "Pruebas de retrocompatibilidad: Asegurar que las actualizaciones de la arquitectura no rompan la funcionalidad con versiones anteriores.",
              "Pruebas de integraciones: Verificar que la arquitectura sea compatible con APIs externas, servicios de terceros y bases de datos existentes.",
              "Simulación de entornos: Crear entornos similares al entorno de producción para evaluar la compatibilidad bajo condiciones reales.",
            ],
          },
          {
            nombre: "Diseño para Compatibilidad",
            info: [
              "Uso de estándares abiertos: Implementar tecnologías y protocolos ampliamente aceptados para maximizar la interoperabilidad.",
              "Modularidad: Diseñar componentes desacoplados que permitan actualizaciones sin afectar la compatibilidad general.",
              "Abstracción de dependencias: Utilizar patrones de diseño como adaptadores para manejar diferencias entre plataformas o servicios.",
              "Internacionalización y localización: Asegurar compatibilidad con diferentes idiomas, formatos de fecha y moneda según la región.",
            ],
          },
          {
            nombre: "Compatibilidad con Tecnologías Futuras",
            info: [
              "Actualización regular: Estar al día con las nuevas versiones de tecnologías usadas en la arquitectura.",
              "Flexibilidad en la implementación: Diseñar la arquitectura para adaptarse fácilmente a nuevos estándares o protocolos.",
              "Soporte a tecnologías emergentes: Evaluar la integración con tecnologías como IA, IoT o blockchain según sea necesario.",
              "Documentación de cambios: Mantener un registro claro de las modificaciones en la arquitectura para facilitar futuras actualizaciones.",
            ],
          },
          {
            nombre: "Monitoreo y Mejora Continua",
            info: [
              "Seguimiento de problemas de compatibilidad: Registrar y solucionar problemas reportados por usuarios o sistemas integrados.",
              "Análisis de retroalimentación: Recoger información de usuarios y desarrolladores sobre problemas de compatibilidad encontrados.",
              "Evaluación de impacto: Analizar cómo los cambios en la arquitectura afectan la compatibilidad con otros sistemas.",
              "Actualización de políticas: Ajustar las políticas de desarrollo y mantenimiento para garantizar la compatibilidad a largo plazo.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Compatibilidad_de_la_Arquitectura
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Compatibilidad_de_la_Arquitectura
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -400, y: 660 },
    data: {
      nodo: 3,
      label: "Revisión de Seguridad Arquitectónica",
      descripcion:
        "Consiste en evaluar la arquitectura del sistema para identificar, mitigar y prevenir vulnerabilidades que podrían comprometer la seguridad del sistema o los datos que maneja.",
      labelTitle: "Protección Integral desde la Base",
      ventajas: [
        "Evaluación de puntos críticos de vulnerabilidad en la arquitectura, como autenticación y autorización de usuarios.",
        "Documentación de políticas de seguridad, procedimientos de respuesta ante incidentes y métodos de cifrado.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Cumplimiento normativo con leyes de protección de datos y privacidad, como GDPR o CCPA.",
        },
        {
          img: imgFoco,
          descripcion:
            "Reducción de costos asociados a posibles brechas de seguridad y pérdida de datos.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Análisis de Amenazas y Vulnerabilidades",
            info: [
              "Identificación de Amenazas: Evaluar posibles amenazas que puedan afectar la integridad y confidencialidad de la arquitectura, tales como ataques de inyección, desbordamientos de buffer, o accesos no autorizados.",
              "Evaluación de Vulnerabilidades: Identificar puntos débiles en la arquitectura, como la falta de cifrado en la transmisión de datos o configuraciones incorrectas en servicios de seguridad.",
              "Exposición de Datos Sensibles: Comprobar si la arquitectura maneja adecuadamente la protección de datos sensibles, como contraseñas, información financiera o datos personales.",
            ],
          },
          {
            nombre: "Autenticación y Autorización",
            info: [
              "Modelo de Autenticación: Evaluar si el sistema implementa métodos seguros de autenticación, como autenticación multifactor (MFA), contraseñas seguras, o autenticación basada en tokens.",
              "Control de Acceso Basado en Roles: Verificar que se utilicen controles de acceso adecuados para restringir los privilegios de los usuarios según su rol y necesidad, evitando el acceso no autorizado a información confidencial.",
              "Gestión de Sesiones: Asegurar que las sesiones de usuario se gestionen de manera segura, con expiración adecuada, protección contra secuestro de sesión y uso de tokens de sesión cifrados.",
            ],
          },
          {
            nombre: "Cifrado y Protección de Datos",
            info: [
              "Cifrado de Datos en Reposo: Evaluar si los datos almacenados en bases de datos o sistemas de almacenamiento están cifrados para proteger su confidencialidad en caso de accesos no autorizados.",
              "Cifrado de Datos en Tránsito: Asegurar que las comunicaciones de datos entre clientes y servidores estén protegidas mediante protocolos seguros como HTTPS, TLS o VPN, para prevenir la interceptación de datos.",
              "Almacenamiento Seguro de Claves y Certificados: Verificar que las claves criptográficas y certificados se almacenen de forma segura, utilizando almacenes de claves cifrados y evitando la exposición accidental.",
            ],
          },
          {
            nombre: "Prevención de Inyecciones y Otros Ataques Comunes",
            info: [
              "Prevención de Inyección de Código: Evaluar si el sistema utiliza prácticas seguras para prevenir ataques de inyección SQL, XSS (Cross-Site Scripting) o inyecciones de comandos, mediante el uso de parámetros seguros y validación de entrada.",
              "Protección contra CSRF (Cross-Site Request Forgery): Asegurar que el sistema esté protegido contra ataques de suplantación de solicitudes, utilizando tokens CSRF y validación de origen en todas las peticiones sensibles.",
              "Mitigación de Ataques de Fuerza Bruta: Comprobar si el sistema implementa medidas para prevenir ataques de fuerza bruta, como limitación de intentos de inicio de sesión y bloqueo de cuentas tras varios intentos fallidos.",
            ],
          },
          {
            nombre: "Auditoría y Registro de Seguridad",
            info: [
              "Registros de Seguridad: Verificar si la arquitectura implementa registros detallados y seguros para todas las actividades relevantes, como inicio de sesión, cambios en la configuración o acceso a datos sensibles.",
              "Monitoreo en Tiempo Real: Asegurar que se estén monitoreando las actividades en tiempo real para detectar patrones inusuales o intentos de ataque, utilizando herramientas de detección de intrusos.",
              "Auditorías de Seguridad Periódicas: Evaluar si la arquitectura es sometida a auditorías de seguridad regulares para identificar posibles debilidades y garantizar que las medidas de protección se mantengan actualizadas.",
            ],
          },
          {
            nombre: "Seguridad en la Infraestructura",
            info: [
              "Protección de la Red: Evaluar si la infraestructura de red está adecuadamente protegida mediante firewalls, segmentación de red, y el uso de redes privadas virtuales (VPN) para asegurar la confidencialidad de las comunicaciones internas.",
              "Seguridad en el Acceso Físico: Asegurar que los servidores y sistemas críticos estén ubicados en entornos físicos seguros, con control de acceso y vigilancia para evitar accesos no autorizados.",
              "Resiliencia ante Fallos: Comprobar si la arquitectura es capaz de resistir fallos de seguridad, como ataques DDoS (Denial of Service), utilizando servicios de mitigación de DDoS y garantizando la continuidad del servicio.",
            ],
          },
          {
            nombre: "Cumplimiento de Normativas y Estándares de Seguridad",
            info: [
              "Cumplimiento con Normativas de Seguridad: Verificar si la arquitectura cumple con las normativas de seguridad relevantes, como GDPR, PCI-DSS, HIPAA, o las normas ISO/IEC 27001 para la gestión de la seguridad de la información.",
              "Evaluación de Riesgos y Cumplimiento: Asegurar que la arquitectura esté alineada con los requisitos de cumplimiento mediante una evaluación continua de riesgos y auditorías internas.",
              "Documentación de Políticas de Seguridad: Comprobar que existan políticas claras y documentadas relacionadas con la seguridad, que cubran aspectos como la gestión de contraseñas, protección de datos y respuesta ante incidentes.",
            ],
          },
          {
            nombre: "Seguridad en el Ciclo de Vida del Desarrollo",
            info: [
              "Pruebas de Seguridad en el Desarrollo: Evaluar si se realizan pruebas de seguridad en cada fase del ciclo de vida del desarrollo de software, como pruebas de penetración, análisis estático de código y revisiones de seguridad en el diseño.",
              "Desarrollo Seguro: Asegurar que las mejores prácticas de desarrollo seguro sean implementadas durante todo el ciclo de vida del desarrollo, como el uso de bibliotecas seguras y la gestión adecuada de dependencias.",
              "Gestión de Vulnerabilidades: Verificar si existen mecanismos para gestionar las vulnerabilidades en el software a lo largo de su ciclo de vida, incluyendo actualizaciones de seguridad periódicas y parches de seguridad.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Evaluación de Riesgos",
            info: [
              "Identificación de vulnerabilidades: Usar herramientas como OWASP ZAP o Nessus para detectar fallas en la arquitectura.",
              "Análisis de amenazas: Evaluar posibles vectores de ataque que puedan comprometer la integridad del sistema.",
              "Clasificación de riesgos: Priorizar las vulnerabilidades detectadas según su impacto y probabilidad de ocurrencia.",
              "Plan de mitigación: Diseñar estrategias para reducir o eliminar riesgos asociados a vulnerabilidades críticas.",
            ],
          },
          {
            nombre: "Protección de Datos",
            info: [
              "Cifrado de datos sensibles: Implementar cifrado en tránsito (TLS) y en reposo (AES-256) para proteger la información.",
              "Control de acceso: Utilizar sistemas de autenticación y autorización robustos como OAuth2 o JWT.",
              "Gestión de contraseñas: Asegurar que las contraseñas sean almacenadas utilizando técnicas como bcrypt o Argon2.",
              "Auditorías de datos: Realizar revisiones regulares de los datos almacenados para detectar posibles filtraciones.",
            ],
          },
          {
            nombre: "Seguridad de Infraestructura",
            info: [
              "Configuración segura de servidores: Deshabilitar puertos no utilizados y aplicar políticas de seguridad en firewalls.",
              "Seguridad en la red: Implementar sistemas de detección y prevención de intrusos (IDS/IPS) para proteger la red.",
              "Actualización de software: Mantener todos los componentes actualizados con los últimos parches de seguridad.",
              "Gestión de logs: Monitorear y analizar registros del sistema para detectar actividades sospechosas.",
            ],
          },
          {
            nombre: "Pruebas de Seguridad",
            info: [
              "Pruebas de penetración: Simular ataques para identificar y solucionar puntos débiles en la arquitectura.",
              "Pruebas de resistencia: Evaluar cómo el sistema responde ante intentos de acceso no autorizado o ataques DDoS.",
              "Validación de entradas: Asegurar que todas las entradas de usuarios sean validadas para prevenir ataques como SQL Injection o XSS.",
              "Escaneo automatizado: Utilizar herramientas de escaneo para detectar vulnerabilidades en código y dependencias.",
            ],
          },
          {
            nombre: "Monitoreo y Mejora Continua",
            info: [
              "Implementación de alertas: Configurar alertas para detectar actividades inusuales o potencialmente maliciosas.",
              "Revisión periódica: Realizar evaluaciones de seguridad regularmente para mantener la arquitectura protegida.",
              "Capacitación del equipo: Entrenar a los desarrolladores en buenas prácticas de seguridad.",
              "Adopción de estándares: Seguir estándares como OWASP, ISO 27001 o NIST para garantizar un enfoque robusto de seguridad.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Revision_de_Seguridad_Arquitectonica
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Revision_de_Seguridad_Arquitectonica
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: 100, y: 680 },
    data: {
      nodo: 3,
      label: "Evaluación de Adaptabilidad de la Arquitectura",
      descripcion:
        "Consiste en evaluar la capacidad de la arquitectura para adaptarse y evolucionar frente a nuevos requerimientos, sin comprometer el rendimiento de la estructura existente.",
      labelTitle: "Flexibilidad y Respuesta ante el Cambio",
      ventajas: [
        "Documentación técnica detallada sobre la modularidad del sistema, interfaces y dependencias.",
        "Estándares de flexibilidad para asegurar que futuras modificaciones no afecten la estabilidad o el rendimiento.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Facilita la implementación de mejoras y actualizaciones sin afectar la operatividad del sistema.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mayor competitividad y capacidad de respuesta a cambios rápidos en el entorno tecnológico y en el mercado.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Flexibilidad en la Arquitectura",
            info: [
              "Modularidad: Evaluar si la arquitectura permite la adición o eliminación de componentes sin causar efectos adversos en el sistema global.",
              "Escalabilidad: Verificar si el sistema puede crecer o adaptarse a cambios en la demanda, ya sea mediante la adición de recursos o la expansión a nuevas plataformas.",
              "Integración de Nuevas Tecnologías: Comprobar si la arquitectura facilita la integración de nuevas tecnologías o servicios sin requerir reestructuraciones significativas.",
            ],
          },
          {
            nombre: "Soporte para Actualizaciones y Cambios",
            info: [
              "Facilidad de Actualización: Evaluar si la arquitectura permite realizar actualizaciones de manera sencilla, sin afectar la estabilidad o rendimiento del sistema.",
              "Manejo de Versiones: Verificar si la arquitectura soporta la gestión de versiones de manera eficiente, permitiendo transitar entre diferentes versiones del sistema sin problemas.",
              "Compatibilidad con Nuevas Funcionalidades: Asegurar que la arquitectura sea capaz de incorporar nuevas funcionalidades sin complicaciones técnicas o arquitectónicas.",
            ],
          },
          {
            nombre: "Resiliencia ante Cambios en el Entorno",
            info: [
              "Adaptación a Cambios del Mercado: Evaluar si la arquitectura permite adaptar el sistema a cambios rápidos del mercado, como nuevas demandas o tendencias tecnológicas.",
              "Resiliencia en Condiciones Variables: Verificar si el sistema es capaz de seguir operando correctamente bajo condiciones de carga impredecible o fluctuante, sin pérdida de funcionalidad.",
              "Capacidad de Respuesta a Nuevas Requerimientos: Comprobar si la arquitectura permite la rápida implementación de nuevas características o ajustes en respuesta a los cambios en los requisitos del negocio o usuarios.",
            ],
          },
          {
            nombre: "Escalabilidad Horizontal y Vertical",
            info: [
              "Escalabilidad Horizontal: Evaluar si la arquitectura puede expandirse de manera eficiente añadiendo más instancias o nodos en paralelo, permitiendo aumentar el rendimiento sin afectar la estabilidad.",
              "Escalabilidad Vertical: Verificar si el sistema permite incrementar los recursos de una única instancia (memoria, CPU, almacenamiento) para adaptarse a mayores cargas de trabajo sin interrupciones.",
              "Desempeño en Escalabilidad: Asegurar que las capacidades de escalabilidad no afecten negativamente al rendimiento general del sistema.",
            ],
          },
          {
            nombre: "Adaptación a Nuevas Plataformas y Dispositivos",
            info: [
              "Compatibilidad Multiplataforma: Evaluar si la arquitectura es capaz de funcionar en diferentes plataformas o dispositivos, como servidores locales, en la nube o dispositivos móviles.",
              "Interoperabilidad: Verificar si el sistema puede trabajar de manera eficiente con otras plataformas o servicios, como sistemas externos, APIs o dispositivos de diferentes fabricantes.",
              "Optimización para Nuevos Dispositivos: Comprobar si la arquitectura puede adaptarse sin problemas a nuevos dispositivos, como nuevos modelos de smartphones o cambios en las especificaciones del hardware.",
            ],
          },
          {
            nombre: "Resiliencia en el Mantenimiento y Soporte",
            info: [
              "Facilidad de Mantenimiento: Evaluar si la arquitectura permite una gestión sencilla del mantenimiento, facilitando tareas como actualizaciones, optimización de rendimiento o corrección de errores.",
              "Soporte para Diagnóstico de Fallos: Verificar si existen mecanismos para diagnosticar y resolver fallos de manera rápida y efectiva, minimizando el impacto en los usuarios.",
              "Adaptación a Cambios Operativos: Asegurar que la arquitectura sea capaz de adaptarse a nuevos procesos operativos o cambios en la estructura de la organización sin grandes complicaciones.",
            ],
          },
          {
            nombre: "Desempeño en Entornos Dinámicos",
            info: [
              "Adaptación al Cambio de Carga: Evaluar si la arquitectura responde adecuadamente a cambios repentinos en la carga, escalando recursos según sea necesario sin perder rendimiento.",
              "Manejo de Condiciones Dinámicas: Verificar si el sistema mantiene su estabilidad y eficiencia cuando los entornos o los requisitos cambian constantemente.",
              "Capacidad de Ajuste Dinámico: Comprobar si la arquitectura puede ajustarse dinámicamente a nuevas demandas de forma automática, optimizando recursos según sea necesario.",
            ],
          },
          {
            nombre: "Optimización del Uso de Recursos",
            info: [
              "Uso Eficiente de Recursos: Evaluar si la arquitectura está diseñada para hacer un uso óptimo de los recursos disponibles, evitando el desperdicio de capacidad computacional o almacenamiento.",
              "Adaptación a Limitaciones de Recursos: Comprobar si el sistema puede funcionar eficazmente incluso en entornos con recursos limitados, como servidores de baja capacidad o redes con ancho de banda reducido.",
              "Gestión Inteligente de Recursos: Verificar si la arquitectura implementa mecanismos de gestión inteligente para distribuir recursos de manera eficiente según las necesidades del sistema.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Escalabilidad y Flexibilidad",
            info: [
              "Escalabilidad horizontal: Verificar si la arquitectura soporta la adición de más nodos o servidores según la demanda.",
              "Escalabilidad vertical: Evaluar la capacidad de aumentar los recursos de una sola máquina (CPU, memoria) para gestionar más carga.",
              "Adaptabilidad a cambios: Asegurar que la arquitectura pueda integrarse con nuevas tecnologías sin grandes esfuerzos de reestructuración.",
              "Manejo de picos de tráfico: Verificar que el sistema pueda manejar picos de tráfico mediante técnicas como balanceo de carga y almacenamiento en caché.",
            ],
          },
          {
            nombre: "Integración con Nuevas Tecnologías",
            info: [
              "Compatibilidad con servicios en la nube: Asegurar que la arquitectura se pueda integrar con plataformas como AWS, Azure o Google Cloud.",
              "Adopción de nuevas tecnologías: Evaluar cómo la arquitectura soporta la integración con tecnologías emergentes, como IA, IoT o blockchain.",
              "Compatibilidad con APIs externas: Verificar que la arquitectura permita la fácil integración con servicios externos a través de APIs RESTful o GraphQL.",
              "Modularidad: Utilizar un diseño modular para que los componentes sean fácilmente intercambiables y actualizables sin afectar al sistema.",
            ],
          },
          {
            nombre: "Facilidad de Mantenimiento y Actualización",
            info: [
              "Desacoplamiento de componentes: Asegurar que los diferentes componentes del sistema estén lo suficientemente desacoplados para facilitar actualizaciones sin interrumpir el funcionamiento.",
              "Automatización de despliegues: Implementar pipelines de CI/CD para realizar actualizaciones y cambios de forma automática y sin intervención manual.",
              "Monitoreo continuo: Implementar sistemas de monitoreo para detectar problemas de rendimiento o fallos rápidamente, permitiendo una rápida adaptación a situaciones imprevistas.",
              "Versionado de servicios: Utilizar un enfoque de versionado para los servicios de la arquitectura, permitiendo actualizaciones sin interrumpir a los usuarios.",
            ],
          },
          {
            nombre: "Adaptabilidad a Requerimientos de Negocio",
            info: [
              "Cambio en los procesos de negocio: Evaluar cómo la arquitectura responde a los cambios en los procesos empresariales, como expansión a nuevos mercados o ajustes en el modelo de negocio.",
              "Flexibilidad en la gestión de datos: Asegurar que la arquitectura permita cambios en la estructura de datos o en la base de datos sin afectar otras partes del sistema.",
              "Configurabilidad: Proveer interfaces de configuración para que los administradores o usuarios avanzados puedan adaptar la arquitectura a nuevas necesidades sin modificar el código fuente.",
              "Optimización de recursos: Evaluar si el sistema puede adaptarse a la optimización de recursos según el contexto (por ejemplo, almacenamiento, computación, redes).",
            ],
          },
          {
            nombre: "Pruebas de Adaptabilidad",
            info: [
              "Pruebas de carga adaptativa: Realizar pruebas que simulen cambios en el tráfico y la carga del sistema para evaluar la capacidad de adaptación.",
              "Pruebas de integración con nuevas tecnologías: Evaluar cómo la arquitectura se adapta al incorporar nuevas tecnologías o servicios durante el ciclo de vida del sistema.",
              "Pruebas de fallo: Simular fallos en componentes clave para verificar cómo la arquitectura responde y se adapta a la pérdida de servicios o recursos.",
              "Simulación de cambios: Evaluar cómo la arquitectura responde a modificaciones en los requisitos de negocio o tecnológicos, asegurando que se mantenga eficiente y funcional.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaDos.Evaluacion_de_Adaptabilidad_de_la_Arquitectura
          .tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaDos.Evaluacion_de_Adaptabilidad_de_la_Arquitectura
          .paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const unionPruevaDisenio: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-5",
    source: "10",
    target: "50",
    sourceHandle: "3",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-6",
    source: "10",
    target: "60",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-7",
    source: "10",
    target: "70",
    sourceHandle: "4",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
];
export const nodoPruevaDisenio: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 2,
      label: MENU[2].lista[2].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -300, y: 320 },
    data: {
      nodo: 3,
      label: "Pruebas de Consistencia",
      descripcion:
        "Permiten verificar que todos los componentes del sistema, desde la arquitectura hasta las interfaces y las funcionalidades, trabajen de manera coherente y sin conflictos.",
      labelTitle: "Validación de la Integridad y Coherencia del Diseño",
      ventajas: [
        "Especificaciones de diseño, que incluyan la descripción de la estructura, los módulos y la comunicación entre componentes.",
        "Casos de prueba, para verificar la coherencia de las interacciones dentro del sistema y con sistemas externos.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Mejora de la calidad del sistema al garantizar que todas las partes del diseño sean lógicas y no presenten conflictos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mayor confianza en el diseño final, asegurando el cumplimiento de los requisitos establecidos.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Consistencia Visual y de Interfaz",
            info: [
              "Uniformidad en Elementos Gráficos: Evaluar si los elementos gráficos, como botones, menús y fuentes, siguen un patrón coherente a lo largo de la interfaz.",
              "Coherencia en los Colores y Estilos: Verificar si los colores, iconos y estilos visuales son consistentes, transmitiendo una experiencia visual uniforme.",
              "Similitud en la Navegación: Asegurar que las rutas y métodos de navegación sean consistentes en todas las pantallas y secciones del sistema.",
            ],
          },
          {
            nombre: "Consistencia en el Comportamiento del Sistema",
            info: [
              "Acciones Predecibles: Evaluar si las acciones que realiza el usuario tienen un comportamiento coherente en todas las interacciones dentro del sistema.",
              "Manejo de Errores: Verificar si los mensajes de error, advertencias y notificaciones siguen un patrón consistente, proporcionando claridad y facilidad de uso.",
              "Respuestas del Sistema: Comprobar si el sistema responde de manera consistente a las entradas del usuario, sin variaciones inesperadas en el rendimiento o comportamiento.",
            ],
          },
          {
            nombre: "Consistencia en la Interacción del Usuario",
            info: [
              "Patrones de Interacción Comunes: Evaluar si los métodos de interacción con el sistema, como clics, deslizamientos o entradas de teclado, siguen los mismos patrones en todas las secciones.",
              "Estándares de Usabilidad: Verificar si la interfaz respeta los estándares comunes de usabilidad, como la colocación de botones, los formularios o los controles de navegación.",
              "Comportamiento de los Elementos Interactivos: Asegurar que todos los elementos interactivos (botones, enlaces, menús, etc.) tengan un comportamiento consistente y predecible.",
            ],
          },
          {
            nombre: "Consistencia en la Estructura del Contenido",
            info: [
              "Jerarquía Visual Clara: Evaluar si la jerarquía visual de los contenidos, como títulos, subtítulos y párrafos, es coherente en todas las páginas y secciones.",
              "Organización Coherente: Verificar si los elementos de contenido, como formularios, listas y tablas, siguen un patrón consistente en cuanto a su disposición y organización.",
              "Accesibilidad del Contenido: Asegurar que el contenido sea fácil de leer y entender, manteniendo una estructura coherente que facilite la navegación y el consumo de la información.",
            ],
          },
          {
            nombre: "Consistencia en los Mensajes del Sistema",
            info: [
              "Mensajes de Confirmación y Alerta: Evaluar si los mensajes de confirmación, alerta y éxito siguen un formato y estilo coherente en todo el sistema.",
              "Tiempos de Respuesta y Feedback: Verificar si las respuestas y retroalimentación del sistema (por ejemplo, notificaciones o tiempos de carga) son consistentes en cuanto a su formato y timing.",
              "Lenguaje Uniforme: Comprobar que el lenguaje utilizado en los mensajes del sistema (errores, instrucciones, confirmaciones) sea consistente, evitando confusión en el usuario.",
            ],
          },
          {
            nombre: "Consistencia en la Implementación de Funcionalidades",
            info: [
              "Funciones Clave Comunes: Evaluar si las funcionalidades clave, como la búsqueda, la navegación y las interacciones con formularios, siguen una implementación coherente a lo largo del sistema.",
              "Flujo de Trabajo Uniforme: Verificar si los flujos de trabajo, como los procesos de registro o pago, siguen un patrón lógico y consistente, sin cambios inesperados en el comportamiento.",
              "Coherencia en la Accesibilidad: Asegurar que las funcionalidades sean accesibles de manera consistente, permitiendo que todos los usuarios, independientemente de sus capacidades, puedan interactuar con ellas.",
            ],
          },
          {
            nombre: "Consistencia en la Personalización y Configuración",
            info: [
              "Ajustes Uniformes: Evaluar si las opciones de personalización, como preferencias de usuario o configuraciones del sistema, mantienen una estructura y comportamiento coherente.",
              "Persistencia de Preferencias: Verificar si las preferencias del usuario se mantienen de manera consistente en diferentes sesiones o dispositivos.",
              "Accesibilidad a Configuraciones: Asegurar que las configuraciones personalizadas sean fácilmente accesibles y gestionables, sin interrupciones en la experiencia del usuario.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Consistencia Visual",
            info: [
              "Slack, Microsoft Teams o Zoom para mantener una comunicación constante.",
              "Colores, tipografía y estilos: Mantener consistencia en colores, fuentes y estilos mejora la legibilidad y facilita la comprensión.",
              "Iconografía: Verificar que los iconos sean representativos, iguales en todos los contextos y sigan una línea visual constante.",
              "Espaciado y márgenes: Verificar que el espaciado entre elementos como botones y campos de texto sean consistentes.",
            ],
          },
          {
            nombre: "Consistencia de Navegación",
            info: [
              "Menú y barra de navegación: Asegurar que la navegación y opciones sean consistentes en todas las pantallas garantiza una experiencia fluida y sin confusión para el usuario.",
              "Accesibilidad a funciones comunes: Asegurar que funciones clave, como búsqueda, configuración de usuario o ayuda, sean accesibles desde cualquier sección del software.",
            ],
          },
          {
            nombre: "Consistencia Funcional",
            info: [
              "Acciones de botones y enlaces: Garantizar que los botones tengan la misma función en todas las páginas, manteniendo una interacción coherente e intuitiva.",
              "Campos de entrada: Asegurar que los campos de texto y entradas de datos mantengan patrones consistentes en diseño y comportamiento, como la validación.",
            ],
          },
          {
            nombre: "Consistencia de Flujos de Usuario",
            info: [
              "Secuencia de pasos: Garantizar que los flujos de usuario, como registro o inicio de sesión, sean coherentes y predecibles para evitar interrupciones en la experiencia.",
              "Mensajes y notificaciones: Los mensajes deben mantener un formato y estilo consistentes, proporcionando claridad sobre los pasos a seguir.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Consistencia.tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Consistencia.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 550, y: 660 },
    data: {
      nodo: 3,
      label: "Documentación de Resultados de Prueba",
      descripcion:
        "Proceso de registrar y analizar los resultados obtenidos de las pruebas realizadas durante el ciclo de vida del desarrollo de un sistema.",
      labelTitle:
        "Registro y Análisis de la Eficiencia en el Diseño del Sistema",
      ventajas: [
        "Evidencia de las pruebas: Registros de errores, logs de ejecución, y otros elementos que sustenten el comportamiento observado.'",
        "Documentación sobre las acciones a tomar para resolver los problemas detectados en las pruebas.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Facilita el seguimiento del progreso a través de la documentación, asegurando que se cubran todos los aspectos del sistema.",
        },
        {
          img: imgFoco,
          descripcion:
            "Proporciona información clave para que el equipo pueda tomar decisiones informadas sobre los siguientes pasos a seguir.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Resumen de Resultados de las Pruebas",
            info: [
              "Descripción General de las Pruebas Realizadas: Resumen breve de las pruebas que se ejecutaron, incluyendo el objetivo, el alcance y el tipo de prueba realizada (funcional, usabilidad, etc.).",
              "Resultados Clave Obtenidos: Resumen de los resultados más importantes obtenidos durante las pruebas, destacando los hallazgos más significativos y relevantes para el diseño.",
              "Cumplimiento de los Criterios de Éxito: Indicación de qué porcentaje de las pruebas cumplió con los criterios establecidos para su éxito o aceptación.",
            ],
          },
          {
            nombre: "Resultados Específicos por Tipo de Prueba",
            info: [
              "Pruebas de Usabilidad: Resultados de las pruebas centradas en la interacción del usuario con la interfaz, incluyendo facilidad de uso, accesibilidad y satisfacción del usuario.",
              "Pruebas de Rendimiento: Resultados de las pruebas que evalúan la velocidad, capacidad de respuesta y eficiencia del sistema bajo diversas condiciones de carga.",
              "Pruebas de Seguridad: Resultados de las pruebas realizadas para identificar vulnerabilidades de seguridad, incluyendo cualquier brecha o amenaza detectada.",
              "Pruebas de Funcionalidad: Resultados que muestran cómo el sistema cumple con los requisitos funcionales definidos, incluyendo cualquier desviación o falla encontrada.",
            ],
          },
          {
            nombre: "Análisis de Desviaciones y Deficiencias",
            info: [
              "Identificación de Errores Críticos: Detalle de los errores que impidieron la ejecución adecuada de las funcionalidades o que afectaron gravemente la experiencia del usuario.",
              "Áreas de Mejora: Identificación de las áreas del diseño o el sistema que necesitan ser ajustadas o mejoradas para cumplir con los objetivos de usabilidad y rendimiento.",
              "Deficiencias en la Experiencia del Usuario: Hallazgos relacionados con la interacción del usuario que deben ser modificados para optimizar la experiencia.",
            ],
          },
          {
            nombre: "Recomendaciones para Mejoras",
            info: [
              "Sugerencias de Diseño: Recomendaciones específicas basadas en los resultados de las pruebas, enfocadas en la mejora de la interfaz, la navegación y los flujos de usuario.",
              "Optimización de Rendimiento: Consejos sobre cómo mejorar la velocidad y la eficiencia del sistema, basados en los resultados de las pruebas de rendimiento.",
              "Mejoras de Seguridad: Recomendaciones para mitigar las vulnerabilidades detectadas durante las pruebas de seguridad.",
              "Mejoras Funcionales: Ideas para corregir errores funcionales y garantizar que el sistema cumpla con los requisitos establecidos.",
            ],
          },
          {
            nombre: "Plan de Acción Post-Pruebas",
            info: [
              "Priorización de Correcciones: Detalle sobre cómo se deben priorizar las correcciones, según su impacto en la usabilidad, seguridad o funcionalidad del sistema.",
              "Plazos de Implementación: Definición de plazos y etapas para la corrección de errores o implementación de mejoras recomendadas.",
              "Evaluación Continua: Propuesta para llevar a cabo pruebas periódicas para asegurar que el sistema mantenga su rendimiento, usabilidad y seguridad a medida que se realizan cambios.",
            ],
          },
          {
            nombre: "Documentación Técnica Detallada",
            info: [
              "Registro de Configuración de las Pruebas: Detalles técnicos sobre el entorno de prueba, las herramientas utilizadas y las configuraciones aplicadas para garantizar la repetibilidad de las pruebas.",
              "Resultados Numéricos y Gráficos: Presentación de los resultados de las pruebas en forma de datos numéricos, gráficos y tablas que permitan un análisis claro de los hallazgos.",
              "Registro de Errores y Soluciones: Listado completo de los errores identificados y las soluciones propuestas, con detalles sobre la severidad y los pasos para solucionarlos.",
            ],
          },
          {
            nombre: "Seguimiento de Pruebas a Largo Plazo",
            info: [
              "Evaluación de la Estabilidad del Sistema: Información sobre la evolución del sistema a lo largo del tiempo, asegurando que las mejoras no afecten negativamente al rendimiento general.",
              "Monitoreo de Nuevas Funcionalidades: Procedimiento para probar nuevas características del sistema de manera continua, garantizando que se integren correctamente sin introducir errores.",
              "Planificación de Nuevas Pruebas: Definición de pruebas futuras necesarias para validar la efectividad de las soluciones implementadas y mejorar áreas no cubiertas en pruebas anteriores.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Registro de Casos de Prueba",
            info: [
              "Identificación única: Cada caso de prueba debe tener un identificador único para rastreabilidad.",
              "Descripción clara: Proveer una descripción detallada de lo que se está probando, incluyendo objetivos y contexto.",
              "Criterios de aceptación: Incluir los criterios específicos que determinarán si el caso de prueba pasa o falla.",
              "Datos de entrada y salida esperada: Documentar los datos utilizados en la prueba y los resultados esperados para facilitar la comparación con los resultados reales.",
            ],
          },
          {
            nombre: "Reporte de Resultados",
            info: [
              "Estado de la prueba: Indicar si el caso pasó, falló o fue bloqueado, junto con una breve explicación.",
              "Detalles de fallos: En caso de fallo, incluir una descripción detallada del problema, pasos para replicarlo, y evidencia como capturas de pantalla o logs.",
              "Impacto: Evaluar el impacto del fallo en el sistema, clasificándolo como crítico, mayor, menor o informativo.",
              "Historial: Mantener un registro de pruebas anteriores para analizar tendencias o regresiones.",
            ],
          },
          {
            nombre: "Análisis de Resultados",
            info: [
              "Cobertura de pruebas: Medir el alcance de las pruebas realizadas y el porcentaje del sistema probado.",
              "Estadísticas de desempeño: Proveer métricas como tiempo de respuesta, uso de memoria, o rendimiento bajo carga.",
              "Patrones de errores: Identificar patrones comunes en fallos para sugerir áreas de mejora en el desarrollo.",
              "Recomendaciones: Proveer sugerencias basadas en los resultados para mejorar la calidad del sistema.",
            ],
          },
          {
            nombre: "Archivos y Almacenamiento",
            info: [
              "Formato estándar: Utilizar formatos claros y consistentes (PDF, Excel, etc.) para garantizar accesibilidad.",
              "Versionamiento: Llevar un control de versiones de los reportes para identificar cambios o mejoras.",
              "Almacenamiento seguro: Garantizar que los resultados sean almacenados en un lugar seguro y accesible solo para las partes autorizadas.",
              "Disponibilidad: Proveer una estructura organizada que facilite la búsqueda de reportes específicos cuando sea necesario.",
            ],
          },
        ],
      },
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 3,
      label: "Pruebas de Integración",
      descripcion:
        "Consiste en verificar que los módulos y componentes individuales, previamente probados en aislamiento, puedan interactuar sin problemas cuando se combinan.",
      labelTitle: "Validación de la Conectividad y Flujo del Sistema",
      ventajas: [
        "Plan de pruebas de integración que describa los escenarios, los módulos involucrados, y las interfaces que se probarán.",
        "Definición de interfaces y puntos de integración; incluyendo API, protocolos de comunicación, y formatos de datos.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Realizar pruebas de integración reduce el riesgo de fallos en un entorno de usuarios reales.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejora de la eficiencia del equipo; al identificar y resolver dependencias entre módulos.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Objetivos de las Pruebas de Integración",
            info: [
              "Verificar la Interacción entre Componentes: Asegurar que los diferentes módulos y componentes del sistema trabajen correctamente cuando se integran.",
              "Comprobar la Comunicación entre Servicios: Validar que los servicios o APIs que interactúan entre sí funcionen de manera adecuada sin problemas de compatibilidad.",
              "Detección de Errores de Integración: Identificar cualquier error o fallo que pueda surgir cuando los componentes se combinan, como problemas de comunicación, datos corruptos o incompatibilidades.",
            ],
          },
          {
            nombre: "Tipos de Pruebas de Integración",
            info: [
              "Pruebas de Integración Incremental: Se prueban las interfaces entre los módulos de manera progresiva, asegurando que cada módulo integrado funcione correctamente antes de agregar más componentes.",
              "Pruebas de Integración No Incremental: Se prueban todos los componentes integrados de una vez, lo que permite detectar errores de integración en una sola fase.",
              "Pruebas de Integración de Sistema: Se evalúa cómo interactúa el sistema completo, asegurando que todos los componentes trabajen juntos como un conjunto cohesivo.",
              "Pruebas de Integración de Regresión: Se realizan para garantizar que la integración de nuevos componentes no haya afectado negativamente a los módulos existentes.",
            ],
          },
          {
            nombre: "Estrategias de Pruebas de Integración",
            info: [
              "Pruebas Basadas en el Modelo: Crear un modelo de cómo deben interactuar los componentes para luego realizar pruebas con base en ese modelo.",
              "Pruebas de Caja Negra: Evaluar la interacción entre los componentes sin conocimiento de su implementación interna, verificando únicamente las entradas y salidas.",
              "Pruebas de Caja Blanca: Enfoque más detallado que evalúa la interacción entre los componentes considerando la estructura interna de cada uno.",
              "Pruebas con Datos Reales: Validar la integración utilizando datos reales para simular cómo se comportará el sistema en un entorno de producción.",
            ],
          },
          {
            nombre: "Criterios de Éxito para las Pruebas de Integración",
            info: [
              "Comunicación Correcta entre Componentes: Los módulos deben intercambiar datos y comunicarse correctamente sin errores.",
              "Fluidez en los Procesos del Sistema: Los flujos de trabajo deben ser coherentes y completos sin interrumpir la funcionalidad del sistema.",
              "Desempeño Adecuado: El sistema debe funcionar dentro de los límites de tiempo establecidos, sin retrasos ni problemas de rendimiento debido a la integración.",
              "Cumplimiento de Requisitos Funcionales: Los módulos deben cumplir con los requisitos funcionales que fueron especificados durante la fase de diseño e implementación.",
            ],
          },
          {
            nombre: "Herramientas Utilizadas en las Pruebas de Integración",
            info: [
              "Postman: Para probar las APIs y verificar que las solicitudes y respuestas entre los servicios estén funcionando correctamente.",
              "Jest: Para realizar pruebas unitarias y de integración en aplicaciones JavaScript/Node.js, asegurando la comunicación entre los componentes.",
              "JUnit: Herramienta para pruebas de integración en aplicaciones Java, proporcionando una estructura sólida para las pruebas automatizadas.",
              "Selenium: Para pruebas de integración de interfaces gráficas de usuario, garantizando que la interacción entre los elementos visuales del sistema sea correcta.",
            ],
          },
          {
            nombre: "Retos Comunes en las Pruebas de Integración",
            info: [
              "Errores en la Comunicación entre Componentes: La incompatibilidad de interfaces o el mal manejo de datos entre los módulos pueden causar errores en la integración.",
              "Dependencias Externas: Las integraciones que dependen de servicios o componentes externos pueden fallar debido a la configuración incorrecta o la falta de acceso.",
              "Complejidad del Sistema: En sistemas complejos con múltiples componentes, realizar pruebas exhaustivas puede ser desafiante, y la cobertura completa puede no ser posible.",
              "Problemas de Sincronización: La gestión de la sincronización y el orden de los procesos entre módulos puede ser difícil de controlar, especialmente cuando se ejecutan en entornos distribuidos.",
            ],
          },
          {
            nombre: "Documentación de Resultados de las Pruebas de Integración",
            info: [
              "Registro de Errores Detectados: Detallar los errores encontrados durante las pruebas de integración, su severidad y el módulo afectado.",
              "Informes de Ejecución: Documentar el flujo de pruebas, los módulos probados, y los resultados obtenidos para cada uno.",
              "Recomendaciones de Mejora: Sugerir ajustes o correcciones en la integración de los módulos para solucionar los problemas encontrados.",
              "Confirmación de Cumplimiento: Indicar si el sistema cumple con los requisitos de integración y si las pruebas de integración fueron exitosas.",
            ],
          },
          {
            nombre: "Plan de Acción Tras las Pruebas de Integración",
            info: [
              "Resolución de Errores: Planificar la corrección de errores encontrados, estableciendo prioridades según su impacto en la funcionalidad del sistema.",
              "Realización de Nuevas Pruebas: Después de realizar correcciones, realizar nuevas pruebas de integración para asegurarse de que los problemas fueron solucionados y que no se han introducido nuevos errores.",
              "Monitoreo Post-Integración: Implementar un plan de monitoreo para verificar el funcionamiento del sistema integrado una vez desplegado en producción.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Definición de Alcance",
            info: [
              "Identificación de módulos: Determinar qué módulos o componentes serán integrados y probados.",
              "Dependencias: Documentar las dependencias entre módulos para planificar el orden de integración.",
              "Objetivos de la prueba: Establecer qué se espera validar, como la comunicación, transferencia de datos o el flujo funcional entre componentes.",
              "Criterios de éxito: Definir los criterios que determinarán si la integración es satisfactoria.",
            ],
          },
          {
            nombre: "Estrategias de Prueba",
            info: [
              "Pruebas de arriba hacia abajo: Integrar y probar primero los módulos de alto nivel, simulando módulos inferiores con stubs.",
              "Pruebas de abajo hacia arriba: Integrar y probar primero los módulos de bajo nivel, utilizando drivers para simular módulos superiores.",
              "Pruebas de tipo Big Bang: Integrar todos los módulos simultáneamente y ejecutar pruebas globales.",
              "Pruebas incrementales: Integrar los módulos en pequeños grupos y realizar pruebas progresivas para identificar fallos de manera aislada.",
            ],
          },
          {
            nombre: "Casos de Prueba",
            info: [
              "Interfaz de comunicación: Verificar que las interfaces entre módulos sean correctas y transfieran datos sin errores.",
              "Flujos de datos: Asegurar que los datos fluyan de un módulo a otro de manera precisa y en el formato esperado.",
              "Pruebas de error: Simular errores para comprobar cómo se manejan las excepciones entre módulos.",
              "Validación funcional: Confirmar que la funcionalidad combinada de los módulos cumple con los requisitos.",
            ],
          },
          {
            nombre: "Reporte de Resultados",
            info: [
              "Estado de integración: Indicar si los módulos se integraron correctamente o si hubo problemas.",
              "Descripción de errores: Documentar los fallos encontrados, sus posibles causas y cómo replicarlos.",
              "Impacto en el sistema: Evaluar el impacto de los fallos en el comportamiento general del sistema.",
              "Recomendaciones: Proponer acciones correctivas para resolver problemas de integración.",
            ],
          },
          {
            nombre: "Automatización de Pruebas de Integración",
            info: [
              "Herramientas: Utilizar herramientas como Selenium, Postman, o JUnit para automatizar pruebas de integración.",
              "Ejecución continua: Configurar pruebas automáticas en pipelines de integración continua (CI/CD).",
              "Cobertura: Garantizar que los scripts automatizados cubran todos los escenarios relevantes.",
              "Resultados: Almacenar los resultados de las pruebas automatizadas para análisis y trazabilidad.",
            ],
          },
        ],
      },
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 450, y: 500 },
    data: {
      nodo: 3,
      label: "Pruebas de Usabilidad",
      descripcion:
        "Permiten validar el diseño desde la perspectiva del usuario, asegurando que el sistema sea fácil de usar y cumpla con las expectativas de eficiencia y satisfacción.",
      labelTitle:
        "Evaluación del Diseño de la Interfaz para Mejorar la Experiencia del Usuario",
      ventajas: [
        "Especificaciones de diseño de interfaz de usuario (UI), que describen la disposición y el flujo de las pantallas y las interacciones.",
        "Métricas de usabilidad, como tiempo para completar tareas, número de errores cometidos por los usuarios, y niveles de satisfacción.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Mejora de la experiencia del usuario (UX), asegurando que el sistema sea fácil de usar y genere satisfacción en el usuario.",
        },
        {
          img: imgFoco,
          descripcion:
            "Aumento de la eficiencia en el uso del sistema, ya que un diseño intuitivo reduce el tiempo necesario para que los usuarios completen tareas.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Objetivos de las Pruebas de Usabilidad",
            info: [
              "Evaluar la Facilidad de Uso: Determinar qué tan fácil es para los usuarios interactuar con el sistema o producto.",
              "Identificar Barreras de Uso: Detectar cualquier obstáculo o dificultad que los usuarios encuentren durante su interacción.",
              "Medir la Satisfacción del Usuario: Recoger la opinión de los usuarios sobre su experiencia, su grado de satisfacción y su disposición a recomendar el producto.",
              "Optimizar el Flujo de Tareas: Asegurar que las tareas se realicen de manera eficiente y con el menor esfuerzo posible por parte de los usuarios.",
            ],
          },
          {
            nombre: "Métodos Comunes en las Pruebas de Usabilidad",
            info: [
              "Pruebas de Usuario con Prototipos: Se les pide a los usuarios que realicen tareas con prototipos para obtener retroalimentación temprana.",
              "Pruebas de Usuario en Vivo: Los usuarios interactúan con una versión funcional del producto en tiempo real para detectar problemas y cuellos de botella.",
              "Entrevistas de Usuario: Realizar entrevistas uno a uno con los usuarios para obtener sus comentarios detallados sobre el uso del producto.",
              "Pruebas A/B: Comparar diferentes versiones de una interfaz o funcionalidad para evaluar cuál es más efectiva y fácil de usar.",
            ],
          },
          {
            nombre: "Métricas Utilizadas en las Pruebas de Usabilidad",
            info: [
              "Tiempo de Tarea: Medir el tiempo que los usuarios tardan en completar una tarea, indicando la eficiencia de la interfaz.",
              "Tasa de Éxito: Evaluar cuántas tareas son completadas exitosamente sin errores ni frustraciones por parte de los usuarios.",
              "Frecuencia de Errores: Contabilizar los errores cometidos por los usuarios durante las pruebas, lo que puede indicar problemas de diseño.",
              "Satisfacción del Usuario: Recoger datos a través de encuestas o entrevistas para medir cuán satisfechos están los usuarios con la experiencia.",
              "Tasa de Abandono: Medir cuántos usuarios abandonan una tarea antes de completarla, lo que puede señalar dificultades graves de usabilidad.",
            ],
          },
          {
            nombre: "Fases de las Pruebas de Usabilidad",
            info: [
              "Planificación de la Prueba: Definir objetivos, tareas específicas para los usuarios y los criterios de éxito para la prueba.",
              "Selección de Participantes: Elegir usuarios representativos del público objetivo del producto, asegurando diversidad en el perfil de los participantes.",
              "Ejecutar las Pruebas: Los usuarios realizan tareas específicas mientras se observan sus interacciones y comportamientos.",
              "Análisis de los Resultados: Recoger y analizar los datos para identificar patrones, problemas y oportunidades de mejora.",
              "Implementación de Mejoras: Usar los hallazgos para hacer ajustes y mejorar la interfaz antes de lanzar el producto o actualizarlo.",
            ],
          },
          {
            nombre: "Tipos de Pruebas de Usabilidad",
            info: [
              "Pruebas Formativas: Se realizan durante el proceso de diseño para identificar problemas antes de que el producto esté terminado.",
              "Pruebas Sumativas: Se realizan cuando el diseño está casi completo, con el objetivo de evaluar la efectividad de la solución antes de lanzarla al mercado.",
              "Pruebas de Evaluación Remota: Los usuarios participan en las pruebas desde sus propios entornos, utilizando herramientas como grabaciones de pantalla o software de seguimiento ocular.",
              "Pruebas de Evaluación en Laboratorio: Los usuarios participan en un entorno controlado, donde se observan en vivo mientras interactúan con el producto.",
            ],
          },
          {
            nombre:
              "Técnicas de Recolección de Datos en las Pruebas de Usabilidad",
            info: [
              "Observación Directa: Observar cómo los usuarios interactúan con el producto, tomando nota de sus acciones y dificultades.",
              "Encuestas y Cuestionarios: Recoger opiniones de los usuarios después de realizar las tareas, sobre aspectos como facilidad de uso y satisfacción.",
              "Grabación de Sesiones: Usar herramientas para grabar las sesiones de prueba, permitiendo revisarlas posteriormente para detectar problemas específicos.",
              "Análisis de Datos de Interacción: Registrar el comportamiento de los usuarios, como clics, desplazamientos y tiempos de interacción, para identificar patrones o puntos problemáticos.",
            ],
          },
          {
            nombre: "Herramientas Utilizadas en las Pruebas de Usabilidad",
            info: [
              "UserTesting: Plataforma que permite realizar pruebas de usabilidad con usuarios remotos y obtener retroalimentación en tiempo real.",
              "Hotjar: Herramienta que proporciona mapas de calor, grabaciones de sesiones y encuestas de usuarios para analizar la interacción en el sitio web.",
              "Lookback: Permite realizar pruebas de usabilidad remotas y grabar las sesiones, así como realizar entrevistas en vivo con los usuarios.",
              "UsabilityHub: Plataforma para obtener opiniones de usuarios a través de encuestas, pruebas de clics y tests de preferencia visual.",
            ],
          },
          {
            nombre: "Retos Comunes en las Pruebas de Usabilidad",
            info: [
              "Selección de Participantes: Elegir usuarios representativos puede ser difícil, y si no se hace correctamente, los resultados pueden no ser representativos del público objetivo.",
              "Condiciones Controladas: Mantener las pruebas en condiciones controladas puede ser complicado, especialmente cuando se realizan pruebas remotas.",
              "Interpretación de Resultados: Los hallazgos cualitativos, como las opiniones de los usuarios, pueden ser difíciles de analizar e interpretar objetivamente.",
              "Falta de Recursos: Las pruebas de usabilidad pueden ser costosas en tiempo y dinero, especialmente cuando requieren de múltiples iteraciones y participantes.",
            ],
          },
          {
            nombre: "Documentación de Resultados de las Pruebas de Usabilidad",
            info: [
              "Resumen de Hallazgos: Documentar los principales problemas encontrados durante las pruebas, incluyendo detalles sobre qué tareas resultaron problemáticas.",
              "Recomendaciones de Mejora: Proponer soluciones para los problemas de usabilidad identificados y sugerir cómo mejorar la experiencia del usuario.",
              "Gráficos y Mapas de Calor: Usar mapas de calor y gráficos para ilustrar cómo los usuarios interactuaron con la interfaz.",
              "Registro de Retroalimentación de los Usuarios: Recoger y documentar las opiniones y sugerencias de los participantes para tener una visión clara de su experiencia.",
            ],
          },
          {
            nombre:
              "Impacto de las Pruebas de Usabilidad en el Desarrollo del Producto",
            info: [
              "Mejorar la Experiencia del Usuario: Implementar cambios basados en las pruebas de usabilidad puede hacer que el producto sea más fácil de usar y más satisfactorio.",
              "Reducir la Tasa de Abandono: Las pruebas ayudan a identificar barreras y problemas que podrían hacer que los usuarios abandonen el producto, mejorando su retención.",
              "Optimizar el Flujo de Tareas: Refinar el diseño para que las tareas sean más simples y eficientes, reduciendo el tiempo necesario para completarlas.",
              "Aumentar la Satisfacción del Cliente: Un producto que sea más fácil de usar y que responda mejor a las necesidades del usuario llevará a una mayor satisfacción general.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Planificación de la Prueba",
            info: [
              "Objetivos claros: Definir qué aspectos de la experiencia del usuario se evaluarán, como facilidad de uso, comprensión o satisfacción.",
              "Selección de usuarios: Identificar el perfil de usuarios representativos del público objetivo del sistema.",
              "Escenarios de uso: Diseñar escenarios que reflejen tareas reales que los usuarios realizarían con el sistema.",
              "Criterios de evaluación: Establecer métricas para medir el éxito, como tiempo para completar tareas, errores cometidos o satisfacción subjetiva.",
            ],
          },
          {
            nombre: "Preparación del Entorno",
            info: [
              "Configuración del entorno: Asegurar que el entorno donde se realizarán las pruebas refleje el entorno real de los usuarios.",
              "Herramientas de grabación: Preparar herramientas para capturar la interacción del usuario, como grabaciones de pantalla o herramientas de análisis de clics.",
              "Guías para el moderador: Proporcionar instrucciones claras para los moderadores de las pruebas para garantizar consistencia en la observación.",
              "Prototipos funcionales: Asegurar que los prototipos o sistemas utilizados estén suficientemente desarrollados para probar la usabilidad.",
            ],
          },
          {
            nombre: "Ejecución de la Prueba",
            info: [
              "Tareas claras: Presentar tareas a los usuarios de manera simple y sin influir en sus decisiones.",
              "Observación pasiva: Permitir que los usuarios interactúen libremente con el sistema mientras se documentan sus comportamientos.",
              "Recolección de comentarios: Recoger las opiniones de los usuarios sobre su experiencia mediante encuestas o entrevistas posteriores.",
              "Tiempo y errores: Registrar cuánto tiempo tardan los usuarios en completar las tareas y qué errores cometen durante el proceso.",
            ],
          },
          {
            nombre: "Análisis de Resultados",
            info: [
              "Identificación de problemas: Clasificar los problemas encontrados en términos de gravedad e impacto en la experiencia del usuario.",
              "Patrones de comportamiento: Detectar patrones comunes en cómo los usuarios interactúan con el sistema y dónde enfrentan dificultades.",
              "Satisfacción del usuario: Analizar las respuestas subjetivas de los usuarios para evaluar su percepción general.",
              "Recomendaciones de mejora: Proponer cambios para mejorar la usabilidad basados en los resultados de las pruebas.",
            ],
          },
          {
            nombre: "Documentación y Seguimiento",
            info: [
              "Reporte detallado: Generar un informe que documente las tareas, problemas encontrados, métricas y recomendaciones.",
              "Priorización de mejoras: Ordenar los problemas según su impacto en la usabilidad y la facilidad para solucionarlos.",
              "Iteración de pruebas: Planificar nuevas rondas de pruebas después de implementar las mejoras para validar los cambios.",
              "Almacenamiento: Guardar todos los resultados y grabaciones de las pruebas para futuras referencias y análisis.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Usabilidad.tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Usabilidad.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -300, y: 660 },
    data: {
      nodo: 3,
      label: "Pruebas de Rendimiento",
      descripcion:
        "Conjunto de pruebas diseñadas para medir cómo un sistema o aplicación se comporta bajo ciertas condiciones de carga y estrés.",
      labelTitle: "Evaluación de la Eficiencia del Sistema en el Diseño",
      ventajas: [
        "Recolección de datos: tiempos de respuesta, tasa de transferencia, utilización de recursos, concurrencia.",
        "Definición de las cargas de trabajo específicas bajo las cuales se probará el sistema: número de usuarios simultáneos,  volumen de transacciones, cantidad de datos procesados.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Identificación de cuellos de botella, como servidores sobrecargados, limitaciones de infraestructura.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite optimizar el uso de recursos como CPU, memoria y ancho de banda.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Objetivos de las Pruebas de Rendimiento",
            info: [
              "Medir la Capacidad de Respuesta: Evaluar cuánto tiempo tarda el sistema en responder a las solicitudes de los usuarios.",
              "Verificar la Escalabilidad: Comprobar cómo el sistema maneja un aumento en la carga o el número de usuarios sin afectar su rendimiento.",
              "Evaluar la Estabilidad: Asegurar que el sistema funcione de manera estable bajo condiciones de carga prolongada o estrés.",
              "Detectar Cuellos de Botella: Identificar los componentes del sistema que puedan estar limitando el rendimiento y optimizarlos.",
            ],
          },
          {
            nombre: "Tipos de Pruebas de Rendimiento",
            info: [
              "Pruebas de Carga: Se evalúa el comportamiento del sistema bajo una carga predefinida de usuarios o transacciones.",
              "Pruebas de Estrés: Se somete al sistema a niveles de carga extremos para identificar sus puntos de fallo.",
              "Pruebas de Escalabilidad: Se mide la capacidad del sistema para manejar un incremento gradual de la carga sin disminuir su rendimiento.",
              "Pruebas de Estabilidad: Evaluación de cómo el sistema se comporta bajo cargas prolongadas para garantizar que no haya caídas o degradación en el rendimiento.",
            ],
          },
          {
            nombre: "Métricas Clave en las Pruebas de Rendimiento",
            info: [
              "Tiempo de Respuesta: La cantidad de tiempo que toma el sistema para responder a una solicitud.",
              "Tasa de Transferencia: La cantidad de datos que se pueden procesar en un período de tiempo determinado, como la cantidad de solicitudes por segundo.",
              "Uso de Recursos: Medir el uso de CPU, memoria y red durante las pruebas para identificar posibles cuellos de botella.",
              "Número de Conexiones Simultáneas: Determinar cuántas conexiones pueden manejarse sin que el rendimiento se vea afectado.",
              "Latencia: El tiempo que tarda un dato en viajar desde el cliente hasta el servidor y viceversa.",
            ],
          },
          {
            nombre: "Herramientas Utilizadas en las Pruebas de Rendimiento",
            info: [
              "Apache JMeter: Herramienta de código abierto utilizada para realizar pruebas de carga y rendimiento, simulando múltiples usuarios.",
              "LoadRunner: Herramienta empresarial utilizada para realizar pruebas de carga y estrés en aplicaciones web y móviles.",
              "Gatling: Herramienta basada en Scala que permite realizar pruebas de rendimiento en aplicaciones web, ofreciendo un enfoque sencillo y escalable.",
              "BlazeMeter: Plataforma basada en JMeter que permite realizar pruebas de rendimiento en la nube, ideal para probar aplicaciones a gran escala.",
            ],
          },
          {
            nombre: "Fases de las Pruebas de Rendimiento",
            info: [
              "Planificación: Definir los objetivos, la carga esperada y las métricas a medir, además de configurar el entorno de prueba.",
              "Ejecución: Realizar las pruebas con cargas controladas, registrando todos los datos necesarios sobre el rendimiento del sistema.",
              "Análisis de Resultados: Analizar los datos recolectados, identificando áreas de mejora y posibles cuellos de botella.",
              "Optimización: Implementar cambios basados en los resultados, como ajustar configuraciones del servidor, mejorar el código o escalar recursos.",
              "Repetir las Pruebas: Ejecutar pruebas adicionales para verificar que las optimizaciones implementadas hayan mejorado efectivamente el rendimiento.",
            ],
          },
          {
            nombre: "Pruebas de Rendimiento en Diferentes Entornos",
            info: [
              "Pruebas de Rendimiento en Desarrollo: Se realizan pruebas de rendimiento durante el ciclo de desarrollo para garantizar que el código nuevo no degrade el rendimiento.",
              "Pruebas de Rendimiento en Producción: Se monitorea el rendimiento real del sistema una vez que está en producción, asegurando que la aplicación maneje la carga de usuarios en tiempo real.",
              "Pruebas de Rendimiento en la Nube: Evaluar el rendimiento de aplicaciones desplegadas en la nube, tomando en cuenta factores como la escalabilidad automática y los recursos disponibles.",
              "Pruebas de Rendimiento Móvil: Probar aplicaciones móviles para asegurarse de que funcionen bien en redes móviles con diferentes condiciones de conectividad.",
            ],
          },
          {
            nombre: "Impacto de las Pruebas de Rendimiento en el Desarrollo",
            info: [
              "Mejora en la Experiencia del Usuario: Optimizar el rendimiento mejora la velocidad y fiabilidad de la aplicación, ofreciendo una mejor experiencia a los usuarios.",
              "Escalabilidad del Sistema: Detectar posibles cuellos de botella y problemas de escalabilidad permite ajustar la infraestructura para manejar un mayor volumen de usuarios.",
              "Reducción de Costos: Las optimizaciones de rendimiento pueden reducir los costos operativos, ya que un sistema más eficiente utiliza menos recursos.",
              "Prevención de Fallos: Realizar pruebas de estrés y carga ayuda a identificar problemas que podrían causar fallos o caídas, mejorando la estabilidad del sistema.",
            ],
          },
          {
            nombre: "Retos Comunes en las Pruebas de Rendimiento",
            info: [
              "Ambientes de Prueba No Representativos: Las pruebas realizadas en entornos de desarrollo o con datos limitados pueden no reflejar con precisión el rendimiento en producción.",
              "Limitación de Recursos: Las pruebas de rendimiento pueden requerir grandes cantidades de recursos, como servidores adicionales o simuladores de usuarios, lo que puede ser costoso.",
              "Complejidad en la Recolección de Datos: La cantidad de datos generados durante las pruebas de rendimiento puede ser abrumadora, y la interpretación de estos datos puede ser compleja.",
              "Gestión de Pruebas a Gran Escala: Realizar pruebas de rendimiento a gran escala, especialmente para aplicaciones en la nube, puede presentar desafíos técnicos y operativos.",
            ],
          },
          {
            nombre: "Documentación y Análisis de Resultados",
            info: [
              "Informe de Resultados: Un informe detallado que incluya los hallazgos de la prueba, las métricas clave, los cuellos de botella detectados y las recomendaciones de optimización.",
              "Gráficos de Rendimiento: Representaciones visuales de datos como gráficos de tiempo de respuesta, uso de recursos y carga, que facilitan la interpretación de los resultados.",
              "Recomendaciones de Mejora: Sugerir cambios para optimizar el rendimiento, como mejorar la arquitectura, refactorizar el código o agregar más recursos de hardware.",
              "Historial de Pruebas: Mantener un registro histórico de las pruebas realizadas y los cambios implementados para garantizar que las mejoras sean efectivas a lo largo del tiempo.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Planificación de la Prueba",
            info: [
              "Definición de objetivos: Establecer qué aspectos del rendimiento se evaluarán, como tiempos de respuesta, capacidad, estabilidad y escalabilidad.",
              "Escenarios de prueba: Diseñar casos que reflejen condiciones reales de uso, incluyendo picos de carga, acceso concurrente y procesamiento de grandes volúmenes de datos.",
              "Criterios de aceptación: Determinar métricas clave como tiempo máximo de respuesta, número de usuarios simultáneos soportados y tasas de error aceptables.",
              "Selección de herramientas: Identificar herramientas apropiadas para realizar las pruebas, como Apache JMeter, Gatling o LoadRunner.",
            ],
          },
          {
            nombre: "Preparación del Entorno",
            info: [
              "Entorno de pruebas: Configurar un entorno lo más similar posible al entorno de producción.",
              "Datos representativos: Asegurar que los datos utilizados en las pruebas reflejen las condiciones reales de uso del sistema.",
              "Recursos monitoreados: Configurar herramientas de monitoreo para registrar el uso de CPU, memoria, ancho de banda y otros recursos.",
              "Control de variables externas: Minimizar interferencias externas, como otras aplicaciones que puedan afectar los resultados.",
            ],
          },
          {
            nombre: "Ejecución de Pruebas",
            info: [
              "Pruebas de carga: Evaluar el desempeño bajo cargas normales y progresivas para determinar el límite de capacidad.",
              "Pruebas de estrés: Sobrecargar el sistema intencionalmente para identificar puntos de falla y verificar cómo se recupera.",
              "Pruebas de escalabilidad: Probar el comportamiento del sistema al aumentar o reducir los recursos disponibles.",
              "Pruebas de estabilidad: Ejecutar pruebas prolongadas para verificar el desempeño del sistema en el tiempo bajo carga constante.",
            ],
          },
          {
            nombre: "Análisis de Resultados",
            info: [
              "Comparación con los objetivos: Evaluar si los resultados cumplen con los criterios de aceptación definidos en la planificación.",
              "Identificación de cuellos de botella: Detectar elementos del sistema que limitan el rendimiento, como consultas lentas o saturación de recursos.",
              "Impacto en la experiencia del usuario: Analizar cómo el rendimiento afecta la percepción del usuario, especialmente en tiempos de respuesta y estabilidad.",
              "Recomendaciones: Proponer soluciones para mejorar el rendimiento, como optimización de código, mejora de infraestructura o ajustes en la configuración.",
            ],
          },
          {
            nombre: "Documentación y Seguimiento",
            info: [
              "Reporte detallado: Crear un informe que incluya metodología, métricas recolectadas, gráficos de desempeño y conclusiones.",
              "Priorización de mejoras: Clasificar las áreas de mejora según su impacto en el rendimiento y su viabilidad técnica.",
              "Pruebas iterativas: Planificar rondas adicionales de pruebas después de implementar mejoras para validar los cambios.",
              "Almacenamiento seguro: Guardar los resultados, scripts de prueba y configuraciones para referencias futuras y auditorías.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Rendimiento.tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Rendimiento.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: -250, y: 500 },
    data: {
      nodo: 3,
      label: "Pruebas de Mantenimiento",
      descripcion:
        "Consiste en evaluar la capacidad de la arquitectura para adaptarse y evolucionar frente a nuevos requerimientos, sin comprometer el rendimiento de la estructura existente.",
      labelTitle: "Garantía de la Estabilidad y Continuidad del Sistema",
      ventajas: [
        "Plan de mantenimiento que describe las pruebas que se realizarán para cada tipo de mantenimiento.",
        "Casos de prueba de mantenimiento que evalúan las áreas afectadas por las modificaciones y aseguran que no se introduzcan nuevos problemas.",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Prevención de regresiones al evitar que los cambios afecten negativamente a las funciones existentes.",
        },
        {
          img: imgFoco,
          descripcion:
            "Mejora la confianza de los usuarios en la estabilidad y consistencia del sistema tras las actualizaciones.",
        },
      ],
      opciones: [
        {
          img: imgExperienciaUser,
          descripcion: "Usabilidad y Experiencia del Usuario (UX)",
        },
        {
          img: imgPruebaIntegra,
          descripcion:
            "Validación de la Eficiencia y Escalabilidad del Sistema",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      usabilidadExperiencia: {
        data: [
          {
            nombre: "Objetivos de las Pruebas de Mantenimiento",
            info: [
              "Verificar la Estabilidad: Asegurarse de que el sistema sigue funcionando correctamente después de realizar modificaciones o actualizaciones.",
              "Evaluar la Compatibilidad: Comprobar que las nuevas actualizaciones o cambios no afecten la integración con otros sistemas o componentes.",
              "Comprobar la Usabilidad: Asegurar que la aplicación mantenga una interfaz de usuario consistente y fácil de usar después de las modificaciones.",
              "Validar la Funcionalidad: Verificar que las nuevas funciones y características agregadas durante el mantenimiento no introduzcan errores.",
            ],
          },
          {
            nombre: "Tipos de Pruebas de Mantenimiento",
            info: [
              "Pruebas de Correctivo: Realizar pruebas después de corregir errores o defectos en el sistema para garantizar que las soluciones sean efectivas y no introduzcan nuevos problemas.",
              "Pruebas de Adaptación: Evaluar el sistema después de realizar cambios para asegurar que sigue siendo compatible con las nuevas tecnologías, plataformas o entornos.",
              "Pruebas de Evolución: Probar nuevas funciones o características que se han agregado al sistema durante el proceso de mantenimiento para garantizar su correcto funcionamiento.",
              "Pruebas de Regresión: Verificar que las modificaciones realizadas no hayan afectado negativamente las funcionalidades existentes del sistema.",
            ],
          },
          {
            nombre: "Métricas en las Pruebas de Mantenimiento",
            info: [
              "Tiempo de Respuesta de la Solución: Medir el tiempo que tarda en implementarse una solución después de que se detecta un problema.",
              "Tasa de Éxito de la Reparación: Evaluar si las modificaciones o correcciones fueron efectivas y resolvieron el problema sin causar nuevos errores.",
              "Cobertura de Pruebas: Asegurar que todas las áreas críticas del sistema estén cubiertas por las pruebas, incluidas las nuevas funciones y los cambios realizados.",
              "Frecuencia de Reaparición de Errores: Medir si los errores corregidos vuelven a aparecer en el sistema después de las actualizaciones o cambios.",
              "Tiempo de Inactividad: Monitorear el tiempo durante el cual el sistema no está disponible debido a las actualizaciones de mantenimiento.",
            ],
          },
          {
            nombre: "Herramientas Utilizadas en las Pruebas de Mantenimiento",
            info: [
              "Selenium: Herramienta para pruebas automatizadas de interfaces web, útil para pruebas de regresión y pruebas de mantenimiento en aplicaciones web.",
              "Jenkins: Plataforma de integración continua que permite realizar pruebas automatizadas en el proceso de desarrollo y mantenimiento.",
              "TestComplete: Herramienta de prueba automatizada que soporta pruebas de regresión, integración y mantenimiento para aplicaciones de escritorio y web.",
              "SonarQube: Plataforma para realizar análisis estático de código, utilizada para detectar errores, vulnerabilidades y fallos durante las pruebas de mantenimiento.",
              "JUnit: Framework de pruebas para aplicaciones Java, utilizado para realizar pruebas unitarias y de integración, incluidas pruebas de mantenimiento.",
            ],
          },
          {
            nombre: "Fases de las Pruebas de Mantenimiento",
            info: [
              "Planificación de Mantenimiento: Definir las tareas de mantenimiento necesarias y los objetivos de las pruebas, incluyendo la identificación de componentes críticos y áreas de riesgo.",
              "Ejecución de Pruebas: Realizar las pruebas según el plan establecido, comprobando que los cambios realizados no afectan negativamente al sistema.",
              "Análisis de Resultados: Evaluar los resultados de las pruebas, identificar posibles errores o problemas y decidir si las soluciones son suficientes.",
              "Implementación de Soluciones: Basado en los resultados de las pruebas, realizar ajustes y mejoras para resolver problemas detectados.",
              "Verificación Posterior: Después de aplicar las soluciones, realizar nuevas pruebas para asegurar que las correcciones no introduzcan nuevos problemas o afecten funcionalidades existentes.",
            ],
          },
          {
            nombre: "Impacto de las Pruebas de Mantenimiento en el Desarrollo",
            info: [
              "Mejora Continua: Las pruebas de mantenimiento permiten una mejora continua del sistema, garantizando que los cambios no degraden el rendimiento o la funcionalidad.",
              "Reducción de Errores: Asegurar que los errores corregidos no reaparezcan, lo que contribuye a mantener la estabilidad y fiabilidad del sistema.",
              "Optimización del Sistema: Las pruebas ayudan a identificar áreas donde el sistema puede ser optimizado para mejorar la eficiencia y el rendimiento.",
              "Garantía de Calidad: Permite mantener un alto nivel de calidad del software a lo largo del ciclo de vida del sistema, incluso después de las actualizaciones y modificaciones.",
            ],
          },
          {
            nombre: "Desafíos Comunes en las Pruebas de Mantenimiento",
            info: [
              "Compatibilidad con Versiones Anteriores: Asegurar que las actualizaciones no rompan la compatibilidad con versiones anteriores o sistemas existentes.",
              "Falta de Documentación Actualizada: La falta de documentación puede dificultar la identificación de los cambios realizados y cómo afectan al sistema.",
              "Complejidad en la Gestión de Dependencias: Las dependencias entre componentes del sistema pueden complicar las pruebas de mantenimiento, especialmente si las modificaciones afectan a múltiples módulos.",
              "Tiempo de Inactividad del Sistema: Las actualizaciones y correcciones pueden requerir períodos de inactividad, lo que puede afectar a los usuarios y a la disponibilidad del sistema.",
            ],
          },
          {
            nombre: "Documentación y Análisis de los Resultados de Pruebas",
            info: [
              "Informe de Pruebas de Mantenimiento: Un documento detallado que incluye los resultados de las pruebas, los problemas encontrados, las soluciones implementadas y las recomendaciones para el futuro.",
              "Registro de Errores: Mantener un registro detallado de los errores detectados durante el mantenimiento y las acciones correctivas tomadas.",
              "Métricas de Rendimiento: Incluir métricas relacionadas con el impacto de las modificaciones en el rendimiento del sistema, como tiempos de respuesta y consumo de recursos.",
              "Recomendaciones de Mejora: Sugerir áreas de mejora basadas en los resultados de las pruebas, incluyendo ajustes en la arquitectura, el código o los procesos de desarrollo.",
            ],
          },
        ],
      },
      validacionEficiencia: {
        data: [
          {
            nombre: "Planificación de la Prueba",
            info: [
              "Definición de objetivos: Establecer qué aspectos del rendimiento se evaluarán, como tiempos de respuesta, capacidad, estabilidad y escalabilidad.",
              "Escenarios de prueba: Diseñar casos que reflejen condiciones reales de uso, incluyendo picos de carga, acceso concurrente y procesamiento de grandes volúmenes de datos.",
              "Criterios de aceptación: Determinar métricas clave como tiempo máximo de respuesta, número de usuarios simultáneos soportados y tasas de error aceptables.",
              "Selección de herramientas: Identificar herramientas apropiadas para realizar las pruebas, como Apache JMeter, Gatling o LoadRunner.",
            ],
          },
          {
            nombre: "Preparación del Entorno",
            info: [
              "Entorno de pruebas: Configurar un entorno lo más similar posible al entorno de producción.",
              "Datos representativos: Asegurar que los datos utilizados en las pruebas reflejen las condiciones reales de uso del sistema.",
              "Recursos monitoreados: Configurar herramientas de monitoreo para registrar el uso de CPU, memoria, ancho de banda y otros recursos.",
              "Control de variables externas: Minimizar interferencias externas, como otras aplicaciones que puedan afectar los resultados.",
            ],
          },
          {
            nombre: "Ejecución de Pruebas",
            info: [
              "Pruebas de carga: Evaluar el desempeño bajo cargas normales y progresivas para determinar el límite de capacidad.",
              "Pruebas de estrés: Sobrecargar el sistema intencionalmente para identificar puntos de falla y verificar cómo se recupera.",
              "Pruebas de escalabilidad: Probar el comportamiento del sistema al aumentar o reducir los recursos disponibles.",
              "Pruebas de estabilidad: Ejecutar pruebas prolongadas para verificar el desempeño del sistema en el tiempo bajo carga constante.",
            ],
          },
          {
            nombre: "Análisis de Resultados",
            info: [
              "Comparación con los objetivos: Evaluar si los resultados cumplen con los criterios de aceptación definidos en la planificación.",
              "Identificación de cuellos de botella: Detectar elementos del sistema que limitan el rendimiento, como consultas lentas o saturación de recursos.",
              "Impacto en la experiencia del usuario: Analizar cómo el rendimiento afecta la percepción del usuario, especialmente en tiempos de respuesta y estabilidad.",
              "Recomendaciones: Proponer soluciones para mejorar el rendimiento, como optimización de código, mejora de infraestructura o ajustes en la configuración.",
            ],
          },
          {
            nombre: "Documentación y Seguimiento",
            info: [
              "Reporte detallado: Crear un informe que incluya metodología, métricas recolectadas, gráficos de desempeño y conclusiones.",
              "Priorización de mejoras: Clasificar las áreas de mejora según su impacto en el rendimiento y su viabilidad técnica.",
              "Pruebas iterativas: Planificar rondas adicionales de pruebas después de implementar mejoras para validar los cambios.",
              "Almacenamiento seguro: Guardar los resultados, scripts de prueba y configuraciones para referencias futuras y auditorías.",
            ],
          },
        ],
      },
      tutorialVideo:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Mantenimiento.tutorialVideo,
      paginaOficial:
        pagVideo.nodoTres.ramaTres.Pruebas_de_Mantenimiento.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const nodoTres = [
  nodoEvaluacionDisenioSistema,
  nodoRevisionArquitectonica,
  nodoPruevaDisenio,
];
