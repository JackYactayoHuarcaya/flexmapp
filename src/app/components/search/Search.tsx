import { motion } from "framer-motion";
import { Node } from "@xyflow/react";
import { ChangeEvent, SetStateAction, useRef, useState } from "react";
import buscador from "../../../assets/buscador.svg";
// nodo 1 ------------------------------------------------------------------------------
import {
  nodoHerramientasAseguCalidad,
  nodoEstandaresCalidad,
  nodoNormasInternacionales,
} from "../../modules/ruta/nodos/nodo1-regulaciones";
// nodo 2 ------------------------------------------------------------------------------
import {
  nodoTrazabilidadRequerimiento,
  nodoRevisionRequerimiento,
  nodoTecnicaValidacion,
} from "../../modules/ruta/nodos/nodo2-control";
// nodo 3 ------------------------------------------------------------------------------
import {
  nodoEvaluacionDisenioSistema,
  nodoPruevaDisenio,
  nodoRevisionArquitectonica,
} from "../../modules/ruta/nodos/nodo3-validacion";
// nodo 4 ------------------------------------------------------------------------------
import {
  nodoGestionProyectSoftware,
  nodoHabilidadesLiderazgo,
  nodoPlanificacionSoftware,
} from "../../modules/ruta/nodos/nodo4-exito";
import useUrl from "../../context/url";
import routes from "../../routes/routes";

type typeSearch = {
  setVisibleSearch: React.Dispatch<SetStateAction<boolean>>;
};

type typeList = {
  val: string;
  posicion: {
    seccion: number;
    nodo: number;
    bttn: number;
  };
};
type typeArraySearch = {
  nombre: string;
  lista: typeList[];
};

