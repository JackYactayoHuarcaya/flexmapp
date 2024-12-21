import typeInformacion from "../../../../../@types/typeInformacion";
import React from "react";

const SabiasQue = ({ data }: { data: typeInformacion | undefined }) => {
  return (
    <div className="mt-3 p-6 bg-[rgba(38,21,71,85)] rounded shadow-[0_0_3px_var(--bg2)] ">
      {data?.ventajas && (
        <h4 className="text-lg font-bold text-slate-100 pl-2 fonttilt">
          {data?.nodo === 3 && "Requisitos y Documentación"}
          {data?.nodo === 4 || data?.nodo === 2 ? "Ventajas" : ""}
        </h4>
      )}
      <div
        className={`grid ${
          data?.nodo === 3 || data?.nodo === 4 ? "" : "grid-cols-2"
        } text-slate-300`}
      >
        {data?.ventajas?.map((e, i) => (
          <p key={i} className="list-item amaranth">
            {e}
          </p>
        ))}
      </div>
      <h4 className="text-lg font-bold text-slate-100 pl-2 mt-2 fonttilt">
        {data?.nodo === 3 ? "Ventajas y Beneficios" : "¿Sabías qué...?"}
      </h4>
      {data?.nodo === 3 ? (
        <div>
          {data.sabias_que?.map((e, i) => (
            <p key={i} className="list-item text-slate-100">
              {e.descripcion}
            </p>
          ))}
        </div>
      ) : (
        <div className="mt-2 flex flex-col gap-3">
          <div className="text-[var(--t)]">
            <ul className="flex gap-3">
              <span className="flex w-[15%] items-center">
                {data?.sabias_que[0]?.img &&
                  React.createElement(data.sabias_que[0].img)}
              </span>
              <div className="w-[85%] list-item">
                <li className="text-sm amaranth ">
                  {(data && data.sabias_que[0]?.descripcion) ??
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed nemo commodi, esse error nulla, architecto aliquam repellat minus, qui molestias quod consequuntur. Magni itaque quibusdam praesentium, ipsum maxime dolorum."}
                </li>
              </div>
            </ul>
          </div>
          <div className="text-[var(--t)]">
            <ul className="flex gap-3">
              <span className="flex w-[15%] items-center">
                {data?.sabias_que[1]?.img &&
                  React.createElement(data?.sabias_que[1]?.img)}
              </span>
              <div className="w-[85%] list-item">
                <p className="text-sm list-item amaranth">
                  {(data && data.sabias_que[1]?.descripcion) ??
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed nemo commodi, esse error nulla, architecto aliquam repellat minus, qui molestias quod consequuntur. Magni itaque quibusdam praesentium, ipsum maxime dolorum."}
                </p>
              </div>
            </ul>
          </div>
          {data && data.sabias_que[2]?.descripcion ? (
            <li className=" text-[var(--t)] list-none">
              <ul className="flex gap-3">
                <span className="flex w-[15%] items-center">
                  {data.sabias_que[2].img &&
                    React.createElement(data.sabias_que[2].img)}
                </span>
                <li className="w-[85%]">
                  <p className="text-sm amaranth">
                    {(data && data.sabias_que[2]?.descripcion) ??
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed nemo commodi, esse error nulla, architecto aliquam repellat minus, qui molestias quod consequuntur. Magni itaque quibusdam praesentium, ipsum maxime dolorum."}
                  </p>
                </li>
              </ul>
            </li>
          ) : null}
        </div>
      )}
    </div>
  );
};
export default SabiasQue;
