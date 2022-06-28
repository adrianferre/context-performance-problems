import { memo } from "react";

import { useLabels } from "../LabelsProvider";

function LabelCreator() {
  console.log("Render LabelCreator");

  const [, onAddLabel] = useLabels();

  return (
    <div>
      <button onClick={onAddLabel}>{"+1"}</button>
    </div>
  );
}

export default memo(LabelCreator);
