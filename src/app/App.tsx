import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Inicio from "./modules/inicio/Inicio";
import Mapa from "./modules/ruta/mapa/Mapa";
import {
  nodoEstandaresCalidad,
  nodoHerramientasAseguCalidad,
  nodoNormasInternacionales,
  unionEstandaresCalidad,
  unionHerramientasAseguCalidad,
  unionNormasInternacionales,
} from "./modules/ruta/nodos/nodo1-regulaciones";
import {
  nodoRevisionRequerimiento,
  nodoTecnicaValidacion,
  nodoTrazabilidadRequerimiento,
  unionRevisionRequerimiento,
  unionTecnicaValidacion,
  unionTrazabilidadRequerimiento,
} from "./modules/ruta/nodos/nodo2-control";
import {
  nodoEvaluacionDisenioSistema,
  nodoPruevaDisenio,
  nodoRevisionArquitectonica,
  unionEvaluacionDisenioSistema,
  unionPruevaDisenio,
  unionRevisionArquitectonica,
} from "./modules/ruta/nodos/nodo3-validacion";
import {
  nodoGestionProyectSoftware,
  nodoPlanificacionSoftware,
  nodoHabilidadesLiderazgo,
  unionGestionProyectSoftware,
  unionPlanificacionSoftware,
  unionHabilidadesLiderazgo,
} from "./modules/ruta/nodos/nodo4-exito";
import {
  nodeNodoPrincipalEdge,
  unionNodoPrincipalEdge,
} from "./modules/ruta/nodos/nodoPrincipal";
import routes from "./routes/routes";
import useUrl from "./context/url";
import { useEffect } from "react";
const App = () => {
  // busqueda --------------------------
  const location = useLocation();
  const navigate = useNavigate();
  const { url, nodo, setUrlNodo } = useUrl();
  useEffect(() => {
    if (url && nodo >= 0) {
      navigate(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  // remover la ruta ------------------------
  useEffect(() => {
    setUrlNodo("", -1, -1, -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" Component={Inicio} />
      <Route
        path="/ruta"
        element={
          <Mapa
            nodoArr={nodeNodoPrincipalEdge}
            union={unionNodoPrincipalEdge}
          />
        }
      />
      {/* nodo 1 ..................................................... */}
      <Route
        path={routes[0].normasEstandares}
        element={
          <Mapa
            nodoArr={nodoNormasInternacionales}
            union={unionNormasInternacionales}
          />
        }
      />
      <Route
        path={routes[1].estandarCalidad}
        element={
          <Mapa
            nodoArr={nodoEstandaresCalidad}
            union={unionEstandaresCalidad}
          />
        }
      />
      <Route
        path={routes[2].herramientalAsegu}
        element={
          <Mapa
            nodoArr={nodoHerramientasAseguCalidad}
            union={unionHerramientasAseguCalidad}
          />
        }
      />
      {/* nodo 2 ..................................................... */}
      <Route
        path={routes[3].tecnicaValidacion}
        element={
          <Mapa
            union={unionTecnicaValidacion}
            nodoArr={nodoTecnicaValidacion}
          />
        }
      />
      <Route
        path={routes[4].revisionRequerimiento}
        element={
          <Mapa
            union={unionRevisionRequerimiento}
            nodoArr={nodoRevisionRequerimiento}
          />
        }
      />
      <Route
        path={routes[5].trazabilidadRequerimiento}
        element={
          <Mapa
            union={unionTrazabilidadRequerimiento}
            nodoArr={nodoTrazabilidadRequerimiento}
          />
        }
      />
      {/* nodo3 ..............................................................*/}
      <Route
        path={routes[6].evaluacionDisenioSistema}
        element={
          <Mapa
            union={unionEvaluacionDisenioSistema}
            nodoArr={nodoEvaluacionDisenioSistema}
          />
        }
      />
      <Route
        path={routes[7].revisionArquitectonica}
        element={
          <Mapa
            union={unionRevisionArquitectonica}
            nodoArr={nodoRevisionArquitectonica}
          />
        }
      />
      <Route
        path={routes[8].pruevaDisenio}
        element={
          <Mapa union={unionPruevaDisenio} nodoArr={nodoPruevaDisenio} />
        }
      />
      {/* nodo4 ..............................................................*/}
      <Route
        path={routes[9].proyectSoftware}
        element={
          <Mapa
            union={unionGestionProyectSoftware}
            nodoArr={nodoGestionProyectSoftware}
          />
        }
      />
      <Route
        path={routes[10].planificacionSoftware}
        element={
          <Mapa
            union={unionPlanificacionSoftware}
            nodoArr={nodoPlanificacionSoftware}
          />
        }
      />
      <Route
        path={routes[11].habilidadesLiderazgo}
        element={
          <Mapa
            union={unionHabilidadesLiderazgo}
            nodoArr={nodoHabilidadesLiderazgo}
          />
        }
      />
    </Routes>
  );
};
export default App;
