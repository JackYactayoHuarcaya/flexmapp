import { Edge, Node } from "@xyflow/react";
import { MENU } from "../../../components/helper/menu";
import {
  iconChat as imgChat,
  iconFoco as imgFoco,
  iconPaginaOficial as imgEstrellaAzul,
  iconCalidadUso as imgHoja,
  iconVideo as imgVideo,
  iconCicloVida as imgCicloVida,
} from "../mapa/components/icons/Icons";
import { materiaInfografia } from "../mapa/components/materialDinamico/materialDinamico";
import { pagVideo } from "./paginasVideos/pagVid";

export const styleSeccion =
  "bg-transparent text-[var(--t)] text-xl w-[20rem] block bg-clip-text text-transparent font-bold bg-gradient-to-r from-[var(--bg1)] to-[var(--bg2)]";
export const styleTitle =
  "bg-[var(--c)] rounded-[8px]  text-[var(--t)] shadow-[0_0_6px_#BD34FE] font-bold text-xl";
export const styleText =
  "bg-[var(--c)] rounded-[8px] button cursor-default text-[var(--t)] shadow-[0_0_6px_#BD34FE] text-lg";

export const unionTecnicaValidacion: Edge[] = [
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
export const nodoTecnicaValidacion: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 2,
      label: MENU[1].lista[0].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -300, y: 320 },
    data: {
      nodo: 2,
      label: "Revisiones Formales",
      descripcion:
        "Consiste en la evaluación detallada de los documentos de requisitos, diseños, o código; con el fin de identificar errores y asegurar que se cumplan los estándares de calidad.",
      labelTitle:
        "Enfoque Estructurado para la Validación de Calidad en el Desarrollo de Software",
      ventajas: [
        "Mejora de la calidad",
        "Documentación del proceso",
        "Contribución del equipo",
        "Reducción de ambigüedades",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reduce significativamente los costos de desarrollo, ya que los errores detectados y corregidos temprano son menos costosos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Actúan como una medida de control de calidad, garantizando que el producto cumpla con los estándares y requisitos establecidos.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
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
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Las revisiones formales se utilizan para evaluar y validar los documentos de requisitos, asegurando que sean claros y sin ambigüedades.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se revisan formalmente los diseños arquitectónicos para verificar su alineación con los requisitos, identificando áreas de mejora antes del desarrollo.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Permite identificar errores, inconsistencias y oportunidades de optimización del código, asegurando que cumpla con los estándares de calidad.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Revisión de los planes, casos y resultados de pruebas para garantizar la cobertura de los escenarios críticos y validar que el cumplimiento de objetivos.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Las revisiones formales aseguran que la implementación y documentación sea correcta antes del lanzamiento, reduciendo riesgos en la puesta en producción.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Las revisiones formales se aplican a cambios, actualizaciones o nuevos desarrollos para validar su impacto y mantener la estabilidad del software.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionFormales,
      tutorialVideo: pagVideo.nodoDos.ramaUno.RevisionesFormales.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaUno.RevisionesFormales.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 130, y: 340 },
    data: {
      nodo: 2,
      label: "PROTOTIPADO",
      descripcion:
        "Técnica que consiste en crear una versión preliminar de un producto, para permitir la evaluación y retroalimentación de los usuarios antes de la implementación final.",
      labelTitle: "Desarrollo Iterativo de Modelos Funcionales",
      ventajas: [
        "Iteración rápida",
        "Mejora de la comunicación",
        "Ajuste a los requerimientos del usuario",
        "Detección temprana de problemas",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Los prototipos ayudan a reducir hasta un 30% de los costos de desarrollo al detectar errores en fases tempranas del proyecto.",
        },
        {
          img: imgFoco,
          descripcion:
            "Las metodologías ágiles, como Scrum, incorporan el prototipado como una práctica clave para fomentar la colaboración continua entre equipos y clientes.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Se crean prototipos iniciales para entender y capturar los requisitos del usuario, facilitando la comunicación y aclaración de expectativas.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Los prototipos de alta fidelidad se desarrollan para visualizar el diseño del sistema, validando que cumpla con los objetivos establecidos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Los prototipos funcionales se utilizan como referencia para el desarrollo del sistema, sirviendo como base para la implementación técnica.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Los prototipos se prueban con los usuarios para recolectar retroalimentación, ajustando los flujos y funcionalidades antes de la implementación final.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "El prototipo final es validado junto con los usuarios clave para asegurar que refleja con precisión el sistema que será desplegado.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Se desarrollan nuevos prototipos para explorar y evaluar posibles cambios o mejoras en el sistema durante su operación continua.",
            ],
          },
        ],
      },
      material: materiaInfografia.prototipado,
      tutorialVideo: pagVideo.nodoDos.ramaUno.PROTOTIPADO.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaUno.PROTOTIPADO.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 2,
      label: "MODELADO DE CASOS DE USO",
      descripcion:
        "Técnica que describe las interacciones entre los actores (usuarios o sistemas externos) y el sistema, permitiendo visualizar y documentar los requisitos funcionales de manera clara y comprensible.",
      labelTitle: "Validación de Requisitos con Perspectiva del Usuario",
      ventajas: [
        "Representación visual",
        "Focalización en el Usuario",
        "Detección temprana de errores",
        "Mejora la comunicación en el equipo",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Facilita la comunicación con los stakeholders al ofrecer una representación clara de las interacciones del sistema.",
        },
        {
          img: imgFoco,
          descripcion:
            "Simplifica las pruebas de aceptación al transformar cada caso de uso en un escenario de prueba verificable.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
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
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Se identifican los actores y sus interacciones con el sistema para establecer un alcance inicial de los casos de uso.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Los casos de uso se detallan mediante diagramas y descripciones textuales, asegurando que cubran los escenarios funcionales del sistema.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Los desarrolladores utilizan los casos de uso como guía para implementar las funcionalidades definidas, asegurando que el comportamiento esperado esté alineado con los requisitos.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Los casos de uso sirven como base para diseñar casos de prueba, validando que el sistema cumpla con los flujos funcionales esperados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Durante esta etapa, los casos de uso se revisan para verificar que las funcionalidades implementadas cumplan con las expectativas del usuario final antes del lanzamiento.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Los casos de uso se actualizan para reflejar cambios en los requisitos o funcionalidades del sistema, manteniendo su relevancia a lo largo del ciclo de vida del software.",
            ],
          },
        ],
      },
      material: materiaInfografia.modeladoCasosUso,
      tutorialVideo:
        pagVideo.nodoDos.ramaUno.MODELADO_DE_CASOS_DE_USO.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaUno.MODELADO_DE_CASOS_DE_USO.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 450, y: 500 },
    data: {
      nodo: 2,
      label: "SIMULACIONES",
      descripcion:
        "Permiten probar el comportamiento del software en escenarios reales y controlados sin una implementación completa, permitiendo realizar pruebas tempranas y ajustes antes del desarrollo real.",
      labelTitle: "Validación Realista en Entornos Controlados",
      ventajas: [
        "Previsión de Problemas",
        "Optimización de Recursos",
        "Mejora de la Calidad del Producto",
        "Reducción de Riesgos",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Permiten probar distintos escenarios sin costos elevados al evaluar el sistema en un entorno controlado.",
        },
        {
          img: imgFoco,
          descripcion:
            "Facilita la visualización de escenarios complejos permitiendo a los stakeholders entender cómo responde el sistema.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Las simulaciones iniciales ayudan a identificar necesidades del sistema, evaluando diferentes escenarios de uso y recopilando información para los requisitos.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se crean simulaciones detalladas para validar modelos conceptuales y arquitecturas propuestas, asegurando su viabilidad técnica y funcional.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Las simulaciones se emplean para probar componentes individuales durante el desarrollo, verificando su funcionamiento antes de la integración completa.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Se realizan simulaciones en entornos controlados para verificar que el sistema cumple con los escenarios críticos y los objetivos funcionales esperados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Las simulaciones previas al despliegue aseguran que el sistema funcione correctamente bajo condiciones reales, minimizando riesgos en el lanzamiento.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Las simulaciones se utilizan para evaluar el impacto de actualizaciones o cambios en el sistema, asegurando que no se introduzcan errores ni fallos.",
            ],
          },
        ],
      },
      material: materiaInfografia.simulacion,
      tutorialVideo: pagVideo.nodoDos.ramaUno.SIMULACIONES.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaUno.SIMULACIONES.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -300, y: 660 },
    data: {
      nodo: 2,
      label: "REVISIÓN POR EXPERTOS",
      descripcion:
        "Esencial para validar y asegurar la calidad del software desde una perspectiva profesional e independiente. Esto permite identificar defectos, riesgos y áreas de mejora.",
      labelTitle: "Garantía de Calidad a Través de la Experiencia",
      ventajas: [
        "Validación de Requerimientos",
        "Feedback Constructivo",
        "Mejora de la Calidad del Producto",
        "Reducción de Riesgos",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Valida la viabilidad técnica asegurando que el sistema puede ser implementado de acuerdo al diseño propuesto.",
        },
        {
          img: imgFoco,
          descripcion:
            "Las organizaciones que implementan revisiones por expertos pueden reducir hasta un 50% los errores en etapas posteriores del desarrollo.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Expertos revisan los requisitos iniciales para identificar inconsistencias, ambigüedades y omisiones, asegurando claridad y alineación con los objetivos.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Los diseños conceptuales y arquitectónicos son revisados por especialistas para validar su viabilidad técnica y funcionalidad esperada.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Expertos evalúan el código y las implementaciones técnicas para garantizar que se sigan buenas prácticas y estándares de calidad.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Se revisan los planes y casos de prueba para asegurar que cubren los aspectos críticos del sistema, validando la estrategia de pruebas.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Expertos verifican la documentación, configuraciones y estrategias de despliegue para reducir riesgos y garantizar un lanzamiento exitoso.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Los cambios y actualizaciones del sistema son revisados por expertos para evaluar su impacto y mantener la estabilidad operativa.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionExpertos,
      tutorialVideo:
        pagVideo.nodoDos.ramaUno.REVISIÓN_POR_EXPERTOS.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaUno.REVISIÓN_POR_EXPERTOS.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: 100, y: 680 },
    data: {
      nodo: 2,
      label: "PRUEBAS DE CONSISTENCIA",
      descripcion:
        "Permiten probar el comportamiento del software en escenarios reales y controlados sin una implementación completa, permitiendo realizar pruebas tempranas y ajustes antes del desarrollo real.",
      labelTitle: "Validación Realista en Entornos Controlados",
      ventajas: [
        "Mejora confianza del usuario",
        "Toma de decisiones",
        "Mejora de la Calidad del Producto",
        "Detección Temprana de Errores",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Permite detectar incoherencias en etapas tempranas, corrigiendo inconsistencias antes de que impacten en el producto final.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite la mejora del 30% en la productividad de sus equipos de desarrollo al reducir los errores en las etapas posteriores del ciclo de vida del software.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Calidad en el Uso",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Se realizan pruebas de consistencia para verificar que los requisitos no sean contradictorios y que estén alineados entre sí.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Las pruebas de consistencia se aplican para garantizar que el diseño arquitectónico y los modelos conceptuales reflejen correctamente los requisitos establecidos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, se ejecutan pruebas de consistencia para asegurar que las implementaciones técnicas mantengan coherencia con los diseños y estándares definidos.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Se verifican los resultados de pruebas anteriores para validar que los datos y comportamientos del sistema sean consistentes en todos los casos evaluados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Las pruebas de consistencia garantizan que los elementos del sistema desplegado trabajen en conjunto sin conflictos o inconsistencias.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Se aplican pruebas de consistencia para validar que las actualizaciones o cambios no generen inconsistencias en el sistema existente.",
            ],
          },
        ],
      },
      material: materiaInfografia.pruebaConsistencia,
      tutorialVideo:
        pagVideo.nodoDos.ramaUno.PRUEBAS_DE_CONSISTENCIA.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaUno.PRUEBAS_DE_CONSISTENCIA.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "80",
    position: { x: 550, y: 660 },
    data: {
      nodo: 2,
      label: "ENTREVISTAS Y ENCUESTAS",
      descripcion:
        "Recopilan opiniones y necesidades de usuarios y stakeholders, ayudando a asegurar que los requisitos reflejen las expectativas del cliente.",
      labelTitle: "Técnicas de Validación en el Desarrollo de Software",
      ventajas: [
        "Identificación de Necesidades",
        "Mayor Satisfacción del Cliente",
        "Recopilación de Datos Directos",
        "Mejora Continua",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Ofrecen retroalimentación directa del cliente, alineando los requisitos con sus necesidades reales.",
        },
        {
          img: imgFoco,
          descripcion:
            "Aumentan la precisión en los requisitos, evitando malentendidos y asegurando que el producto final cumpla con las expectativas.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Las entrevistas y encuestas se utilizan para recopilar información directa de los usuarios y otras partes interesadas, identificando necesidades y expectativas.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se realizan entrevistas con expertos y encuestas a usuarios para validar que los diseños propuestos cumplen con los requisitos definidos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Las encuestas pueden recoger opiniones sobre prototipos funcionales, mientras que las entrevistas con el equipo técnico validan el enfoque de implementación.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Se aplican encuestas para evaluar la percepción de los usuarios respecto a la calidad y usabilidad del sistema, complementadas con entrevistas para profundizar en los resultados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Entrevistas y encuestas aseguran que los usuarios y operadores finales están satisfechos con el sistema antes de su lanzamiento completo.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Se utilizan entrevistas y encuestas para identificar necesidades de mejora, nuevas funcionalidades y problemas en la operación del sistema.",
            ],
          },
        ],
      },
      material: materiaInfografia.entrevistaEncuesta,
      tutorialVideo:
        pagVideo.nodoDos.ramaUno.ENTREVISTAS_Y_ENCUESTAS.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaUno.ENTREVISTAS_Y_ENCUESTAS.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "90",
    position: { x: -150, y: 480 },
    data: {
      nodo: 2,
      label: "RECORRIDOS",
      descripcion:
        "Técnica que permite asegurar que los artefactos del proyecto cumplan con los requisitos establecidos y sean entendidos correctamente, mejorando así la calidad del producto final.",
      labelTitle: "Evaluación Colaborativa de Requisitos y Diseño",
      ventajas: [
        "Validación de requisitos",
        "Participación activa",
        "Detección temprana de errores",
        "Documentación del conocimiento",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Fomentan el aprendizaje y la colaboración al permitir que los miembros del equipo compartan conocimientos y aclaraciones.",
        },
        {
          img: imgFoco,
          descripcion:
            "Los walkthroughs no solo se utilizan en el desarrollo de software, sino también en el diseño y en la elaboración de documentos técnicos.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Los recorridos permiten explorar procesos actuales y observar directamente las operaciones para identificar necesidades y problemas no evidentes en entrevistas.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se realizan recorridos para validar la alineación de los diseños con el entorno operativo, identificando ajustes necesarios antes del desarrollo.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Los recorridos del sistema en desarrollo permiten verificar la integración de módulos y el cumplimiento de requisitos en contextos reales.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Durante las pruebas, los recorridos del sistema ayudan a identificar problemas funcionales y de usabilidad en escenarios reales.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Recorridos finales aseguran que el sistema implementado funciona correctamente en el entorno operativo antes del lanzamiento oficial.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Se realizan recorridos periódicos para evaluar el desempeño del sistema y detectar áreas que necesiten actualizaciones o correcciones.",
            ],
          },
        ],
      },
      material: materiaInfografia.recorridos,
      tutorialVideo: pagVideo.nodoDos.ramaUno.RECORRIDOS.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaUno.RECORRIDOS.tutorialVideo,
    },
    type: "Section",
    className: styleText,
  },
];

