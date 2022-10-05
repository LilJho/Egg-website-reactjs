import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "grid items-center grid-rows-4 text-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
