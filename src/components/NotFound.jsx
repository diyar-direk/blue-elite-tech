import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="mars"></div>
      <img
        src="https://assets.codepen.io/1538474/404.svg"
        className="logo-404"
        alt=" "
      />
      <img
        src="https://assets.codepen.io/1538474/meteor.svg"
        className="meteor"
        alt=" "
      />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div align="center">
        <Link className="btn-back" to="/">
          Back to previous page
        </Link>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        className="astronaut"
        alt=" "
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        className="spaceship"
        alt=" "
      />
    </div>
  );
};

export default NotFound;
