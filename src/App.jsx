import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainScreen from "./components/MainScreen/MainScreen";
import "./components/.widgets/widgets.css";

function App() {
  const [date, setDate] = useState("9999-12-31");
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const key = "600ca953f5a6738caa5bbd80ede7ce63";
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=59.40316&lon=17.94479&lang=sv&appid=${key}&units=metric`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const getName = () => {
      const storedName = localStorage.getItem("NAME");
      if (storedName !== null) {
        setName(storedName);
      }
    };

    getName();
    fetchData();
  }, [api]);

  return (
    <>
      <Router>
        <Navbar name={name} setName={setName} />
        <MainScreen
          date={date}
          setDate={setDate}
          data={data}
          name={name}
          setName={setName}
        />
      </Router>
    </>
  );
}

export default App;
