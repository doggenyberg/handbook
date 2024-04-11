import { Link } from "react-router-dom";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HelpCenterRoundedIcon from "@mui/icons-material/HelpCenterRounded";
import "./navbar.css";
import ReportModal from "../.modals/ReportModal/ReportModal";
import SettingsModal from "../.modals/SettingsModal/SettingsModal";

const Navbar = ({name, setName}) => {
  const iconColor = {
    color: "#d7d6d9",
    fontSize: "17px",
  };

  return (
    <nav>
      <h1>
        Hand<span>book</span>
      </h1>
      <ul>
        <Link className="route-link" to="/">
          <li>
            <HomeRoundedIcon style={iconColor} />
            Hem
          </li>
        </Link>
        <Link className="route-link" to="/checklistor">
          <li>
            <CheckBoxRoundedIcon style={iconColor} />
            Checklistor
          </li>
        </Link>
        <Link className="route-link" to="/eskalera">
          <li>
            <FlagRoundedIcon style={iconColor} />
            Eskalera
          </li>
        </Link>
        <Link className="route-link" to="/mallar">
          <li>
            <FileCopyRoundedIcon style={iconColor} />
            Mallar
          </li>
        </Link>
        {/* <Link className="route-link" to="/lankar">
          <li>
            <InsertLinkRoundedIcon style={iconColor} />
            Länkar
          </li>
        </Link> */}
        <Link className="route-link" to="/hjalp">
          <li>
            <HelpCenterRoundedIcon style={iconColor} />
            Hjälp
          </li>
        </Link>
      </ul>
      <div className="nav-buttons">
        <SettingsModal name={name} setName={setName} />
        <ReportModal />
      </div>
    </nav>
  );
};

export default Navbar;
