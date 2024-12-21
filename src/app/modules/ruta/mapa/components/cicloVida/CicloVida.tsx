import { typeProceso } from "../../../../../@types/typeInformacion";
import ProcesosCiclo from "./ProcesosCiclo";
import imgRetroceso from "../../../../../../assets/retroceder.svg";
import { SetStateAction } from "react";
// import { motion } from "framer-motion";

type typeProcesoImplement = {
  data: typeProceso | undefined;
  label: string;
  nodo: number;
  setProcesoCicloVida: React.Dispatch<SetStateAction<boolean>>;
};

const CicloVida = ({
  data,
  label,
  setProcesoCicloVida,
}: typeProcesoImplement) => {
  return (
    <div className="mt-2 w-[88%] m-auto">
      <div>
        <img
          onClick={() => {
            setProcesoCicloVida(false);
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
          Integración en el Ciclo de vida del Software
        </h2>
      </div>
      <div>
        <ProcesosCiclo data={data} />
      </div>
    </div>
  );
};
export default CicloVida;
