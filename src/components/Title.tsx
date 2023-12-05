import { useGlobalContext } from "../GlobalProvider";

function Title() {
  console.log("Render Title");
  const { user } = useGlobalContext();
  return (
    <h1>{`This is the GlobalProvider App of the amazing "${
      user.firstName + " " + user.lastName
    }" (Thanks for the idea for this demo)`}</h1>
  );
}

export default Title;
