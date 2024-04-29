import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update current time and date every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const date = now.getDate();
      const month = now.toLocaleDateString("en-US", { month: "long" });
      setCurrentTime(timeString);
      setCurrentDate(`${day}, ${date} ${month}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <p className="time">{currentTime}</p>
      <p className="day-month">{currentDate}</p>
    </div>
  );
};

export default Clock;
