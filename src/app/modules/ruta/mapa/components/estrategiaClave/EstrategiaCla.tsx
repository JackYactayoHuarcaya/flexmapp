import imgRetroceso from "../../../../../../assets/retroceder.svg";
import { typeProceso } from "../../../../../@types/typeInformacion";
import Estrategia from "./Estrategia";

type typeUsabilidadEx = {
  data: typeProceso | undefined;
  label: string;
  nodo: number;
  setValidacionEficiencia: React.Dispatch<React.SetStateAction<boolean>>;
};
const EstrategiaCla = ({
  label,
  data,
  setValidacionEficiencia,
}: typeUsabilidadEx) => {
  return (
    <div className="mt-2 w-[88%] m-auto">
      <div>
        <img
          onClick={() => {
            setValidacionEficiencia(false);
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
          Estrategias Claves
        </h2>
      </div>
      <div>
        <Estrategia data={data} />
      </div>
    </div>
  );
};
export default EstrategiaCla;
