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
    <div className="flex lg:flex-row">
      <div className="flex items-center">
        <p className="text-Valencia">IMAGE</p>
      </div>
      <div>
        <Heading
          kind={"h2"}
          content={name}
          css={"font-base lg:text-8xl mb-4 uppercase"}
        />
        <Paragraph
          content={description}
          css={"text-sm w-[327px] text-center md:text-left md:w-[350px] mb-4"}
        />
        <Paragraph
          content={
            <>
              Source{" "}
              <a href={source} className="mx-2">
                Wikipedia
              </a>
              <IconSource />
            </>
          }
          css={"text-sm mb-4 flex flex-row items-center"}
        />
      </div>
    </div>
  );
};

export default Component;
