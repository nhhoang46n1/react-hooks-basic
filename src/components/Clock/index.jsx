import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  function formatDate(date) {
    if (!date) return "";
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  }
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("Clock clean up");
      clearTimeout(clockInterval);
    };
  }, []);

  return (
    <div>
      <p style={{ fontSize: "40px" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
