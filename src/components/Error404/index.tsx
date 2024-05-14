import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import galaxy from "../../../public/assets/img/galaxy.png";

const Component = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Heading
        kind="h1"
        content="error 404"
        css="text-6xl uppercase font-Antonio tracking-widest"
      />
      <img
        src={galaxy}
        alt="Galaxy icon. Space icons created by Freepik : 'https://www.flaticon.com/free-icons/space'"
        className="mt-8 w-1/2 lg:mt-20 lg:w-1/4"
      />
      <Paragraph
        content="Page not found"
        css="text-2xl font-Spartan tracking-widest mt-8 lg:mt-20"
      />
    </div>
  );
};
export default Component;
