import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Logo = (props) => {
  return (
    <Link className="logo center" to={"/"}>
      <img src={logo} alt="" />
      {props.show && (
        <div>
          <h3>Blue Elite Tech</h3>
          <h4>More Than Just Securty</h4>
        </div>
      )}
    </Link>
  );
};

export default Logo;