export const unionRevisionRequerimiento: Edge[] = [
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
export const nodoRevisionRequerimiento: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 2,
      label: MENU[1].lista[1].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -300, y: 320 },
    data: {
      nodo: 2,
      label: "PREPARACIÓN",
      descripcion:
        "Fase inicial fundamental en el ciclo de vida de un proyecto de software o sistemas que implica establecer las bases necesarias para el desarrollo exitoso del proyecto.",
      labelTitle: "Organización Efectiva para Evaluar Requerimientos",
      ventajas: [
        "Participación activa",
        "Documentación Estructurada",
        "Identificación temprana de problemas",
        "Claridad en los requerimientos",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reduce la probabilidad de problemas inesperados que puedan impactar en los plazos o el presupuesto.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite definir los entregables y los indicadores de desempeño clave (KPI) que se utilizarán para evaluar el progreso y la calidad del proyecto.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La preparación incluye definir objetivos claros, establecer roles y responsabilidades, y recopilar herramientas necesarias para la identificación de requisitos.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se preparan los modelos, diagramas y documentación necesarios para analizar y diseñar soluciones alineadas con los requisitos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Incluye configurar entornos de desarrollo, seleccionar herramientas, y planificar actividades de codificación y control de versiones.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "La preparación implica definir estrategias de prueba, desarrollar casos de prueba y configurar entornos adecuados para la ejecución.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Se realizan actividades previas como preparar servidores, validar configuraciones y capacitar al equipo antes de implementar el sistema.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Incluye planificar la monitorización del sistema, preparar protocolos de soporte y definir procesos para aplicar actualizaciones futuras.",
            ],
          },
        ],
      },
      material: materiaInfografia.preparacion,
      tutorialVideo: pagVideo.nodoDos.ramaDos.PREPARACION.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaDos.PREPARACION.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 130, y: 340 },
    data: {
      nodo: 2,
      label: "Revisión de Factibilidad",
      descripcion:
        "Consiste en evaluar los requerimientos para determinar su viabilidad técnica, económica y operativa antes de su implementación.",
      labelTitle: "Evaluación Integral de Viabilidad de Proyectos",
      ventajas: [
        "Mitigación de Riesgos",
        "Optimización de Recursos",
        "Alineación Estratégica:",
        "Aumento de la Probabilidad de Éxito",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Previene que el equipo invierta en requerimientos que no se puedan implementar.",
        },
        {
          img: imgFoco,
          descripcion:
            "Según estudios, aproximadamente el 20% de los proyectos tecnológicos fracasan debido a la falta de una adecuada evaluación de la factibilidad.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "El prototipado se utiliza para representar visualmente los requisitos identificados, ayudando a validar y refinar las necesidades de los usuarios.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se crean prototipos más detallados para explorar diferentes enfoques de diseño y evaluar cuál se adapta mejor a los requisitos definidos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Los prototipos funcionales sirven como guía para los desarrolladores y permiten evaluar características clave antes de su implementación completa.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Prototipos interactivos ayudan a realizar pruebas iniciales de usabilidad y funcionalidad, identificando problemas tempranos.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Prototipos finales pueden ser utilizados para capacitar a los usuarios y validar que el sistema cumple con sus expectativas antes del lanzamiento oficial.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Se emplean prototipos para explorar posibles mejoras o nuevas funcionalidades antes de incorporarlas al sistema existente.",
            ],
          },
        ],
      },
      material: materiaInfografia.prototipado,
      tutorialVideo:
        pagVideo.nodoDos.ramaDos.Revision_de_Factibilidad.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaDos.Revision_de_Factibilidad.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 2,
      label: "Revisión en Grupo",
      descripcion:
        "Proceso colaborativo en el que el equipo, incluyendo desarrolladores, analistas y usuarios finales, se reúnen para discutir y evaluar los requerimientos de un proyecto.",
      labelTitle: "Evaluación Colaborativa de Requerimientos",
      ventajas: [
        "Diversidad de perspectivas",
        "Mejora de la Comunicación",
        "Identificación de Inconsistencias",
        "Validación de Requerimientos",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "La combinación de múltiples perspectivas y conocimientos técnicos en la revisión aumenta la probabilidad de detectar errores, garantizando un producto de mayor calidad.",
        },
        {
          img: imgFoco,
          descripcion:
            "Algunas metodologías ágiles incorporan la revisión de grupos como parte de sus ciclos de desarrollo.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
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
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La revisión en grupo permite que varios miembros del equipo discutan y validen los requisitos, asegurando que todos los aspectos sean cubiertos y comprendidos.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Durante la revisión en grupo, los diseñadores presentan los modelos y diagramas, permitiendo que otros miembros del equipo identifiquen posibles errores o mejoras.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "El código es revisado por el equipo de desarrollo para asegurar que cumple con los estándares de calidad y es alineado con los objetivos del proyecto.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "El equipo revisa de manera conjunta los casos de prueba y los resultados obtenidos, discutiendo la cobertura de pruebas y ajustando lo necesario.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "En esta fase, la revisión en grupo asegura que todos los aspectos de la implementación, desde la configuración hasta la documentación, sean revisados antes del lanzamiento.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "El equipo realiza revisiones en grupo para evaluar los cambios, actualizaciones o problemas detectados, promoviendo una solución colaborativa.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionGrupo,
      tutorialVideo: pagVideo.nodoDos.ramaDos.Revision_en_Grupo.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaDos.Revision_en_Grupo.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 450, y: 500 },
    data: {
      nodo: 2,
      label: "Revisión de compleción",
      descripcion:
        "Proceso sistemático que verifica si todos los requerimientos necesarios para el proyecto están presentes y correctamente documentados.",
      labelTitle: "Validación Integral de Requerimientos",
      ventajas: [
        "Aseguramiento de la calidad",
        "Eficiencia en el proceso",
        "Mejora la satisfacción del cliente",
        "Documentación exhaustiva",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Es una práctica recomendada en metodologías ágiles, donde se enfatiza la adaptabilidad y la retroalimentación continua de los requerimientos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Los proyectos con revisiones de requerimientos completas tienen hasta un 50% menos de probabilidad de exceder el presupuesto o el tiempo de entrega.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La revisión de compleción asegura que todos los requisitos necesarios han sido identificados y documentados de manera exhaustiva, sin omitir aspectos clave.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se verifica que todos los aspectos del diseño estén completamente cubiertos, con un análisis completo de las necesidades del sistema y su alineación con los requisitos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante la revisión de compleción, se asegura que todas las funcionalidades del sistema han sido implementadas correctamente, sin dejar elementos pendientes.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Se revisa que todas las pruebas necesarias hayan sido realizadas, verificando que cada componente haya sido probado de acuerdo a los requisitos y especificaciones.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La revisión de compleción se asegura de que todos los aspectos de la implementación estén completos, desde la configuración hasta la validación de los documentos de despliegue.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "En el mantenimiento, se revisa que todas las actualizaciones, cambios y mejoras sean completadas, asegurando que no se dejen aspectos pendientes que afecten la estabilidad del sistema.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionComplecion,
      tutorialVideo:
        pagVideo.nodoDos.ramaDos.Revision_de_complecion.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaDos.Revision_de_complecion.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -300, y: 660 },
    data: {
      nodo: 2,
      label: "Documentación de resultados",
      descripcion:
        "Proceso de registrar de manera organizada y detallada los hallazgos, decisiones, recomendaciones y acciones derivadas de una revisión de requerimientos.",
      labelTitle: "Registro de Resultados en la Revisión de Requerimientos",
      ventajas: [
        "Mejora de la transparencia",
        "Facilita la comunicación",
        "Evidencia de control de calidad",
        "Soporte en la gestión de cambios",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Permite justificar decisiones y acciones, lo que es fundamental para mantener la confianza y comunicación entre el equipo y los stakeholders.",
        },
        {
          img: imgFoco,
          descripcion:
            "La documentación de resultados ayuda a reducir hasta en un 30% el tiempo dedicado a resolver problemas de interpretación en las etapas de desarrollo y pruebas.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La documentación de resultados asegura que todos los requisitos identificados sean correctamente registrados, proporcionando una base clara para el desarrollo y las pruebas.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Durante esta fase, se documentan los diseños arquitectónicos y los modelos creados, facilitando la comunicación entre los miembros del equipo y las partes interesadas.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "La documentación de resultados incluye la codificación final, junto con los comentarios y explicaciones necesarias para que otros desarrolladores comprendan las decisiones de implementación.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Los resultados de las pruebas, junto con los casos de prueba y las condiciones de prueba utilizadas, deben ser documentados para garantizar la trazabilidad y la validación de los resultados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La documentación de resultados del despliegue incluye los procedimientos seguidos, los problemas encontrados y cómo se resolvieron, así como la configuración final del sistema en producción.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "La documentación de resultados en mantenimiento incluye las actualizaciones realizadas, los errores corregidos y cualquier cambio en el sistema, asegurando que la información esté disponible para futuras referencias.",
            ],
          },
        ],
      },
      material: materiaInfografia.documentacionResultados,
      tutorialVideo:
        pagVideo.nodoDos.ramaDos.Documentacion_de_resultados.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaDos.Documentacion_de_resultados.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: 100, y: 680 },
    data: {
      nodo: 2,
      label: "Revisión de consistencia",
      descripcion:
        "Proceso que verifica que los requerimientos de un proyecto sean coherentes entre sí y no presenten contradicciones.",
      labelTitle: "Validación de Coherencia en los Requerimientos",
      ventajas: [
        "Prevención de errores",
        "Ahorro de tiempo y costos",
        "Mejora en la calidad del proyecto",
        "Optimización en la toma de decisiones",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Las herramientas de gestión de requerimientos modernas incluyen funciones automáticas de verificación de consistencia, ayudando a reducir el esfuerzo manual en la identificación de incoherencias.",
        },
        {
          img: imgFoco,
          descripcion:
            "La falta de consistencia en los requerimientos puede aumentar los costos de desarrollo hasta en un 30%.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Calidad en el Uso",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La revisión de consistencia garantiza que los requisitos sean coherentes entre sí, sin contradicciones o duplicados, asegurando que todos los aspectos del sistema estén cubiertos.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, se revisa que los diseños sean consistentes con los requisitos, asegurando que no existan diferencias entre lo solicitado y lo planteado en la solución.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "La revisión de consistencia se enfoca en verificar que el código esté alineado con el diseño y que no haya discrepancias entre los módulos o componentes del sistema.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Durante la fase de pruebas, se valida que los escenarios de prueba cubran todas las funcionalidades de manera consistente, sin saltarse pasos importantes o presentar resultados incoherentes.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "Se revisa que el proceso de despliegue sea consistente con la documentación de configuración y que todos los componentes estén alineados con los requisitos del entorno de producción.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "La revisión de consistencia en mantenimiento asegura que los cambios y actualizaciones sean compatibles con el sistema existente y que no generen nuevos conflictos o inconsistencias.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionConsistencia,
      tutorialVideo:
        pagVideo.nodoDos.ramaDos.Revision_de_consistencia.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaDos.Revision_de_consistencia.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "80",
    position: { x: 550, y: 660 },
    data: {
      nodo: 2,
      label: "Revisión posterior",
      descripcion:
        "Consiste en realizar un análisis después de la implementación de los requerimientos para evaluar si estos fueron comprendidos y aplicados correctamente, identificando posibles mejoras o ajustes necesarios.",
      labelTitle: "Evaluación de Requerimientos Después de la Implementación",
      ventajas: [
        "Reducción de errores futuros",
        "Optimización de procesos",
        "Identificación de mejores prácticas",
        "Mejora de la satisfacción del cliente",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "La revisión posterior se realiza al final de cada iteración para asegurar que los objetivos se han cumplido y para ajustar procesos de manera continua.",
        },
        {
          img: imgFoco,
          descripcion:
            "Puede contribuir a reducir en hasta un 20% el tiempo de desarrollo en proyectos posteriores al implementar mejoras basadas en análisis retrospectivos.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La revisión posterior asegura que todos los requisitos identificados se hayan implementado correctamente y cumplen con las expectativas de los usuarios y las partes interesadas.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Después de finalizar el diseño, se realiza una revisión para verificar que las soluciones propuestas sean las más adecuadas, y si es necesario, se ajustan según las observaciones del equipo.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "La revisión posterior al desarrollo valida que el código entregado cumple con las expectativas de calidad, funcionalidad y desempeño, y que las pruebas hayan cubierto todas las áreas necesarias.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "Una revisión posterior a las pruebas permite evaluar si se cubrieron todos los casos de prueba necesarios y si se resolvieron los errores identificados durante la fase de pruebas.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La revisión posterior al despliegue se enfoca en verificar si el sistema en producción funciona correctamente y si se han abordado todos los problemas detectados durante las etapas anteriores.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Después de cada actualización o cambio en el sistema, se realiza una revisión posterior para verificar que no se hayan introducido nuevos errores y que las modificaciones no afecten la estabilidad del sistema.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionPosterior,
      tutorialVideo: pagVideo.nodoDos.ramaDos.Revision_posterior.tutorialVideo,
      paginaOficial: pagVideo.nodoDos.ramaDos.Revision_posterior.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "90",
    position: { x: -280, y: 480 },
    data: {
      nodo: 2,
      label: "REVISIÓN DE PRIORIDAD",
      descripcion:
        "Proceso que clasifica los requerimientos en función de su importancia y urgencia, asegurando que los elementos clave se aborden primero.",
      labelTitle: "Establecimiento de Prioridades en Requerimientos",
      ventajas: [
        "Optimización de recursos",
        "Adaptabilidad",
        "Mejora de la satisfacción del cliente",
        "Facilitación de la planificación",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Las técnicas de priorización más comunes incluyen la matriz de Eisenhower, el método MoSCoW (Must have, Should have, Could have, Won't have), y el análisis de costo-beneficio.",
        },
        {
          img: imgFoco,
          descripcion:
            "La priorización adecuada puede aumentar la eficiencia del equipo en un 40%, ya que se centra en las tareas que realmente impactan en el resultado del proyecto.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La revisión de prioridad ayuda a identificar y clasificar los requisitos según su importancia y urgencia, asegurando que los más críticos se aborden primero en el proceso de desarrollo.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, se revisan las prioridades del diseño, garantizando que los elementos más importantes se implementen antes para cumplir con los requisitos clave del cliente.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, se lleva a cabo una revisión de prioridad para asegurarse de que los módulos más críticos sean entregados primero, reduciendo riesgos y cumpliendo con plazos clave.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "La revisión de prioridad en pruebas implica verificar que los casos de prueba más relevantes y de alto riesgo se ejecuten primero, garantizando que los aspectos más importantes del sistema sean validados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "En el despliegue, se realiza una revisión de prioridad para garantizar que las funcionalidades clave se implementen primero en producción, minimizando el impacto en los usuarios finales.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "La revisión de prioridad en mantenimiento se centra en corregir primero los problemas más críticos, asegurando la continuidad y estabilidad del sistema antes de abordar mejoras o problemas menores.",
            ],
          },
        ],
      },
      material: materiaInfografia.revisionPrioridad,
      tutorialVideo:
        pagVideo.nodoDos.ramaDos.REVISION_DE_PRIORIDAD.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaDos.REVISION_DE_PRIORIDAD.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const unionTrazabilidadRequerimiento: Edge[] = [
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
export const nodoTrazabilidadRequerimiento: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 2,
      label: MENU[1].lista[2].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -300, y: 320 },
    data: {
      nodo: 2,
      label: "Trazabilidad hacia Adelante",
      descripcion:
        "Técnica que permite rastrear cada requerimiento desde su fase inicial hasta su implementación final, garantizando que no se omitan requisitos clave durante el desarrollo.",
      labelTitle: "Seguimiento de Requerimientos en el Ciclo de Desarrollo",
      ventajas: [
        "Planificación y control",
        "Verificación de requerimientos",
        "Cumplimiento de especificaciones",
        "Facilita la gestión de cambios",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Se aplica durante todo el ciclo de vida del desarrollo, comenzando desde la captura de requerimientos y continuando hasta la implementación y pruebas.",
        },
        {
          img: imgFoco,
          descripcion:
            "Se integra principalmente en las fases de diseño, desarrollo y verificación del sistema.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad hacia adelante asegura que cada requisito identificado tenga un camino claro hacia su implementación, pruebas y validación en fases posteriores del ciclo de vida del proyecto.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "Se establece la trazabilidad hacia adelante para verificar que cada decisión tomada en el diseño corresponda a los requisitos establecidos previamente y que guíe el desarrollo de las funcionalidades.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "En esta fase, la trazabilidad hacia adelante se asegura de que cada componente del software desarrollado esté alineado con los requisitos y diseños previos, facilitando la conexión entre las fases.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "La trazabilidad hacia adelante en las pruebas garantiza que todos los requisitos estén cubiertos por los casos de prueba, lo que asegura que el producto final cumpla con los criterios definidos.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "En el despliegue, la trazabilidad hacia adelante se utiliza para asegurar que las funcionalidades implementadas en producción corresponden con los requisitos iniciales y han sido validadas correctamente.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Durante el mantenimiento, se mantiene la trazabilidad hacia adelante para asegurar que cualquier cambio o actualización siga cumpliendo con los requisitos originales y no cause regresiones en el sistema.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadAdelante,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.Trazabilidad_hacia_Adelante.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.Trazabilidad_hacia_Adelante.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 550, y: 660 },
    data: {
      nodo: 2,
      label: "Trazabilidad hacia Atrás",
      descripcion:
        "Permite validar que cada funcionalidad tenga un propósito en los requerimientos establecidos, asegurando la alineación entre lo desarrollado y las necesidades iniciales.",
      labelTitle: "Validación de Cumplimiento de Requerimientos Iniciales",
      ventajas: [
        "Previene el 'scope creep'",
        "Facilita la gestión de cambios",
        "Optimiza la calidad del producto",
        "Mejora la eficiencia en auditorías",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Permite identificar funciones añadidas sin justificación clara, ayudando a mantener el proyecto dentro de su alcance definido.",
        },
        {
          img: imgFoco,
          descripcion:
            "Los estudios demuestran que puede reducir hasta un 25% los costos asociados a la corrección de errores en etapas avanzadas del proyecto.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad hacia atrás permite verificar que todos los requisitos estén correctamente definidos y que cada uno se relacione con las etapas anteriores del ciclo de vida, asegurando que no se pierda información clave.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, la trazabilidad hacia atrás permite rastrear cada decisión de diseño hasta los requisitos originales, garantizando que el diseño sigue las necesidades iniciales del cliente y del proyecto.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "La trazabilidad hacia atrás en el desarrollo asegura que el código generado se alinee con los requisitos y el diseño, facilitando la validación de que el producto sigue siendo fiel a lo que se había planeado.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "En la fase de pruebas, la trazabilidad hacia atrás asegura que cada caso de prueba esté vinculado a los requisitos y el diseño, garantizando que todos los aspectos del sistema sean evaluados en función de sus necesidades originales.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La trazabilidad hacia atrás en el despliegue asegura que todas las funcionalidades implementadas en producción hayan sido derivadas correctamente desde los requisitos iniciales y el diseño, minimizando el riesgo de inconsistencias.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Durante el mantenimiento, la trazabilidad hacia atrás ayuda a verificar que las actualizaciones o correcciones realizadas en el sistema estén alineadas con los requisitos originales y los cambios previos.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadAtras,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.Trazabilidad_hacia_Atras.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.Trazabilidad_hacia_Atras.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 2,
      label: "Trazabilidad Bidireccional",
      descripcion:
        "Permite asegurar una alineación total en el desarrollo, cubriendo tanto la validación de requerimientos como la verificación de componentes.",
      labelTitle: "Control Completo de Requerimientos y Cambios",
      ventajas: [
        "Validación de requerimientos",
        "Optimiza el control de cambios",
        "Minimiza riesgo de omisión",
        "VFacilita auditorías y procesos de control",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Normas como IEEE 1012, CMMI e ISO 9001 promueven su uso para garantizar una entrega de alta calidad y alineada con los requisitos iniciales.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite reducir la probabilidad de que se pierdan requisitos o se desarrollen funciones innecesarias.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
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
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad bidireccional permite que los requisitos se sigan hacia adelante, asegurando que se implementen correctamente, y hacia atrás, garantizando que provienen de una necesidad clara del cliente o usuario final.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, la trazabilidad bidireccional asegura que las decisiones de diseño no solo estén alineadas con los requisitos, sino también con el análisis previo, garantizando que cualquier cambio sea considerado en ambas direcciones.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, la trazabilidad bidireccional facilita la validación de que el código cumpla tanto con los requisitos originales como con el diseño, asegurando que no se desvíe en ninguna de las fases.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "La trazabilidad bidireccional en las pruebas permite verificar que los casos de prueba cubren tanto los requisitos como el diseño, asegurando que el sistema cumpla con ambos aspectos de manera consistente.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "En el despliegue, la trazabilidad bidireccional ayuda a verificar que las funcionalidades implementadas estén alineadas con los requisitos y el diseño, asegurando que no haya discrepancias al poner en producción.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "La trazabilidad bidireccional en el mantenimiento asegura que cualquier cambio realizado en el sistema esté justificado por los requisitos y el diseño, permitiendo una adaptación coherente a lo largo del tiempo.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadBidireccional,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.TrazabilidadBidireccional.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.TrazabilidadBidireccional.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 450, y: 500 },
    data: {
      nodo: 2,
      label: "Trazabilidad Vertical",
      descripcion:
        "Permite rastrear la evolución y cumplimiento de los requerimientos desde los requisitos de negocio hasta los requisitos detallados técnicos e implementaciones.",
      labelTitle: "Control Jerárquico de Requerimientos",
      ventajas: [
        "Cumplimiento normativo",
        "Validación de requerimientos",
        "Alineación con objetivos de negocio",
        "Aumento de la probabilidad de éxito",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Permite verificar que cada nivel de requerimiento responde a una necesidad del nivel superior.",
        },
        {
          img: imgFoco,
          descripcion:
            "Facilita la evaluación de impactos a lo largo de los niveles jerárquicos, haciendo más sencillo el análisis y la toma de decisiones.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad vertical garantiza que los requisitos estén alineados con los niveles superiores del proyecto, como la visión del cliente y los objetivos organizacionales, permitiendo que cada requisito sea rastreable hasta la estrategia del negocio.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, la trazabilidad vertical asegura que las decisiones de diseño estén directamente vinculadas a los requisitos, y que el diseño refleje adecuadamente las necesidades del cliente, además de estar alineado con los objetivos estratégicos.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, la trazabilidad vertical permite verificar que el código esté siendo implementado conforme a los requisitos y el diseño, garantizando que el trabajo realizado se derive de las necesidades más amplias del negocio.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "En las pruebas, la trazabilidad vertical asegura que las pruebas se realicen sobre funcionalidades que están directamente relacionadas con los requisitos originales y las decisiones de diseño, permitiendo asegurar que el sistema cumpla con los objetivos planteados.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La trazabilidad vertical en el despliegue garantiza que la implementación de las funcionalidades en producción esté alineada con los objetivos estratégicos del negocio, asegurando que todo se entregue de acuerdo con lo planificado.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Durante el mantenimiento, la trazabilidad vertical asegura que los cambios, actualizaciones o nuevas funcionalidades se alineen con los requisitos originales y con los objetivos estratégicos del negocio, permitiendo una evolución coherente del sistema.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadVertical,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.TrazabilidadVertical.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.TrazabilidadVertical.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -300, y: 660 },
    data: {
      nodo: 2,
      label: "Trazabilidad Horizontal",
      descripcion:
        "Permite el seguimiento de los requerimientos a lo largo de distintas fases o componentes dentro de un mismo nivel del proyecto.",
      labelTitle: "Evaluación Integral de Viabilidad de Proyectos",
      ventajas: [
        "Gestión de dependencias",
        "Detección de inconsistencias",
        "Agilidad en el manejo de cambios",
        "Reducción de errores",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Facilita la integración del sistema al asegurar que los módulos cumplen con los mismos estándares y requisitos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Es especialmente útil en metodologías ágiles, donde los cambios en los requerimientos son comunes y deben ser implementados de manera rápida y consistente.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Material Didáctico",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      data: [
        {
          nombre: "Identificación de Requisitos",
          info: [
            "La trazabilidad horizontal permite que los requisitos se conecten entre sí a lo largo de diferentes fases del ciclo de vida, asegurando que cada requisito esté relacionado con otras partes del sistema y con otros requisitos funcionales y no funcionales.",
          ],
        },
        {
          nombre: "Análisis y Diseño",
          info: [
            "En esta fase, la trazabilidad horizontal asegura que los diseños se vinculen adecuadamente con los requisitos relacionados, permitiendo identificar interdependencias entre componentes y funcionalidades a lo largo de diferentes áreas del proyecto.",
          ],
        },
        {
          nombre: "Desarrollo",
          info: [
            "Durante el desarrollo, la trazabilidad horizontal ayuda a garantizar que el código implementado esté alineado con los requisitos correspondientes en distintas áreas del sistema, asegurando coherencia y evitando duplicación o omisiones en diferentes módulos.",
          ],
        },
        {
          nombre: "Pruebas",
          info: [
            "En las pruebas, la trazabilidad horizontal asegura que se cubren todas las funcionalidades del sistema, permitiendo validar que los requisitos de diferentes módulos del sistema sean correctamente probados en conjunto y no de forma aislada.",
          ],
        },
        {
          nombre: "Despliegue",
          info: [
            "La trazabilidad horizontal en el despliegue garantiza que todas las funcionalidades implementadas en diferentes módulos estén integradas correctamente, asegurando que no se pierda ningún requisito al mover el sistema a producción.",
          ],
        },
        {
          nombre: "Mantenimiento",
          info: [
            "Durante el mantenimiento, la trazabilidad horizontal ayuda a asegurar que los cambios realizados en un módulo no afecten de manera negativa a otros módulos del sistema, garantizando la coherencia en todo el sistema mientras se realizan actualizaciones.",
          ],
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad horizontal permite que los requisitos se conecten entre sí a lo largo de diferentes fases del ciclo de vida, asegurando que cada requisito esté relacionado con otras partes del sistema y con otros requisitos funcionales y no funcionales.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En esta fase, la trazabilidad horizontal asegura que los diseños se vinculen adecuadamente con los requisitos relacionados, permitiendo identificar interdependencias entre componentes y funcionalidades a lo largo de diferentes áreas del proyecto.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, la trazabilidad horizontal ayuda a garantizar que el código implementado esté alineado con los requisitos correspondientes en distintas áreas del sistema, asegurando coherencia y evitando duplicación o omisiones en diferentes módulos.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "En las pruebas, la trazabilidad horizontal asegura que se cubren todas las funcionalidades del sistema, permitiendo validar que los requisitos de diferentes módulos del sistema sean correctamente probados en conjunto y no de forma aislada.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La trazabilidad horizontal en el despliegue garantiza que todas las funcionalidades implementadas en diferentes módulos estén integradas correctamente, asegurando que no se pierda ningún requisito al mover el sistema a producción.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "Durante el mantenimiento, la trazabilidad horizontal ayuda a asegurar que los cambios realizados en un módulo no afecten de manera negativa a otros módulos del sistema, garantizando la coherencia en todo el sistema mientras se realizan actualizaciones.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadHorizontal,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.TrazabilidadHorizontal.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.TrazabilidadHorizontal.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: -250, y: 500 },
    data: {
      nodo: 2,
      label: "Trazabilidad de Cambios",
      descripcion:
        "Permite asegurar que cada cambio en los requerimientos sea gestionado de manera sistemática, controlando su impacto en los demás elementos del sistema y en el cumplimiento de los objetivos del proyecto.",
      labelTitle: "Seguimiento de Modificaciones",
      ventajas: [
        "Control de impacto de cambios",
        "Mejor comunicación",
        "Reduce el riesgo de inconsistencias",
        "Documentación de cambios realizados",
      ],
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Mejora la gestión de cambios al permitir que los stakeholders comprendan el alcance de cada modificación.",
        },
        {
          img: imgFoco,
          descripcion:
            "En metodologías ágiles, es fundamental para adaptarse a la rápida evolución de los requerimientos sin comprometer la calidad del producto final.",
        },
      ],
      opciones: [
        {
          img: imgCicloVida,
          descripcion: "Integración en el Ciclo de Vida del Software",
        },
        {
          img: imgHoja,
          descripcion: "Calidad en el Uso",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales / Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Prácticas y Recomendaciones",
        },
      ],
      cicloVida: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "La trazabilidad de cambios en esta fase asegura que cualquier modificación realizada en los requisitos esté adecuadamente registrada y relacionada con los documentos y las decisiones previas, permitiendo un control total sobre las modificaciones a lo largo del ciclo de vida del proyecto.",
            ],
          },
          {
            nombre: "Análisis y Diseño",
            info: [
              "En el análisis y diseño, la trazabilidad de cambios asegura que todas las modificaciones en los diseños y decisiones arquitectónicas sean documentadas, permitiendo rastrear cómo esos cambios afectan a los requisitos iniciales y a los componentes del sistema.",
            ],
          },
          {
            nombre: "Desarrollo",
            info: [
              "Durante el desarrollo, la trazabilidad de cambios asegura que todas las modificaciones en el código, ya sean por refactorización o adición de nuevas funcionalidades, estén registradas y asociadas a los requisitos correspondientes, garantizando que todos los cambios sean realizados de acuerdo con las expectativas.",
            ],
          },
          {
            nombre: "Pruebas",
            info: [
              "En la fase de pruebas, la trazabilidad de cambios asegura que cualquier cambio en el código o los requisitos sea probado adecuadamente. Esto permite verificar que las modificaciones no introduzcan nuevos defectos y que se mantenga la coherencia con los requisitos originales.",
            ],
          },
          {
            nombre: "Despliegue",
            info: [
              "La trazabilidad de cambios durante el despliegue asegura que las modificaciones realizadas en el sistema durante el proceso de implementación estén debidamente registradas y validadas, garantizando que no se introduzcan cambios sin el adecuado control y documentación.",
            ],
          },
          {
            nombre: "Mantenimiento",
            info: [
              "En el mantenimiento, la trazabilidad de cambios es fundamental para asegurar que todos los cambios posteriores al lanzamiento estén relacionados con los requisitos y las decisiones previas, facilitando la gestión de cambios a lo largo de la vida del sistema y asegurando su estabilidad.",
            ],
          },
        ],
      },
      material: materiaInfografia.trazabilidadCambios,
      tutorialVideo:
        pagVideo.nodoDos.ramaTres.Trazabilidad_de_Cambios.tutorialVideo,
      paginaOficial:
        pagVideo.nodoDos.ramaTres.Trazabilidad_de_Cambios.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const nodoDos = [
  nodoTecnicaValidacion,
  nodoRevisionRequerimiento,
  nodoTrazabilidadRequerimiento,
];
