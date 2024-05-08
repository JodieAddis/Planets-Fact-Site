import Button from "../../Button";
import { ViewProps } from "../../../types/interface";
import { useState } from "react";

const Component = ({ color, onViewSelect }: ViewProps) => {
  const tabs = ["overview", "structure", "surface"];
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleButtonClick = (image: string) => {
    onViewSelect(image);
  };
  return (
    <>
      <div className="mx-5 flex items-center justify-between">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            content={tab}
            css={`
              ${selectedTab == index ? color : ""}
              button_view_mobile
            `}
            onclick={() => {
              handleButtonClick(tab);
              setSelectedTab(index);
            }}
          />
        ))}
      </div>
      <div className="h-[1px] w-screen bg-white"></div>
    </>
  );
};

export default Component;
