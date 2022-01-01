import React from "react";
import "./Footer.css";
// import facebook from "../../../images/facebook.png";
// import instra from "../../../images/instra.png";
// import link from "../../../images/link.png";
// import github from "../../../images/github.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
        &#9400; Design and Developed by - Mehedi Hassan Sagor <br />
          <a
            href="https://www.facebook.com/sagor286/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Facebook
          </a>
          &nbsp;|| &nbsp;{" "}
          <a
            href="https://www.instagram.com/sagor.mehedihassan/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Instragram
          </a>
          &nbsp;|| &nbsp;{" "}
          <a
            href="https://www.linkedin.com/in/mehedi-hassan-sagor/"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            LinkedIn
          </a>
          &nbsp;|| &nbsp;{" "}
          <a
            href="https://github.com/mehedihassansagor"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Gighub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
