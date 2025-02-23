import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-500">
      <ul className="container flex justify-between text-white py-4">
        <li>
          <Link to="/Confession">Confession</Link>
        </li>

        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
