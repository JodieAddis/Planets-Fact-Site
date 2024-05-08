import Button from "../../Button";
import { ViewProps } from "../../../types/interface";
import { useState } from "react";

const Component = ({ onViewSelect, color }: ViewProps) => {
  const tabs = ["01 overview", "02 internal structure", "03 surface geology"];
  const [selectedTab, setSelectedTab] = useState(0);

  const handleButtonClick = (image: string) => {
    let viewName = "";
    switch (image) {
      case "01 overview":
        viewName = "overview";
        break;
      case "02 internal structure":
        viewName = "structure";
        break;
      case "03 surface geology":
        viewName = "surface";
        break;
      default:
        break;
    }
    onViewSelect(viewName);
    return viewName;
  };

  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index}>
          <Button
            content={tab}
            css={`
              ${selectedTab === index ? color : "bg-none"} button_view
            `}
            onclick={() => {
              handleButtonClick(tab);
              setSelectedTab(index);
            }}
          />
        </div>
      ))}
    </>
  );
};

export default Component;
