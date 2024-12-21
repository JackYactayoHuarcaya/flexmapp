import { create } from "zustand";

type typeUseUrl = {
  url: string;
  nodo: number;
  seccion: number;
  bttn: number;
  setUrlNodo: (url: string, id: number, seccion: number, bttn: number) => void;
};

const useUrl = create<typeUseUrl>((set) => ({
  url: "",
  nodo: -1,
  seccion: -1,
  bttn: -1,
  setUrlNodo: (url: string, id: number, seccion: number, bttn: number) => {
    set(() => ({ url, nodo: id, seccion, bttn }));
  },
}));
export default useUrl;
