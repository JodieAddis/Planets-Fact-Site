import IconSource from "../../../icons/IconSource";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface PlanetDescriptionProps {
  name: string;
  description: string | undefined;
  source: string | undefined;
}

const Component = ({ name, description, source }: PlanetDescriptionProps) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col items-center md:items-start lg:w-[350px]">
        <Heading
          kind={"h2"}
          content={name}
          css={
            "font-normal font-Antonio text-center md:text-left text-4xl md:text-5xl lg:text-8xl mb-4 md:mb-8 uppercase"
          }
        />
        <Paragraph
          content={description}
          css={
            "text-xs leading-relaxed md:text-sm font-normal leading-normal w-[327px] font-Spartan text-center md:text-left lg:w-content mb-4 md:mb-8 lg:text-left"
          }
        />
        <Paragraph
          content={
            <>
              Source :{" "}
              <a
                href={source}
                target="_blank"
                className="mx-2 text-white text-opacity-50 underline"
              >
                Wikipedia
              </a>
              <IconSource />
            </>
          }
          css={
            "text-xs mb-4 md:mb-0 lg:mb-4 flex flex-row items-center justify-center text-center text-white text-opacity-50"
          }
        />
      </div>
    </div>
  );
};

export default Component;
