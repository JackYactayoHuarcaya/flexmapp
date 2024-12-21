import { SetStateAction, useRef, useState } from "react";
import close from "../../../../../../assets/close.svg";
import typeInformacion, {
  typeProceso,
} from "../../../../../@types/typeInformacion";
import "../../../../../../styles/index.css";
import SabiasQue from "./SabiasQue";
import Opciones from "./Opciones";
import ProcesoImplement from "../procesoImple/ProcesoImple";
import Video from "../video/Video";
import { AnimatePresence, motion } from "framer-motion";
import Material from "../materialDinamico/Material";
import LimitacionDesafio from "../limitacionDesafio/LimitacionDesafio";
import CicloVida from "../cicloVida/CicloVida";
import UsabilidadEx from "../usabilidadExperiencia/UsabilidadEx";
import ValidacionEfi from "../validacionEficiencia/ValidacionEfi";
import EstrategiaCla from "../estrategiaClave/EstrategiaCla";
import HerramientaSol from "../herramientaSolucion/HerramientaSol";
import audioNotification from "../../../../../components/audio/notification-alert-269289.mp3";
import audioEfecto from "../../../../../components/audio/fast-simple-chop-5-6270.mp3";
const playAudio = ({ video }: { video: boolean }) => {
  const audio = new Audio();
  audio.src = video ? audioEfecto : audioNotification;
  audio.play();
};
type typeInformacionPage = {
  data: typeInformacion | undefined;
  desactiveInformacion: React.Dispatch<SetStateAction<boolean>>;
  activeInformacion: boolean;
};

