import React, { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color-box") || "deeppink";
    return initColor;
  });

  const getRandomColor = () => {
    const COLOR_LIST = ["black", "blue", "green", "yellow", "orange"];
    const random = Math.trunc(Math.random() * 5);
    return COLOR_LIST[random];
  };

  const handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("color-box", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
