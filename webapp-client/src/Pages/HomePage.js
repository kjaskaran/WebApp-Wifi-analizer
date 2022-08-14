import React from "react";
import image from "../images/Robot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return <h1 className="lh-lg fw-bold font-monospace">Welcome to WiViBot</h1>;
}

function Main(props) {
  return (
    <section>
      <p className="fst-italic">
        This is the official website for our engineering capstone project.{" "}
        <br />
        Our project consists of a small vehicle/robot capable of navigating
        without crashing. While navigating, it will sense the strength of a
        given WiFi network, transmit the attained data. The data acquired from
        the robot is available on this portal.
        <br />
        Have fun exploring <FontAwesomeIcon icon="smile" />
      </p>
      <img className="img-fluid" src={image} alt="Desktop Computer" />
    </section>
  );
}

function Footer() {
  return <p>Copyright 2022.</p>;
}

export function HomePage({ login }) {
  return (
    <>
      <div className="container bg-light border-bottom">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}
