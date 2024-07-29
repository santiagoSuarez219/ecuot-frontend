import { create } from "zustand";

import { UserItemList } from "./types";

interface Ecuot {
  user: UserItemList | undefined;
  setUser: (user: UserItemList | undefined) => void;
}

export const useEcuot = create<Ecuot>((set) => ({
  user: undefined,
  setUser: (user) => {
    set({ user });
  },
}));
