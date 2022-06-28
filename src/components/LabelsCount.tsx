interface ILabelsCount {
  count: number;
}

function LabelsCount({ count }: ILabelsCount) {
  console.log("Render LabelsCount");
  return <h1>{`I have ${count} labels in my App`}</h1>;
}

export default LabelsCount;
