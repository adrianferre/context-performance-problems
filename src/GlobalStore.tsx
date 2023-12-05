import { create } from "zustand";

const USER = {
  firstName: "Santiago",
  lastName: "Illi",
};

const LABELS = [
  "Vehicle Line Center",
  "Curb",
  "Building",
  "Transition",
  "Road sign",
  "Traffic Light",
];

type GlobalStoreState = {
  user: typeof USER;
  labels: string[];
  onAddLabel: () => void;
};

export const useGlobalStore = create<GlobalStoreState>((set, get) => ({
  user: USER,
  labels: [],
  onAddLabel: () =>
    set({
      labels: [...get().labels, LABELS[get().labels.length % LABELS.length]],
    }),
}));
