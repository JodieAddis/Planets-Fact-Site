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
          <IconMenu />
        </button>
      ) : (
        <nav className="absolute top-32 h-screen w-screen bg-BlackPearl">
          <ul className="mx-6 flex flex-col uppercase text-black">
            <NavBarItem name={"mercury"} color={"Foam"} page={""} />
            <NavBarItem name={"venus"} color={"TulipTree"} page={"venus"} />
            <NavBarItem name={"earth"} color={"GlacialBlue"} page={"earth"} />
            <NavBarItem name={"mars"} color={"Piper"} page={"mars"} />
            <NavBarItem name={"jupiter"} color={"Tacao"} page={"jupiter"} />
            <NavBarItem name={"saturn"} color={"Goldenrod"} page={"saturn"} />
            <NavBarItem name={"uranus"} color={"Java"} page={"uranus"} />
            <NavBarItem name={"neptune"} color={"RoyalBlue"} page={"neptune"} />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Component;
