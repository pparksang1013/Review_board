import { create } from "zustand";

type State = {
    modal: boolean;
};

type Action = {
    setModal: (state: boolean) => void;
};

export const useModalStore = create<State & Action>((set) => ({
    modal: false,
    setModal: (state) => {
        set({ modal: state });
    },
}));
