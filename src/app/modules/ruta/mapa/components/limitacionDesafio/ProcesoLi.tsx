import { typeProceso } from "../../../../../@types/typeInformacion";
type typeProcesos = {
  data: typeProceso | undefined;
};

const ProcesoLi = ({ data }: typeProcesos) => {
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
            <div>
              {e.info.map((e, x) => (
                <li key={x} className="list-disc ml-5 font-light ">
                  {e}
                </li>
              ))}
            </div>
            <div>
              <p className="font-normal">Ejemplo: </p>
              {e.ejemplo &&
                e?.ejemplo.map((e, x) => (
                  <li key={x} className="list-none ml-5 font-light ">
                    {e}
                  </li>
                ))}
            </div>
          </ul>
        ))}
    </div>
  );
};
export default ProcesoLi;
