import Heading from "../../typographies/Heading";
import NavBarDesktop from "../NavBar/NavBarDesktop";
import NavBarMobile from "../NavBar/NavBarMobile";
import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const isMobile = useScreenSize();
  return (
    <div className="flex justify-between md:flex-col lg:flex-row">
      <Heading
        kind="h1"
        content="the planets"
        css={
          "ml-8 md:ml-0 lg:ml-8 uppercase font-base text-3xl font-Antonio md:text-center"
        }
      />
      {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
    </div>
  );
};

export default Component;
