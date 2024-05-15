import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Heading
        kind="h1"
        content="error 404"
        css="text-6xl uppercase font-Antonio tracking-widest"
      />
      <Paragraph
        content="Page not found"
        css="text-2xl font-Spartan tracking-widest mt-8 lg:mt-20"
      />
    </div>
  );
};
export default Component;
