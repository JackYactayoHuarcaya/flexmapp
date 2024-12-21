import typeInformacion, {
  typeProceso,
} from "../../../../../@types/typeInformacion";
import React, { SetStateAction } from "react";
import audioNotification from "../../../../../components/audio/notification-alert-269289.mp3";
import audioEfecto from "../../../../../components/audio/fast-simple-chop-5-6270.mp3";
const playAudio = ({ video }: { video: boolean }) => {
  const audio = new Audio();
  audio.src = video ? audioEfecto : audioNotification;
  audio.play();
};
type typeOpciones = {
  data: typeInformacion | undefined;
  setProcesoImplementacion: React.Dispatch<SetStateAction<boolean>>;
  setObjectProceso: React.Dispatch<SetStateAction<typeProceso | undefined>>;
  setTutorialVideo: React.Dispatch<SetStateAction<boolean>>;
  setMaterialDinamico: React.Dispatch<SetStateAction<boolean>>;
  setProcesoLimDesafio: React.Dispatch<SetStateAction<boolean>>;
  setCicloVida: React.Dispatch<SetStateAction<boolean>>;
  setUsabilidadExperiencia: React.Dispatch<SetStateAction<boolean>>;
  setValidacionEficiencia: React.Dispatch<SetStateAction<boolean>>;
  setEstrategiaClave: React.Dispatch<SetStateAction<boolean>>;
  setHerramientaSolucion: React.Dispatch<SetStateAction<boolean>>;
};

const Opciones = ({
  data,
  setObjectProceso,
  setProcesoImplementacion,
  setTutorialVideo,
  setMaterialDinamico,
  setProcesoLimDesafio,
  setCicloVida,
  setUsabilidadExperiencia,
  setEstrategiaClave,
  setHerramientaSolucion,
  setValidacionEficiencia,
}: typeOpciones) => {
  return (
    <div className="mt-5 mb-2 cursor-default text-lg">
      <div className="grid grid-cols-2 gap-2">
        <li
          onClick={() => {
            playAudio({ video: false });
            if (data?.proceso_implementacion) {
              setObjectProceso(data.proceso_implementacion);
              setProcesoImplementacion(true);
            } else if (data?.cicloVida) {
              setObjectProceso(data.cicloVida);
              setCicloVida(true);
            } else if (data?.usabilidadExperiencia) {
              setObjectProceso(data.usabilidadExperiencia);
              setUsabilidadExperiencia(true);
            } else if (data?.EstrategiasClave) {
              setObjectProceso(data.EstrategiasClave);
              setEstrategiaClave(true);
            }
          }}
          className="list-none bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] flex items-center p-2 rounded hover:opacity-60"
        >
          <div className=" p-1 relative">
            <div className="flex items-center gap-2 ">
              <span className="whitespace-normal ">
                <p className="break-words text-[var(--t)] fonttilt text-base">
                  {(data && data.opciones[0]?.descripcion) ?? "añadaddkdda"}
                </p>
              </span>
              <span className="w-full flex justify-end">
                {data?.opciones[0].img &&
                  React.createElement(data?.opciones[0].img)}
              </span>
            </div>
          </div>
        </li>
        <li
          onClick={() => {
            playAudio({ video: false });
            if (data?.limitaciones_desafios) {
              setObjectProceso(data.limitaciones_desafios);
              setProcesoLimDesafio(true);
            } else if (data?.material) {
              setMaterialDinamico(true);
            } else if (data?.validacionEficiencia) {
              setObjectProceso(data?.validacionEficiencia);
              setValidacionEficiencia(true);
            } else if (data?.herramientaSolucion) {
              setObjectProceso(data?.herramientaSolucion);
              setHerramientaSolucion(true);
            }
          }}
          className="list-none bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] flex items-center p-2 rounded hover:opacity-60"
        >
          <div className=" p-1 relative">
            <div className="flex gap-2 items-center">
              <span className="whitespace-normal">
                <p className="break-words text-[var(--t)] fonttilt text-base">
                  {(data && data.opciones[1]?.descripcion) ?? "añmksadad"}
                </p>
              </span>
              <span className="">
                {data?.opciones[1].img &&
                  React.createElement(data?.opciones[1].img)}
              </span>
            </div>
          </div>
        </li>
        <li
          onClick={() => {
            if (data?.tutorialVideo) {
              setTutorialVideo(true);
              playAudio({ video: true });
            }
          }}
          className="list-none bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] flex items-center p-2 rounded hover:opacity-60"
        >
          <div className=" p-1 relative">
            <div className="flex gap-2 items-center">
              <span className="whitespace-normal">
                <p className="break-words text-[var(--t)] fonttilt text-base">
                  {(data && data.opciones[2]?.descripcion) ?? "ñakdmassded"}
                </p>
              </span>
              <span className="">
                {data?.opciones[2].img &&
                  React.createElement(data?.opciones[2].img)}
              </span>
            </div>
          </div>
        </li>
        <li className="list-none bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] flex items-center p-2 rounded hover:opacity-60">
          <a href={data?.paginaOficial}>
            <div className=" p-1 relative">
              <div className="flex items-center gap-2">
                <span className="whitespace-normal">
                  <p className="break-words text-[var(--t)] fonttilt text-base">
                    {(data && data.opciones[3]?.descripcion) ?? "añkdlaassad"}
                  </p>
                </span>
                <span className="">
                  {data?.opciones[3].img &&
                    React.createElement(data?.opciones[3].img)}
                </span>
              </div>
            </div>
          </a>
        </li>
      </div>
    </div>
  );
};
export default Opciones;
