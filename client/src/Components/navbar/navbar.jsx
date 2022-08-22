import React from "react";

export const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mx-5" href="#">
        DevBot
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Welcome to chatbot
            </a>
          </li>
        </ul>
        <div className=" my-2 my-lg-0">
          <button
            className="btn btn-outline-success my-2 my-sm-0 mx-2"
            type="submit"
          >
            Login
          </button>
          <button
            className="btn btn-outline-success my-2 my-sm-0 mx-2"
            type="submit"
          >
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
};
export default navbar;
