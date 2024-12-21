export type typeSabiasQue = {
  img: string;
  descripcion: string;
};

export type typeOpcion = {
  img: string;
  descripcion: string;
};
export type typeProceso = {
  data: [
    {
      nombre: string;
      info: string[];
      ejemplo?: string[];
    }
  ];
  url_pdf?: "";
};

type typeInformacion = {
  label: string;
  nodo: number;
  descripcion: string;
  description: string;
  labelTitle: string;
  sabias_que: typeSabiasQue[];
  opciones: typeOpcion[];
  ventajas?: string[];
  proceso_implementacion?: typeProceso;
  limitaciones_desafios?: typeProceso;
  tutorialVideo?: string;
  paginaOficial?: string;
  cicloVida?: typeProceso;
  material?: string;
  usabilidadExperiencia?: typeProceso;
  validacionEficiencia?: typeProceso;
  EstrategiasClave?: typeProceso;
  herramientaSolucion?: typeProceso;
};

export default typeInformacion;
