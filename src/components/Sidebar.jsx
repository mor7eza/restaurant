import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="logo">
        Smart<span className="logo-alter">Pos</span>
      </h1>
      <nav>
        <a href="www">
          <FontAwesomeIcon className="icon" icon={faHamburger} />
          Food & Drinks
        </a>
        <a href="www">
          <FontAwesomeIcon className="icon" icon={faHamburger} />
          Food & Drinks
        </a>
        <a href="www">
          <FontAwesomeIcon className="icon" icon={faHamburger} />
          Food & Drinks
        </a>
        <a href="www">
          <FontAwesomeIcon className="icon" icon={faHamburger} />
          Food & Drinks
        </a>
      </nav>
      <div className="profile">
        <img src={process.env.PUBLIC_URL + "/assets/img/avatar.jpg"} alt="" />
        <h3>Morteza Aliyari</h3>
        <p>Manager . 4h 35m</p>
        <button>Open profile</button>
      </div>
      <p className="copyright">&copy; 2021 SmartPos App</p>
    </div>
  );
};

export default Sidebar;
