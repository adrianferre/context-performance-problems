import React, { useState, useContext, ReactNode, useCallback } from "react";

const LABELS = [
  "Vehicle Line Center",
  "Curb",
  "Building",
  "Transition",
  "Road sign",
  "Traffic Light",
];

type Labels = string[];

const LabelsContext = React.createContext<[Labels, () => void]>([
  [],
  () => null,
]);

interface ILabelsProvider {
  children: ReactNode | ReactNode[];
}

const LabelsProvider = ({ children }: ILabelsProvider) => {
  const [labels, setLabels] = useState<Labels>([]);

  const handleAddLabel = useCallback(() => {
    setLabels((oldLabels) => [
      ...oldLabels,
      LABELS[oldLabels.length % LABELS.length],
    ]);
  }, []);

  return (
    <LabelsContext.Provider value={[labels, handleAddLabel]}>
      {children}
    </LabelsContext.Provider>
  );
};

const useLabels = () => useContext<[Labels, () => void]>(LabelsContext);

export default LabelsProvider;

export { LabelsProvider, useLabels };
