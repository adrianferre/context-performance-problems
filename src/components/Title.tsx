import { memo } from "react";

function Title() {
  console.log("Render Title");
  return <h1>{"This is the labels App!"}</h1>;
}

export default memo(Title);
