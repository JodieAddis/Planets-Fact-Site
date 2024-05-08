import Button from "../../Button";
import { ViewProps } from "../../../types/interface";
import { useState } from "react";

const Component = ({ onViewSelect, color }: ViewProps) => {
  const tabs = ["01 overview", "02 internal structure", "03 surface geology"];
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (image: string) => {
    onViewSelect(image);
  };

  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index}>
          <Button
            content={tab}
            css={`
              ${selectedButton === index
                ? "bg-Pelorous"
                : "bg-none"} button_view
            `}
            onclick={() => {
              setSelectedButton(index);
            }}
          />
        </div>
      ))}
      {/* <Button
        content="01 overview"
        css={"button_view"}
        onclick={() => {
          handleButtonClick("overview");
        }}
      />
      <Button
        content="02 internal structure"
        css={"button_view"}
        onclick={() => {
          handleButtonClick("structure");
        }}
      />
      <Button
        content="03 surface geology"
        css="button_view"
        onclick={() => {
          handleButtonClick("surface");
        }}
      /> */}
    </>
  );
};

export default Component;
