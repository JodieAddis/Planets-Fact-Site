import Button from "../../Button";
import { loadData } from "../../../utils/loadData";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";
import PlanetViewMobile from "../../PlanetView/PlanetViewMobile";
import useScreenSize from "../../../hook/useScreenSize";
import { useState } from "react";
import PlanetImage from "../PlanetImage";

interface PlanetDataProps {
  planetName: string;
}

const Component = ({ planetName }: PlanetDataProps) => {
  const planetData = loadData(planetName);
  const isMobile = useScreenSize();
  const [selectedView, setSelectedView] = useState<string>("");

  const handleViewSelect = (view: string) => {
    setSelectedView(view);
  };

  let description = planetData.overview.content;
  let url = planetData.images.planet;
  let source = planetData.overview.source;

  if (planetData) {
    if (selectedView === "structure") {
      description = planetData.structure.content;
      url = planetData.images.internal;
      source = planetData.structure.source;
    } else if (selectedView === "surface") {
      description = planetData.geology.content;
      url = planetData.images.geology;
      source = planetData.geology.source;
    }
  }

  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-center lg:mb-20 lg:mt-10 lg:flex-row">
        <div className="mb-14 flex flex-col justify-center">
          {isMobile ? (
            <PlanetViewMobile
              color={planetName}
              onViewSelect={handleViewSelect}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
          <div>
            <PlanetImage view={selectedView} url={url} />
          </div>

          <div className="flex flex-col">
            {planetData && (
              <PlanetDescription
                name={planetData.name}
                description={description}
                source={source}
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
