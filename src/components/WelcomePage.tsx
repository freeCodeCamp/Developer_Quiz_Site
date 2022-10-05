import rpgMenu from "../images/rpg-menu.webp";
import mainCharacter from "../images/main-character.webp";
import fccBackground from "../images/fcc_background.webp";
import Navbar from "./Navbar";
import Button from "./Button";
import HeroSection from "./HeroSection";
import "../stylesheets/HomepageRow.css";
import React, { MouseEventHandler } from "react";

const WelcomePage: React.FC<{ start: MouseEventHandler<HTMLElement> }> = ({
  start,
}) => {
  return (
    <>
      <Navbar />
      <HeroSection start={start} />

      <main className="text-center">
        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23", margin: "0" }}
        >
          <div className="col-md-7 content-text-container">
            <h2 className="featurette-heading">Want to test your knowledge?</h2>
            <p className="lead">
              Brush up on your programming knowledge with 700+ questions.
            </p>

            <Button
              handleClick={start}
              text="Quiz"
              isTransparent={false}
              size={""}
            />
          </div>
          <div className="col-md-5 content-img-container">
            <img
              src={mainCharacter}
              className="img-fluid rounded content-section-img"
              id="main-character-img"
              alt="main female character from rpg game"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#2a2a40", margin: "0" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <h2 className="featurette-heading">Brand new to programming?</h2>
            <p className="lead">
              Learn to code for free and start your programming journey with{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.freecodecamp.org/learn/"
              >
                freeCodeCamp.org
              </a>
              .
            </p>
          </div>
          <div className="col-md-5 order-md-1 content-img-container">
            <img
              src={fccBackground}
              className="img-fluid rounded"
              id="#fcc-image"
              alt="freeCodeCamp rpg logo"
            />
          </div>
        </div>

        <hr className="featurette-divider" id="divider" />

        <div
          className="row featurette content-row-container"
          style={{ backgroundColor: "#0a0a23", margin: "0" }}
        >
          <div className="col-md-7 order-md-2 content-text-container">
            <h2 style={{ marginTop: "40px" }} className="featurette-heading">
              Want to learn how to code while playing a game?
            </h2>
            <p className="lead">
              {" "}
              Give the freeCodeCamp <br />{" "}
              <a
                href="https://www.freecodecamp.org/news/learn-to-code-rpg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn to Code RPG Game
              </a>{" "}
              a go!
            </p>
            <p className="lead">
              Available for free download on <br /> Windows, Mac and Linux.
            </p>
          </div>
          <div className="col-md-5 order-md-2 content-img-container">
            <img
              src={rpgMenu}
              className="img-fluid rounded"
              alt="freeCodeCamp rpg logo"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
