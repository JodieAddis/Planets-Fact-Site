import Button from "../../Button";

interface ViewMobileProps {
  color: string;
}

const Component = ({ color }: ViewMobileProps) => {
  return (
    <>
      <div className="mx-5 flex items-center justify-between">
        <Button
          content={"overview"}
          css={`button_view_mobile ${color}`}
          onclick={() => {}}
        />
        <Button
          content={"structure"}
          css={`button_view_mobile ${color}`}
          onclick={() => {}}
        />
        <Button
          content={"surface"}
          css={`button_view_mobile ${color}`}
          onclick={() => {}}
        />
      </div>
      <div className="h-[1px] w-screen bg-white"></div>
    </>
  );
};

export default Component;
