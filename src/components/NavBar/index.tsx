import { Link } from "react-router-dom";

const Component = () => {
  return (
    <>
      <nav>
        <ul className="flex uppercase text-black md:flex-row">
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/">mercury</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/venus">venus</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/earth">earth</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/mars">mars</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/jupiter">jupiter</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/saturn">saturn</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/Planets-Fact-Site/uranus">uranus</Link>
          </li>
          <li className="navbar_list ml-3 mr-8">
            <Link to="/Planets-Fact-Site/neptune">nepture</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Component;
