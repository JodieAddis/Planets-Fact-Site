import { Link } from "react-router-dom";
import IconChevron from "../../../icons/IconChevron";

interface NavBarItemProps {
  name: string;
  color: string;
  page?: string;
  lineColor: string;
}

const Component = ({ name, color, page, lineColor }: NavBarItemProps) => {
  return (
    <>
      <li className="list_mobile_container">
        <div className=" flex flex-row">
          <span className={`mr-5 h-5 w-5 rounded-full ${color}`}></span>
          <span className="navbar_list_mobile">
            <Link to={`/Planets-Fact-Site/${page}`}>{name}</Link>
          </span>
        </div>
        <div>
          <IconChevron />
        </div>
      </li>
      <div className={`h-[1px] w-full ${lineColor} bg-opacity-30 `}></div>
    </>
  );
};

export default Component;
