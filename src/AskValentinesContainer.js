import React, { useState, Component } from "react";
import RunawayButton from "./RunawayButton";
import anime from "animejs";

const AskValentinesContainer = () => {
  const [click, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const animateMove = (element, prop, pixels) =>
    anime({
      targets: element,
      [prop]: `${pixels}px`,
      easing: "easeOutCirc",
    });

  const handleMouseOver = () => {
    setHovered(true);
    const button = document.getElementById("runaway-btn");
    const top = getRandomNumber(window.innerHeight - button.offsetHeight);
    const left = getRandomNumber(window.innerWidth - button.offsetWidth);

    animateMove(button, "left", left).play();
    animateMove(button, "top", top).play();
  };

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
  };
  const valentineGif = `https://media1.tenor.com/m/9m3COBOeZJQAAAAC/snoopy-woodstock.gif`;
  return (
    <>
      {!click ? (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Will you be my Valentines?</h1>
          </div>
          <button
            onClick={() => setClicked({ click: !click })}
            style={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              height: "4rem",
              width: "10rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              border: "none",
              boxShadow: "1px 1px 5px black",
              backgroundColor: "#B1D8B7",
              cursor: "pointer",
            }}
          >
            Yes.
          </button>
          <button
            id="runaway-btn"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
            style={{
              position: "absolute",
              top: "50%",
              left: "55%",
              transform: "translate(-50%, -50%)",
              height: "4rem",
              width: "10rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              border: "none",
              boxShadow: "1px 1px 5px black",
              backgroundColor: "#F8C8DC",
              cursor: "pointer",
            }}
          >
            No
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <img
            src={valentineGif}
            alt="Valentine GIF"
            style={{ textAlign: "center", width: "800" }}
          />
        </div>
      )}
    </>
  );
};

export default AskValentinesContainer;
