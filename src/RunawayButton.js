import React, { useState } from "react";
import anime from "animejs";

const RunawayButton = () => {
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

  return (
    <button
      id="runaway-btn"
      onMouseOver={handleMouseOver}
      onClick={handleMouseOver}
      style={{
        position: "absolute",
        top: "50%",
        left: "60%",
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
  );
};

export default RunawayButton;
