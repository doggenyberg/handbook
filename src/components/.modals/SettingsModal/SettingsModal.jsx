import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import Button from "/src/components/.buttons/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import "/src/components/.modals/modal.css";
import "./settingsmodal.css";

const SettingsModal = ({ name, setName }) => {
  const [modal, setModal] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSaveName = (e) => {
    e.preventDefault();

    const trimmedInput = nameInput.trim().replace(/\s+/g, "");
    if (trimmedInput === "") {
      return;
    }

    const capitalizedInput = trimmedInput
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());

    const formattedName = capitalizedInput.replace(
      /(^|[-])([a-z])/g,
      (_, boundary, letter) => `${boundary}${letter.toUpperCase()}`
    );

    toggleModal();
    localStorage.setItem("NAME", formattedName);
    setName(formattedName);
    console.log(`Changed the name to ${formattedName} locally.`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveName(e);
    }
  };

  return (
    <>
      <button id="settings-button" className="nav-button" onClick={toggleModal}>
        <SettingsRoundedIcon />
      </button>

      {modal && (
        <motion.div
          className="modal"
          id="settings-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal-container">
            <div className="modal-top">
              <h3>Inställningar</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <div className="setting">
                <h4>Ändra namn</h4>
                <p>
                  Här kan du ändra det namn som är inställt för appen. Detta
                  kommer enbart användas för att anpassa appen för dig i t.ex.
                  mallarna.
                </p>
                <form>
                  <input
                    type="text"
                    id="inputName"
                    placeholder="Förnamn"
                    onChange={(e) => setNameInput(e.target.value)}
                    value={nameInput}
                    onKeyDown={handleKeyPress}
                    autoComplete="off"
                  />
                  <Button text="Spara" onClick={handleSaveName} color="blue" />
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SettingsModal;
