import { useGlobalContext } from "../GlobalProvider";

function LabelsList() {
  console.log("Render LabelsCount");

  const { labels } = useGlobalContext();

  return (
    <>
      <h1>{`I have ${labels.length} labels in my App`}</h1>
      {labels.map((l) => (
        <li>{l}</li>
      ))}
    </>
  );
}

export default LabelsList;
