// import motion from "framer-motion/client";
import { MENU } from "./helper/menu";
import { Link } from "react-router-dom";

const MenuSM = () => {
  return (
    <div className="flex justify-center mt-10">
      <ul className="w-[22rem] select-none">
        {MENU.map((e, i) => (
          <li
            key={i}
            className="cursor-default 
              group relative"
          >
            <label>
              <input type="checkbox" className="hidden peer" id="toggle" />
              <span
                className="block text-slate-100 pl-4 pb-2
             pt-8 border-b border-gray-800 
             pr-4 group-hover:text-blue-400 "
              >
                {e.nombre}
              </span>
              <ul
                className="peer-checked:flex flex-col gap-2 p-3 rounded
                 hidden -left-[3.8rem] shadow-md"
              >
                {e.lista.map((l, x) => (
                  <Link
                    key={x}
                    to={l.ruta}
                    className="min-w-[12.5rem] cursor-default pl-4"
                  >
                    <p className="text-slate-200 p-1 hover:text-gray-500 ">
                      {l.nombre}
                    </p>
                  </Link>
                ))}
              </ul>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuSM;
