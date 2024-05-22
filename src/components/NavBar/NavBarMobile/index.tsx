import { useState } from "react";
import IconMenu from "../../../icons/IconMenu";
import NavBarItem from "../NavBarItem";
import Heading from "../../../typographies/Heading";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {isOpen ? (
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="mr-8"
        >
          <IconMenu color="#fff" />
        </button>
      ) : (
        <>
          <div className="bg_navbar_mobile fixed top-0 flex w-screen items-center justify-between py-6">
            <Heading
              kind="h1"
              content="the planets"
              css={"ml-8 uppercase font-base text-3xl font-Antonio"}
            />
            <div className="mr-8">
              <IconMenu color="	#808080" />
            </div>
          </div>
          <nav className="fixed top-12 mt-4 h-screen w-screen bg-BlackPearl">
            <div className="border-b-solid border-b-[1px] border-b-white border-opacity-50 pb-5"></div>
            <ul className="mx-6 flex flex-col uppercase text-black">
              <NavBarItem
                name="mercury"
                color="bg-Pelorous"
                page=""
                lineColor="bg-white"
              />
              <NavBarItem
                name="venus"
                color="bg-TulipTree"
                page="venus"
                lineColor="bg-white"
              />
              <NavBarItem
                name="earth"
                color="bg-GlacialBlue"
                page="earth"
                lineColor="bg-white"
              />
              <NavBarItem
                name="mars"
                color="bg-Piper"
                page="mars"
                lineColor="bg-white"
              />
              <NavBarItem
                name="jupiter"
                color="bg-Tacao"
                page="jupiter"
                lineColor="bg-white"
              />
              <NavBarItem
                name="saturn"
                color="bg-Goldenrod"
                page="saturn"
                lineColor="bg-white"
              />
              <NavBarItem
                name="uranus"
                color="bg-Java"
                page="uranus"
                lineColor="bg-white"
              />
              <NavBarItem
                name="neptune"
                color="bg-RoyalBlue"
                page="neptune"
                lineColor="bg-none"
              />
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Component;
