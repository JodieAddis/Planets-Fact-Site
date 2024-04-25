import Button from "../../Button";
import { loadData } from "../../../utils/loadData";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";

interface PlanetDataProps {
  planetName: string;
}

const Component = ({ planetName }: PlanetDataProps) => {
  const planetData = loadData(planetName);
  return (
    <div className="flex flex-col">
      <section className="flex justify-center lg:mb-20 lg:flex-row">
        <div>
          {planetData && (
            <PlanetDescription
              name={planetData.name}
              description={planetData.description}
              source={planetData.source}
              url={`../../../../Planets-Fact-Site/public/assets/img/${planetName}.svg`}
            />
          )}
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
        {planetData && (
          <PlanetDetails
            rotationTime={planetData.rotation_time}
            revolutionTime={planetData.revolution_time}
            radius={planetData.radius}
            averageTemp={planetData.average_temp}
          />
        )}
      </section>
    </div>
  );
};

export default Component;
