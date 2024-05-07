import IconSource from "../../../icons/IconSource";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface PlanetDescriptionProps {
  name: string;
  description: string;
  source: string;
  view: string;
}

const Component = ({
  name,
  description,
  source,
  view,
}: PlanetDescriptionProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mb-10 flex items-center justify-center">
        {view == "" && (
          <img
            src={`../../../../Planets-Fact-Site/public/assets/img/${name}.svg`}
            alt="planet image"
            className="w-1/3"
          />
        )}
        {view == "overview" && (
          <img
            src={`../../../../Planets-Fact-Site/public/assets/img/${name}.svg`}
            alt="planet image"
            className="w-1/3"
          />
        )}
        {view == "structure" && (
          <img
            src={`../../../../Planets-Fact-Site/public/assets/img/planet-${name}-internal.svg`}
            alt="planet image"
            className="w-1/3"
          />
        )}
        {view == "surface" && (
          <div className="relative pb-10">
            <img
              src={`../../../../Planets-Fact-Site/public/assets/img/${name}.svg`}
              alt="planet image"
              className="mx-auto w-1/3"
            />
            <img
              src={`../../../../Planets-Fact-Site/public/assets/img/geology-${name}.png`}
              alt="planet image"
              className="mx-auto w-1/6"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <Heading
          kind={"h2"}
          content={name}
          css={
            "font-normal font-Antonio text-center text-4xl lg:text-8xl mb-4 uppercase"
          }
        />
        <Paragraph
          content={description}
          css={
            "text-xs font-normal leading-normal w-[327px] font-Spartan text-center md:text-left md:w-[350px] mb-4"
          }
        />
        <Paragraph
          content={
            <>
              Source :{" "}
              <a href={source} target="_blank" className="mx-2 underline">
                Wikipedia
              </a>
              <IconSource />
            </>
          }
          css={
            "text-xs mb-4 flex flex-row items-center justify-center text-center"
          }
        />
      </div>
    </div>
  );
};

export default Component;
