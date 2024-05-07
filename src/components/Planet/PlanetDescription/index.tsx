import IconSource from "../../../icons/IconSource";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface PlanetDescriptionProps {
  name: string;
  description: string;
  source: string;
}

const Component = ({ name, description, source }: PlanetDescriptionProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* <div className="mb-10 flex items-center justify-center">
        {view == "" && <img src={url} alt="planet image" className="w-1/3" />}
        {view == "overview" && (
          <img src={url} alt="planet image" className="w-1/3" />
        )}
        {view == "structure" && (
          <img src={url} alt="planet image" className="w-1/3" />
        )}
        {view == "surface" && (
          <div className="relative pb-10">
            <img
              src={`../../../../public/assets/img/${name}.svg`}
              alt="planet image"
              className="mx-auto w-1/3"
            />
            <img
              src={`../../../../public/assets/img/geology-${name}.png`}
              alt="planet image"
              className="mx-auto w-1/6"
            />
          </div>
        )}
      </div> */}
      <div className="flex flex-col items-center lg:items-start">
        <Heading
          kind={"h2"}
          content={name}
          css={
            "font-normal font-Antonio text-center lg:text-left text-4xl lg:text-8xl mb-4 lg:mb-8 uppercase"
          }
        />
        <Paragraph
          content={description}
          css={
            "text-xs lg:text-sm font-normal leading-normal w-[327px] font-Spartan text-center lg:text-left lg:w-[340px] mb-4 lg:mb-8 lg:text-left"
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
