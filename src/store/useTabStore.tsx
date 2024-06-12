import { create } from "zustand";

type State = {
    tab: number;
};

type Action = {
    setTab: (state: number) => void;
};

export const useTabStore = create<State & Action>((set) => ({
    tab: 1,
    setTab: (index: number) => {
        set({ tab: index });
    },
}));
