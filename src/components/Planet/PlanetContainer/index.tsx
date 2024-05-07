import Button from "../../Button";
import { loadData } from "../../../utils/loadData";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";
import PlanetViewMobile from "../../PlanetView/PlanetViewMobile";
import useScreenSize from "../../../hook/useScreenSize";
import { useState } from "react";

interface PlanetDataProps {
  planetName: "mars";
}

const Component = ({ planetName }: PlanetDataProps) => {
  const planetData = loadData(planetName);
  console.log(planetData);
  const isMobile = useScreenSize();
  const [selectedView, setSelectedView] = useState<string>("");

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
  };

  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center lg:mb-20 lg:flex-row">
        <div className="mb-14 flex flex-col justify-center">
          <PlanetViewMobile
            color={planetName}
            onViewSelect={handleViewSelect}
          />
        </div>
        <div>
          {planetData && (
            <PlanetDescription
              name={planetData.name}
              description={planetData.overview.content}
              source={planetData.overview.source}
              view={selectedView}
            />
          )}
          {isMobile ? (
            <></>
          ) : (
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
          )}
        </div>
      </section>
      <section className="mt-6 flex flex-col items-center lg:flex-row">
        {planetData && (
          <PlanetDetails
            rotationTime={planetData.rotation}
            revolutionTime={planetData.revolution}
            radius={planetData.radius}
            averageTemp={planetData.temperature}
          />
        )}
      </section>
    </div>
  );
};

export default Component;
