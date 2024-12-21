import { Link } from "react-router-dom";
import logoFlexmapp from "../../assets/logo-flexmapp.svg";
import buscador from "../../assets/buscador.svg";
import { MENU } from "./helper/menu";
import { SetStateAction, useEffect, useState } from "react";
import Search from "./search/Search";
import { AnimatePresence } from "framer-motion";

type typeMenu = {
  position: string;
  setViewMenu?: React.Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ position, setViewMenu }: typeMenu) => {
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    if (visibleSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visibleSearch]);

  return (
    <>
      <header className={`${position} pt-6 z-50 w-[90%] h-[4rem]  m-auto`}>
        <div
          className={`flex justify-between ${
            position == "absolute" ? "bg-[var(--c)] shadow-md rounded" : ""
          } p-1 items-center`}
        >
          <div className="flex gap-4">
            <div>
              <Link to={"/"}>
                <img src={logoFlexmapp} alt="" className="w-[2.5rem]" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  onClick={() => {
                    setVisibleSearch(true);
                  }}
                  readOnly
                  type="text"
                  className="p-1 bg-[#231346] w-[13rem] hover:opacity-70 cursor-pointer
                rounded pl-[1.6rem] text-slate-100 border border-slate-600 outline-none"
                />
                <img
                  src={buscador}
                  alt=""
                  className="absolute top-[6px] left-[5px]"
                />
              </div>
            </div>
          </div>
          <nav className="">
            <ul className="lg:flex hidden w-[18rem] lg:w-auto">
              {MENU.map((e, i) => (
                <li
                  key={i}
                  className="cursor-default 
              group relative"
                >
                  <p className="text-slate-100 pl-4 pr-4 group-hover:text-blue-300">
                    {e.nombre}
                  </p>
                  <ul
                    className="group-hover:flex flex-col gap-2 p-3 rounded
                absolute hidden bg-[var(--colorm)] -left-[9.8rem] shadow-md"
                  >
                    {e.lista.map((l, x) => (
                      <Link
                        key={x}
                        to={l.ruta}
                        className="min-w-[12.5rem] block"
                      >
                        <p className="text-slate-200 p-1 hover:text-blue-300 w-full ">
                          {l.nombre}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div
              onClick={() => {
                if (setViewMenu) {
                  setViewMenu((e) => !e);
                }
              }}
              className="flex lg:hidden flex-col gap-1 group rotate-180 w-6"
            >
              <span
                className="inline-block w-5 h-[2px] bg-white 
            group-hover:w-4 rounded transition-all duration-150"
              ></span>
              <span
                className="inline-block w-3 h-[2px] bg-white 
            group-hover:w-5 rounded transition-all duration-150"
              ></span>
              <span
                className="inline-block w-5 h-[2px] bg-white 
            group-hover:w-3 rounded transition-all duration-150"
              ></span>
            </div>
          </nav>
        </div>
      </header>
      <AnimatePresence>
        {visibleSearch && <Search setVisibleSearch={setVisibleSearch} />}
      </AnimatePresence>
    </>
  );
};
export default Menu;
