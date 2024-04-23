import React from "react";
import { Link } from "react-router-dom";

const Component = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-col uppercase text-black">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/mercury">mercury</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Component;
