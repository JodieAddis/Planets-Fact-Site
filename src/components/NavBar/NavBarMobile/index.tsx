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
            <NavBarItem name={"mercury"} color={"bg-Pelorous"} page={""} />
            <NavBarItem name={"venus"} color={"bg-TulipTree"} page={"venus"} />
            <NavBarItem
              name={"earth"}
              color={"bg-GlacialBlue"}
              page={"earth"}
            />
            <NavBarItem name={"mars"} color={"bg-Piper"} page={"mars"} />
            <NavBarItem name={"jupiter"} color={"bg-Tacao"} page={"jupiter"} />
            <NavBarItem
              name={"saturn"}
              color={"bg-Goldenrod"}
              page={"saturn"}
            />
            <NavBarItem name={"uranus"} color={"bg-Java"} page={"uranus"} />
            <NavBarItem
              name={"neptune"}
              color={"bg-RoyalBlue"}
              page={"neptune"}
            />
          </ul>
        </nav>
      )}
    </>
  );
};

export default Component;
