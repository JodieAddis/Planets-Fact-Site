import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface DetailsProps {
  text: string;
  numberDays: string;
}

const Component = ({ text, numberDays }: DetailsProps) => {
  return (
    <>
      <div className="border-[1px] border-solid border-black pb-5 pl-3 pt-3 text-left lg:w-[255px]">
        <Heading
          kind={"h3"}
          content={text}
          css={"uppercase font-bold text-sm"}
        />
        <Paragraph content={numberDays} css={"uppercase text-4xl font-base"} />
      </div>
    </>
  );
};

export default Component;
