import Title from "./components/Title";
import LabelCreator from "./components/LabelCreator";
import LabelsCount from "./components/LabelsCount";

import LabelsProvider from "./LabelsProvider";

function App() {
  console.log("Render App");

  return (
    <LabelsProvider>
      <div>
        <Title />
        <LabelsCount />
        <LabelCreator />
      </div>
    </LabelsProvider>
  );
}

export default App;
