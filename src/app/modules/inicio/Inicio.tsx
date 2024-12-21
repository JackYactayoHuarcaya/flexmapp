import { Helmet } from "react-helmet";
import Menu from "../../components/Menu";
import logoFlexmapp from "../../../assets/logo-flexmapp.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuSM from "../../components/MenuSM";
import { AnimatePresence, motion } from "framer-motion";
import SVGMap from "../../components/helper/SVGMap";
import Ruta from "./Ruta";

const Inicio = () => {
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
    <div className="overflow-hidden md:overflow-visible">
      <Helmet>
        <title>Flexmapp</title>
        <meta
          name="description"
          content="UNDC,Universidad Nacional de Cañete, Ingeniería de Software, 
          Este proyecto está diseñado para proporcionar una manera innovadora y visual de gestionar el 
          conocimiento en ingeniería de software."
        />
      </Helmet>
      <div className=" w-full min-h-screen bg-gradient-to-tl to-[var(--color1)] from-[var(--color2)]">
        <Menu position="relative" setViewMenu={setViewMenu} />
        <AnimatePresence>
          {viewMenu == false ? (
            <motion.div
              key={"main"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8 } }}
              className="w-[100%] m-auto"
            >
              <main
                className="text-slate-100 w-[90%] m-auto min-h-[82vh] 
          flex items-center -mt-[10rem] lg:-mt-0 "
              >
                <div
                  className="flex flex-col-reverse
            justify-center  lg:flex-row"
                >
                  <div className="lg:w-[45%] -mt-[7rem] lg:-mt-0 flex items-center ">
                    <div className="w-full">
                      <div className="mt-6">
                        <h1
                          className="inline text-4xl sm:text-6xl 
                        lg:text-7xl sm:mt-6 lg:w-[90%] w-full font-extrabold
                  bg-clip-text text-transparent  pb-4 lg:pb-0
                  bg-gradient-to-r from-[var(--bg1)] to-[var(--bg2)]"
                        >
                          Flexmapp
                        </h1>
                        <h2
                          className="text-4xl sm:text-5xl 
                        lg:text-6xl font-bold mt-1"
                        >
                          Ingeniería de Software
                        </h2>
                      </div>
                      <div className="">
                        <p className=" text-[var(--colort)] mt-4">
                          El ingeniero de software no solo construye programas,
                          sino también puentes entre ideas y soluciones. Cada
                          línea de código es una oportunidad para mejorar el
                          mundo, un paso hacia la innovación que transforma lo
                          imposible en realidad.
                        </p>
                      </div>
                      <div className="mb-6">
                        <Link to={"/ruta"}>
                          <button
                            className=" button_first p-1 pl-4 pr-4 rounded mt-6 text-lg
                            from-[var(--bg1)] to-[var(--bg2)] bg-gradient-to-r "
                          >
                            Iniciar
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[55%] flex justify-center h-full">
                    <div
                      className="h-auto relative items-center
                w-[95%] mt-14 lg:-mt-[4rem] flex justify-center"
                    >
                      <div
                        className="absolute bg-slate-400 w-[415px] 
                      h-[472px] rotate-90 rounded-full opacidadEfecto opacity-0
                      blur-[90px] from-[var(--bg1)] to-[var(--bg2)] bg-gradient-to-l
                      "
                      ></div>
                      <SVGMap />
                      <img
                        src={logoFlexmapp}
                        className="absolute z-50 w-[8rem] sm:w-[11rem] lg:w-[14rem]"
                      />
                    </div>
                  </div>
                </div>
              </main>
            </motion.div>
          ) : (
            <motion.div
              key={"menu"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8 } }}
            >
              <MenuSM />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Ruta />
    </div>
  );
};
export default Inicio;