const Informacion = ({
  data,
  desactiveInformacion,
}: // activeInformacion,
// activeInformacion,
typeInformacionPage) => {
  // proceso de implementacion --------------------------------------------------
  const [procesoImplementacion, setProcesoImplementacion] = useState(false);
  const [objectProceso, setObjectProceso] = useState<typeProceso>();
  const procImplementacion = useRef<HTMLDivElement>(null);
  // tutorial - video -----------------------------------------------------------
  const [tutorialVideo, setTutorialVideo] = useState(false);
  // ciclo de vida del software ------------------------------------------
  const [cicloVida, setCicloVida] = useState(false);
  const procCicloVida = useRef<HTMLDivElement>(null);
  // limitacion de desafio -----------------------------------------------
  const [procesoDesafio, setProcesoDesafio] = useState(false);
  const procDesaf = useRef<HTMLDivElement>(null);
  // usabilidad y experiencia --------------------------------------------
  const [usabilidadExperiencia, setUsabilidadExperiencia] = useState(false);
  const usaExp = useRef<HTMLDivElement>(null);
  // validacion Eficiencia -----------------------------------------------
  const [validacionEficiencia, setValidacionEficiencia] = useState(false);
  const valEfi = useRef<HTMLDivElement>(null);
  // Estrategias Clave ---------------------------------------------------
  const [estrategiaClave, setEstrategiaClave] = useState(false);
  const estraClave = useRef<HTMLDivElement>(null);
  // herramienta Solucion ------------------------------------------------
  const [herramientaSolucion, setHerramientaSolucion] = useState(false);
  const herraSol = useRef<HTMLDivElement>(null);
  // material dinamico ---------------------------------------------------
  const [materialDinamico, setMaterialDinamico] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ease: "easeInOut", duration: 0.5 },
        }}
        exit={{ opacity: 0, x: "100%", transition: { duration: 0.5 } }}
        className={`absolute top-0 w-full min-h-screen
        z-[50] bg-informacion overflow-hidden`}
      >
        {/* informacion de cada nodo ................................ */}
        <AnimatePresence>
          {!procesoImplementacion &&
            !materialDinamico &&
            !cicloVida &&
            !procesoDesafio &&
            !usabilidadExperiencia &&
            !validacionEficiencia &&
            !estrategiaClave &&
            !herramientaSolucion && (
              <motion.div
                initial={{ x: 200 }}
                animate={{
                  x: 0,
                }}
                className="w-full min-h-screen flex"
              >
                <div
                  onClick={() => {
                    desactiveInformacion(false);
                    setMaterialDinamico(false);
                    setProcesoDesafio(false);
                    setCicloVida(false);
                    setUsabilidadExperiencia(false);
                    setValidacionEficiencia(false);
                    setEstrategiaClave(false);
                    setHerramientaSolucion(false);
                    playAudio({ video: true });
                  }}
                  className="hidden sm:block sm:w-full"
                ></div>
                <div className="shadow-md  shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[37rem] max-w-[40rem] bg-[#3B285D] ">
                  <div className="p-2 flex justify-end">
                    <img
                      onClick={(e) => {
                        const el = e.target as HTMLImageElement;
                        el.classList.add("closeAnimate");
                        setTimeout(() => {
                          el.classList.remove("closeAnimate");
                          desactiveInformacion(false);
                        }, 300);
                      }}
                      src={close}
                      alt=""
                      className="mr-4 p-1"
                    />
                  </div>
                  <div className="w-full">
                    <div className="w-[90%] m-auto">
                      {/* entidad..... */}
                      <div className="pb-2">
                        <h2 className="text-slate-100 text-md">
                          <span
                            className="p-2 pr-6 pl-6 inline-block fonttilt 
                    bg-[rgba(38,21,71,85)] shadow-[0_0_3px_var(--bg2)] rounded"
                          >
                            {data?.label ?? "titulo"}
                          </span>
                        </h2>
                      </div>
                      {/* datos ...... */}
                      <div className="h-[84vh] p-2 overflow-y-auto scroll-style">
                        {/* titulo ...... */}
                        <div>
                          <h3 className="mt-2">
                            <span className="inline-block font-bold text-slate-50 text-xl fonttilt ">
                              {data?.labelTitle ??
                                "Sub titulo.........................."}
                            </span>
                          </h3>
                        </div>
                        {/* descripcion....... */}
                        <div>
                          <p className="text-[var(--t)] baldo">
                            {data?.descripcion ??
                              data?.description ??
                              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed nemo commodi, esse error nulla, architecto aliquam repellat minus, qui molestias quod consequuntur. Magni itaque quibusdam praesentium, ipsum maxime dolorum."}
                          </p>
                        </div>
                        {/* sabias que......?  */}
                        <div>
                          <SabiasQue data={data} />
                        </div>
                        {/* otras opciones........ */}
                        <div>
                          <Opciones
                            setObjectProceso={setObjectProceso}
                            setMaterialDinamico={setMaterialDinamico}
                            setProcesoImplementacion={setProcesoImplementacion}
                            setTutorialVideo={setTutorialVideo}
                            setProcesoLimDesafio={setProcesoDesafio}
                            setCicloVida={setCicloVida}
                            setUsabilidadExperiencia={setUsabilidadExperiencia}
                            setEstrategiaClave={setEstrategiaClave}
                            setHerramientaSolucion={setHerramientaSolucion}
                            setValidacionEficiencia={setValidacionEficiencia}
                            data={data}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
        {/* proceso implementación ................................. */}
        <AnimatePresence>
          {procesoImplementacion && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={procImplementacion}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === procImplementacion.current) {
                  setProcesoImplementacion(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <ProcesoImplement
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                  data={objectProceso}
                  setProcesoImplementacion={setProcesoImplementacion}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* limitaciones y desafíos .................................*/}
        <AnimatePresence>
          {procesoDesafio && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={procDesaf}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === procDesaf.current) {
                  setProcesoDesafio(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <LimitacionDesafio
                  setProcesoLimDesafio={setProcesoDesafio}
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* ciclo de vida ........................................... */}
        <AnimatePresence>
          {cicloVida && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={procCicloVida}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === procCicloVida.current) {
                  setCicloVida(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <CicloVida
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                  setProcesoCicloVida={setCicloVida}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* usabilidad y experiencia ............................... */}
        <AnimatePresence>
          {usabilidadExperiencia && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={usaExp}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === usaExp.current) {
                  setUsabilidadExperiencia(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <UsabilidadEx
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo || -1}
                  setUsabilidadExperiencia={setUsabilidadExperiencia}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* validación y eficiencia ............................... */}
        <AnimatePresence>
          {validacionEficiencia && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={valEfi}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === valEfi.current) {
                  setValidacionEficiencia(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <ValidacionEfi
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                  setValidacionEficiencia={setValidacionEficiencia}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Estrategias Clave ............................... */}
        <AnimatePresence>
          {estrategiaClave && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={estraClave}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === estraClave.current) {
                  setEstrategiaClave(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <EstrategiaCla
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                  setValidacionEficiencia={setValidacionEficiencia}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* herramienta Solucion ............................... */}
        <AnimatePresence>
          {herramientaSolucion && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={herraSol}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === herraSol.current) {
                  setHerramientaSolucion(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <HerramientaSol
                  data={objectProceso}
                  label={data?.label ?? ""}
                  nodo={data?.nodo ?? -1}
                  setHerramientaSolucion={setHerramientaSolucion}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* material dinamico ....................................... */}
        <AnimatePresence>
          {materialDinamico && (
            <motion.div
              key={"proceso-implement"}
              initial={{ x: 200 }}
              animate={{
                x: 0,
              }}
              exit={{ x: 200 }}
              ref={procImplementacion}
              className="w-full   min-h-screen flex justify-end"
              onClick={(e) => {
                if (e.target === procImplementacion.current) {
                  setMaterialDinamico(false);
                }
              }}
            >
              <div className="shadow-md shadow-slate-800 w-[100%] sm:w-[40%] min-h-screen  sm:min-w-[36rem] max-w-[40rem] bg-[#3B285D] ">
                <Material url={data?.material || ""} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* tutorial video ......................................... */}
        <AnimatePresence>
          {tutorialVideo && (
            <Video
              tutorialVideo={tutorialVideo}
              setTutorialVideo={setTutorialVideo}
              video={data?.tutorialVideo ?? ""}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
export default Informacion;
