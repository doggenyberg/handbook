import { useEffect, useState } from "react";
import "./weather-widget.css";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const WeatherWidget = ({ dataWeather }) => {
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [img, setImg] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const updateWeather = () => {
      if (!dataWeather) return;

      const condition = dataWeather.weather[0]?.description;
      const imgCondition = dataWeather.weather[0]?.main;
      const temp = Math.round(dataWeather.main.temp);
      const now = new Date();
      const currentMonth = 1 + now.getMonth();
      setMonth(currentMonth);
      setDay(formatDay(now.getDay()));
      setCondition(condition);
      setImg(getIconImgUrl(imgCondition));
      setTemp(temp + "°");

      const bgImgUrl = getBgImgUrl(currentMonth);
      document.getElementById(
        "weatherWidget"
      ).style.backgroundImage = `url(${bgImgUrl})`;
    };

    updateWeather();
  }, [dataWeather]);


  function formatDay(num) {
    switch (num) {
      case 1:
        return "Måndag";
      case 2:
        return "Tisdag";
      case 3:
        return "Onsdag";
      case 4:
        return "Torsdag";
      case 5:
        return "Fredag";
      case 6:
        return "Lördag";
      case 0:
        return "Söndag";
      default:
        return "";
    }
  }

  function getIconImgUrl(condition) {
    const cd = "src/img/Weather/conditions/";

    switch (condition) {
      case "Drizzle":
        return cd + "drizzle.png";
      case "Rain":
        return cd + "rain.png";
      case "Snow":
        return cd + "snow.png";
      case "Mist":
        return cd + "mist.png";
      case "Clear":
        return cd + "clear.png";
      case "Clouds":
        return cd + "clouds.png";
      default:
        return cd + "clouds.png";
    }
  }

  function getBgImgUrl(month) {
    const cd = "src/img/Weather/months/";

    switch (month) {
      case 1:
        return cd + "jan.jpg";
      case 2:
        return cd + "feb.jpg";
      case 3:
        return cd + "mar.jpg";
      case 4:
        return cd + "apr.jpg";
      case 5:
        return cd + "may.jpg";
      case 6:
        return cd + "jun.jpg";
      case 7:
        return cd + "jul.jpg";
      case 8:
        return cd + "aug.jpg";
      case 9:
        return cd + "sep.jpg";
      case 10:
        return cd + "oct.jpg";
      case 11:
        return cd + "nov.jpg";
      case 12:
        return cd + "dec.jpg";
      default:
        return cd + "may.jpg";
    }
  }

  return (
    <div
      id="weatherWidget"
      className="widget"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h4>Väder</h4>
      <div className="overlay">
        <div className="weather">
          <div className="icon">
            <img src={img} alt="" />
            {condition}
          </div>
          <div className="info">
            {day}
            <div className="location">
              <LocationOnRoundedIcon style={{ fontSize: "15px" }} />
              <h6>Kista</h6>
            </div>
            <h5>{temp}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