const Search = ({ setVisibleSearch }: typeSearch) => {
  const { setUrlNodo } = useUrl();

  const container = useRef<HTMLDivElement>(null);

  const [inputSearch, setInputSearch] = useState("");
  const [arraySearch, setArraySearch] = useState<typeArraySearch[]>([]);

  const actionArraySearch = (
    arrayNodo: Node[],
    val: string,
    nameNode: string,
    nodo: number,
    seccion: number
  ): typeArraySearch => {
    const arrayList: typeArraySearch = {
      nombre: nameNode,
      lista: [],
    };
    arrayNodo.filter((arrayEl, i) => {
      if (arrayEl.data?.labelTitle) {
        const text = arrayEl.data?.labelTitle as string;
        const el = text.toLowerCase();

        if (i !== 0 && el.includes(val)) {
          arrayList.lista.push({
            val: text,
            posicion: { seccion, nodo, bttn: i },
          });
        }
      }
      if (i !== 0 && arrayEl.data?.label) {
        const text = arrayEl.data?.label as string;
        const el = text.toLowerCase();
        if (el.includes(val)) {
          arrayList.lista.push({
            val: text,
            posicion: { seccion, nodo, bttn: i },
          });
        }
      }
      if (i !== 0 && arrayEl.data?.descripcion) {
        const text = arrayEl.data?.descripcion as string;
        const el = text.toLowerCase();
        if (el.includes(val)) {
          arrayList.lista.push({
            val: text,
            posicion: { seccion, nodo, bttn: i },
          });
        }
      }
    });
    return arrayList;
  };

  const searchArray = (e: ChangeEvent) => {
    const val = (e.target as HTMLInputElement).value;
    setInputSearch(val);

    setArraySearch([]);
    const arrayNewSearch: typeArraySearch[] = [];
    // Nodo 1 regulaciones -----------------
    const arrayNormas = actionArraySearch(
      nodoNormasInternacionales,
      val,
      "Normas",
      0,
      0
    );
    const arrayEstCalidad = actionArraySearch(
      nodoEstandaresCalidad,
      val,
      "Estandares de calidad",
      0,
      1
    );
    const arrayHerrAseg = actionArraySearch(
      nodoHerramientasAseguCalidad,
      val,
      "Herramienta de aseguramiento",
      0,
      2
    );

    // Nodo 2 control ----------------------
    const arrayTrazReq = actionArraySearch(
      nodoTrazabilidadRequerimiento,
      val,
      "Trazabilidad de requerimiento",
      1,
      0
    );
    const arrayReviReq = actionArraySearch(
      nodoRevisionRequerimiento,
      val,
      "Revisión de requerimiento",
      1,
      1
    );
    const arrayTecnVal = actionArraySearch(
      nodoTecnicaValidacion,
      val,
      "Técnica de validación",
      1,
      2
    );
    // Nodo 3 validación ----------------------
    const arrayEvalDiSis = actionArraySearch(
      nodoEvaluacionDisenioSistema,
      val,
      "Evaluación del diseño de sistemas",
      2,
      0
    );
    const arrayPrueDise = actionArraySearch(
      nodoPruevaDisenio,
      val,
      "Pruevas de diseño",
      2,
      1
    );
    const arrayReviArqui = actionArraySearch(
      nodoRevisionArquitectonica,
      val,
      "Revisión arquitectonica",
      2,
      2
    );
    // Nodo 4 Éxito ----------------------------
    const arrayGestProSoft = actionArraySearch(
      nodoGestionProyectSoftware,
      val,
      "Gestión proyecto software",
      3,
      0
    );
    const arrayHabiLide = actionArraySearch(
      nodoHabilidadesLiderazgo,
      val,
      "habilidades de liderazgo",
      3,
      1
    );
    const arrayPlaniSoft = actionArraySearch(
      nodoPlanificacionSoftware,
      val,
      "Planificación de software",
      3,
      2
    );
    // nodo 1
    arrayNewSearch.push(arrayNormas);
    arrayNewSearch.push(arrayEstCalidad);
    arrayNewSearch.push(arrayHerrAseg);
    // nodo 2
    arrayNewSearch.push(arrayTrazReq);
    arrayNewSearch.push(arrayReviReq);
    arrayNewSearch.push(arrayTecnVal);
    // nodo 3
    arrayNewSearch.push(arrayEvalDiSis);
    arrayNewSearch.push(arrayPrueDise);
    arrayNewSearch.push(arrayReviArqui);
    // nodo 4
    arrayNewSearch.push(arrayGestProSoft);
    arrayNewSearch.push(arrayHabiLide);
    arrayNewSearch.push(arrayPlaniSoft);
    // agregar ---------------------------
    setArraySearch(arrayNewSearch);
  };

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        const div = e.target as HTMLDivElement;
        if (div === container.current) {
          setVisibleSearch(false);
        }
      }}
      className="w-full h-full z-50 flex justify-center
    absolute top-0 bg-[#231346d0] overflow-hidden"
    >
      <div className="md:w-[42rem] md:h-[32rem] w-full md:mt-12 h-full relative bg-gray-900  rounded-xl shadow">
        <div className="ml-8 md:hidden mt-2">
          <span
            onClick={() => {
              setVisibleSearch(false);
            }}
            className="text-slate-100 p-1 bg-slate-600 pr-3 pl-3 rounded"
          >
            close
          </span>
        </div>
        <div className="relative mt-4 w-[90%] m-auto">
          <input
            onChange={searchArray}
            value={inputSearch}
            type="text"
            placeholder="Busqueda"
            className="p-2 bg-[#231346] w-full hover:opacity-70 cursor-default text-xl
                rounded-md pl-[1.8rem] text-slate-100 border border-blue-900 outline-none"
          />
          <img
            src={buscador}
            alt=""
            className="absolute top-[12px] left-[5px]"
          />
        </div>
        <div className="w-[90%] h-[85%] flex flex-col gap-2 scroll-style overflow-y-auto m-auto ">
          {arraySearch.map((e, z) => (
            <div key={z} className="flex flex-col gap-2 cursor-default">
              {e.lista.length >= 1 && (
                <div className="">
                  <p className="text-[#a77eff] font-bold text-2xl">
                    {e.nombre}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {e.lista.map((li, i) => (
                      <li
                        onClick={() => {
                          setUrlNodo(
                            Object.values(routes[z])[0],
                            li.posicion.nodo,
                            li.posicion.seccion,
                            li.posicion.bttn
                          );
                        }}
                        key={i}
                        className="text-slate-100 flex items-center 
                        bg-[#49327ad0] h-[2.3rem] p-1 rounded hover:opacity-70"
                      >
                        <p className="whitespace-nowrap overflow-hidden text-lg">
                          {li.val}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Search;
