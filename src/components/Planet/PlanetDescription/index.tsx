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
      <div className="flex flex-col items-center lg:w-[350px] lg:items-start">
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
            "text-xs lg:text-sm font-normal leading-normal w-[327px] font-Spartan text-center lg:text-left lg:w-content mb-4 lg:mb-8 lg:text-left"
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
