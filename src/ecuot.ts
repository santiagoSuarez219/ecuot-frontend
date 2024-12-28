import { create } from "zustand";

import { ConflictResponse, UserItemList } from "./types";

interface Ecuot {
  user: UserItemList | undefined;
  setUser: (user: UserItemList | undefined) => void;
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  conflict: ConflictResponse | undefined;
  setConflict: (conflict: ConflictResponse | undefined) => void;
}

export const useEcuot = create<Ecuot>((set) => ({
  user: undefined,
  setUser: (user) => {
    set({ user });
  },
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  conflict: undefined,
  setConflict: (conflict) => {
    set({ conflict });
  },
}));
