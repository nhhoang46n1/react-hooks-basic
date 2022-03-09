import React from "react";
import useClock from "../../hooks/useClock.js";
import "./BetterClock.scss";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();
  return (
    <div className="better-clock">
      <p className="better-clock__name">{timeString}</p>
    </div>
  );
}

export default BetterClock;
