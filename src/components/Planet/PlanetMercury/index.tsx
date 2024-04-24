import Button from "../../Button";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";

const Component = () => {
  return (
    <div className="flex flex-col">
      <section className="flex lg:flex-row">
        <div>
          <PlanetDescription />
          <div className="flex flex-col">
            <Button
              content="01 overview"
              css="uppercase text-left ml-4"
              onclick={() => {}}
            />
            <Button
              content="02 internal structure"
              css="uppercase text-left ml-4 "
              onclick={() => {}}
            />
            <Button
              content="03 surface geology"
              css="uppercase text-left ml-4 "
              onclick={() => {}}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <PlanetDetails text={"rotation time"} numberDays={"100"} />
        <PlanetDetails text={"revolution tile"} numberDays={"100"} />
        <PlanetDetails text={"radius"} numberDays={"100"} />
        <PlanetDetails text={"average temp."} numberDays={"100"} />
      </section>
    </div>
  );
};

export default Component;
