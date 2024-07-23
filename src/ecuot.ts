import { create } from "zustand";

import { UserResponse } from "./types";

interface Ecuot {
  user: UserResponse | undefined;
  setUser: (user: UserResponse | undefined) => void;
}

export const useEcuot = create<Ecuot>((set) => ({
  user: undefined,
  setUser: (user) => {
    set({ user });
  },
}));
