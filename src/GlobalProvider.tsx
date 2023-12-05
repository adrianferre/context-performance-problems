import React, { useState, useContext, ReactNode } from "react";

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

type Labels = string[];

const GlobalContext = React.createContext<{
  user: typeof USER;
  labels: Labels;
  onAddLabel: () => void;
}>({
  user: USER,
  labels: [],
  onAddLabel: () => null,
});

interface ILabelsProvider {
  children: ReactNode | ReactNode[];
}

const GlobalProvider = ({ children }: ILabelsProvider) => {
  const [labels, setLabels] = useState<Labels>([]);

  const handleAddLabel = () => {
    setLabels((oldLabels) => [
      ...oldLabels,
      LABELS[oldLabels.length % LABELS.length],
    ]);
  };

  return (
    <GlobalContext.Provider
      value={{ user: USER, labels, onAddLabel: handleAddLabel }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () =>
  useContext<{
    user: typeof USER;
    labels: Labels;
    onAddLabel: () => void;
  }>(GlobalContext);

export default GlobalProvider;

export { GlobalContext, useGlobalContext };
