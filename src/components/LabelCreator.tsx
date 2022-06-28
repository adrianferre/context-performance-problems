import { useState } from "react";

const LABELS = [
  "Vehicle Line Center",
  "Curb",
  "Building",
  "Transition",
  "Road sign",
  "Traffic Light",
];

function LabelCreator() {
  console.log("Render LabelCreator");
  const [labels, setLabels] = useState<string[]>([]);

  function handleAddLabel() {
    setLabels((oldLabels) => [
      ...oldLabels,
      LABELS[oldLabels.length % LABELS.length],
    ]);
  }

  return (
    <div>
      <button onClick={handleAddLabel}>{"+1"}</button>
      <ol>
        {labels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ol>
    </div>
  );
}

export default LabelCreator;
