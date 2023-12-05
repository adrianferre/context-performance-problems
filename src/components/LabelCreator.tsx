import { useGlobalContext } from "../GlobalProvider";

function LabelCreator() {
  console.log("Render LabelCreator");

  const { onAddLabel } = useGlobalContext();

  return (
    <div>
      <button onClick={onAddLabel}>{"+1"}</button>
    </div>
  );
}

export default LabelCreator;
