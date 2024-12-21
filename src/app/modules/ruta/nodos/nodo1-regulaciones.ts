import { Edge, Node } from "@xyflow/react";
import { MENU } from "../../../components/helper/menu";
import {
  iconChat as imgChat,
  iconFoco as imgFoco,
  iconPreguntas as imgPreguntas,
  iconPaginaOficial as imgEstrellaAzul,
  iconCalidadUso as imgHoja,
  iconVideo as imgVideo,
  iconProcesoImplement as imgProcesImplement,
} from "../mapa/components/icons/Icons";
import "../../../../styles/button.css";
import { pagVideo } from "./paginasVideos/pagVid";

export const styleSeccion =
  "bg-transparent text-[var(--t)] amaranth text-2xl cursor-default w-[20rem] block bg-clip-text text-transparent font-bold bg-gradient-to-r from-[var(--bg1)] to-[var(--bg2)]";
export const styleText =
  "rounded-[8px] button cursor-default text-[var(--t)] shadow-[0_0_6px_#BD34FE] text-base";
// Normas internacionales ................................................

export const unionNormasInternacionales: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "4",
    targetHandle: "2",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "1",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "1",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-5",
    source: "10",
    target: "50",
    sourceHandle: "3",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-6",
    source: "10",
    target: "60",
    sourceHandle: "2",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-7",
    source: "10",
    target: "70",
    sourceHandle: "2",
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
  {
    id: "e1-10",
    source: "10",
    target: "100",
    sourceHandle: "2",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-11",
    source: "10",
    target: "110",
    sourceHandle: "3",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-12",
    source: "10",
    target: "120",
    sourceHandle: "1",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
];
export const nodoNormasInternacionales: Node[] = [
  {
    id: "10",
    position: { x: 40, y: 450 },
    type: "Section",
    data: {
      nodo: 1,
      source: "",
      label: MENU[0].lista[0].nombre,
      labelTitle: "",
    },
    className: styleSeccion,
  },
  {
    id: "20",
    position: { x: -100, y: 320 },
    type: "Section",
    data: {
      nodo: 1,
      source: "bottom",
      label: "ISO/IEC 25010:2008",
      labelTitle: "Modelo de Calidad para Datos de Software",
      descripcion:
        "Establece un modelo que describe las características que los datos deben tener para ser considerados de alta calidad en el contexto de sistemas de software.",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 25012 define un modelo estructurado para la calidad de datos para entender qué características hacen que los datos sean de alta calidad.",
        },
        {
          img: imgFoco,
          descripcion:
            "Fomenta la mejora continua de la calidad de los datos ya que establece procesos para evaluar y mejorar la calidad de los datos a lo largo de su ciclo de vida.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "La aplicación de ISO/IEC 25012 permite a las organizaciones establecer prácticas efectivas para la gestión de datos, ayudando a prevenir problemas costosos relacionados con datos de baja calidad.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Define el alcance del proyecto y asegura la comprensión de las dimensiones de calidad relevantes y cómo aplicarlas en el proyecto.",
            ],
          },
          {
            nombre: "Evaluación Actual",
            info: [
              "Analiza los procesos actuales relacionados con la calidad del software e identifica cómo se evalúan las características de calidad actualmente.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Define e implementa procesos específicos para abordar las características de calidad y alinea los procesos del proyecto.",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Monitorea los indicadores clave de calidad para cada característica, asegurándose de que se están cumpliendo los objetivos definidos.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Asegura que los procesos se hayan implementado correctamente y permite identificar mejoras necesarias antes de una evaluación externa.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Valida el cumplimiento total con la norma mediante revisiones finales y pruebas basadas en métricas predefinidas para cada característica de calidad.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad de Evaluación de Calidad",
            info: [
              "La norma define múltiples características de calidad y subcaracterísticas, lo que puede ser difícil de medir e interpretar de manera consistente, especialmente para equipos sin experiencia en métricas de calidad.",
            ],
            ejemplo: [
              "Un equipo de desarrollo en una empresa fintech podría enfrentar problemas para medir atributos como mantenibilidad y portabilidad debido a la falta de métricas específicas o herramientas adecuadas.",
            ],
          },
          {
            nombre: "Falta de Herramientas Estandarizadas",
            info: [
              "Aunque se define un marco general para evaluar la calidad del software, no se proporcionan herramientas específicas, lo que obliga a las organizaciones a investigar o desarrollar sus propias soluciones.",
            ],
            ejemplo: [
              "Una universidad que desarrolla software educativo podría tener que crear sus propios métodos de evaluación para la calidad funcional y la usabilidad debido a la falta de herramientas accesibles.",
            ],
          },
          {
            nombre: "Costos Asociados con la Implementación",
            info: [
              "La implementación de un modelo de calidad conforme a la norma puede implicar altos costos en consultoría, formación y adquisición de herramientas especializadas.",
            ],
            ejemplo: [
              "Una startup de inteligencia artificial podría posponer la adopción del estándar debido a los costos asociados con la contratación de especialistas en evaluación de calidad.",
            ],
          },
          {
            nombre: "Falta de Conocimiento en la Organización",
            info: [
              "La interpretación adecuada de las características de calidad y su aplicación práctica requiere personal capacitado, lo cual puede no estar disponible en todas las organizaciones.",
            ],
            ejemplo: [
              "Un proveedor de servicios de software en Perú podría enfrentarse a problemas debido a la falta de personal capacitado en modelos de calidad como ISO/IEC 25010.",
            ],
          },
          {
            nombre: "Adaptación a Contextos Específicos",
            info: [
              "La norma es genérica y abarca una amplia gama de tipos de software, lo que puede hacer difícil su adaptación a contextos o industrias específicas.",
            ],
            ejemplo: [
              "Una empresa del sector salud que desarrolla software para registros médicos electrónicos podría necesitar personalizar los lineamientos del estándar para cumplir con las normativas regulatorias específicas del sector.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso25000.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso25000.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: 570, y: 150 },
    type: "Section",
    data: {
      nodo: 1,
      source: "bottom",
      label: "ISO/IEC 25040:2011",
      descripcion:
        "Estándar que proporciona directrices para la evaluación de la calidad de productos de software mediante el uso de un enfoque definido en la serie ISO 25000 (SQuaRE).",
      labelTitle: "Evaluación de la Calidad de Productos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 25040 proporciona directrices sobre qué métricas utilizar para medir aspectos como funcionalidad, usabilidad y eficiencia del software.",
        },
        {
          img: imgFoco,
          descripcion:
            "Está alineada con ISO/IEC 25010, utiliza su modelo de calidad como base para evaluar, asegurando coherencia en la medición de la calidad del software.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "ISO/IEC 25040 promueve la participación de múltiples partes interesadas, involucra a diferentes interesados en el proceso de evaluación, asegurando que se consideren diversas perspectivas sobre la calidad.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Identifica el contexto y propósito de la evaluación de calidad, incluyendo los criterios de calidad relevantes para el software a evaluar.",
            ],
          },
          {
            nombre: "Definición de los Requisitos de Calidad",
            info: [
              "Documentar los requisitos de calidad del software.",
              "Los objetivos de evaluación deben alinearse con las expectativas del cliente.",
            ],
          },
          {
            nombre: "Planificación de la Evaluación",
            info: [
              "Desarrollar un plan de evaluación que detalle métricas para medir la calidad.",
              "Proporciona un enfoque sistemático asegurando que cada etapa esté definida.",
            ],
          },
          {
            nombre: "Realización de la Evaluación",
            info: [
              "Ejecuta las actividades de evaluación aplicando las métricas definidas para medir las características de calidad, como fiabilidad, eficiencia y mantenibilidad.",
            ],
          },
          {
            nombre: "Validación y Verificación de Resultados",
            info: [
              "Compara los resultados obtenidos con los criterios de aceptación establecidos.",
              "Asegura la alineación de los resultados con las expectativas iniciales.",
            ],
          },
          {
            nombre: "Informe de Evaluación",
            info: [
              "Proporciona una base formal para la toma de decisiones relacionadas con el software evaluado.",
            ],
          },
          {
            nombre: "Seguimiento y Mejora Continua",
            info: [
              "Implementa acciones correctivas o preventivas basadas en las recomendaciones del informe de evaluación.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad del Proceso de Evaluación",
            info: [
              "La norma describe un proceso estructurado para la evaluación de la calidad del software, que puede ser difícil de implementar completamente sin experiencia previa en modelos similares.",
            ],
            ejemplo: [
              "Una empresa de desarrollo de videojuegos podría tener dificultades para documentar y estructurar adecuadamente las fases de evaluación requeridas por la norma.",
            ],
          },
          {
            nombre: "Demanda de Recursos Especializados",
            info: [
              "El proceso de evaluación requiere la participación de evaluadores capacitados y herramientas adecuadas, lo que puede ser una limitación para organizaciones con recursos limitados.",
            ],
            ejemplo: [
              "Un pequeño equipo de desarrollo freelance podría no contar con los recursos necesarios para contratar expertos en evaluación de calidad.",
            ],
          },
          {
            nombre: "Costos de Implementación y Seguimiento",
            info: [
              "El seguimiento de las recomendaciones de evaluación y el ajuste de los procesos internos pueden generar costos significativos para las empresas, especialmente en sectores con márgenes reducidos.",
            ],
            ejemplo: [
              "Una empresa de software que opera con presupuestos ajustados podría encontrar el proceso de seguimiento de las evaluaciones demasiado oneroso.",
            ],
          },
          {
            nombre: "Resistencia Organizacional",
            info: [
              "La implementación de las recomendaciones puede encontrarse con resistencia de los equipos internos, especialmente si implica cambios significativos en los procesos existentes.",
            ],
            ejemplo: [
              "Un equipo de desarrollo acostumbrado a metodologías ágiles podría resistirse a adoptar pasos adicionales de documentación y evaluación.",
            ],
          },
          {
            nombre: "Falta de Claridad en la Personalización",
            info: [
              "Aunque la norma es genérica, adaptarla a las particularidades de una organización o proyecto puede ser desafiante sin una guía más específica.",
            ],
            ejemplo: [
              "Una empresa que desarrolla aplicaciones móviles podría tener dificultades para ajustar los lineamientos del estándar a las necesidades rápidas de su ciclo de desarrollo.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso2540_2011.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso2540_2011.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "40",
    type: "Section",
    position: { x: 380, y: 320 },
    data: {
      nodo: 1,
      label: "ISO/IEC 25010:2011",
      descripcion:
        "Estándar que define un modelo de calidad de software estructurado en dos dimensiones: características de calidad del producto y características de calidad en el uso.",
      labelTitle: "Modelo de Calidad para Productos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 25010 se puede aplicar tanto durante el desarrollo como en la evaluación de software ya en uso.",
        },
        {
          img: imgFoco,
          descripcion:
            "Esta norma es una evolución de la ISO/IEC 9126, pero amplía y detalla aún más las características y subcaracterísticas de calidad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Su enfoque en la experiencia del usuario y en el desempeño técnico lo hace útil en industrias donde la seguridad y confiabilidad son críticas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Estudia las características de calidad definidas y determina su relevancia para el proyecto.",
            ],
          },
          {
            nombre: "Evaluación Actual",
            info: [
              "Analiza los procesos de prueba existentes, herramientas utilizadas, cobertura actual de pruebas y defectos reportados.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Configura procesos como planeación de pruebas, diseño de pruebas y ejecución de pruebas.",
            ],
          },
          {
            nombre: "Documentación de Procesos",
            info: [
              "Estructura la documentación exigida por la norma, como planes de prueba, especificaciones de casos de prueba, informes y métricas de calidad.",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Supervisa métricas de calidad como la cobertura de pruebas, tiempo de ejecución, defectos detectados y resolución de incidencias.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Revisa los procesos y resultados de las pruebas para verificar su conformidad con la norma y permite detectar desviaciones antes de la evaluación final.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Valida que los procesos de prueba cumplen completamente con los estándares y preparar el sistema para auditorías externas o certificaciones.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad de las Características de Calidad",
            info: [
              "La norma define ocho características principales de calidad con subcaracterísticas adicionales, lo que puede ser difícil de comprender e implementar en proyectos con limitaciones de tiempo y recursos.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que trabaja en una aplicación de comercio electrónico podría tener dificultades para evaluar características como confiabilidad y seguridad de forma efectiva.",
            ],
          },
          {
            nombre: "Evaluación Subjetiva de Algunas Características",
            info: [
              "Algunas características, como la usabilidad, pueden ser subjetivas y depender de las percepciones del usuario final, lo que dificulta una evaluación objetiva y estandarizada.",
            ],
            ejemplo: [
              "Una startup que desarrolla software educativo podría recibir opiniones contradictorias de los usuarios al evaluar la usabilidad del producto.",
            ],
          },
          {
            nombre: "Limitaciones en la Adaptación a Proyectos Específicos",
            info: [
              "La norma está diseñada para ser aplicable a una amplia gama de software, pero su personalización a contextos específicos puede no ser intuitiva sin orientación adicional.",
            ],
            ejemplo: [
              "Una empresa del sector financiero podría enfrentar desafíos para adaptar los lineamientos de seguridad y desempeño a sus sistemas críticos de alta transacción.",
            ],
          },
          {
            nombre: "Demanda de Conocimientos Técnicos Especializados",
            info: [
              "La implementación de la norma requiere personal con experiencia en modelos de calidad, así como en métricas y herramientas de evaluación, lo que puede ser una barrera para equipos sin formación especializada.",
            ],
            ejemplo: [
              "Un equipo de desarrollo pequeño en Perú podría no contar con los recursos para capacitar a su personal en métricas avanzadas de calidad.",
            ],
          },
          {
            nombre: "Costos de Evaluación y Certificación",
            info: [
              "Los procesos de evaluación continua y certificación pueden implicar altos costos en términos de tiempo, herramientas y consultoría externa, lo que puede ser prohibitivo para empresas pequeñas.",
            ],
            ejemplo: [
              "Una pyme en el sector de software de gestión empresarial podría priorizar otras inversiones debido a los costos elevados de certificación bajo esta norma.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso25010_2011.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso25010_2011.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "50",
    position: { x: 570, y: 700 },
    type: "Section",
    data: {
      nodo: 1,
      label: "ISO/IEC 25012:2008",
      descripcion:
        "Establece un modelo que describe las características que los datos deben tener para ser considerados de alta calidad en el contexto de sistemas de software.",
      labelTitle: "Modelo de Calidad para Datos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 25012 define un modelo estructurado para la calidad de datos para entender qué características hacen que los datos sean de alta calidad.",
        },
        {
          img: imgFoco,
          descripcion:
            "Fomenta la mejora continua de la calidad de los datos ya que establece procesos para evaluar y mejorar la calidad de los datos a lo largo de su ciclo de vida.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "La aplicación de ISO/IEC 25012 permite a las organizaciones establecer prácticas efectivas para la gestión de datos, ayudando a prevenir problemas costosos relacionados con datos de baja calidad.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Identificación del Contexto de los Datos",
            info: [
              "Determina el propósito y alcance de los datos que serán evaluados.",
              "Garantiza que las actividades se enfoquen en los objetivos del negocio.",
            ],
          },
          {
            nombre: "Definición de los Requisitos de Calidad de los Datos",
            info: [
              "Asegura que los requisitos sean medibles y alineados con las necesidades del usuario.",
            ],
          },
          {
            nombre: "Planificación del Proceso de Evaluación",
            info: [
              "Diseña un plan que incluya métodos de recolección de datos, herramientas para medir la calidad y recursos necesarios para la implementación.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Documenta procesos clave según las áreas definidas (gestión de requisitos, calidad, etc.) y establece roles y responsabilidades para cada etapa.",
            ],
          },
          {
            nombre: "Capacitación",
            info: [
              "Organiza sesiones de formación sobre CMMI.",
              "Proporciona recursos prácticos como guías y herramientas.",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Establece indicadores clave (KPIs) para medir avances.",
              "Revisa regularmente los procesos implementados.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Realiza auditorías periódicas para verificar que cumplen los requisitos de SGSI.",
              "Permite realizar mejoras antes de una auditoría externa.",
            ],
          },
          {
            nombre: "Certificación o Evaluación Externa",
            info: [
              "Realiza auditorías internas utilizando listas de verificación.",
              "Recopila retroalimentación y ajustar procesos según sea necesario.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Contrata evaluadores externos si es necesario (e.g., SCAMPI).",
              "Revisa resultados e identificar oportunidades para mejoras futuras.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Dificultad para Medir la Calidad de los Datos",
            info: [
              "La norma define 15 características de calidad de datos, lo que puede ser difícil de medir de manera objetiva, especialmente para organizaciones que no tienen herramientas adecuadas para evaluar sus datos.",
            ],
            ejemplo: [
              "Una empresa de marketing digital podría encontrar complicado evaluar la exactitud y consistencia de sus datos de clientes sin herramientas avanzadas de análisis de datos.",
            ],
          },
          {
            nombre: "Altos Requerimientos de Recursos",
            info: [
              "La implementación de un modelo de calidad de datos conforme a la norma puede requerir personal especializado y herramientas específicas, lo cual no siempre está disponible en organizaciones pequeñas.",
            ],
            ejemplo: [
              "Un hospital rural que desea mejorar la calidad de sus registros médicos podría enfrentar desafíos debido a la falta de personal capacitado y sistemas modernos de gestión de datos.",
            ],
          },
          {
            nombre: "Costos de Implementación",
            info: [
              "Implementar prácticas para cumplir con las características de calidad de datos definidas en la norma puede ser costoso, considerando los gastos en auditorías, software y capacitación.",
            ],
            ejemplo: [
              "Una empresa minorista podría considerar costoso mejorar la accesibilidad y trazabilidad de sus datos debido a la necesidad de actualizar sus sistemas de información.",
            ],
          },
          {
            nombre:
              "Falta de Claridad en la Adaptación a Contextos Específicos",
            info: [
              "La norma es genérica y está diseñada para diferentes industrias, lo que puede dificultar su personalización a necesidades específicas sin orientación adicional.",
            ],
            ejemplo: [
              "Una institución gubernamental en Perú podría necesitar adaptar los principios de la norma para ajustarlos a su marco legal y regulatorio local.",
            ],
          },
          {
            nombre: "Resistencia Organizacional",
            info: [
              "Los cambios requeridos para cumplir con los lineamientos de calidad de datos pueden enfrentar resistencia de los empleados, especialmente si los cambios impactan directamente sus tareas cotidianas.",
            ],
            ejemplo: [
              "Un equipo de ventas podría resistirse a implementar procesos adicionales para asegurar la calidad de los datos por considerarlos como una carga extra en su flujo de trabajo.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso25012_2008.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso25012_2008.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "60",
    position: { x: -100, y: 560 },
    type: "Section",
    data: {
      nodo: 1,
      label: "ISO/IEC 27001",
      descripcion:
        "Estándar enfocado en la evaluación de procesos de software, buscando mejorar la calidad y efi͏cacia ͏de los proce͏sos en desarrollo de softwa͏re y sistemas de͏ TI.",
      labelTitle: "Sistema de Gestión de Seguridad de la Información (SGSI)",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 27001 ayuda a gestionar riesgos de seguridad implementando un Sistema de Gestión de Seguridad de la Información (SGSI) que protege los datos sensibles.",
        },
        {
          img: imgFoco,
          descripcion:
            "Para obtener la certificación, se debe pasar por una auditoría externa que evalúa la efectividad de su SGSI, un proceso que valida su compromiso con la seguridad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "ISO/IEC 27001 tiene un enfoque de mejora continua, a través del ciclo PDCA (Planificar-Hacer-Verificar-Actuar) asegura que el sistema de gestión de seguridad evolucione constantemente.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Define el alcance del Sistema de Gestión de Seguridad de la Información (SGSI).",
              "Asegura la alineación con los requisitos y los objetivos de seguridad.",
            ],
          },
          {
            nombre: "Evaluación de Riesgos",
            info: [
              "Realiza un análisis de riesgos mediante la identificación de amenazas, vulnerabilidades y su impacto en la información.",
            ],
          },
          {
            nombre: "Diseño del SGSI",
            info: [
              "Establece políticas, procedimientos y controles específicos, como control de acceso, gestión de incidentes de seguridad, cifrado y protección de datos.",
            ],
          },
          {
            nombre: "Implementación de Controles",
            info: [
              "Implementa controles diseñados para mitigar los riesgos identificados.",
              "Asegura que las medidas de seguridad mitiguen riesgos reales.",
            ],
          },
          {
            nombre: "Capacitación y Concienciación",
            info: [
              "Realiza capacitaciones acerca de las políticas y controles implementados.",
              "Involucra a los usuarios finales en el cumplimiento de los objetivos del SGSI.",
            ],
          },
          {
            nombre: "Monitorización y Seguimiento",
            info: [
              "Supervisa las métricas clave de seguridad, como intentos de acceso no autorizado, incidentes de seguridad detectados y cumplimiento de políticas.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Realiza auditorías periódicas para verificar que cumplen los requisitos de SGSI.",
              "Permite realizar mejoras antes de una auditoría externa.",
            ],
          },
          {
            nombre: "Certificación o Evaluación Externa",
            info: [
              "Contrata a un organismo externo para realizar la auditoría de certificación.",
              "El SGSI verificado refuerza la confianza de clientes y socios.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Requerimientos de Recursos y Tiempo",
            info: [
              "Implementar un Sistema de Gestión de Seguridad de la Información (SGSI) conforme a la norma requiere recursos significativos, incluyendo tiempo, personal especializado y herramientas adecuadas.",
            ],
            ejemplo: [
              "Una pyme en el sector de comercio electrónico podría enfrentar dificultades para asignar recursos adicionales para implementar y mantener el SGSI mientras opera con un equipo reducido.",
            ],
          },
          {
            nombre: "Complejidad de Documentación y Procesos",
            info: [
              "La norma exige la creación y mantenimiento de documentación extensa, incluyendo políticas, procedimientos, evaluaciones de riesgos y registros de auditoría, lo que puede ser abrumador para organizaciones pequeñas.",
            ],
            ejemplo: [
              "Un proveedor de servicios tecnológicos podría encontrar desafiante documentar todas las políticas necesarias para cumplir con la norma.",
            ],
          },
          {
            nombre: "Resistencia al Cambio Organizacional",
            info: [
              "La implementación de la norma puede requerir cambios significativos en los procesos operativos y culturales, lo que podría generar resistencia de los empleados y equipos internos.",
            ],
            ejemplo: [
              "En una empresa de manufactura, los empleados podrían resistirse a nuevas políticas de seguridad por considerarlas una carga administrativa adicional.",
            ],
          },
          {
            nombre: "Costos Elevados de Certificación",
            info: [
              "Los costos asociados con las auditorías externas, la certificación inicial y el mantenimiento de la certificación pueden ser prohibitivos, especialmente para pequeñas empresas y startups.",
            ],
            ejemplo: [
              "Una startup tecnológica en Perú podría priorizar otras áreas de inversión debido a los altos costos de certificación ISO/IEC 27001.",
            ],
          },
          {
            nombre: "Dificultades en la Gestión de Riesgos",
            info: [
              "Realizar una evaluación exhaustiva de riesgos y definir controles adecuados puede ser complejo sin herramientas especializadas y personal capacitado.",
            ],
            ejemplo: [
              "Una institución educativa podría carecer de experiencia para identificar y mitigar riesgos relacionados con la información de los estudiantes y empleados.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso27001.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso27001.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "70",
    position: { x: -300, y: 700 },
    type: "Section",
    data: {
      nodo: 1,
      label: "ISO/IEC 15504 (SPICE)",
      descripcion:
        "Estándar enfocado en la evaluación de procesos de software, buscando mejorar la calidad y efi͏cacia ͏de los proce͏sos en desarrollo de softwa͏re y sistemas de͏ TI.",
      labelTitle: "Evaluación de Procesos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 15504 ayuda a identificar el nivel de madurez de los procesos de una organización, facilitando la mejora continua en el desarrollo de software.",
        },
        {
          img: imgFoco,
          descripcion:
            "ISO/IEC 15504 mejora la previsibilidad y consistencia de los procesos. Esto contribuye a reducir riesgos y mejorar la calidad del producto final.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "ISO/IEC 15504 incluye una metodología específica de evaluación. Además, proporciona guías para realizar evaluaciones de procesos, generando informes detallados que permiten tomar decisiones de mejora.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Definición del Alcance del Proceso",
            info: [
              "Determina los procesos organizacionales que serán evaluados y mejorados.",
              "Garantiza que el enfoque esté alineado con los objetivos de evaluación.",
            ],
          },
          {
            nombre: "Identificación de Modelos de Referencia",
            info: [
              "Selecciona un modelo de referencia de procesos para comparar los procesos actuales con buenas prácticas.",
            ],
          },
          {
            nombre: "Evaluación del Estado Actual de los Procesos",
            info: [
              "Identifica las brechas entre los procesos actuales y los niveles deseados de capacidad.",
            ],
          },
          {
            nombre: "Priorización y Planificación de Mejoras",
            info: [
              "Prioriza los procesos más críticos y definir un plan de mejora basado en las debilidades identificadas.",
            ],
          },
          {
            nombre: "Implementación de Mejoras",
            info: [
              "Realiza cambios en los procesos identificados, incorporando prácticas óptimas basadas en modelos de referencia seleccionados.",
            ],
          },
          {
            nombre: "Seguimiento y Re-evaluación",
            info: [
              "Garantiza que los procesos evolucionen continuamente y se mantengan alineados con los objetivos del negocio.",
            ],
          },
          {
            nombre: "Certificación",
            info: [
              "Aumenta la credibilidad y competitividad de la organización ya que evidencia de procesos maduros para clientes o socios.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad en la Evaluación de Procesos",
            info: [
              "La norma utiliza un modelo de evaluación basado en niveles de madurez y capacidad, lo que puede ser complejo de interpretar y aplicar para equipos sin experiencia previa en modelos de procesos.",
            ],
            ejemplo: [
              "Un equipo de desarrollo en una empresa de software en Perú podría encontrar difícil categorizar y evaluar sus procesos según los niveles de madurez definidos en la norma.",
            ],
          },
          {
            nombre: "Altos Requerimientos de Documentación",
            info: [
              "La implementación requiere una documentación exhaustiva para demostrar el cumplimiento de los procesos, lo que puede consumir tiempo y recursos significativos.",
            ],
            ejemplo: [
              "Una empresa pequeña podría considerar el esfuerzo de documentar cada proceso como una carga adicional que impacta sus operaciones diarias.",
            ],
          },
          {
            nombre: "Costos de Evaluación y Auditoría",
            info: [
              "Las evaluaciones de procesos y auditorías externas pueden implicar costos elevados, dificultando el acceso para empresas de tamaño pequeño y mediano.",
            ],
            ejemplo: [
              "Una startup tecnológica que busca mejorar su capacidad de desarrollo podría no tener los recursos para contratar evaluadores externos certificados.",
            ],
          },
          {
            nombre: "Resistencia al Cambio en los Equipos",
            info: [
              "Adoptar los principios de la norma puede requerir ajustes significativos en los procesos existentes, lo que puede generar resistencia por parte de los empleados.",
            ],
            ejemplo: [
              "En una empresa que desarrolla software a medida, los desarrolladores podrían resistirse a cambiar sus métodos establecidos por otros más estructurados.",
            ],
          },
          {
            nombre: "Adaptación a Contextos Específicos",
            info: [
              "La norma es genérica y está diseñada para diferentes tipos de industrias, lo que puede dificultar su personalización para contextos específicos o proyectos únicos.",
            ],
            ejemplo: [
              "Una empresa de servicios financieros podría enfrentar desafíos al adaptar los lineamientos de la norma a sus requisitos regulatorios específicos.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso15504.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso15504.tutorialVideo,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "80",
    position: { x: 450, y: 440 },
    type: "Section",
    data: {
      nodo: 1,
      label: "ISO/IEC 12207:2017",
      descripcion:
        "Define los procesos necesarios para la adquisición, desarrollo, operación, mantenimiento y eliminación de sistemas y productos de software, así como sus servicios asociados.",
      labelTitle: "Procesos del Ciclo de Vida del Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 12207 especifica las responsabilidades en cada fase, ayudando a los equipos a coordinarse mejor y evitar errores.",
        },
        {
          img: imgFoco,
          descripcion:
            "ISO/IEC 12207 organiza el ciclo de vida en 3 tipos de procesos: primarios, de apoyo y organizacionales para asegurar una gestión integral y eficiente.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Es aplicable a diferentes metodologías de desarrollo, tanto ágiles como tradicionales, gracias a su enfoque en procesos y adaptabilidad.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Definición del Alcance del Ciclo de Vida",
            info: [
              " Establece el alcance del ciclo de vida que se implementará, considerando: procesos primarios, procesos de soporte, procesos organizacionales.",
            ],
          },
          {
            nombre: "Personalización de los Procesos de la Norma",
            info: [
              "Adapta los procesos de la norma a las necesidades y estructura de la organización. Además, garantiza que los procesos sean aplicables y efectivos.",
            ],
          },
          {
            nombre: "Establecimiento de Roles y Responsabilidades",
            info: [
              "Asigna claramente los roles dentro de los procesos del ciclo de vida, como: gestor del proyecto, equipo de aseguramiento de calidad.",
            ],
          },
          {
            nombre: "Desarrollo de Planes de Ciclo de Vida",
            info: [
              "Crea planes específicos para cada proceso involucrado, como: plan de desarrollo del software, plan de aseguramiento de calidad.",
            ],
          },
          {
            nombre: "Implementación de Procesos",
            info: [
              "Ejecuta los procesos definidos en la norma según el plan elaborado y asegura que las actividades sean consistentes con los estándares establecidos.",
            ],
          },
          {
            nombre: "Evaluación y Verificación de Procesos",
            info: [
              "Monitorea y mide la efectividad de los procesos implementados mediante auditorías, revisiones y pruebas.",
            ],
          },
          {
            nombre: "Mejora Continua",
            info: [
              "Analiza los resultados de la implementación para identificar áreas de mejora, ajustando procesos en futuras aplicaciones del ciclo de vida.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Amplitud y Complejidad de la Norma",
            info: [
              "La ISO/IEC 12207:2017 abarca un amplio espectro de procesos que pueden ser difíciles de implementar completamente, especialmente para organizaciones con poca experiencia en normativas internacionales.",
            ],
            ejemplo: [
              "Una pequeña empresa de software podría sentirse abrumada al intentar cumplir con los procesos definidos en la norma, dado que muchos de ellos pueden no ser aplicables o viables en su contexto.",
            ],
          },
          {
            nombre: "Requerimientos de Recursos Significativos",
            info: [
              "La implementación de la norma requiere un equipo capacitado y recursos especializados para llevar a cabo las actividades de planificación, seguimiento y evaluación.",
            ],
            ejemplo: [
              "Una universidad que busca aplicar la norma para sus sistemas de gestión interna podría necesitar invertir en la formación de su personal y en herramientas que superan su presupuesto disponible.",
            ],
          },
          {
            nombre: "Costos Elevados",
            info: [
              "Los costos asociados con la certificación, las auditorías externas y la formación del personal pueden ser elevados para pequeñas y medianas empresas.",
            ],
            ejemplo: [
              "Una startup tecnológica podría abandonar la implementación debido al presupuesto limitado y la prioridad de asignar recursos a otras áreas clave del negocio.",
            ],
          },
          {
            nombre: "Resistencia al Cambio",
            info: [
              "Cambiar procesos establecidos puede generar rechazo entre los equipos, dificultando la adopción de la norma.",
            ],
            ejemplo: [
              "En una empresa, los trabajadores podrían mostrar resistencia al cambio por miedo a la complejidad o la posible pérdida de control en sus tareas habituales.",
            ],
          },
          {
            nombre: "Adaptación a Contextos Específicos",
            info: [
              "Aunque la norma es flexible, ajustarla a las particularidades de una industria o sector puede ser un desafío significativo.",
            ],
            ejemplo: [
              "Una empresa agrícola podría necesitar adaptar los lineamientos de la norma para ajustarse a las características únicas de su sector, enfrentando incertidumbre sobre si las adaptaciones cumplen con los estándares requeridos.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso12207.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso12207.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "90",
    position: { x: -210, y: 440 },

    data: {
      nodo: 1,
      label: "ISO/IEC 25030:2019",
      descripcion:
        "Proporciona directrices para definir y especificar los requisitos de calidad del software. Permite asegurar que el software  cumpla con las necesidades antes de su implementación.",
      labelTitle: "Requisitos de Calidad para Productos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Esta norma enfatiza la importancia de definir claramente los requisitos de calidad desde el inicio, asegurando un proceso de desarrollo más efectivo.",
        },
        {
          img: imgFoco,
          descripcion:
            "ISO/IEC 25030 permite adaptar los requisitos de calidad según el tipo de proyecto y necesidades del cliente, haciendo el software más relevante y útil.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Esta norma es parte de la serie SQuaRE y complementa normas como ISO/IEC 25010, facilitando una gestión de calidad completa y coherente.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Analizar los requerimientos de la norma y definir el alcance.",
              "Establece las bases para empezar cualquier implementación de norma.",
            ],
          },
          {
            nombre: "Evaluación Actual",
            info: [
              "Diagnostica los procesos existentes relacionados con la captura, documentación y gestión de requisitos de calidad.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Establece procesos específicos para cumplir con los lineamientos de la norma (por ejemplo, establecer métricas claras para los requisitos de calidad).",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Monitorea el cumplimiento de los nuevos procesos implementados, registra datos relevantes y asegura que los procesos se alineen con la norma.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Revisa formalmente si los procesos cumplen con los lineamientos de la norma y detectar áreas de mejora.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Verificar la completa alineación con la norma y documentar los resultados finales.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Definición de Requisitos Claros",
            info: [
              "La norma establece un enfoque estructurado para la evaluación de la calidad del software, pero requiere que los requisitos de calidad sean bien definidos desde el inicio, lo que puede ser difícil en proyectos con incertidumbre.",
            ],
            ejemplo: [
              "En una empresa de desarrollo de aplicaciones móviles, los requisitos de calidad no siempre están claros desde el inicio del proyecto, lo que dificulta aplicar la norma de manera efectiva.",
            ],
          },
          {
            nombre: "Recursos y Capacitación",
            info: [
              "Implementar los criterios de calidad establecidos por la norma puede requerir una inversión significativa en capacitación y en la contratación de expertos para asegurar el cumplimiento.",
            ],
            ejemplo: [
              "Una empresa de consultoría podría necesitar contratar personal con experiencia en la aplicación de la norma ISO/IEC 25030 para implementar los procesos adecuados.",
            ],
          },
          {
            nombre: "Costos de Implementación y Auditoría",
            info: [
              "La norma puede implicar costos elevados de implementación y auditoría para empresas, especialmente las pequeñas y medianas, que carecen de los recursos necesarios.",
            ],
            ejemplo: [
              "Una startup en Perú podría verse obligada a asignar recursos limitados a la implementación de la norma, sacrificando otros aspectos clave de su negocio.",
            ],
          },
          {
            nombre: "Resistencia al Cambio en la Cultura Organizacional",
            info: [
              "El cambio hacia una cultura centrada en la calidad del software puede encontrar resistencia en equipos acostumbrados a procesos menos estructurados o menos exigentes.",
            ],
            ejemplo: [
              "Un equipo de desarrollo podría sentirse incómodo con la necesidad de aplicar métricas rigurosas de calidad a su flujo de trabajo diario.",
            ],
          },
          {
            nombre: "Adaptación a Contextos Específicos de la Industria",
            info: [
              "A pesar de la flexibilidad de la norma, adaptarla a contextos o industrias específicas puede ser complicado debido a las particularidades de cada sector.",
            ],
            ejemplo: [
              "Una empresa de tecnología financiera podría necesitar adaptar los lineamientos de la norma a los requisitos regulatorios específicos de la industria bancaria.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso25030_2019.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso25030_2019.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "100",
    position: { x: 140, y: 640 },
    data: {
      nodo: 1,
      label: "ISO/IEC 29119",
      descripcion:
        "Serie de estándares internacionales que proporciona un marco detallado para los procesos, documentación y técnicas de prueba de software.",
      labelTitle: "Estándares Internacionales para Pruebas de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 29119 se puede aplicar en diversas metodologías de desarrollo, incluyendo enfoques ágiles y tradicionales, gracias a su flexibilidad y estructura modular.",
        },
        {
          img: imgFoco,
          descripcion:
            "ISO/IEC 29119 incluye técnicas específicas para pruebas de software, describe enfoques detallados, como análisis de valor límite, para garantizar una cobertura óptima y la detección de errores.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "ISO/IEC 29119 permite pruebas más transparentes y auditables, su enfoque estandarizado facilita la revisión de los procesos de pruebas, promoviendo la transparencia y la rendición de cuentas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Revisa estándares como conceptos, procesos, documentación, técnicas y evaluación) y define el alcance del proceso de pruebas.",
            ],
          },
          {
            nombre: "Evaluación Actual",
            info: [
              "Analiza los procesos de prueba existentes, herramientas utilizadas, cobertura actual de pruebas y defectos reportados.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Configura procesos como planeación, diseño y ejecución de pruebas; y alinea las actividades de prueba con los lineamientos normativos.",
            ],
          },
          {
            nombre: "Documentación de Procesos",
            info: [
              "Estructura la documentación exigida por la norma, como planes de prueba, especificaciones de casos de prueba, informes y métricas de calidad.",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Supervisa métricas de calidad como la cobertura de pruebas, tiempo de ejecución, defectos detectados y resolución de incidencias.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Permite detectar desviaciones antes de la evaluación final y realizar los ajustes necesarios.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Valida que los procesos de prueba cumplen completamente con los estándares y prepara el sistema para auditorías externas o certificaciones.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad en la Implementación de Procesos de Pruebas",
            info: [
              "La norma establece procesos detallados para la realización de pruebas de software, lo que puede ser complejo y costoso de implementar para organizaciones con pocos recursos.",
            ],
            ejemplo: [
              "Una pequeña empresa de desarrollo de software podría enfrentar dificultades para implementar todos los procesos y técnicas de prueba establecidos por la norma debido a la falta de personal especializado.",
            ],
          },
          {
            nombre: "Requerimientos de Documentación y Formalismo",
            info: [
              "La norma exige una amplia documentación y formalización de los procesos de prueba, lo cual puede ser visto como una carga administrativa para equipos ágiles y dinámicos.",
            ],
            ejemplo: [
              "En una empresa que utiliza metodologías ágiles, los desarrolladores podrían ver los requisitos de documentación como una distracción de sus tareas de codificación.",
            ],
          },
          {
            nombre: "Resistencia al Cambio y Adaptación",
            info: [
              "La implementación de los procesos de prueba establecidos por la norma puede generar resistencia, especialmente en organizaciones que ya tienen procesos establecidos que no se alinean con los definidos en la norma.",
            ],
            ejemplo: [
              "En una empresa de desarrollo rápido, los empleados podrían resistirse a los cambios propuestos en los procesos de prueba, prefiriendo los enfoques más informales que ya utilizan.",
            ],
          },
          {
            nombre: "Costos de Capacitación y Herramientas",
            info: [
              "La implementación de la norma puede requerir inversiones adicionales en capacitación del personal y herramientas de prueba especializadas, lo cual puede resultar costoso.",
            ],
            ejemplo: [
              "Una empresa que opera con un presupuesto limitado podría no estar dispuesta a invertir en herramientas y formación adicional para cumplir con los requisitos de la norma.",
            ],
          },
          {
            nombre: "Aplicabilidad a Proyectos Pequeños",
            info: [
              "La norma está diseñada para una amplia gama de proyectos, pero puede ser demasiado compleja y formal para proyectos pequeños o menos complejos, lo que podría hacer que su implementación no sea rentable.",
            ],
            ejemplo: [
              "Un pequeño proyecto de desarrollo de una aplicación móvil podría no justificar la adopción de todos los procesos detallados de pruebas establecidos por la norma debido a su tamaño y alcance limitado.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso29119.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso29119.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "110",
    position: { x: 380, y: 560 },
    data: {
      nodo: 1,
      label: "CMMI",
      descripcion:
        "Evalúa la madurez y capacidad de los procesos dentro de una organización. Su objetivo es mejorar la calidad, eficiencia y efectividad en áreas de software y sistemas.",
      labelTitle: "Modelo Integrado de Madurez de Capacidades",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI clasifica los procesos en 5 niveles de madurez, esto permite evaluar y optimizar cada fase del ciclo de vida del proyecto.",
        },
        {
          img: imgFoco,
          descripcion:
            "Al alcanzar un nivel alto de madurez en CMMI, muchas empresas logran reducir el riesgo en proyectos y obtener resultados más predecibles. ",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Las organizaciones con certificación CMMI inspiran mayor confianza en la calidad y confiabilidad de sus servicios.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Preparación Inicial",
            info: [
              "Investiga sobre los niveles y áreas del modelo CMMI.",
              "Define el alcance: procesos clave que serán evaluados en tu proyecto.",
            ],
          },
          {
            nombre: "Evaluación Actual",
            info: [
              "Realiza un análisis de las prácticas actuales.",
              "Identifica brechas respecto a los niveles de madurez del CMMI.",
            ],
          },
          {
            nombre: "Definición de Objetivos",
            info: [
              "Establece objetivos claros, como mejora en calidad o eficiencia.",
              "Prioriza las áreas de mejora según su impacto en tu proyecto.",
            ],
          },
          {
            nombre: "Diseño e Implementación de Procesos",
            info: [
              "Documenta procesos clave según áreas definidas (gestión de requisitos, etc.).",
              "Establece roles y responsabilidades para cada etapa.",
            ],
          },
          {
            nombre: "Capacitación",
            info: [
              "Organiza sesiones de formación sobre CMMI.",
              "Proporciona recursos prácticos como guías y herramientas.",
            ],
          },
          {
            nombre: "Seguimiento y Control",
            info: [
              "Establece indicadores clave (KPIs) para medir avances.",
              "Revisa regularmente los procesos implementados.",
            ],
          },
          {
            nombre: "Auditoría Interna",
            info: [
              "Realiza auditorías internas utilizando listas de verificación.",
              "Recopila retroalimentación y ajustar procesos según sea necesario.",
            ],
          },
          {
            nombre: "Evaluación Final",
            info: [
              "Contrata evaluadores externos si es necesario (e.g., SCAMPI).",
              "Revisa resultados e identificar oportunidades para mejoras futuras.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad en la Implementación",
            info: [
              "Implementar CMMI de manera integral puede ser complejo, especialmente para organizaciones que recién adoptan modelos de madurez, debido a su amplitud y cobertura de diversos procesos y prácticas.",
            ],
            ejemplo: [
              "Una empresa pequeña podría tener dificultades para alinear sus procesos internos con los complejos requerimientos de CMMI, lo que podría generar retrasos en la implementación.",
            ],
          },
          {
            nombre: "Requerimientos de Recursos Significativos",
            info: [
              "Implementar CMMI demanda tiempo, personal capacitado y herramientas, lo que puede ser difícil para organizaciones con recursos limitados.",
            ],
            ejemplo: [
              "Una pequeña o mediana empresa (PyME) podría necesitar contratar consultores externos y capacitar a su personal, lo cual implica gastos adicionales.",
            ],
          },
          {
            nombre: "Costos Elevados",
            info: [
              "Obtener la certificación CMMI y las auditorías necesarias puede ser costoso, representando una barrera para organizaciones con presupuestos limitados, especialmente en economías en desarrollo.",
            ],
            ejemplo: [
              "Una organización en Perú podría enfrentar dificultades para financiar las auditorías externas y el proceso de certificación, lo que puede desincentivar la adopción de CMMI.",
            ],
          },
          {
            nombre: "Resistencia al Cambio",
            info: [
              "Implementar CMMI puede generar resistencia entre empleados y gerentes debido al cambio cultural y organizacional que implica.",
            ],
            ejemplo: [
              "En una empresa, los trabajadores podrían mostrar resistencia al cambio por miedo a la complejidad o la posible pérdida de control en sus tareas habituales.",
            ],
          },
          {
            nombre: "Falta de Experiencia Localizada",
            info: [
              "En algunas regiones o sectores, puede ser difícil encontrar expertos calificados en CMMI, lo que puede dificultar el proceso de implementación y evaluación.",
            ],
            ejemplo: [
              "Una empresa en una región rural podría tener problemas para contratar consultores locales con experiencia en CMMI, lo que podría alargar el proceso de implementación.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.cmmi.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.cmmi.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "120",
    position: { x: -300, y: 150 },
    data: {
      nodo: 1,
      label: "ISO/IEC 33000 Series",
      descripcion:
        "Estándar enfocado en la evaluación de procesos de software, buscando mejorar la calidad y efi͏cacia ͏de los proce͏sos en desarrollo de softwa͏re y sistemas de͏ TI.",
      labelTitle: "Gestión de la Capacidad de Procesos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "ISO/IEC 33000 permite clasificar los procesos en distintos niveles de madurez, ayudando a las organizaciones a planear mejoras graduales.",
        },
        {
          img: imgFoco,
          descripcion:
            "ISO/IEC 33000 no solo evalúa el estado actual de los procesos, sino que también impulsa el crecimiento hacia procesos más efectivos y eficientes a lo largo del tiempo.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "͏ISO/IEC 33000 permite una evaluación estandarizada de procesos por lo que permite que las organizaciones pueden comparar sus resultados con otras empresas de la industria para mejorar sus prácticas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Definición del Alcance de la Evaluación",
            info: [
              "Identifica las áreas o procesos que se evaluarán y mejorarán según las necesidades organizacionales.",
            ],
          },
          {
            nombre: "Selección del Modelo de Referencia de Procesos (PRM)",
            info: [
              "Elige un modelo PRM adecuado como referencia para la evaluación como: ISO/IEC 12207, ISO/IEC 29110.",
            ],
          },
          {
            nombre: "Configuración del Modelo de Evaluación de Procesos (PAM)",
            info: [
              "Personaliza el modelo PAM (Process Assessment Model) basado en el PRM, definiendo atributos medir: cumplimiento del proceso, resultados alcanzados.",
            ],
          },
          {
            nombre: "Realización de la Evaluación Inicial",
            info: [
              "Aplica el PAM configurado para evaluar el nivel actual de capacidad de los procesos en las áreas seleccionadas.",
            ],
          },
          {
            nombre: "Planificación de Mejoras",
            info: [
              "Diseña un plan centrado en cerrar las brechas detectadas como: priorización de procesos críticos, definición de acciones para mejorar atributos de proceso.",
            ],
          },
          {
            nombre: "Implementación de las Mejoras",
            info: [
              "Ejecuta las acciones planificadas, como: incorporar herramientas de automatización, redefinir roles o ajustar actividades del proceso.",
            ],
          },
          {
            nombre: "Evaluación Posterior y Monitoreo",
            info: [
              "Realiza una re-evaluación utilizando el mismo modelo PAM para medir el progreso y validar la efectividad de las mejoras implementadas.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad de Implementación",
            info: [
              "La amplitud de la norma abarca diversos modelos y metodologías, esto puede resultar abrumador para organizaciones que no cuentan con experiencia previa en estándares internacionales.",
            ],
            ejemplo: [
              "Una pequeña empresa de desarrollo de software en Perú podría enfrentar dificultades para interpretar y aplicar correctamente los lineamientos de la norma debido a la falta de conocimiento especializado.",
            ],
          },
          {
            nombre: "Requerimientos de Recursos",
            info: [
              "Implementar y mantener las prácticas definidas por la norma demanda tiempo, personal capacitado y herramientas específicas.",
            ],
            ejemplo: [
              "Una clínica que busca implementar la norma para mejorar sus procesos administrativos podría necesitar contratar expertos externos, lo que incrementa sus costos operativos.",
            ],
          },
          {
            nombre: "Costos Elevados",
            info: [
              "Los costos asociados con la certificación, las auditorías externas y la formación del personal pueden ser elevados para pequeñas y medianas empresas.",
            ],
            ejemplo: [
              "Una startup tecnológica podría abandonar la implementación debido al presupuesto limitado y la prioridad de asignar recursos a otras áreas clave del negocio.",
            ],
          },
          {
            nombre: "Resistencia al Cambio",
            info: [
              "Cambiar procesos establecidos puede generar rechazo entre los equipos, dificultando la adopción de la norma.",
            ],
            ejemplo: [
              "En una empresa, los trabajadores podrían mostrar resistencia al cambio por miedo a la complejidad o la posible pérdida de control en sus tareas habituales.",
            ],
          },
          {
            nombre: "Adaptación a Contextos Específicos",
            info: [
              "Aunque la norma es flexible, ajustarla a las particularidades de una industria o sector puede ser un desafío significativo.",
            ],
            ejemplo: [
              "Una empresa agrícola podría necesitar adaptar los lineamientos de la norma para ajustarse a las características únicas de su sector, enfrentando incertidumbre sobre si las adaptaciones cumplen con los estándares requeridos.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaUno.iso33000.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaUno.iso33000.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
];
// Estandares de calidad......................................................
export const unionEstandaresCalidad: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "4",
    targetHandle: "2",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "1",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "1",
    targetHandle: "4",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-5",
    source: "10",
    target: "50",
    sourceHandle: "3",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-6",
    source: "10",
    target: "60",
    sourceHandle: "2",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-7",
    source: "10",
    target: "70",
    sourceHandle: "2",
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
  {
    id: "e1-10",
    source: "10",
    target: "100",
    sourceHandle: "2",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-11",
    source: "10",
    target: "110",
    sourceHandle: "3",
    targetHandle: "1",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-12",
    source: "10",
    target: "120",
    sourceHandle: "1",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
];
export const nodoEstandaresCalidad: Node[] = [
  {
    id: "10",
    position: { x: 40, y: 450 },
    type: "Section",
    data: {
      nodo: 1,
      label: MENU[0].lista[1].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    type: "Section",
    position: { x: -100, y: 320 },
    data: {
      nodo: 1,
      label: "IEEE 829",
      descripcion:
        "Establece un conjunto de formatos y documentos para planificar, diseñar, ejecutar y reportar pruebas de software, asegurando un proceso de pruebas coherente y completo.",
      labelTitle: "Documentación de Pruebas de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "IEEE 829 ayuda a los equipos a mantener consistencia en la documentación de pruebas, mejorando la organización y eficiencia en el proceso.",
        },
        {
          img: imgFoco,
          descripcion:
            "Su énfasis en la documentación detallada es una ventaja para la trazabilidad, pero puede volverse una carga en proyectos ágiles donde se prioriza la rapidez y flexibilidad sobre la documentación exhaustiva.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "La documentación estructurada es útil para auditorías de calidad y para asegurar el cumplimiento de los requisitos y estándares del proyecto.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Análisis del Contexto y Requisitos",
            info: [
              "Identifica los objetivos de las pruebas, el alcance del sistema a probar y los requisitos documentales específicos.",
            ],
          },
          {
            nombre: "Planificación del Proceso de Documentación",
            info: [
              "Analiza los procesos actuales relacionados con la calidad del software e identifica cómo se evalúan las características de calidad actualmente.",
            ],
          },
          {
            nombre: "Creación de Plantillas Documentales",
            info: [
              "Diseña o adapta plantillas estándar para los documentos más relevantes: plan de pruebas, casos de prueba, informe de incidentes.",
            ],
          },
          {
            nombre: "Integración con el Proceso de Pruebas",
            info: [
              "Incorpora los documentos en el flujo de trabajo del equipo de pruebas, asigna responsables para llenar, revisar y mantener la documentación.",
            ],
          },
          {
            nombre: "Ejecución y Registro de Resultados",
            info: [
              "Documenta la ejecución de las pruebas y cualquier incidente encontrado utilizando: registro de pruebas, informes de incidentes.",
            ],
          },
          {
            nombre: "Revisión y Validación de Documentación",
            info: [
              "Revisa los documentos generados para garantizar que cumplen con los objetivos del estándar: revisión cruzada, validación.",
            ],
          },
          {
            nombre: "Cierre y Almacenamiento",
            info: [
              "Organiza los documentos generados y archiva de manera que puedan ser utilizados en futuras auditorías.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Altos Requerimientos de Documentación",
            info: [
              "La norma IEEE 829 establece una documentación extensa para las pruebas de software, lo cual puede ser visto como una carga administrativa, especialmente para equipos ágiles o con recursos limitados.",
            ],
            ejemplo: [
              "En una empresa que utiliza un enfoque ágil, los desarrolladores podrían resistirse a documentar en detalle todos los aspectos de las pruebas, considerándolo una tarea innecesaria que ralentiza el desarrollo.",
            ],
          },
          {
            nombre: "Rigidez en la Gestión de Pruebas",
            info: [
              "La norma propone un enfoque estructurado y formal para la gestión de las pruebas, lo que puede resultar menos flexible en entornos de desarrollo rápidos o cambiantes.",
            ],
            ejemplo: [
              "Una empresa con equipos pequeños que trabajan en ciclos cortos podría encontrar difícil adaptar los procedimientos rígidos de gestión de pruebas de IEEE 829 a su estilo de trabajo ágil y dinámico.",
            ],
          },
          {
            nombre: "Sobrecarga de Procesos para Proyectos Pequeños",
            info: [
              "La implementación de la norma puede ser excesiva para proyectos de menor escala, donde los beneficios de seguir todos los procesos establecidos pueden no justificar el esfuerzo y los costos.",
            ],
            ejemplo: [
              "Un equipo de desarrollo de una aplicación pequeña podría ver innecesario seguir todos los pasos detallados en la norma IEEE 829 para la documentación y gestión de pruebas.",
            ],
          },
          {
            nombre: "Resistencia al Cambio",
            info: [
              "La adopción de procesos de prueba formales puede ser un desafío para equipos acostumbrados a enfoques informales y flexibles, especialmente si ya tienen su propio conjunto de prácticas establecidas.",
            ],
            ejemplo: [
              "Un equipo de desarrollo con una cultura ágil podría sentirse incómodo al tener que adoptar una estructura de pruebas formal, resistiéndose a cambiar sus prácticas actuales.",
            ],
          },
          {
            nombre: "Capacitación y Recursos Necesarios",
            info: [
              "La implementación efectiva de IEEE 829 requiere que los equipos estén capacitados en sus procesos, lo que puede implicar un gasto adicional en tiempo y recursos.",
            ],
            ejemplo: [
              "Una empresa de software en expansión podría necesitar invertir en formación y herramientas para cumplir con los requerimientos de la norma, lo que podría ser costoso para una empresa pequeña.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE829.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE829.paginaOficial,
    },
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    type: "Section",
    position: { x: 570, y: 150 },
    data: {
      nodo: 1,
      label: "IEEE 730",
      descripcion:
        "Establece los requisitos para la creación de planes de aseguramiento de la calidad del software (SQA), con el propósito de que cumpla con los niveles de calidad deseados y con los requisitos especificados.",
      labelTitle: "Planificación y Aseguramiento de la Calidad del Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "IEEE 730 abarca desde los requisitos y el diseño hasta el mantenimiento, asegurando que la calidad esté presente en cada etapa del desarrollo.",
        },
        {
          img: imgFoco,
          descripcion:
            "Es compatible con otros estándares, como ISO 9001, y ayuda a cumplir con normativas y regulaciones en industrias con altos requisitos de calidad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Permite que las auditorías y revisiones de calidad sean más efectivas, al proporcionar una estructura clara y detallada de las actividades de aseguramiento de calidad.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial y Definición de Objetivos",
            info: [
              "Evalúa los procesos actuales y las prácticas de calidad existentes y define metas para garantizar la calidad del software.",
            ],
          },
          {
            nombre:
              "Desarrollo del Plan de Aseguramiento de Calidad del Software (SQAP)",
            info: [
              "Proporciona una guía estructurada para las actividades de aseguramiento de calidad.",
            ],
          },
          {
            nombre: "Implementación de Actividades de Aseguramiento de Calidad",
            info: [
              "Realiza actividades clave, como: revisiones y auditorías, pruebas de calidad, análisis de métricas.",
            ],
          },
          {
            nombre: "Supervisión y Control del Proceso de Calidad",
            info: [
              "Establece mecanismos para supervisar las actividades de calidad, asegurando el cumplimiento del SQAP.",
            ],
          },
          {
            nombre: "Gestión de Configuración y Documentación",
            info: [
              "Establece un proceso de gestión de configuración para controlar versiones, cambios y trazabilidad del software.",
            ],
          },
          {
            nombre: "Revisión y Mejora Continua del SQAP",
            info: [
              "Revisa periódicamente la efectividad del SQAP implementado, incorpora aprendizajes de auditorías previas y actualiza el plan según sea necesario.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad en la Gestión de Requisitos",
            info: [
              "La norma IEEE 730 establece un proceso detallado para la gestión de requisitos, lo que puede ser difícil de implementar en proyectos que requieren flexibilidad o cambios rápidos en los requisitos.",
            ],
            ejemplo: [
              "En un proyecto de software ágil, puede ser complicado seguir el proceso rígido de gestión de requisitos de IEEE 730, ya que los requisitos suelen cambiar rápidamente durante el ciclo de desarrollo.",
            ],
          },
          {
            nombre: "Requerimientos de Documentación Exhaustiva",
            info: [
              "La norma exige una documentación exhaustiva para el ciclo de vida de los requisitos, lo que puede ser una carga administrativa significativa, especialmente en proyectos pequeños o ágiles.",
            ],
            ejemplo: [
              "Un equipo de desarrollo de una aplicación móvil podría encontrar difícil justificar el tiempo y esfuerzo necesario para mantener la documentación detallada de los requisitos, como lo exige IEEE 730.",
            ],
          },
          {
            nombre: "Desafíos en la Adaptación a Proyectos Ágiles",
            info: [
              "IEEE 730 fue diseñado con un enfoque más tradicional, lo que puede hacer que su implementación sea un desafío en entornos ágiles donde los requisitos pueden evolucionar rápidamente y no siempre están documentados de manera formal.",
            ],
            ejemplo: [
              "Un equipo ágil que utiliza Scrum podría encontrar que los procesos establecidos por IEEE 730 no se alinean bien con su forma de trabajo, lo que hace difícil su adopción.",
            ],
          },
          {
            nombre: "Resistencia al Cambio Organizacional",
            info: [
              "La implementación de los procesos de gestión de requisitos definidos en la norma IEEE 730 puede generar resistencia, especialmente en organizaciones que ya tienen su propio conjunto de prácticas establecidas.",
            ],
            ejemplo: [
              "En una empresa donde los equipos están acostumbrados a un enfoque menos formal para la gestión de requisitos, podría haber resistencia al adoptar un proceso más estructurado como el propuesto por IEEE 730.",
            ],
          },
          {
            nombre: "Capacitación y Recursos",
            info: [
              "La norma requiere que el personal esté capacitado para gestionar los requisitos de acuerdo con los lineamientos establecidos, lo que puede generar una carga adicional de tiempo y recursos para las organizaciones.",
            ],
            ejemplo: [
              "Una pequeña empresa de desarrollo de software podría no tener los recursos para capacitar a su personal de manera efectiva en la norma IEEE 730, lo que dificultaría su implementación.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE730.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE730.paginaOficial,
    },
    className: styleText,
  },
  {
    id: "40",
    position: { x: 380, y: 320 },
    data: {
      nodo: 1,
      label: "IEEE 1012",
      descripcion:
        "Define las prácticas para la verificación y validación (V&V) de software durante su ciclo de vida, con el fin de asegurar que cumpla con los requisitos y necesidades del usuario.",
      labelTitle: "Verificación y Validación de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "IEEE 1012 se aplica a todo el ciclo de vida del software, desde la planificación hasta el mantenimiento, asegurando que cada fase cumpla con los criterios de calidad.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite ajustar la intensidad de las actividades de V&V dependiendo del nivel de riesgo del sistema (ej. un sistema médico vs. una aplicación empresarial).",
        },
        {
          img: imgPreguntas,
          descripcion:
            "IEEE 1012 se puede integrar con otros estándares como ISO 9001, CMMI o IEEE 730, proporcionando una base sólida para la calidad y la seguridad del software.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Planificación de Verificación y Validación (V&V)",
            info: [
              "Garantiza una estructura clara para coordinar actividades de V&V durante todo el proyecto.",
            ],
          },
          {
            nombre: "Especificación de Requisitos de V&V",
            info: [
              "Identifica los requisitos, diseño, código y documentación y define los elementos a verificar y validar para evitar ambigüedades.",
            ],
          },
          {
            nombre: "Verificación en Fases Tempranas del Ciclo de Vida",
            info: [
              "Detecta errores en las fases iniciales, reduciendo costos de corrección en etapas posteriores.",
            ],
          },
          {
            nombre: "Validación de Modelos y Prototipos",
            info: [
              "Asegura que las soluciones propuestas cumplen con las expectativas antes del desarrollo completo.",
            ],
          },
          {
            nombre: "Verificación del Código Fuente",
            info: [
              "Analiza el código mediante pruebas unitarias, análisis estático y dinámico, garantiza que el código sea confiable, funcional y mantenible.",
            ],
          },
          {
            nombre: "Validación en Entornos Simulados",
            info: [
              "Realiza pruebas en entornos controlados para verificar el comportamiento del sistema bajo condiciones simuladas.",
            ],
          },
          {
            nombre: "Documentación de Resultados y Retroalimentación",
            info: [
              "Registra hallazgos, defectos corregidos y recomendaciones en un informe de V&V y proporciona retroalimentación para mejorar el proceso.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Alta Complejidad en la Gestión de Pruebas de Validación",
            info: [
              "La norma IEEE 1012 establece un enfoque riguroso para la validación y verificación de sistemas, lo que puede ser complicado para proyectos ágiles o de rápida iteración, que requieren flexibilidad y adaptabilidad.",
            ],
            ejemplo: [
              "En un proyecto ágil, el equipo podría encontrar desafiante seguir los pasos formales de validación propuestos por IEEE 1012, ya que los ciclos de prueba deben alinearse con las iteraciones rápidas del desarrollo.",
            ],
          },
          {
            nombre: "Elevados Requerimientos de Documentación",
            info: [
              "La norma implica una exhaustiva documentación de los procesos de validación y verificación, lo que puede ser un obstáculo para equipos que prefieren una gestión más flexible y menos burocrática.",
            ],
            ejemplo: [
              "Un equipo que trabaja con metodologías ágiles podría resistirse a la documentación extensa requerida por IEEE 1012, considerando que ralentiza el desarrollo y genera carga administrativa innecesaria.",
            ],
          },
          {
            nombre: "Desafíos en la Implementación en Proyectos Pequeños",
            info: [
              "La implementación de IEEE 1012 puede ser excesiva para proyectos más pequeños, donde los procesos de validación y verificación detallados pueden no ser necesarios o viables debido a la limitación de recursos.",
            ],
            ejemplo: [
              "En una pequeña empresa de desarrollo de software, los costos y esfuerzos asociados con la implementación de los procedimientos de validación definidos por IEEE 1012 podrían no justificar los beneficios en proyectos de bajo presupuesto.",
            ],
          },
          {
            nombre: "Resistencia al Cambio en Equipos de Desarrollo",
            info: [
              "Adoptar un enfoque formal de validación y verificación como el propuesto por IEEE 1012 puede generar resistencia dentro de equipos acostumbrados a métodos informales o ágiles.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que ya tiene su propio proceso de pruebas podría mostrar resistencia a seguir las prácticas formales y complejas de validación y verificación que sugiere IEEE 1012.",
            ],
          },
          {
            nombre:
              "Capacitación y Requerimientos de Herramientas Especializadas",
            info: [
              "Para implementar IEEE 1012 de manera efectiva, los equipos necesitan capacitación específica y herramientas especializadas, lo que puede representar un costo adicional y una barrera de entrada para algunas organizaciones.",
            ],
            ejemplo: [
              "Una empresa que está comenzando con la validación de sistemas podría necesitar invertir en formación avanzada y herramientas de software especializadas para cumplir con los requisitos establecidos por IEEE 1012.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE1012.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE1012.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 570, y: 700 },
    data: {
      nodo: 1,
      label: "IEEE 1016",
      descripcion:
        "Establece un conjunto de formatos y documentos para planificar, diseñar, ejecutar y reportar pruebas de software, asegurando un proceso de pruebas coherente y completo.",
      labelTitle: "Documentación de Diseño de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "IEEE 1016 es utilizado en proyectos complejos y críticos, donde es fundamental una documentación detallada para garantizar la calidad y la continuidad en el desarrollo.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite una reducción de los errores y malentendidos, lo cual es especialmente útil en proyectos que requieren cumplimiento normativo.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Facilita el proceso de mantenimiento y escalabilidad, ya que proporciona una visión clara del sistema y permite identificar rápidamente los componentes críticos en futuras modificaciones.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial del Proceso de Documentación",
            info: [
              "Identifica deficiencias relacionadas con consistencia, estructura y contenido en los documentos existentes.",
            ],
          },
          {
            nombre: "Definición de Plantillas de Documentación",
            info: [
              "Diseña plantillas estándar basadas en IEEE 1016, como: introducción, arquitectura del sistema, interfaces de componentes, estrategias de diseño.",
            ],
          },
          {
            nombre: "Capacitación del equipo",
            info: [
              "Capacita a desarrolladores, diseñadores y otros roles clave en la creación y uso de documentación basada en IEEE 1016.",
            ],
          },
          {
            nombre: "Adaptación del Proceso de Diseño",
            info: [
              "Integra el uso de la norma en las fases del ciclo de vida de desarrollo de software, como: fase de análisis, fase de diseño detallado.",
            ],
          },
          {
            nombre: "Revisión y Validación de Documentos",
            info: [
              "Evalúa si el contenido describe adecuadamente los módulos, interfaces y estrategias y cumplan con la estructura y calidad definidas por IEEE 1016.",
            ],
          },
          {
            nombre: "Integración Continua de la Norma",
            info: [
              "Asegura que IEEE 1016 sea una práctica continua mediante su inclusión en políticas internas de desarrollo y control de calidad.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Complejidad en la Documentación de Requisitos",
            info: [
              "La norma IEEE 1016 define un enfoque detallado para la documentación de diseño de software, lo que puede resultar en una carga administrativa significativa, especialmente en proyectos pequeños o ágiles.",
            ],
            ejemplo: [
              "En un equipo de desarrollo ágil, los desarrolladores podrían encontrar complicado seguir el proceso detallado de documentación de diseño propuesto por IEEE 1016, lo que podría ralentizar el ritmo de trabajo.",
            ],
          },
          {
            nombre: "Rigidez en el Proceso de Diseño",
            info: [
              "La norma establece un proceso formal y estructurado para el diseño del software, lo que puede ser difícil de implementar en entornos ágiles o en equipos que prefieren enfoques más flexibles.",
            ],
            ejemplo: [
              "Un equipo que trabaja con metodologías ágiles como Scrum podría encontrar que los procesos de diseño estructurados definidos en IEEE 1016 no se alinean bien con su enfoque iterativo.",
            ],
          },
          {
            nombre: "Desafíos en la Adopción de Nuevas Herramientas",
            info: [
              "La implementación de IEEE 1016 puede requerir nuevas herramientas o tecnologías para gestionar la documentación del diseño de manera eficiente, lo que puede implicar costos adicionales.",
            ],
            ejemplo: [
              "Una empresa de desarrollo que no tiene herramientas de gestión de diseño podría verse obligada a invertir en software especializado, lo que podría aumentar los costos operativos.",
            ],
          },
          {
            nombre: "Costos y Tiempo de Implementación",
            info: [
              "El esfuerzo necesario para implementar los procesos de diseño formales establecidos en IEEE 1016 puede resultar costoso y consumir mucho tiempo, especialmente en proyectos con plazos ajustados.",
            ],
            ejemplo: [
              "En un proyecto con un plazo corto, un equipo podría considerar que seguir los lineamientos de diseño de IEEE 1016 representa un gasto innecesario de tiempo que podría haberse utilizado en otras tareas críticas.",
            ],
          },
          {
            nombre: "Resistencia al Cambio",
            info: [
              "Adoptar un enfoque formal de documentación de diseño puede generar resistencia en equipos que ya tienen métodos de trabajo establecidos y menos formales, especialmente si no entienden el valor de la norma.",
            ],
            ejemplo: [
              "En una empresa donde los diseñadores están acostumbrados a trabajar de manera más flexible, podría haber resistencia a implementar la documentación de diseño estricta sugerida por IEEE 1016, debido a que no ven la necesidad de cambiar sus métodos existentes.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE1016.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE1016.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -100, y: 560 },
    data: {
      nodo: 1,
      label: "CMMI",
      descripcion:
        "Permita aumentar la madurez de sus procesos, logrando una entrega consistente y de alta calidad, mayor satisfacción del cliente y una ventaja competitiva en el mercado.",
      labelTitle: "Modelo Integrado de Madurez de Capacidad",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI fue desarrollado por el Software Engineering Institute (SEI) y ha sido adoptado en más de 70 países, convirtiéndose en un estándar global para la mejora de procesos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Obtener una certificación en un nivel alto de CMMI puede hacer que una organización sea más atractiva para clientes y socios, especialmente en industrias donde la calidad y la confiabilidad son cruciales.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Su implementación logra una reducción significativa de errores y costos de producción, aumentando la rentabilidad y eficiencia operativa.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial del Nivel de Madurez o Capacidad",
            info: [
              "Identifica las brechas en los procesos y proporciona una base para definir objetivos claros.",
            ],
          },
          {
            nombre: "Definición de Objetivos de Implementación",
            info: [
              "Establece metas alineadas con los niveles de madurez o áreas de procesos clave que se desean mejorar como organización.",
            ],
          },
          {
            nombre: "Creación del Equipo de Mejora de Procesos",
            info: [
              "Forma un equipo responsable de la implementación del modelo y capacita en los principios de CMMI y técnicas de gestión del cambio.",
            ],
          },
          {
            nombre: "Planificación del Proyecto de Implementación",
            info: [
              "Diseña un plan que incluya: actividades de mejora, recursos necesarios (humanos, tecnológicos), cronogramas y métricas de evaluación.",
            ],
          },
          {
            nombre: "Implementación de Prácticas Clave del Modelo",
            info: [
              "Establece procesos en las áreas clave identificadas, como: gestión de proyectos, gestión de riesgos, garantía de calidad de procesos y productos.",
            ],
          },
          {
            nombre: "Monitoreo y Medición del Progreso",
            info: [
              "Establece métricas para evaluar el impacto de las mejoras, como: tiempo promedio para completar proyectos, reducción en defectos de productos.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Requerimientos de Recursos y Capacitación",
            info: [
              "Implementar CMMI exige una inversión significativa en capacitación y en la asignación de recursos, ya que el enfoque busca una mejora continua de procesos en toda la organización, lo que puede ser un desafío para empresas con presupuestos limitados.",
            ],
            ejemplo: [
              "Una pequeña empresa de desarrollo de software podría enfrentar dificultades para asignar los recursos necesarios para capacitar a todo su equipo en los procesos de CMMI, lo que limitaría su capacidad de implementar el modelo correctamente.",
            ],
          },
          {
            nombre: "Adaptación a la Cultura Organizacional",
            info: [
              "El enfoque estructurado y riguroso de CMMI puede ser difícil de implementar en organizaciones que ya tienen una cultura de trabajo más flexible o ágil, ya que podría generar resistencia al cambio entre los empleados.",
            ],
            ejemplo: [
              "Un equipo ágil que prioriza iteraciones rápidas podría resistirse a adoptar las prácticas de CMMI, que requieren un enfoque más formal y controlado para la mejora de procesos.",
            ],
          },
          {
            nombre: "Tiempo de Implementación",
            info: [
              "El proceso de implementación de CMMI es largo y exige un esfuerzo continuo para alcanzar los niveles más altos de madurez. Esto puede representar un reto para las organizaciones que requieren resultados rápidos.",
            ],
            ejemplo: [
              "En una empresa que necesita resultados inmediatos en un proyecto de desarrollo, los altos costos y el tiempo necesarios para obtener la certificación CMMI pueden ser percibidos como una barrera significativa.",
            ],
          },
          {
            nombre: "Mantenimiento Continuo de Procesos",
            info: [
              "Una vez que se ha implementado CMMI, el mantenimiento y la mejora continua de los procesos puede ser costoso y llevar mucho tiempo. Esto incluye auditorías regulares y evaluaciones de la eficacia de los procesos.",
            ],
            ejemplo: [
              "Una empresa que ha alcanzado un nivel de madurez en CMMI deberá seguir invirtiendo tiempo y recursos en mantener y mejorar sus procesos, lo cual puede ser una carga si no se gestionan adecuadamente.",
            ],
          },
          {
            nombre: "Evaluación y Auditoría Externa",
            info: [
              "Para obtener la certificación CMMI, las organizaciones deben pasar por evaluaciones y auditorías externas, lo que puede ser un proceso costoso y complejo para las empresas que no tienen experiencia en procesos de certificación.",
            ],
            ejemplo: [
              "Una organización que no ha pasado por procesos de auditoría en el pasado puede encontrar los requisitos de evaluación de CMMI intimidantes, especialmente en términos de costos y tiempo dedicados a la preparación.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.CMMI.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.CMMI.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: -300, y: 700 },
    data: {
      nodo: 1,
      label: "CMMI-SECURITY",
      descripcion:
        "Permite integrar la seguridad en el desarrollo de software y la gestión de proyectos a través de prácticas específicas para identificar y gestionar riesgos de seguridad de forma proactiva.",
      labelTitle: "Modelo Integrado de Madurez de Capacidad para la Seguridad",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI-Security puede aplicarse a servicios, operaciones y adquisiciones, permitiendo a las organizaciones fortalecer la seguridad en cada uno de estos ámbitos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Sus niveles de madurez ayudan a construir procesos de seguridad sólidos: Cada nivel (del 1 al 5) representa un avance en la capacidad de gestión y optimización de la seguridad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Útil en industrias de alta sensibilidad, como la defensa y las finanzas, donde las amenazas de seguridad son críticas y la confiabilidad de los sistemas es esencial.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial de Capacidades de Seguridad",
            info: [
              "Identifica brechas específicas en áreas como protección de datos, gestión de incidentes y resiliencia organizacional.",
            ],
          },
          {
            nombre: "Definición de Objetivos de Seguridad",
            info: [
              "Establece metas como: implementar un sistema de monitoreo de riesgos, fortalecer la respuesta a incidentes en un período determinado.",
            ],
          },
          {
            nombre: "Creación del Equipo de Seguridad",
            info: [
              "Designar un equipo responsable, provee capacitación sobre principios de seguridad, análisis de riesgos y técnicas de mitigación.",
            ],
          },
          {
            nombre: "Integración de Seguridad en los Procesos Clave",
            info: [
              "Incorpora prácticas de seguridad en cada etapa del ciclo de vida de desarrollo de software o procesos organizacionales.",
            ],
          },
          {
            nombre: "Implementación de Controles de Seguridad",
            info: [
              "Establece controles específicos basados en prácticas definidas por el modelo, reduce el riesgo y fortalece la resiliencia frente a incidentes.",
            ],
          },
          {
            nombre: "Uso de Herramientas Tecnológicas de Seguridad",
            info: [
              "Integra herramientas para monitorear, gestionar y analizar riesgos de seguridad, como sistemas SIEM.",
            ],
          },
          {
            nombre: "Monitoreo y Evaluación Continua",
            info: [
              "Realiza auditorías periódicas para evaluar el cumplimiento y efectividad de las medidas implementadas.",
            ],
          },
        ],
        url_pdf: "fgHKggNGazs",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Implementación Compleja en Organizaciones Grandes",
            info: [
              "La implementación de CMMI-Security requiere un enfoque integrado y exhaustivo que abarca la gestión de la seguridad en todos los niveles de la organización, lo cual puede ser complejo para organizaciones grandes con estructuras complicadas.",
            ],
            ejemplo: [
              "En una gran empresa multinacional, coordinar los esfuerzos de seguridad a través de múltiples equipos y ubicaciones puede ser un desafío, ya que cada unidad de la organización podría tener diferentes prioridades y prácticas de seguridad.",
            ],
          },
          {
            nombre: "Costo y Recursos para la Implementación",
            info: [
              "CMMI-Security requiere una significativa inversión en recursos, tanto humanos como tecnológicos. La adopción de estándares de seguridad elevados puede ser costosa, especialmente para pequeñas y medianas empresas que no cuentan con el presupuesto necesario.",
            ],
            ejemplo: [
              "Una pequeña empresa de software podría no estar preparada para hacer frente a los costos de implementación de CMMI-Security, como la contratación de personal especializado en seguridad o la adquisición de herramientas tecnológicas avanzadas.",
            ],
          },
          {
            nombre: "Resistencia a la Adopción de Nuevas Políticas",
            info: [
              "Los empleados y equipos de trabajo podrían resistirse a implementar las nuevas políticas de seguridad propuestas por CMMI-Security, especialmente si estas afectan sus métodos de trabajo establecidos o incrementan la carga operativa.",
            ],
            ejemplo: [
              "Un equipo de desarrollo de software que está acostumbrado a un flujo de trabajo ágil podría ser reticente a adoptar políticas de seguridad más estrictas, como el monitoreo constante de vulnerabilidades y la revisión periódica de las configuraciones de seguridad.",
            ],
          },
          {
            nombre: "Integración con Otros Modelos de Gestión",
            info: [
              "Integrar CMMI-Security con otros modelos de gestión de calidad o seguridad ya implementados en la organización puede ser un desafío, ya que puede haber conflictos entre las prácticas existentes y las nuevas exigidas por CMMI.",
            ],
            ejemplo: [
              "En una empresa que ya sigue otro marco de seguridad, como ISO 27001, la adopción de CMMI-Security podría crear redundancias o requerir ajustes significativos en los procesos y procedimientos de seguridad establecidos.",
            ],
          },
          {
            nombre: "Necesidad de Evaluación y Auditoría Continua",
            info: [
              "CMMI-Security requiere evaluaciones regulares y auditorías de seguridad para garantizar la eficacia de los procesos implementados. Esto implica un esfuerzo continuo que puede resultar costoso y consumir mucho tiempo.",
            ],
            ejemplo: [
              "Una organización que ha implementado CMMI-Security debe estar preparada para someterse a evaluaciones regulares, lo que requiere recursos adicionales para la preparación y la ejecución de auditorías internas y externas.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.CMMI_SECURITY.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.CMMI_SECURITY.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "80",
    position: { x: 450, y: 440 },
    data: {
      nodo: 1,
      label: "CMMI-ACQ",
      descripcion:
        "Proporciona un marco para la adquisición efectiva de productos y servicios, ayuda a seleccionar, gestionar y coordinar proveedores de manera efectiva, reduciendo riesgos y mejorando la calidad en los procesos de adquisición.",
      labelTitle: "Modelo de Madurez de Capacidades para Adquisiciones",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI-ACQ se centra en toda la cadena de adquisición, abarcando procesos como la selección de proveedores, la negociación y la gestión de contratos.",
        },
        {
          img: imgFoco,
          descripcion:
            "Cubre áreas críticas como la planificación de adquisiciones, la gestión de requisitos, la mitigación de riesgos y el aseguramiento de la calidad en las relaciones con proveedores.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Mejorar la transparencia y la comunicación con los proveedores, reduciendo los conflictos y problemas durante el ciclo de adquisición.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial",
            info: [
              "Identifica las necesidades del proyecto relacionadas con adquisiciones y define objetivos en términos de costo, tiempo, calidad y cumplimiento.",
            ],
          },
          {
            nombre: "Planificación de la Gestión de Adquisiciones",
            info: [
              "Establece una guía estructurada para coordinar las actividades de adquisición.",
            ],
          },
          {
            nombre: "Identificación y Evaluación de Proveedores",
            info: [
              "Evalúa proveedores potenciales con base en criterios predefinidos, como capacidad técnica, experiencia y costos.",
            ],
          },
          {
            nombre: "Desarrollo y Gestión de Contratos",
            info: [
              "Establece un marco claro para las relaciones con los proveedores, prepara contratos que especifiquen: entregables, cronogramas, KPI’s.",
            ],
          },
          {
            nombre: "Gestión de Riesgos en Adquisiciones",
            info: [
              "Identifica riesgos relacionados con proveedores, contratos o entregables e implementa planes de mitigación y contingencia.",
            ],
          },
          {
            nombre: "Validación y Aceptación de Entregables",
            info: [
              "Asegura que las adquisiciones cumplan con los estándares de calidad requeridos.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Gestión de Proveedores Compleja",
            info: [
              "La implementación de CMMI-ACQ requiere una gestión exhaustiva y estructurada de proveedores, lo cual puede ser desafiante cuando se trabaja con múltiples proveedores o con proveedores que no siguen las mismas prácticas o estándares de calidad.",
            ],
            ejemplo: [
              "Una empresa que depende de varios proveedores para diferentes componentes del software podría enfrentar dificultades para coordinar las expectativas y procesos de calidad entre los proveedores, lo que afecta la consistencia del producto final.",
            ],
          },
          {
            nombre: "Adaptación a Diferentes Entornos de Contratación",
            info: [
              "Las prácticas y procesos de CMMI-ACQ deben adaptarse a diferentes tipos de contratos y entornos de adquisición, lo que puede ser complicado si la organización opera en sectores con normativas específicas o con una estructura contractual compleja.",
            ],
            ejemplo: [
              "Una empresa que opera en el sector público, donde los procesos de contratación son más estrictos y complejos, podría encontrar que la implementación de CMMI-ACQ es más difícil debido a las regulaciones adicionales que deben cumplirse.",
            ],
          },
          {
            nombre: "Costos de Implementación y Mantenimiento",
            info: [
              "La adopción de CMMI-ACQ implica una inversión significativa en términos de tiempo, personal y recursos para implementar los procesos necesarios. Además, el mantenimiento de estos procesos requiere un esfuerzo continuo.",
            ],
            ejemplo: [
              "Una organización que decide implementar CMMI-ACQ en sus adquisiciones podría enfrentar altos costos iniciales debido a la necesidad de formar a los equipos y desarrollar nuevas políticas de adquisición alineadas con el modelo.",
            ],
          },
          {
            nombre: "Resistencia al Cambio en la Cultura Organizacional",
            info: [
              "El enfoque estructurado de CMMI-ACQ puede generar resistencia entre los empleados, especialmente si la organización está acostumbrada a procesos más informales o ágiles en la gestión de adquisiciones.",
            ],
            ejemplo: [
              "En una empresa que históricamente ha utilizado un enfoque flexible para seleccionar y gestionar proveedores, los equipos de adquisición podrían resistirse a adoptar las estrictas directrices de CMMI-ACQ.",
            ],
          },
          {
            nombre:
              "Coordinación entre Equipos Internos y Proveedores Externos",
            info: [
              "CMMI-ACQ requiere una estrecha coordinación entre los equipos internos de la organización y los proveedores externos. Esto puede ser complicado, especialmente si los proveedores no están alineados con las prácticas y estándares de calidad de la organización.",
            ],
            ejemplo: [
              "Una empresa que trabaja con un proveedor internacional podría enfrentar desafíos para garantizar que el proveedor cumpla con los estándares de calidad de CMMI-ACQ, especialmente si el proveedor no tiene experiencia con el modelo de adquisición propuesto.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.CMMI_ACQ.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.CMMI_ACQ.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "90",
    position: { x: -200, y: 440 },
    data: {
      nodo: 1,
      label: "CMMI-SVC",
      descripcion:
        "Su enfoque consiste en mejorar la gestión y la calidad en la entrega de servicios, optimizar procesos, maximizar la satisfacción del cliente y gestionar de manera eficiente los recursos y tiempos.",
      labelTitle: "Modelo Integrado de Madurez de Capacidad para Servicios",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI-SVC incluye prácticas para gestionar acuerdos, continuidad de servicio, y procesos de recuperación ante desastres.",
        },
        {
          img: imgFoco,
          descripcion:
            "Se puede combinar con otros marcos como ITIL para una gestión completa de servicios, ofreciendo una estrategia integral de mejora en la prestación de servicios.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Proporciona prácticas específicas para gestionar y monitorear el cumplimiento de los SLA, asegurando que los compromisos con los clientes se cumplan de manera confiable y constante.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
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
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial de Capacidades en Servicios",
            info: [
              "Identifica áreas de mejora y establecer objetivos alineados con las necesidades del cliente y los requisitos del negocio.",
            ],
          },
          {
            nombre: "Planificación de la Gestión de Servicios",
            info: [
              "Asegura que las actividades de servicios sean consistentes y alineadas con los objetivos organizacionales.",
            ],
          },
          {
            nombre: "Definición de Procesos y Procedimientos de Servicio",
            info: [
              "Establece procedimientos detallados para la entrega y gestión de servicios, incluyendo: control de calidad, gestión de incidencias, mejora continua.",
            ],
          },
          {
            nombre: "Implementación de la Mejora de Procesos de Servicios",
            info: [
              "Implementa mejoras en los procesos existentes basadas en el análisis de desempeño.",
            ],
          },
          {
            nombre: "Monitoreo y Medición del Desempeño de los Servicios",
            info: [
              "Implementa sistemas de monitoreo que evalúen el desempeño de los servicios en tiempo real y establece métricas para evaluar la calidad del servicio.",
            ],
          },
          {
            nombre: "Gestión de Incidencias y Solicitudes de Servicio",
            info: [
              "Establece un sistema eficiente para gestionar incidencias, solicitudes y problemas en los servicios.",
            ],
          },
          {
            nombre: "Gestión de Relaciones con Clientes y Proveedores",
            info: [
              "Establece relaciones efectivas con los clientes y proveedores, promoviendo la comunicación y la resolución de problemas.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Personalización de Procesos para Servicios Específicos",
            info: [
              "CMMI-SVC requiere que los procesos y prácticas de mejora sean adaptados específicamente para cada tipo de servicio, lo que puede ser desafiante en organizaciones que ofrecen una amplia variedad de servicios.",
            ],
            ejemplo: [
              "Una empresa que proporciona servicios de soporte técnico y consultoría podría encontrar dificultades para estandarizar y personalizar los procesos de mejora continua de acuerdo con las necesidades específicas de cada tipo de servicio.",
            ],
          },
          {
            nombre:
              "Alineación de los Objetivos del Cliente con los Procesos Internos",
            info: [
              "Uno de los desafíos de CMMI-SVC es alinear los objetivos de mejora de los servicios con los procesos internos de la organización, lo cual puede ser complicado cuando los intereses del cliente no coinciden perfectamente con los procesos internos.",
            ],
            ejemplo: [
              "En un centro de atención al cliente, puede ser difícil equilibrar la necesidad de mejorar la eficiencia operativa interna con las expectativas específicas de servicio del cliente.",
            ],
          },
          {
            nombre: "Capacitación y Desarrollo de Habilidades",
            info: [
              "La implementación de CMMI-SVC puede requerir una capacitación continua y especializada de los empleados para que comprendan y apliquen las mejores prácticas del modelo en los servicios que proporcionan.",
            ],
            ejemplo: [
              "Un centro de soporte técnico podría necesitar entrenar constantemente a su personal en nuevas metodologías para mejorar la calidad y eficiencia de los servicios que ofrecen, lo que puede generar costos adicionales.",
            ],
          },
          {
            nombre: "Gestión del Cambio Organizacional",
            info: [
              "La adopción de CMMI-SVC puede generar resistencia debido a los cambios en la manera de operar y de interactuar con los clientes, lo que requiere una gestión del cambio efectiva para asegurar la aceptación del modelo por parte de los empleados.",
            ],
            ejemplo: [
              "En una empresa de servicios financieros, los empleados podrían resistirse a las nuevas formas de interacción con los clientes si perciben que los cambios amenazan sus métodos establecidos de trabajo.",
            ],
          },
          {
            nombre: "Mantenimiento de la Mejora Continua",
            info: [
              "CMMI-SVC promueve la mejora continua, lo cual requiere una evaluación y ajuste constante de los procesos. Mantener este ciclo de mejora puede ser un desafío, especialmente cuando los resultados no son inmediatos.",
            ],
            ejemplo: [
              "Una empresa que implementa CMMI-SVC en su departamento de soporte podría enfrentar dificultades para mantener el enfoque en la mejora continua, ya que los resultados pueden ser lentos o difíciles de medir en un principio.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.CMMI_SVC.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.CMMI_SVC.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "100",
    position: { x: 140, y: 640 },
    data: {
      nodo: 1,
      label: "CMMI-DEV",
      descripcion:
        "Su enfoque se basa en mejorar los procesos en el desarrollo de productos y servicios, con un enfoque particular en la ingeniería de software y gestión de proyectos.",
      labelTitle: "Modelo de Madurez de Capacidad para el Desarrollo",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "CMMI-DEV puede incrementar la confianza del cliente en los productos y servicios de la organización, especialmente en industrias altamente reguladas.",
        },
        {
          img: imgFoco,
          descripcion:
            "Puede reducir reprocesos y costos asociados a errores, debido a que promueve un enfoque estructurado y preventivo hacia la calidad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Cada nivel de CMMI-DEV incluye y mejora las prácticas de los niveles anteriores, asegurando que la organización evolucione de manera estructurada hacia procesos optimizados y controlados.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial de Procesos de Desarrollo",
            info: [
              "Utiliza herramientas como SCAMPI para medir la conformidad con las áreas clave de proceso de CMMI-DEV.",
            ],
          },
          {
            nombre: "Definición de Objetivos de Madurez o Capacidad",
            info: [
              "Establece metas específicas para alcanzar un nivel de madurez (1 al 5) o capacidades en áreas clave.",
            ],
          },
          {
            nombre: "Formación del Equipo de Mejora de Procesos de Desarrollo",
            info: [
              "Crea un equipo responsable de liderar la implementación y capacita en prácticas de CMMI-DEV y en gestión del cambio.",
            ],
          },
          {
            nombre: "Planificación del Proyecto de Implementación",
            info: [
              "Diseña un plan que defina actividades, plazos, recursos y métricas; prioriza áreas clave como gestión de requisitos, diseño técnico y gestión de calidad.",
            ],
          },
          {
            nombre: "Establecimiento de Métricas de Desempeño",
            info: [
              "Implementa indicadores clave de desempeño (KPI) como: tasa de defectos detectados en etapas tempranas, cumplimiento de cronogramas de desarrollo.",
            ],
          },
          {
            nombre: "Integración de Herramientas de Soporte",
            info: [
              "Selecciona herramientas para apoyar la gestión de proyectos, la trazabilidad de requisitos y la automatización de pruebas.",
            ],
          },
          {
            nombre: "Auditorías y Evaluaciones Periódicas",
            info: [
              "Realiza revisiones periódicas de los procesos implementados para evaluar su cumplimiento con CMMI-DEV.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Alta Complejidad en la Implementación",
            info: [
              "La adopción de CMMI-DEV implica un conjunto amplio de prácticas y procesos que pueden resultar complejos de implementar, especialmente en organizaciones con estructuras jerárquicas o culturas organizacionales tradicionales.",
            ],
            ejemplo: [
              "Una empresa de desarrollo de software pequeña que no tiene experiencia previa en la implementación de modelos como CMMI-DEV podría enfrentarse a desafíos para coordinar los esfuerzos entre diferentes equipos, lo que podría retrasar el proceso de adopción.",
            ],
          },
          {
            nombre:
              "Requiere Cambios Significativos en la Cultura Organizacional",
            info: [
              "CMMI-DEV promueve la mejora continua, lo cual puede implicar un cambio radical en cómo los equipos de desarrollo interactúan entre sí y con otros departamentos, lo que genera resistencia en algunas organizaciones.",
            ],
            ejemplo: [
              "Una organización con una cultura ágil y flexible podría tener dificultades para adoptar las estrictas directrices de CMMI-DEV, lo que podría generar resistencia entre los empleados que prefieren mantener sus prácticas ágiles.",
            ],
          },
          {
            nombre: "Costos de Implementación y Mantenimiento",
            info: [
              "La implementación de CMMI-DEV requiere una inversión significativa en formación, auditorías y evaluación de procesos, lo que puede ser costoso, especialmente para empresas pequeñas y medianas.",
            ],
            ejemplo: [
              "Una pequeña empresa de software podría enfrentar dificultades económicas para adoptar CMMI-DEV debido a los costos asociados con la capacitación del personal y la contratación de consultores externos.",
            ],
          },
          {
            nombre: "Dificultades en la Medición de Resultados",
            info: [
              "El modelo CMMI-DEV enfatiza la mejora continua, pero medir el impacto de las mejoras implementadas puede ser difícil, especialmente si no se tienen indicadores claros o sistemas adecuados para evaluar el progreso.",
            ],
            ejemplo: [
              "Una empresa que implemente CMMI-DEV podría no ser capaz de medir de manera precisa la mejora en la calidad de sus procesos de desarrollo, lo que dificulta la toma de decisiones sobre la efectividad de los cambios realizados.",
            ],
          },
          {
            nombre:
              "Resistencia a la Adopción de Nuevas Herramientas y Tecnologías",
            info: [
              "La adopción de CMMI-DEV puede requerir la implementación de nuevas herramientas y tecnologías para cumplir con los procesos definidos, lo que podría generar resistencia si los empleados no están familiarizados con ellas.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que ya tiene una infraestructura de herramientas establecida podría sentirse reacio a cambiar a nuevas plataformas o sistemas requeridos por CMMI-DEV, lo que podría retrasar la implementación.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.CMMI_DEV.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.CMMI_DEV.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "110",
    position: { x: 380, y: 560 },
    data: {
      nodo: 1,
      label: "IEEE 830",
      descripcion:
        "Proporciona pautas para la creación de documentación de Especificación de Requisitos de Software (SRS), garantizando que los requisitos sean claros, completos y comprensibles.",
      labelTitle: "Especificación de Requerimientos de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Facilita la trazabilidad de los requisitos, ayudando a los equipos a identificar fácilmente qué requisitos se han implementado y cuáles están pendientes.",
        },
        {
          img: imgFoco,
          descripcion:
            "Al contar con un documento de requisitos detallado y claro, se minimizan los errores de interpretación durante el desarrollo.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Las buenas prácticas en especificación de requerimientos pueden reducir hasta un 50% de los defectos encontrados en etapas de desarrollo avanzado.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Análisis Inicial de Requisitos",
            info: [
              "Reúne y documenta las necesidades reales y expectativas de los usuarios, stakeholders y clientes.",
            ],
          },
          {
            nombre: "Selección del Formato Estandarizado de SRS",
            info: [
              "Adopta la estructura recomendada por IEEE 830, que incluye: introducción, descripción general, especificaciones detalladas.",
            ],
          },
          {
            nombre: "Creación y Validación de un Borrador de Requisitos",
            info: [
              "Revisión del borrador para verificar su precisión y completitud. Esto garantiza que el SRS refleje los objetivos del proyecto antes de su aprobación.",
            ],
          },
          {
            nombre: "Gestión de Cambios y Priorización",
            info: [
              "Establece un proceso para manejar cambios en los requisitos, priorizando según su impacto en el proyecto.",
            ],
          },
          {
            nombre: "Documentación Final y Aprobación",
            info: [
              "El SRS final actúa como referencia única para el desarrollo y las pruebas, debe asegurar que todos los requisitos sean verificables y rastreables.",
            ],
          },
          {
            nombre: "Almacenamiento y Monitoreo",
            info: [
              "Facilita la trazabilidad y el cumplimiento de los requisitos acordados.",
            ],
          },
          {
            nombre: "Mejora Continua",
            info: [
              "Analiza los resultados de la implementación para identificar áreas de mejora, ajustando procesos en futuras aplicaciones del ciclo de vida.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Ambigüedad en los Requisitos",
            info: [
              "A pesar de la intención de la norma IEEE 830 de proporcionar especificaciones claras, las descripciones ambiguas o vagas pueden surgir, lo que genera confusión durante el desarrollo del software.",
            ],
            ejemplo: [
              "Un proyecto de software que describe las necesidades de una funcionalidad sin definir claramente los límites o las condiciones de operación podría llevar a los desarrolladores a implementar una solución incorrecta o incompleta.",
            ],
          },
          {
            nombre: "Excesiva Formalidad",
            info: [
              "La norma IEEE 830 promueve una estructura formal y detallada para la especificación de requisitos, lo que puede ser excesivo en proyectos pequeños o ágiles, generando más trabajo administrativo que beneficios claros.",
            ],
            ejemplo: [
              "En un proyecto de desarrollo ágil, un equipo pequeño podría encontrar que seguir todos los pasos definidos por IEEE 830 consume tiempo innecesario que podría haberse utilizado en la implementación directa del software.",
            ],
          },
          {
            nombre:
              "Dificultad en el Mantenimiento del Documento de Requisitos",
            info: [
              "A medida que los proyectos avanzan, los requisitos pueden cambiar y evolucionar. Mantener el documento de requisitos actualizado de acuerdo con IEEE 830 puede volverse complicado y consumir tiempo si no se gestionan adecuadamente los cambios.",
            ],
            ejemplo: [
              "En una empresa de desarrollo de software, a medida que los clientes solicitan nuevos cambios, puede resultar difícil y costoso actualizar el documento de requisitos según las especificaciones de IEEE 830, lo que puede llevar a inconsistencias.",
            ],
          },
          {
            nombre: "Falta de Flexibilidad para Proyectos Pequeños",
            info: [
              "IEEE 830 está más orientado a proyectos de mayor envergadura, lo que puede ser una limitación cuando se trata de proyectos pequeños que no necesitan una documentación tan exhaustiva y formal.",
            ],
            ejemplo: [
              "Un equipo que está trabajando en una aplicación móvil pequeña podría encontrar que los requerimientos formales de IEEE 830 no son adecuados para el tamaño del proyecto, resultando en una sobrecarga de documentación.",
            ],
          },
          {
            nombre: "Definición de Requisitos Técnicos Complejos",
            info: [
              "El estándar IEEE 830 pone un énfasis significativo en la definición detallada de los requisitos técnicos, lo que puede ser un desafío cuando los equipos de desarrollo no tienen la experiencia necesaria o cuando la tecnología a utilizar es nueva.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que trabaja en una plataforma emergente de tecnología podría tener dificultades para definir requisitos técnicos complejos de acuerdo con IEEE 830, debido a la falta de experiencia con las herramientas o tecnologías involucradas.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE830.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE830.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "120",
    position: { x: -300, y: 150 },
    data: {
      nodo: 1,
      label: "IEEE 1233",
      descripcion:
        "Proporciona una guía estructurada para la especificación de requisitos de software y la creación de documentos de requisitos",
      labelTitle: "Definición de Requisitos de Sistemas",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "IEEE 1233 estandariza el formato y contenido de los requisitos, facilita que ambas partes compartan una comprensión clara de lo que se espera del sistema de software.",
        },
        {
          img: imgFoco,
          descripcion:
            "Promueve una estructura modular en el SRS facilitando futuras actualizaciones y mejoras del documento a medida que evolucionen las necesidades.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "La claridad y precisión en la especificación de requisitos ayudan a prevenir problemas durante el desarrollo, reduciendo costos y el tiempo invertido en correcciones posteriores.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Análisis y Recopilación de Requisitos",
            info: [
              "Identifica y recopila necesidades funcionales y no funcionales de todas las partes interesadas.",
            ],
          },
          {
            nombre: "Identificación y Definición de Requisitos",
            info: [
              "Define los límites del sistema, especificando detalladamente las funcionalidades del sistema (por ejemplo, entradas, procesos y salidas).",
            ],
          },
          {
            nombre: "Elaboración de la Estructura de la SRS",
            info: [
              "Organiza el documento SRS de acuerdo con el estándar IEEE 1233, asegurando que facilite la comprensión y el mantenimiento del documento.",
            ],
          },
          {
            nombre: "Verificación y Validación de Requisitos",
            info: [
              "Revisa el documento SRS y valida que los requisitos reflejen fielmente las necesidades y objetivos iniciales.",
            ],
          },
          {
            nombre: "Gestión de Cambios en los Requisitos",
            info: [
              "Establece un proceso formal para gestionar modificaciones al documento SRS que puedan adaptarse a cambios sin comprometer la integridad del proyecto.",
            ],
          },
          {
            nombre: "Aprobación y Publicación del Documento SRS",
            info: [
              "Obtén la aprobación formal de todas las partes interesadas antes de finalizar el documento.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Ambigüedad en la Interpretación de Requisitos",
            info: [
              "El uso de un enfoque generalizado en IEEE 1233 puede llevar a interpretaciones ambiguas de los requisitos, lo que puede resultar en que los equipos de desarrollo y los stakeholders tengan diferentes expectativas.",
            ],
            ejemplo: [
              "En un proyecto de desarrollo de software, un requisito de 'mejorar la velocidad' podría ser interpretado de manera diferente por los desarrolladores y los clientes, lo que generaría malentendidos y resultados no alineados.",
            ],
          },
          {
            nombre: "Requiere Un Gran Esfuerzo para Documentación Detallada",
            info: [
              "IEEE 1233 exige un enfoque detallado y estructurado para la especificación de requisitos, lo que puede ser excesivo para proyectos pequeños o de corta duración, donde una documentación extensa podría no ser necesaria.",
            ],
            ejemplo: [
              "Un equipo de desarrollo de una aplicación sencilla puede encontrar que el proceso de documentar requisitos con el nivel de detalle requerido por IEEE 1233 no justifica el tiempo invertido, lo que podría retrasar el proyecto.",
            ],
          },
          {
            nombre: "Falta de Flexibilidad para Cambios de Requisitos",
            info: [
              "La rigidez del enfoque de IEEE 1233 puede hacer que sea difícil adaptarse a los cambios de requisitos durante el ciclo de vida del proyecto, especialmente en entornos ágiles o cuando los requisitos evolucionan rápidamente.",
            ],
            ejemplo: [
              "En un proyecto de desarrollo ágil, un cambio en los requisitos puede no ser fácil de implementar utilizando el enfoque de IEEE 1233, lo que podría generar retrasos o la necesidad de reescribir documentación extensa.",
            ],
          },
          {
            nombre: "Costos de Implementación y Formación",
            info: [
              "La implementación de los procesos definidos en IEEE 1233 puede generar costos elevados relacionados con la formación del personal y la implementación de las prácticas de documentación en toda la organización.",
            ],
            ejemplo: [
              "Una organización que adopta IEEE 1233 puede tener que invertir tiempo y recursos en la capacitación de su personal para cumplir con los requisitos del estándar, lo que podría resultar costoso en términos de tiempo y dinero.",
            ],
          },
          {
            nombre: "Resistencia a la Adopción de Nuevas Metodologías",
            info: [
              "El enfoque detallado y metodológico de IEEE 1233 puede ser difícil de implementar en organizaciones que ya tienen su propia manera de definir y gestionar requisitos, generando resistencia al cambio.",
            ],
            ejemplo: [
              "Una empresa de desarrollo que ya utiliza su propio proceso de gestión de requisitos podría enfrentar dificultades al intentar implementar IEEE 1233 debido a la resistencia de su equipo, que prefiere su metodología existente.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaDos.IEEE1233.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaDos.IEEE1233.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];
// Herramientas de  aseguramiento y calidad ....................................
export const unionHerramientasAseguCalidad: Edge[] = [
  {
    id: "e1-2",
    source: "10",
    target: "20",
    sourceHandle: "1",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-3",
    source: "10",
    target: "30",
    sourceHandle: "2",
    targetHandle: "3",
    animated: true,
    style: { stroke: "var(--bg2)" },
  },
  {
    id: "e1-4",
    source: "10",
    target: "40",
    sourceHandle: "1",
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
    targetHandle: "4",
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
export const nodoHerramientasAseguCalidad: Node[] = [
  {
    id: "10",
    type: "Section",
    position: { x: 40, y: 490 },
    data: {
      nodo: 1,
      label: MENU[0].lista[2].nombre,
      // onClick: (e: unknown) => {},
    },
    className: styleSeccion,
    draggable: false,
  },
  {
    id: "20",
    position: { x: -300, y: 320 },
    data: {
      nodo: 1,
      label: "Jira",
      descripcion:
        "Permite la gestión de proyectos y el seguimiento de incidencias en equipos de desarrollo de software. Además, facilita la organización de tareas, el control de progresos, y la colaboración en entornos ágiles.",
      labelTitle: "Gestión de Proyectos y Seguimiento de Incidencias",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "JIRA fue desarrollado inicialmente por Atlassian para rastrear incidencias internas, pero rápidamente se convirtió en una herramienta de gestión de proyectos muy popular en la industria.",
        },
        {
          img: imgFoco,
          descripcion:
            "Su flexibilidad le permite ser utilizado no solo por equipos de desarrollo, sino también por equipos de marketing, diseño y recursos humanos.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Permite la creación de plantillas de proyectos, facilitando el inicio de nuevos proyectos basados en configuraciones previamente exitosas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Determina los objetivos principales de usar JIRA: gestión de proyectos, seguimiento de incidentes, integración con otras herramientas, etc.",
            ],
          },
          {
            nombre: "Configuración Inicial",
            info: [
              "Configura esquemas de flujos de trabajo, estados y transiciones según los procesos existentes del equipo.",
            ],
          },
          {
            nombre: "Asignación de Roles y Permisos",
            info: [
              "Garantiza que cada miembro tenga acceso a las funcionalidades necesarias sin comprometer la seguridad del sistema.",
            ],
          },
          {
            nombre: "Capacitación del Equipo",
            info: [
              "Capacita a los usuarios en las funciones básicas, como la creación y asignación de tareas, uso de tableros Scrum o Kanban, y generación de informes.",
            ],
          },
          {
            nombre: "Migración y Prueba Piloto",
            info: [
              "Realiza una prueba piloto con un equipo o proyecto específico para validar la configuración y resolver cualquier problema inicial.",
            ],
          },
          {
            nombre: "Ejecución y Monitoreo",
            info: [
              "Monitorea el uso de la herramienta mediante informes y paneles para identificar áreas de mejora.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Curva de Aprendizaje Inicial",
            info: [
              "Jira, al ser una herramienta compleja con muchas funcionalidades, puede ser difícil de aprender para los nuevos usuarios, especialmente para aquellos sin experiencia previa en gestión de proyectos.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que recién empieza a usar Jira podría enfrentar dificultades para entender cómo configurar tableros, flujos de trabajo y otros aspectos avanzados de la herramienta.",
            ],
          },
          {
            nombre: "Personalización Costosa y Compleja",
            info: [
              "Aunque Jira permite una gran personalización, configurarlo de manera que se ajuste a necesidades específicas puede requerir tiempo y un esfuerzo considerable, especialmente si se quieren automatizar flujos de trabajo o integrar otras herramientas.",
            ],
            ejemplo: [
              "Un equipo que necesita adaptar Jira a su metodología ágil específica podría encontrar que la personalización requiere tanto tiempo y esfuerzo que se vuelve una carga, resultando en una implementación menos eficiente.",
            ],
          },
          {
            nombre: "Costo para Equipos Pequeños",
            info: [
              "Jira tiene un modelo de precios que puede resultar elevado para equipos pequeños o startups que necesitan una herramienta de gestión de proyectos eficiente pero que tienen presupuestos limitados.",
            ],
            ejemplo: [
              "Una pequeña empresa de desarrollo de software podría encontrar que los costos mensuales de Jira son difíciles de justificar en comparación con herramientas más asequibles o gratuitas que ofrecen funcionalidades básicas.",
            ],
          },
          {
            nombre: "Sobrecarga de Funcionalidades",
            info: [
              "Jira ofrece muchas características y opciones, lo que puede ser abrumador para equipos que solo necesitan funciones básicas de gestión de proyectos y no requieren todas las herramientas avanzadas que proporciona.",
            ],
            ejemplo: [
              "Un equipo de proyecto pequeño podría sentirse abrumado por la complejidad de Jira al intentar usar solo un conjunto de funciones básicas, mientras que las herramientas avanzadas se mantienen sin usar.",
            ],
          },
          {
            nombre: "Integraciones Limitadas con Herramientas Externas",
            info: [
              "Aunque Jira tiene una buena capacidad de integración con otras herramientas, en algunos casos puede no ser tan fluido como se espera, o puede requerir complementos adicionales, lo que aumenta la complejidad.",
            ],
            ejemplo: [
              "Un equipo que desea integrar Jira con una herramienta de gestión de clientes o de tiempo podría enfrentar dificultades o requerir extensiones adicionales para lograr una integración efectiva.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.Jira.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.Jira.paginaOficial,
    },
    type: "Section",
    draggable: false,
    className: styleText,
  },
  {
    id: "30",
    position: { x: -300, y: 680 },
    data: {
      nodo: 1,
      label: "SonarQube",
      descripcion:
        "Permite gestionar la calidad del código fuente, el análisis estático en proyectos de desarrollo de software y detectar posibles problemas en términos de seguridad, fiabilidad, mantenibilidad y cobertura de pruebas",
      labelTitle: "Gestión y Mejora Continua de la Calidad del Código",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "SonarQube fue desarrollado por SonarSource y es ampliamente utilizado en la industria del software, siendo adoptado por empresas de todos los tamaños para mejorar sus procesos de desarrollo.",
        },
        {
          img: imgFoco,
          descripcion:
            "Proporciona feedback constante sobre el estado del código, ayudando a los desarrolladores a corregir problemas y mejorar la calidad del software en cada iteración.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Se integra fácilmente con herramientas de CI/CD como Jenkins, GitHub Actions y Azure DevOps; permitiendo el análisis automático del código en cada ciclo de desarrollo.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial y Planificación del Proyecto",
            info: [
              "Evalúa el estado actual del código fuente y establece objetivos claros de calidad del código (errores, cobertura, vulnerabilidades).",
            ],
          },
          {
            nombre: "Instalación y Configuración de SonarQube",
            info: [
              "Instala SonarQube en el servidor adecuado y configura el servidor, bases de datos y permisos de acceso según las necesidades del equipo.",
            ],
          },
          {
            nombre: "Definición y Configuración de Calidad del Código",
            info: [
              "Establece reglas de calidad en SonarQube, como las que evalúan complejidad, duplicación, vulnerabilidades de seguridad, pruebas y cobertura del código.",
            ],
          },
          {
            nombre: "Análisis de Código y Revisión de Resultados",
            info: [
              "Ejecuta análisis de código de forma continua y revisa los informes que incluyen métricas sobre defectos, vulnerabilidades y cobertura de las pruebas.",
            ],
          },
          {
            nombre: "Revisión y Resolución de Problemas",
            info: [
              "Aborda los problemas identificados rápidamente mejora la calidad del código y la seguridad del proyecto.",
            ],
          },
          {
            nombre: "Generación de Informes y Auditoría",
            info: [
              "Realiza auditorías periódicas para asegurar el cumplimiento continuo de los estándares de calidad.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Configuración Inicial Compleja",
            info: [
              "Implementar SonarQube puede ser un proceso complicado, ya que requiere conocimientos técnicos avanzados para configurar servidores, analizar proyectos y ajustar reglas de calidad según las necesidades del equipo.",
            ],
            ejemplo: [
              "Un equipo de desarrollo que no tiene experiencia en DevOps podría enfrentar dificultades al configurar un servidor de SonarQube y conectarlo a su entorno de CI/CD.",
            ],
          },
          {
            nombre: "Requiere Recursos de Infraestructura",
            info: [
              "SonarQube necesita un servidor dedicado con recursos suficientes para manejar análisis complejos y grandes bases de código, lo que puede ser costoso para organizaciones más pequeñas.",
            ],
            ejemplo: [
              "Una startup tecnológica podría encontrar que el costo de un servidor adecuado para SonarQube excede su presupuesto inicial.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje",
            info: [
              "Comprender cómo usar SonarQube de manera efectiva, desde la interpretación de los informes hasta la configuración de reglas personalizadas, puede requerir tiempo y capacitación.",
            ],
            ejemplo: [
              "Un equipo nuevo en análisis de calidad podría necesitar semanas para aprender a interpretar correctamente las métricas como deuda técnica y cobertura de código.",
            ],
          },
          {
            nombre: "Sobrecarga de Información",
            info: [
              "Los informes generados por SonarQube pueden incluir una gran cantidad de datos, lo que podría ser abrumador para equipos que no tienen un proceso definido para priorizar problemas.",
            ],
            ejemplo: [
              "Un equipo con tiempo limitado para correcciones podría sentirse abrumado al recibir cientos de advertencias y errores tras el primer análisis de su código.",
            ],
          },
          {
            nombre: "Dependencia de Complementos y Licencias",
            info: [
              "Algunas funcionalidades avanzadas, como análisis para ciertos lenguajes o soporte para entornos complejos, pueden requerir licencias comerciales o complementos específicos.",
            ],
            ejemplo: [
              "Un equipo que desarrolla en un lenguaje menos común podría necesitar pagar por una versión comercial de SonarQube para realizar análisis completos.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.SonarQube.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.SonarQube.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "40",
    position: { x: 550, y: 320 },
    data: {
      nodo: 1,
      label: "Bugzilla",
      descripcion:
        "Es una herramienta de código abierto diseñada para el seguimiento de errores (bugs) y la gestión de incidencias en proyectos de desarrollo de software. ",
      labelTitle: "Seguimiento de Incidencias y Gestión de Errores",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Bugzilla fue desarrollado por Mozilla Foundation y es utilizado por grandes empresas como NASA y Mozilla debido a su fiabilidad y flexibilidad.",
        },
        {
          img: imgFoco,
          descripcion:
            "Es una herramienta de código abierto y altamente personalizable, lo que permite a los equipos adaptarlo según sus necesidades específicas.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Bugzilla también rastrear solicitudes de funciones y mejoras del producto, convirtiéndolo en una herramienta de gestión integral.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Define los objetivos de uso, como seguimiento de errores, gestión de solicitudes de características, o análisis de incidencias.",
            ],
          },
          {
            nombre: "Configuración Inicial",
            info: [
              "Proporciona un entorno básico funcional y adecuado para su implementación, configurando los parámetros básicos del sistema.",
            ],
          },
          {
            nombre: "Personalización de Flujos de Trabajo",
            info: [
              "Crea categorías y componentes personalizados para clasificar errores y solicitudes de manera clara.",
            ],
          },
          {
            nombre: "Configuración de Roles y Permisos",
            info: [
              "Establece restricciones para garantizar la seguridad y evitar modificaciones no autorizadas.",
            ],
          },
          {
            nombre: "Capacitación de los Usuarios",
            info: [
              "Capacita a los usuarios en las funciones clave de Bugzilla, como registrar errores, asignar tareas, y generar informes.",
            ],
          },
          {
            nombre: "Prueba Piloto y Validación",
            info: [
              "Detecta problemas y mejora la configuración antes de un lanzamiento completo.",
            ],
          },
          {
            nombre: "Despliegue Completo y Monitoreo",
            info: [
              "Supervisa el uso de la herramienta mediante informes para identificar áreas de mejora.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Interfaz de Usuario Desactualizada",
            info: [
              "La interfaz de Bugzilla puede parecer anticuada y poco intuitiva en comparación con herramientas modernas, lo que puede dificultar su adopción y uso eficiente.",
            ],
            ejemplo: [
              "Un equipo de desarrollo acostumbrado a interfaces más visuales, como las de Jira o Trello, podría encontrar Bugzilla menos atractivo y más complicado de usar.",
            ],
          },
          {
            nombre: "Requiere Conocimientos Técnicos para la Configuración",
            info: [
              "La configuración inicial de Bugzilla puede ser compleja, especialmente para usuarios no técnicos, ya que implica configurar servidores web, bases de datos y ajustar permisos.",
            ],
            ejemplo: [
              "Una pequeña empresa sin un administrador de sistemas dedicado podría enfrentar desafíos al instalar y configurar Bugzilla en su infraestructura.",
            ],
          },
          {
            nombre: "Falta de Integraciones Nativas",
            info: [
              "Bugzilla carece de integraciones nativas con herramientas de desarrollo modernas, lo que podría requerir complementos o desarrollos personalizados para integrarlo en flujos de trabajo existentes.",
            ],
            ejemplo: [
              "Un equipo que usa GitHub para su control de versiones podría necesitar desarrollar scripts personalizados para conectar Bugzilla con sus repositorios.",
            ],
          },
          {
            nombre: "Limitaciones en Funcionalidades Avanzadas",
            info: [
              "Aunque Bugzilla es poderoso para rastrear errores, carece de características avanzadas como análisis visuales, gestión de proyectos o soporte ágil incorporado.",
            ],
            ejemplo: [
              "Un equipo que sigue metodologías ágiles podría encontrar que Bugzilla no soporta tableros kanban ni gestión de sprints de manera nativa.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje Pronunciada",
            info: [
              "Entender todas las funcionalidades y flujos de Bugzilla puede requerir tiempo, especialmente para equipos nuevos o con poca experiencia en gestión de errores.",
            ],
            ejemplo: [
              "Un nuevo miembro del equipo podría necesitar capacitación adicional para aprender a usar Bugzilla de manera efectiva, ralentizando su incorporación al proyecto.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.Bugzilla.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.Bugzilla.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "50",
    position: { x: 450, y: 560 },
    data: {
      nodo: 1,
      label: "TestRail",
      descripcion:
        "Permite la gestión de pruebas y está diseñado para ayudar a los equipos de desarrollo y control de calidad a planificar, ejecutar y rastrear pruebas de software de manera eficiente.",
      labelTitle: "Gestión Eficiente de Pruebas de Desarrollo de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Fue desarrollado por Gurock y es utilizado por una amplia variedad de empresas en diversas industrias para mejorar sus procesos de prueba y asegurar la calidad del software.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite al equipo colaborar en tiempo real, proporcionando acceso a los casos de prueba y resultados desde cualquier lugar a través de su interfaz web.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "TestRail Live Dashboard permite obtener una vista en tiempo real del progreso de las pruebas, lo que facilita el monitoreo continuo del ciclo de pruebas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial y Planificación del Proyecto",
            info: [
              "Realiza un análisis de los requisitos de gestión de pruebas del proyecto, identificando los flujos de trabajo y equipos que utilizarán TestRail.",
            ],
          },
          {
            nombre: "Instalación y Configuración de TestRail",
            info: [
              "Configura los permisos de usuario, roles y flujos de trabajo dentro de la plataforma, según el equipo de pruebas y otras partes interesadas.",
            ],
          },
          {
            nombre: "Definición de Casos de Prueba y Planes de Prueba",
            info: [
              "Define planes de prueba que incluyan las pruebas que se van a ejecutar, los criterios de aceptación y las prioridades.",
            ],
          },
          {
            nombre: "Ejecución de Pruebas y Registro de Resultados",
            info: [
              "Registra los resultados de manera precisa para rastrear el progreso de las pruebas y tomar decisiones sobre la calidad del software.",
            ],
          },
          {
            nombre: "Revisión y Análisis de Resultados",
            info: [
              "Analiza la cobertura de pruebas y asegura que se están cubriendo todas las funcionalidades críticas del software.",
            ],
          },
          {
            nombre: "Generación de Informes",
            info: [
              "Genera informes sobre el estado de las pruebas, incluyendo el progreso, las métricas de calidad y los defectos encontrados.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Costo Elevado",
            info: [
              "TestRail es una herramienta de pago con un modelo de precios por usuario, lo que puede representar un costo significativo para equipos grandes o pequeñas empresas con presupuestos ajustados.",
            ],
            ejemplo: [
              "Una startup en crecimiento podría encontrar que el costo de agregar más usuarios a TestRail es prohibitivo en comparación con herramientas más económicas o gratuitas.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje Inicial",
            info: [
              "TestRail incluye muchas funcionalidades avanzadas que pueden ser difíciles de dominar para usuarios nuevos o equipos sin experiencia en herramientas de gestión de pruebas.",
            ],
            ejemplo: [
              "Un equipo de control de calidad recién formado podría necesitar tiempo y capacitación para comprender cómo organizar casos de prueba y reportes en TestRail.",
            ],
          },
          {
            nombre: "Limitaciones en Personalización",
            info: [
              "Aunque TestRail permite cierta personalización, puede no ser suficiente para organizaciones con necesidades muy específicas en la gestión de pruebas.",
            ],
            ejemplo: [
              "Un equipo que requiere flujos de trabajo altamente personalizados podría encontrar que TestRail no satisface todas sus necesidades sin desarrollos adicionales.",
            ],
          },
          {
            nombre: "Dependencia de Integraciones Externas",
            info: [
              "Si bien TestRail soporta integraciones con muchas herramientas populares, configurarlas correctamente puede ser complicado y algunas integraciones avanzadas requieren complementos o APIs.",
            ],
            ejemplo: [
              "Un equipo que utiliza una herramienta de seguimiento de errores menos conocida podría tener dificultades para integrarla con TestRail sin desarrollos personalizados.",
            ],
          },
          {
            nombre: "Requiere Gestión de Infraestructura (Versión Local)",
            info: [
              "Para equipos que optan por la versión instalada localmente en lugar de la nube, mantener el servidor de TestRail puede requerir recursos técnicos adicionales.",
            ],
            ejemplo: [
              "Una empresa sin un equipo dedicado de TI podría encontrar desafiante mantener la versión local de TestRail actualizada y segura.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.TestRail.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.TestRail.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "60",
    position: { x: -200, y: 560 },
    data: {
      nodo: 1,
      label: "Quality Center",
      descripcion:
        "Permite planificar, rastrear y gestionar el ciclo de vida completo de un proyecto de software.",
      labelTitle: "Gestión de Pruebas de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Quality Center fue inicialmente desarrollado por Mercury Interactive, y luego adquirida por Hewlett-Packard (HP), antes de pasar a Micro Focus.",
        },
        {
          img: imgFoco,
          descripcion:
            "Permite la gestión de requisitos, planificación de pruebas, ejecución, seguimiento de defectos y generación de informes.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Se integra con una variedad de herramientas de desarrollo, pruebas y gestión de proyectos, permitiendo a los equipos mejorar la visibilidad y la comunicación a lo largo del ciclo de vida del software.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Identificación de Requisitos",
            info: [
              "Determina los objetivos principales de uso (gestión de pruebas, seguimiento de defectos, integración con herramientas de desarrollo).",
            ],
          },
          {
            nombre: "Configuración del Entorno Técnico",
            info: [
              "Configura el almacenamiento de datos para pruebas y defectos, seleccionando opciones de servidor local o en la nube.",
            ],
          },
          {
            nombre: "Instalación y Configuración de Roles y Permisos",
            info: [
              "Crea un esquema inicial de carpetas y proyectos dentro de la herramienta y establece niveles de permisos según las responsabilidades del equipo.",
            ],
          },
          {
            nombre: "Personalización del Flujo de Trabajo",
            info: [
              "Configura flujos de trabajo personalizados para pruebas y gestión de defectos, alineándolos con el ciclo de vida de desarrollo del software.",
            ],
          },
          {
            nombre: "Capacitación de Usuarios",
            info: [
              "Proporciona sesiones prácticas para que los usuarios comprendan cómo crear casos de prueba, rastrear defectos y generar informes.",
            ],
          },
          {
            nombre: "Prueba Piloto y Ajustes",
            info: [
              "Implementa un proyecto piloto en un equipo o área limitada para identificar problemas de configuración o procesos que requieran ajustes.",
            ],
          },
          {
            nombre: "Despliegue Completo",
            info: [
              "Despliega, monitorea el uso inicial y recoge retroalimentación para realizar mejoras menores.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Costo Alto de Licencias",
            info: [
              "Quality Center (ahora conocido como ALM de Micro Focus) tiene costos elevados por usuario, lo que puede ser una barrera significativa para equipos pequeños o empresas con presupuestos limitados.",
            ],
            ejemplo: [
              "Una pequeña consultora de software podría considerar alternativas más económicas debido al alto costo de las licencias de Quality Center.",
            ],
          },
          {
            nombre: "Complejidad en la Implementación",
            info: [
              "Configurar y personalizar Quality Center puede ser complejo, especialmente para organizaciones sin experiencia en herramientas avanzadas de gestión de calidad.",
            ],
            ejemplo: [
              "Un equipo nuevo en control de calidad podría necesitar semanas para configurar flujos de trabajo y personalizar el sistema según sus necesidades específicas.",
            ],
          },
          {
            nombre: "Requiere Infraestructura Robusta",
            info: [
              "La instalación local de Quality Center demanda recursos significativos en términos de hardware y mantenimiento, lo que puede ser un desafío para algunas empresas.",
            ],
            ejemplo: [
              "Una empresa con infraestructura limitada podría necesitar invertir en servidores más potentes para garantizar el rendimiento óptimo de Quality Center.",
            ],
          },
          {
            nombre: "Interfaz de Usuario Desactualizada",
            info: [
              "La interfaz de usuario de Quality Center puede parecer anticuada en comparación con herramientas más modernas, lo que puede afectar la experiencia del usuario.",
            ],
            ejemplo: [
              "Un equipo acostumbrado a herramientas con interfaces más dinámicas podría encontrar la navegación y uso de Quality Center menos intuitivos.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje Pronunciada",
            info: [
              "La cantidad de funcionalidades avanzadas puede resultar abrumadora para usuarios nuevos, requiriendo capacitación específica para un uso efectivo.",
            ],
            ejemplo: [
              "Un nuevo analista de calidad podría necesitar varias semanas de formación para aprender a manejar Quality Center eficientemente.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.Quality_Center.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.Quality_Center.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "70",
    position: { x: 550, y: 680 },
    data: {
      nodo: 1,
      label: "Zephyr",
      descripcion:
        "Permite a los equipos de desarrollo y control de calidad planificar, ejecutar y rastrear pruebas de software de manera eficiente, mejorando la calidad a través de integraciones con otras herramientas y reportes en tiempo real.",
      labelTitle: "Gestión Efectiva de Pruebas de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Zephyr fue una de las primeras herramientas de gestión de pruebas en ofrecer una integración directa con JIRA, lo que facilita el seguimiento de errores y pruebas en un solo flujo de trabajo.",
        },
        {
          img: imgFoco,
          descripcion:
            "Es adecuada para equipos de todos los tamaños, desde pequeñas startups hasta grandes empresas, gracias a su capacidad de personalización y escalabilidad.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Ofrece dashboards y reportes en tiempo real, lo que permite a los equipos visualizar el estado de las pruebas y la calidad del software de un vistazo.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación Inicial y Definición de Objetivos",
            info: [
              "Identifica los tipos de pruebas que se gestionarán (manuales, automatizadas, de integración, etc.), y define los objetivos.",
            ],
          },
          {
            nombre: "Configuración del Entorno de Zephyr",
            info: [
              "Personaliza permisos, flujos de trabajo y esquemas de pruebas para que se adapten a la estructura del equipo y el proyecto.",
            ],
          },
          {
            nombre: "Creación de Casos de Prueba",
            info: [
              "Documenta casos de prueba en Zephyr, especificando pasos detallados, condiciones de entrada, resultados esperados y criterios de aceptación.",
            ],
          },
          {
            nombre: "Planificación y Ejecución de Pruebas",
            info: [
              "Crea ciclos de prueba, ejecuta desde la interfaz de Zephyr y registra los resultados (pasado, fallido o bloqueado).",
            ],
          },
          {
            nombre: "Seguimiento y Gestión de Defectos",
            info: [
              "Vincula los casos de prueba fallidos con incidencias en herramientas integradas como JIRA para garantizar la trazabilidad.",
            ],
          },
          {
            nombre: "Monitoreo y Generación de Informes",
            info: [
              "Revisa los informes y métricas generados por Zephyr, incluyendo cobertura de pruebas, tasa de defectos, y progreso general del ciclo de pruebas.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Costo por Usuario",
            info: [
              "Zephyr es una herramienta basada en suscripciones que cobra por usuario, lo cual puede ser una carga significativa para empresas con equipos grandes.",
            ],
            ejemplo: [
              "Un equipo de control de calidad con más de 50 miembros podría enfrentar dificultades al intentar escalar debido al costo acumulado de las licencias de Zephyr.",
            ],
          },
          {
            nombre: "Integraciones Limitadas Fuera del Ecosistema Atlassian",
            info: [
              "Zephyr está diseñado principalmente para integrarse con herramientas del ecosistema Atlassian, como Jira, lo que puede limitar su utilidad para empresas que usan otras plataformas.",
            ],
            ejemplo: [
              "Una organización que utiliza Azure DevOps en lugar de Jira podría encontrar menos opciones de integración o requerir adaptaciones adicionales.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje Inicial",
            info: [
              "A pesar de su interfaz intuitiva, las funcionalidades avanzadas pueden requerir tiempo para que los usuarios nuevos las entiendan completamente.",
            ],
            ejemplo: [
              "Un nuevo tester podría necesitar capacitación para aprender a utilizar funciones como la planificación de pruebas y el análisis de reportes en Zephyr.",
            ],
          },
          {
            nombre: "Dependencia de Conexión a Internet",
            info: [
              "La versión en la nube de Zephyr requiere una conexión a internet constante, lo que puede ser problemático en entornos con acceso limitado o inestable.",
            ],
            ejemplo: [
              "Una empresa con operaciones en áreas rurales podría experimentar problemas para acceder a Zephyr debido a la conectividad irregular.",
            ],
          },
          {
            nombre: "Costo Adicional por Funcionalidades Avanzadas",
            info: [
              "Algunas características avanzadas, como el análisis de pruebas o integraciones premium, pueden requerir licencias adicionales.",
            ],
            ejemplo: [
              "Un equipo que necesita análisis detallados podría tener que adquirir complementos adicionales, incrementando el costo total.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.Zephyr.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.Zephyr.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "80",
    position: { x: 450, y: 440 },
    data: {
      nodo: 1,
      label: "Selenium",
      descripcion:
        "Suite de herramientas de código abierto diseñada para para automatizar la prueba de aplicaciones web en diferentes navegadores y sistemas operativos.",
      labelTitle: "Automatización de Pruebas en Aplicaciones Web",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Soporta varios lenguajes de programación, lo que permite a los desarrolladores crear scripts de prueba en el lenguaje de su preferencia y facilitar su integración en pipelines de CI/CD.",
        },
        {
          img: imgFoco,
          descripcion:
            "Selenium permite la ejecución de pruebas en múltiples navegadores, lo cual asegura una experiencia de usuario consistente en todos los entornos.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Su componente principal, Selenium WebDriver, permite la interacción directa con los elementos de las páginas web, emulando el comportamiento del usuario para lograr un alto nivel de precisión en las pruebas.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Identificación y Definición de Requisitos",
            info: [
              "Define el alcance de las pruebas automatizadas (regresión, funcionales, carga, etc.)., estructura y contenido en los documentos existentes.",
            ],
          },
          {
            nombre: "Configuración del Entorno Técnico",
            info: [
              "Instala navegadores compatibles y sus controladores WebDriver y configura lenguajes de programación como Python, Java, o C#.",
            ],
          },
          {
            nombre: "Instalación de Selenium",
            info: [
              "Integración de Selenium WebDriver en el entorno de desarrollo utilizando un gestor de dependencias como Maven, Gradle o pip.",
            ],
          },
          {
            nombre: "Creación de un Test Framework",
            info: [
              "Diseña y desarrolla un marco basado en patrones como Page Object Model (POM) para facilitar el mantenimiento.",
            ],
          },
          {
            nombre: "Desarrollo de Scripts de Prueba Automatizados",
            info: [
              "Usa funciones de Selenium como manejo de elementos dinámicos, ventanas emergentes y automatización de formularios.",
            ],
          },
          {
            nombre: "Ejecución de Pruebas Iniciales y Validación",
            info: [
              "Ejecuta pruebas en un entorno controlado para validar la precisión de los scripts y el marco de trabajo.",
            ],
          },
          {
            nombre: "Implementación en el Ciclo de Desarrollo",
            info: [
              "Integra las pruebas automatizadas como parte del ciclo de vida del desarrollo (SDLC).",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Curva de Aprendizaje Pronunciada",
            info: [
              "El uso de Selenium requiere conocimientos técnicos avanzados en programación y comprensión de conceptos relacionados con pruebas automatizadas.",
            ],
            ejemplo: [
              "Un tester manual sin experiencia previa en programación podría enfrentar dificultades al escribir scripts en Selenium WebDriver.",
            ],
          },
          {
            nombre: "Falta de Soporte Integrado para Reportes",
            info: [
              "Selenium no proporciona funcionalidades nativas para generar reportes, lo que obliga a los equipos a integrar herramientas de terceros.",
            ],
            ejemplo: [
              "Un equipo podría necesitar usar frameworks como TestNG o ExtentReports para visualizar resultados de pruebas de manera efectiva.",
            ],
          },
          {
            nombre: "Complejidad en el Mantenimiento de Scripts",
            info: [
              "Los scripts de prueba son propensos a romperse si la aplicación sufre cambios frecuentes en la interfaz de usuario, requiriendo un esfuerzo continuo de mantenimiento.",
            ],
            ejemplo: [
              "Un equipo que trabaja en una aplicación web en constante evolución podría gastar una cantidad significativa de tiempo actualizando sus scripts de prueba.",
            ],
          },
          {
            nombre: "Limitaciones en Pruebas de Componentes no Web",
            info: [
              "Selenium está diseñado exclusivamente para pruebas de aplicaciones web, lo que lo hace inadecuado para pruebas de aplicaciones móviles o de escritorio sin complementos adicionales.",
            ],
            ejemplo: [
              "Un equipo que desee realizar pruebas automatizadas en una aplicación móvil necesitaría usar herramientas adicionales como Appium.",
            ],
          },
          {
            nombre: "Requerimientos de Infraestructura",
            info: [
              "La ejecución de pruebas en múltiples navegadores y sistemas operativos puede requerir una infraestructura robusta y compleja, como Selenium Grid.",
            ],
            ejemplo: [
              "Un equipo pequeño sin acceso a recursos en la nube podría tener dificultades para configurar y mantener un entorno de Selenium Grid local.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.Selenium.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.Selenium.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
  {
    id: "90",
    position: { x: -200, y: 440 },
    data: {
      nodo: 1,
      label: "TestComplete",
      descripcion:
        "Establece un conjunto de formatos y documentos para planificar, diseñar, ejecutar y reportar pruebas de software, asegurando un proceso de pruebas coherente y completo.",
      labelTitle: "Automatización de Pruebas de Software",
      sabias_que: [
        {
          img: imgChat,
          descripcion:
            "Reduce el tiempo y esfuerzo necesarios para llevar a cabo pruebas manuales, permitiendo a los equipos concentrarse en tareas más críticas.",
        },
        {
          img: imgFoco,
          descripcion:
            "Ofrece soporte para la automatización de pruebas de aplicaciones móviles a través de su integración con Appium, lo que amplía su funcionalidad más allá de las pruebas de escritorio y web.",
        },
        {
          img: imgPreguntas,
          descripcion:
            "Se integra con otras herramientas de SmartBear y sistemas de gestión de pruebas, como JIRA y TestRail, permitiendo un flujo de trabajo cohesivo entre equipos.",
        },
      ],
      opciones: [
        {
          img: imgProcesImplement,
          descripcion: "Proceso de Implementación",
        },
        {
          img: imgHoja,
          descripcion: "Limitaciones y Desafíos",
        },
        {
          img: imgVideo,
          descripcion: "Tutoriales/Vídeos",
        },
        {
          img: imgEstrellaAzul,
          descripcion: "Páginas oficiales",
        },
      ],
      proceso_implementacion: {
        data: [
          {
            nombre: "Evaluación de Requisitos y Capacidades",
            info: [
              "Determina si TestComplete satisface las necesidades específicas del proyecto y qué objetivos logrará su implementación.",
            ],
          },
          {
            nombre: "Configuración del Entorno de Pruebas",
            info: [
              "Configura los accesos para los miembros del equipo, asignando roles según las tareas de prueba.",
            ],
          },
          {
            nombre: "Diseño y Creación de Casos de Prueba",
            info: [
              "Crea casos de prueba utilizando las capacidades de grabación y reproducción de TestComplete para facilitar la automatización inicial.",
            ],
          },
          {
            nombre: "Validación y Ejecución Inicial",
            info: [
              "Garantiza que los casos de prueba automatizados funcionen correctamente antes de su implementación completa.",
            ],
          },
          {
            nombre: "Ejecución y Monitoreo de Pruebas",
            info: [
              "Ejecuta los scripts regularmente, según el cronograma (regresión, pruebas diarias, etc.) y monitorea los resultados.",
            ],
          },
          {
            nombre: "Generación de Informes y Análisis",
            info: [
              "Revisa los informes detallados generados por TestComplete, que incluyen datos sobre pruebas aprobadas, fallidas, y tiempo de ejecución.",
            ],
          },
        ],
        url_pdf: "",
      },
      limitaciones_desafios: {
        data: [
          {
            nombre: "Costo Elevado de Licencias",
            info: [
              "TestComplete es una herramienta de automatización comercial con un costo significativo, lo que puede ser una barrera para pequeñas y medianas empresas.",
            ],
            ejemplo: [
              "Una startup con presupuesto limitado podría optar por herramientas de código abierto como Selenium debido al costo de las licencias de TestComplete.",
            ],
          },
          {
            nombre: "Curva de Aprendizaje para Funcionalidades Avanzadas",
            info: [
              "Aunque ofrece una interfaz amigable, aprovechar al máximo sus funcionalidades avanzadas requiere tiempo y capacitación.",
            ],
            ejemplo: [
              "Un nuevo tester podría necesitar formación adicional para configurar pruebas automatizadas utilizando sus capacidades de reconocimiento de objetos y scripting.",
            ],
          },
          {
            nombre: "Requerimientos de Hardware",
            info: [
              "TestComplete puede ser demandante en términos de recursos, especialmente al ejecutar pruebas simultáneas o proyectos grandes.",
            ],
            ejemplo: [
              "Un equipo con máquinas de bajo rendimiento podría experimentar problemas de velocidad al ejecutar pruebas complejas.",
            ],
          },
          {
            nombre: "Compatibilidad Limitada con Herramientas Externas",
            info: [
              "Aunque TestComplete admite integraciones con varias herramientas, puede no ser tan flexible como otros frameworks más abiertos para integrarse con ciertos sistemas personalizados.",
            ],
            ejemplo: [
              "Una empresa que utiliza un sistema de gestión de pruebas personalizado podría encontrar dificultades para conectarlo a TestComplete sin desarrollar soluciones específicas.",
            ],
          },
          {
            nombre: "Dependencia del Proveedor",
            info: [
              "Al ser una herramienta propietaria, las actualizaciones, el soporte y la funcionalidad dependen completamente del proveedor.",
            ],
            ejemplo: [
              "Si el proveedor decide descontinuar una funcionalidad clave, un equipo podría necesitar reestructurar su flujo de trabajo para adaptarse.",
            ],
          },
        ],
      },
      tutorialVideo: pagVideo.nodoUno.ramaTres.TestComplete.tutorialVideo,
      paginaOficial: pagVideo.nodoUno.ramaTres.TestComplete.paginaOficial,
    },
    type: "Section",
    className: styleText,
  },
];

export const nodoUno = [
  nodoNormasInternacionales,
  nodoEstandaresCalidad,
  nodoHerramientasAseguCalidad,
];
