import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="flex lg:flex-row">
      <div className="flex items-center">
        <p>IMAGE</p>
      </div>
      <div>
        <Heading
          kind={"h2"}
          content={"mercury"}
          css={"font-base lg:text-8xl mb-4 uppercase"}
        />
        <Paragraph
          content={
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
          }
          css={"text-sm w-[350px] mb-4"}
        />
        <Paragraph
          content={
            <>
              Source <a href="#">Wikipedia</a>
            </>
          }
          css={"text-sm mb-4"}
        />
      </div>
    </div>
  );
};

export default Component;
