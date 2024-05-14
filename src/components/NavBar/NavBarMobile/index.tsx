import { useState } from "react";
import IconMenu from "../../../icons/IconMenu";
import NavBarItem from "../NavBarItem";

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
          <div className="mr-8 flex items-center">
            <IconMenu color="	#808080" />
          </div>
          <nav className="absolute top-24 h-screen w-screen bg-BlackPearl pt-4">
            <ul className="mx-6 flex flex-col uppercase text-black">
              <NavBarItem
                name={"mercury"}
                color={"bg-Pelorous"}
                page={""}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"venus"}
                color={"bg-TulipTree"}
                page={"venus"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"earth"}
                color={"bg-GlacialBlue"}
                page={"earth"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"mars"}
                color={"bg-Piper"}
                page={"mars"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"jupiter"}
                color={"bg-Tacao"}
                page={"jupiter"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"saturn"}
                color={"bg-Goldenrod"}
                page={"saturn"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"uranus"}
                color={"bg-Java"}
                page={"uranus"}
                lineColor="bg-white"
              />
              <NavBarItem
                name={"neptune"}
                color={"bg-RoyalBlue"}
                page={"neptune"}
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
