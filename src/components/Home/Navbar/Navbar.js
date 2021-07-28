import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@material-ui/core";

const Navbar = ({ click }) => {
  const [changeNavColor, setChangeNavColor] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 110) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  });

  const goToAboutPage = () => {
    window.scrollTo(0, 10);
  };

  const goToSkill = () => {
    window.scrollTo(0, 600);
  };

  const goToPortfolio = () => {
    window.scrollTo(0, 1300);
  };
  const goToBlogPage = () => {
    window.scrollTo(0, 1830);
  };
  const goToContactPage = () => {
    window.scrollTo(0, 2540);
  };

  return (
    <nav className={changeNavColor ? "navbar-active" : "navbar"}>
      <div className="navbar-link">
        <h2>Sagor</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link onClick={goToAboutPage}>About</Link>
        </li>
        <li>
          <Link onClick={goToSkill}>Skills</Link>
        </li>
        <li>
          <Link onClick={goToPortfolio}>Projects</Link>
        </li>
        <li>
          <Link onClick={goToBlogPage}>Blogs</Link>
        </li>
        <li>
          <Link onClick={goToContactPage}>Contact</Link>
        </li>
      </ul>
      <div className="nav-btn">
        <a
          href="https://drive.google.com/file/d/1FwMsHeCKE6wiOOHz8YRrT25dit9Lrtb3/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-button"
        >
          Resume 
          {/* <FontAwesomeIcon icon={faDownload} /> */}
        </a>
      </div>
      <div className="hamburger-menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
