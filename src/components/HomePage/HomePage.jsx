import { motion } from "framer-motion";
import Favourites from "../.widgets/Favourites/Favourites";
import HomeLinks from "../.widgets/HomeLinks/HomeLinks";
import WeatherWidget from "../.widgets/WeatherWidget/WeatherWidget";
import "./homepage.css";
import InitialNameModal from "../.modals/InitialNameModal/InitialNameModal";

const HomePage = ({ data, name, setName }) => {
  return (
    <>
      {name == "" && <InitialNameModal setName={setName} />}

      <motion.div
        className="home-page page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="top">
          <div className="left">
            <h2>Hej{name !== "" && " " + name}!</h2>
            <p>Se dina favoritchecklistor eller ta reda på dagens lunch</p>
          </div>
        </div>
        <div className="home-widgets">
          <HomeLinks />
          <WeatherWidget dataWeather={data} />
          <Favourites />
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
