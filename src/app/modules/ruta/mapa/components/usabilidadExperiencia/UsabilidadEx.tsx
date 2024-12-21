import Usabilidad from "./Usabilidad";
import imgRetroceso from "../../../../../../assets/retroceder.svg";
import { typeProceso } from "../../../../../@types/typeInformacion";

type typeUsabilidadEx = {
  data: typeProceso | undefined;
  label: string;
  nodo: number;
  setUsabilidadExperiencia: React.Dispatch<React.SetStateAction<boolean>>;
};
const UsabilidadEx = ({
  data,
  label,
  setUsabilidadExperiencia,
}: typeUsabilidadEx) => {
  return (
    <div className="mt-2 w-[88%] m-auto">
      <div>
        <img
          onClick={() => {
            setUsabilidadExperiencia(false);
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
          Usabilidad y Experiencia del Usuario (UX)
        </h2>
      </div>
      <div>
        <Usabilidad data={data} />
      </div>
    </div>
  );
};
export default UsabilidadEx;
