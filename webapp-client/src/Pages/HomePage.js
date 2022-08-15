import React from "react";
import image from "../images/Robot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return <h1 className="lh-lg fw-bold font-monospace m-1">WiviBot - A Self-navigated, WiFi Analizer Robot</h1>;
}

function Main(props) {
  return (
    <section>
      <p className="fst-italic m-1">
        This is the official website for our engineering capstone project.
        <br />
        Our project consists of a small vehicle/robot capable of navigating
        without crashing. While navigating, it will sense the strength of a
        given WiFi network, transmit the attained data. The live data acquired from
        the robot is available in the content.
        <br />
        Have fun exploring <FontAwesomeIcon icon="smile" />
      </p>
      <img className="img-fluid" src={image} alt="Wifi Analizer and self-navigation implemented on Sunfounder Robot" height={700} width={700}/>
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
