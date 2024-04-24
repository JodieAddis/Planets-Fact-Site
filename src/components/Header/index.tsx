import Heading from "../../typographies/Heading";
import NavBar from "../NavBar";

const Component = () => {
  return (
    <div className="flex justify-between md:mt-8 md:flex-row">
      <Heading
        kind="h1"
        content={"the planets"}
        css={"ml-8 uppercase font-base text-3xl font-Antonio"}
      />
      <NavBar />
    </div>
  );
};

export default Component;
