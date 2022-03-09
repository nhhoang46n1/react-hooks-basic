import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "./MagicColor.scss";

MagicColor.propTypes = {};

function MagicColor() {
  const { color } = useMagicColor();
  return <div className="color-box" style={{ backgroundColor: color }}></div>;
}

export default MagicColor;
