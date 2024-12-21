import { typeProceso } from "../../../../../@types/typeInformacion";
type typeUsabilidad = {
  data: typeProceso | undefined;
};

const Herramienta = ({ data }: typeUsabilidad) => {
  return (
    <div className="h-[78vh] flex flex-col gap-3 p-2 overflow-y-auto scroll-style">
      {data &&
        data.data.map((e, i) => (
          <ul
            key={i}
            className="bg-[var(--c)] rounded-[8px]  text-[var(--t)] shadow-[0_0_3px_#BD34FE] font-bold text-xl-md text-slate-100 p-3"
          >
            <p className="text-white text-md font-bold">{`${i + 1}. ${
              e.nombre
            }`}</p>
            {e.info.map((e, x) => (
              <li key={x} className="list-disc ml-5 font-light ">
                {e}
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};
export default Herramienta;
