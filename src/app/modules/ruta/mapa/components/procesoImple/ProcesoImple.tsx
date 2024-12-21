import { typeProceso } from "../../../../../@types/typeInformacion";
import Procesos from "./Procesos";
import imgRetroceso from "../../../../../../assets/retroceder.svg";
import { SetStateAction } from "react";
// import { motion } from "framer-motion";

type typeProcesoImplement = {
  data: typeProceso | undefined;
  label: string;
  nodo: number;
  setProcesoImplementacion: React.Dispatch<SetStateAction<boolean>>;
};

const ProcesoImplement = ({
  data,
  label,
  setProcesoImplementacion,
}: typeProcesoImplement) => {
  return (
    <div className="mt-2 w-[88%] m-auto">
      <div>
        <img
          onClick={() => {
            setProcesoImplementacion(false);
          }}
          className="p-1 hover:opacity-70"
          src={imgRetroceso}
          alt=""
        />
      </div>
      <div className="mt-2">
        <span
          className="p-2 pr-6 pl-6 inline-block fonttilt text-white
          bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] rounded"
        >
          {label}
        </span>
      </div>
      <div className="mb-2">
        <h2 className="fonttilt text-white text-2xl mt-4 text-center">
          Proceso de Implementación
        </h2>
      </div>
      <div>
        <Procesos data={data} />
      </div>
    </div>
  );
};
export default ProcesoImplement;
