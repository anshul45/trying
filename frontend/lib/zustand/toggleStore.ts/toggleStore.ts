import { create } from "zustand";
import { type ToggleState } from "./types";

const toggleStore = create<ToggleState>((set, get) => ({
  showPipeline: false,
  updateShowPipeline: () => {
    set((state) => ({
      showPipeline: !state.showPipeline,
    }));
  },
}));

export default toggleStore;
