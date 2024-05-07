import Button from "../../Button";

interface ViewMobileProps {
  color: string;
  onViewSelect: (view: string) => void;
}

const Component = ({ color, onViewSelect }: ViewMobileProps) => {
  const handleButtonClick = (image: string) => {
    onViewSelect(image);
  };
  return (
    <>
      <div className="mx-5 flex items-center justify-between">
        <Button
          content={"overview"}
          css={`button_view_mobile ${color}`}
          onclick={() => {
            handleButtonClick("overview");
          }}
        />
        <Button
          content={"structure"}
          css={`button_view_mobile ${color}`}
          onclick={() => {
            handleButtonClick("structure");
          }}
        />
        <Button
          content={"surface"}
          css={`button_view_mobile ${color}`}
          onclick={() => {
            handleButtonClick("surface");
          }}
        />
      </div>
      <div className="h-[1px] w-screen bg-white"></div>
    </>
  );
};

export default Component;
