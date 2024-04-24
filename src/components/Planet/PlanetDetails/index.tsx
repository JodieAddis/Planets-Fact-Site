import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface DetailsProps {
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
}

const Component = ({
  rotationTime,
  revolutionTime,
  radius,
  averageTemp,
}: DetailsProps) => {
  return (
    <>
      <div className="details_box">
        <Heading
          kind={"h3"}
          content={"rotation time"}
          css={"details_box_heading"}
        />
        <Paragraph content={rotationTime} css={"details_box_text"} />
      </div>
      <div className="details_box">
        <Heading
          kind={"h3"}
          content={"revolution tile"}
          css={"details_box_heading"}
        />
        <Paragraph content={revolutionTime} css={"details_box_text"} />
      </div>
      <div className="details_box">
        <Heading kind={"h3"} content={"radius"} css={"details_box_heading"} />
        <Paragraph content={radius} css={"details_box_text"} />
      </div>
      <div className="details_box">
        <Heading
          kind={"h3"}
          content={"average temp."}
          css={"details_box_heading"}
        />
        <Paragraph content={averageTemp} css={"details_box_text"} />
      </div>
    </>
  );
};

export default Component;
