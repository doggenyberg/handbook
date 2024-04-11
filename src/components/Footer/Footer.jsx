import { useState, useEffect } from "react";
import "./footer.css";

const Footer = ({date, setDate}) => {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
      setDate(getCurrentDate());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <footer>
      <div className="time-date">
        <h6>{time}</h6>
        <h6>{date}</h6>
      </div>
    </footer>
  );
};

export default Footer;
