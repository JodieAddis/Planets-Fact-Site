import Button from "../../Button";
import { loadData } from "../../../utils/loadData";
import PlanetDescription from "../PlanetDescription";
import PlanetDetails from "../PlanetDetails";
import PlanetViewMobile from "../../PlanetView/PlanetViewMobile";
import useScreenSize from "../../../hook/useScreenSize";
import { useState } from "react";
import PlanetImage from "../PlanetImage";
import PlanetViewDesktop from "../../PlanetView/PlanetViewDesktop";

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
      <section className="flex flex-col justify-center lg:mb-20 lg:mt-32 lg:flex-row">
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
          <div className="lg:mr-16">
            <PlanetImage view={selectedView} url={url} />
          </div>

          <div className="flex flex-col lg:ml-16">
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
              <div className="flex flex-col lg:w-[350px]">
                <PlanetViewDesktop
                  onViewSelect={handleViewSelect}
                  color={planetName}
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
