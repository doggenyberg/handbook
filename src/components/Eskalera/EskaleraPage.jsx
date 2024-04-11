import { useState } from "react";
import SamtalsexempelModal from "../.modals/SamtalsexempelModal/SamtalsexempelModal";
import "./eskalerapage.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EskaleraModal from "../.modals/EskaleraModal/EskaleraModal";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import { motion } from "framer-motion";

const EskaleraPage = () => {
  const [problem, setProblem] = useState("");
  const [locationRel, setLocationRel] = useState(false);
  const [address, setAddress] = useState("");
  const [problemStarted, setProblemStarted] = useState("");
  const [affectedUsers, setAffectedUsers] = useState("");
  const [troubleshooting, setTroubleshooting] = useState("");
  const [examples, setExamples] = useState([]);

  const data = {
    problem: problem,
    locationRel: locationRel,
    address: address,
    problemStarted: problemStarted,
    affectedUsers: affectedUsers,
    troubleshooting: troubleshooting,
    examples: examples,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetValues = () => {
    setProblem("");
    setLocationRel(false);
    setAddress("");
    setProblemStarted("");
    setAffectedUsers("");
    setTroubleshooting("");
    setExamples([]);
  };

  const isLocationRel = (e) => {
    e == "Nej" ? setLocationRel(true) : setLocationRel(false);
  };

  const handleAdd = (example) => {
    setExamples([example, ...examples]);
  };

  const handleDelete = (index) => {
    const updatedExamples = [...examples];
    updatedExamples.splice(index, 1);
    setExamples(updatedExamples);
  };

  return (
    <motion.div
      className="page eskalera-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="top">
        <h2>Eskalera</h2>
        <p>Skapa tydliga & snygga eskaleringsmallar</p>
      </div>
      <form className="eskalera" action="">
        <div className="form-group" id="problem-container">
          <label htmlFor="problem">
            Problem <span>*</span>
          </label>
          <textarea
            required
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            type="text"
            id="problem"
            placeholder="Sammanfatta vad problemet handlar om"
          />
        </div>

        <div className="form-group" id="troubleshooting-container">
          <label htmlFor="troubleshooting">
            Felsökningsåtgärder & info <span>*</span>
          </label>
          <textarea
            value={troubleshooting}
            onChange={(e) => setTroubleshooting(e.target.value)}
            required
            type="text"
            id="troubleshooting"
            placeholder="Notera vilka tester/åtgärder som gjorts. Info som site-ID, softphone version eller dylikt kan också noteras här"
          />
        </div>

        <div className="form-group" id="locationRel-container">
          <label htmlFor="locationRel">
            Platsrelaterat <span>*</span>
          </label>
          <select
            id="locationRel"
            onChange={(e) => isLocationRel(e.target.value)}
          >
            <option value="Ja">Ja</option>
            <option value="Nej">Nej</option>
          </select>
        </div>

        <div
          id="address-container"
          className={
            locationRel === true ? "disabled-form-group" : "form-group"
          }
        >
          <label htmlFor="address">
            Adress <span>*</span>
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            disabled={locationRel}
            className={locationRel === true ? "disabled-input" : ""}
            placeholder="Exempelgatan 4, Stockholm"
          />
        </div>

        <div className="form-group" id="problemStarted-container">
          <label htmlFor="problemStarted">Problem började</label>
          <input
            type="text"
            placeholder="åååå-mm-dd eller ungefärlig tid"
            id="problemStarted"
            value={problemStarted}
            onChange={(e) => setProblemStarted(e.target.value)}
          />
        </div>

        <div className="form-group" id="affectedUsers-container">
          <label htmlFor="affectedUsers">Antal drabbade anv.</label>
          <input
            value={affectedUsers}
            onChange={(e) => setAffectedUsers(e.target.value)}
            type="text"
            id="affectedUsers"
            placeholder='ex. "fler än 10" eller "alla"'
          />
        </div>

        <div id="examples-container">
          <label htmlFor="">Samtalsexempel</label>
          <div className="saved-examples">
            {examples.length >= 1 ? (
              <ul className="examples">
                {examples.map((item, index) => (
                  <li key={index}>
                    <p>
                      {item.date} | {item.time}
                    </p>
                    <button type="button" onClick={() => handleDelete(index)}>
                      <DeleteIcon className="delete-btn" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-examples-text">Inga exempel sparade</p>
            )}
          </div>
          <SamtalsexempelModal setExamples={setExamples} examples={examples} />
        </div>

        <div className="buttons">
          <EskaleraModal data={data} handleSubmit={handleSubmit} />
          <button id="reset-btn" type="button" onClick={resetValues}>
            <RestartAltRoundedIcon />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EskaleraPage;
