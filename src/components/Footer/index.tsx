import IconNetwork from "../../icons/IconNetwork";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Paragraph
        content={<>Application coded by Jodie Addis</>}
        css="text-sm font-Spartan tracking-widest text-center"
      />
      <a
        href="https://github.com/JodieAddis/Planets-Fact-Site"
        target="_blank"
        className="mx-3"
      >
        <IconNetwork name="github" />
      </a>
      <a href="https://www.linkedin.com/in/jodieaddis/" target="_blank">
        <IconNetwork name="linkedin" />
      </a>
    </>
  );
};

export default Component;
