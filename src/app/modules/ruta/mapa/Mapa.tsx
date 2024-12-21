import { Helmet } from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../../components/Menu";
import {
  ReactFlow,
  Node,
  Edge,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import MenuSM from "../../../components/MenuSM";
import { lazy, Suspense, useEffect, useState } from "react";

import typeInformacion from "../../../@types/typeInformacion";
import { Section } from "../../../components/helper/section/Section";
import { useLocation, useNavigate } from "react-router-dom";
import useUrl from "../../../context/url";
const Informacion = lazy(() => import("./components/informacion/Informacion"));
import { nodoUno } from "../nodos/nodo1-regulaciones";
import { nodoDos } from "../nodos/nodo2-control";
import { nodoTres } from "../nodos/nodo3-validacion";
import { nodoCuatro } from "../nodos/nodo4-exito";
import audioEfecto from "../../../components/audio/fast-simple-chop-5-6270.mp3";

const playAudio = () => {
  const audio = new Audio();
  audio.src = audioEfecto;
  audio.play();
};

const arrayNodosSearch = [nodoUno, nodoDos, nodoTres, nodoCuatro];

const NormasEstandares = ({
  union,
  nodoArr,
}: {
  union: Edge[];
  nodoArr: Node[];
}) => {
  const [activeInformacion, setActiveInformacion] = useState(false);
  const [informacionAdd, setInformacionAdd] = useState<typeInformacion>();
  const navigate = useNavigate();
  // Función para ajustar el viewport automáticamente
  const ajustarVista = () => {
    const graph = document.querySelector(
      ".react-flow__viewport"
    ) as HTMLElement;
    // Zoom máximo (ajustar el valor según lo que soporte React Flow, como 2 o 3)
    const zoomMaximo = 0.7;
    graph.style.transition = "0.4s";
    // Aplica el zoom máximo y mueve el lienzo hacia la izquierda
    graph.style.transform = `translate(20%, 10%) scale(${zoomMaximo})`;
    // Quita la transición después de que haya pasado el tiempo de animación (0.4s en este caso)
    setTimeout(() => {
      graph.style.transition = "none"; // Elimina la transición después de 0.4s
    }, 400); // 400ms corresponde a 0.4s
  };
  const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
    // Ejecuta la función específica de cada nodo
    if (node.data) {
      if (node.data.labelTitle) {
        const title = node.data.labelTitle as string;
        if (title.length >= 1) {
          const data = node.data as typeInformacion;
          setInformacionAdd(data);
          setActiveInformacion(true);
          ajustarVista(); // Ajusta la vista al nodo clicado
          playAudio();
        }
      }
      if (node.data.url) {
        navigate(node.data.url);
      }
    }
  };

  const [viewMenu, setViewMenu] = useState(false);

  // nodos ----------------------
  const nodeType = { Section };

  // url-ruta ----------------------
  const location = useLocation();

  useEffect(() => {
    const removeMenu = () => {
      if (window.innerWidth >= 1020) {
        setViewMenu(false);
      }
    };
    window.addEventListener("resize", removeMenu);
    setViewMenu(false);
    return () => {
      window.removeEventListener("resize", removeMenu);
    };
  }, [location.pathname]);

  // search - abrir la informacion ----------------------------------------------
  const { nodo, seccion, bttn, setUrlNodo } = useUrl();

  useEffect(() => {
    if (nodo >= 0) {
      const data = arrayNodosSearch[nodo][seccion][bttn]
        ?.data as typeInformacion;
      if (data) {
        setInformacionAdd(data);
        setActiveInformacion(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodo]);

  //--- eliminar: nodo - seccion - bttn
  useEffect(() => {
    if (!activeInformacion) {
      setUrlNodo("", -1, -1, -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeInformacion]);

  // ------------------------------------

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="w-full max-h-screen relative overflow-hidden
      bg-gradient-to-tl to-[var(--color1)] from-[var(--color2)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Helmet>
          <title>Flexmap - mapa</title>
        </Helmet>
        <div className="w-full flex justify-center">
          <Menu
            position={`${viewMenu == true ? "relative" : "absolute"}`}
            setViewMenu={setViewMenu}
          />
        </div>
        {viewMenu == false ? (
          <ReactFlow
            nodeTypes={nodeType}
            className="z-10"
            nodes={nodoArr}
            edges={union}
            onNodeClick={handleNodeClick}
            fitView
            onLoadedDataCapture={() => {
              alert("hello");
            }}
            fitViewOptions={{ padding: 0.4 }}
            // nodeTypes={nodeTypes}
            // viewport={{ zoom: 0.6, x: 0, y: 0 }}
            elementsSelectable={false}
            proOptions={{ hideAttribution: true }} //desabilita el boton inferior
            // panOnDrag={false} // Deshabilita el arrastre del lienzo con el mouse
            // zoomOnScroll={false} // Deshabilita el zoom con scroll del mouse
            // nodesConnectable={false} // Deshabilita la conexión de nodos (evitar jalar líneas)
            // zoomOnPinch={false} // Deshabilita el zoom con pellizco (en dispositivos táctiles)
            // panOnScroll={false} // Deshabilita el paneo al usar el scroll
            // zoomOnDoubleClick={false} // Deshabilita el zoom al hacer doble clic
            // preventScrolling={false} // Evita que se desplace el lienzo en dispositivos táctiles
          >
            <Background />
            <Controls />
            <MiniMap className="bg-slate-800" />
          </ReactFlow>
        ) : (
          <motion.div
            key={"menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
          >
            <MenuSM />
          </motion.div>
        )}
        <AnimatePresence>
          {activeInformacion && (
            <Suspense fallback={""}>
              <Informacion
                activeInformacion={activeInformacion}
                data={informacionAdd}
                desactiveInformacion={setActiveInformacion}
              />
            </Suspense>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default NormasEstandares;
