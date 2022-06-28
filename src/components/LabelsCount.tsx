import { memo } from "react";

import { useLabels } from "../LabelsProvider";

function LabelsCount() {
  console.log("Render LabelsCount");

  const [labels] = useLabels();

  return <h1>{`I have ${labels.length} labels in my App`}</h1>;
}

export default memo(LabelsCount);
