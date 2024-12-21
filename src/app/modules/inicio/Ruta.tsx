import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "../../components/helper/menu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuSM from "../../components/MenuSM";
const Ruta = () => {
  const [viewMenu, setViewMenu] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
          setViewMenu(false);
        }
      });
    }
  }, []);
  return (
    <div>
      <div className="pb-4 w-full min-h-screen bg-gradient-to-tl to-[var(--color1)] from-[var(--color2)]">
        <AnimatePresence>
          {viewMenu === false ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8 } }}
              className="w-[100%] min-h-screen  m-auto"
            >
              <main className="w-[90%] m-auto">
                <div className="pt-12">
                  <div className="flex justify-center ">
                    <h1
                      className="md:text-5xl text-4xl fontchicken pt-4
                  font-bold bg-clip-text text-transparent pb-4 text-center
                  bg-gradient-to-r from-[var(--bg1)] to-[var(--bg2)]"
                    >
                      "FLEXMAPP: Aprende fácil, explora sin límites"
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-slate-300 text-center inline-block w-[70%]">
                      Este proyecto está diseñado para proporcionar una manera
                      innovadora y visual de gestionar el conocimiento en
                      ingeniería de software. A través de una representación
                      gráfica interactiva, los estudiantes, desarrolladores, y
                      profesionales podrán explorar y profundizar en los
                      principales conceptos, normas y metodologías que son
                      fundamentales en el campo del desarrollo de software.
                    </p>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="">
                    <div className="text-slate-100 relative flex items-center">
                      <div className="h-[1px] w-full bg-slate-800"></div>
                      <h2 className="inline-block w-[20rem] text-center p-1 border border-slate-800 rounded">
                        Mapa de Rutas
                      </h2>
                      <div className="w-full h-[1px] bg-slate-800"></div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-slate-200  grid grid-cols-1 lg:grid-cols-2">
                    {MENU.map((e, i) => (
                      <li
                        key={i}
                        className="list-none mt-2 flex justify-center"
                      >
                        <div>
                          <h3 className="text-xl text-[var(--bg1)] font-semibold font-[chicken]">
                            {e.nombre_next}
                          </h3>
                          <ul className="mt-2 flex flex-col gap-3">
                            {e.lista.map((l, x) => (
                              <li key={x} className="ml-6">
                                <Link
                                  className="border inline-block w-[28rem] bg-[#261547] hover:border-slate-500
                             border-[#261547] shadow-[0_0_6px_#BD34FE] p-2 rounded cursor-default"
                                  to={l.ruta}
                                >
                                  <div className="flex h-[8rem] justify-around items-center">
                                    <div>
                                      <p className="text-[#BBBCF1] font-bold text-lg w-36 ">
                                        {l.nombre}
                                      </p>
                                    </div>
                                    <div>
                                      <img src={l.img} alt="" />
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              </main>
            </motion.div>
          ) : (
            <MenuSM />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Ruta;
