import { useEffect, useRef, useState } from "react";

useMagicColor.propTypes = {};

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  function randomColor(currentColor) {
    const COLOR_LIST = ["red", "green", "blue"];

    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
      newIndex = Math.trunc(Math.random() * 3);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
  }

  useEffect(() => {
    const colorInterval = setInterval(() => {
      //   console.log("1: ", color);
      //   console.log("2: ", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return { color };
}

export default useMagicColor;
