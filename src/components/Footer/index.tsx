import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <Paragraph
        content={
          <>
            Application coded by{" "}
            <a
              href="https://github.com/JodieAddis"
              target="_blank"
              className="font-bold"
            >
              Jodie Addis
            </a>
          </>
        }
        css={"text-xs font-Spartan tracking-widest text-center"}
      />
    </>
  );
};

export default Component;
