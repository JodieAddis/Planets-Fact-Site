interface IconMenuProps {
  color: string;
}

const Icon = ({ color }: IconMenuProps) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g fill={color} fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </>
  );
};

export default Icon;
