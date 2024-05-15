import { Link } from "react-router-dom";

const Component = () => {
  return (
    <>
      <nav className="lg:flex lg:items-center">
        <ul className="flex uppercase text-black md:mt-8 md:flex-row md:justify-around lg:mt-0">
          <li className="navbar_list mx-3 md:ml-6 md:mr-3 lg:mx-3">
            <Link to="/">mercury</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/venus">venus</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/earth">earth</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/mars">mars</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/jupiter">jupiter</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/saturn">saturn</Link>
          </li>
          <li className="navbar_list mx-3">
            <Link to="/uranus">uranus</Link>
          </li>
          <li className="navbar_list ml-3 mr-8 md:mr-6 lg:mr-8">
            <Link to="/neptune">nepture</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Component;
