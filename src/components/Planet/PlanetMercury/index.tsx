import Button from "../../Button";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";
import * as data from "../../../data/planets.json";

const Component = () => {
  return (
    <div className="flex flex-col">
      <section className="flex justify-center lg:mb-20 lg:flex-row">
        <div>
          <PlanetDescription
            name={"mercury"}
            description={"blabla"}
            source={"blabla"}
          />
          <div className="flex flex-col">
            <Button
              content="01 overview"
              css="button_view bg-Pelorous"
              onclick={() => {}}
            />
            <Button
              content="02 internal structure"
              css="button_view"
              onclick={() => {}}
            />
            <Button
              content="03 surface geology"
              css="button_view"
              onclick={() => {}}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center lg:flex-row">
        <PlanetDetails
          rotationTime={"56.6"}
          revolutionTime={"87.97"}
          radius={"2,439.7"}
          averageTemp={"430"}
        />
      </section>
    </div>
  );
};

export default Component;
