import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="container justify-content-center">
      <img className="img-fluid" src={logo} alt="Website Logo" />
    </div>
  );
}

export function NavBar() {
  return (
    <div className="container-fluid justify-content-center">
      <Header />
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="content">
            Content
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
