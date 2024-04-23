import { Link } from "react-router-dom";

const Component = () => {
  return (
    <>
      <nav>
        <ul className="uppercase text-black">
          <li>
            <Link to="/Planets-Fact-Site/">mercury</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/venus">venus</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/earth">earth</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/mars">mars</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/jupiter">jupiter</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/saturn">saturn</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/uranus">uranus</Link>
          </li>
          <li>
            <Link to="/Planets-Fact-Site/neptune">nepture</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Component;
