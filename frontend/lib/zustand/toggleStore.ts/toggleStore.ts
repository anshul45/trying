import { create } from "zustand";
import { type ToggleState } from "./types";

const toggleStore = create<ToggleState>((set, get) => ({
  showPipeline: false,
  showInputBox:false,
  showSideBar:true,
  updateShowPipeline: () => {
    set((state) => ({
      showPipeline: !state.showPipeline,
    }));
  },
  updateShowInputBox: () => {
    set((state) => ({
      showInputBox: !state.showInputBox,
    }));
  },
  updateShowSideBar: () => {
    set((state) => ({
      showSideBar: !state.showSideBar,
    }));
  },
}));

export default toggleStore;
