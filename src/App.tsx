import Title from "./components/Title";
import LabelCreator from "./components/LabelCreator";
import LabelsList from "./components/LabelsList";

import GlobalProvider from "./GlobalProvider";

function App() {
  console.log("Render App");

  return (
    <GlobalProvider>
      <div>
        <Title />
        <LabelCreator />
        <LabelsList />
      </div>
    </GlobalProvider>
  );
}

export default App;
