import { create } from "zustand";

import { UserItemList } from "./types";

interface Ecuot {
  user: UserItemList | undefined;
  setUser: (user: UserItemList | undefined) => void;
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useEcuot = create<Ecuot>((set) => ({
  user: undefined,
  setUser: (user) => {
    set({ user });
  },
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
