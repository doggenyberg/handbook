import React, { useState } from "react";
import { motion } from "framer-motion";
import "./InitialNameModal.css";
import Button from "/src/components/.buttons/Button";

const InitialNameModal = ({ setName }) => {
  const [modal, setModal] = useState(true);
  const [nameInput, setNameInput] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSaveName = (e) => {
    e.preventDefault();

    const trimmedInput = nameInput.trim().replace(/\s+/g, "");
    if (trimmedInput === "") {
      alert("Please enter your name.");
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
    console.log(`Saved name ${formattedName} locally.`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveName(e);
    }
  };

  return (
    <>
      {modal && (
        <motion.div
          id="initial-name-modal"
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-top">
              <h3></h3>
            </div>
            <div className="modal-body">
              <h2>
                Hand<span>book</span>
              </h2>
              <div className="info">
                <div className="subject">
                  <h4>Välkommen</h4>
                  <p>
                    Handbook är skapad för att göra TCS-livet lite enklare.
                    Verktygen som finns hjälper dig att:
                  </p>
                  <ul>
                    <li>Steg för steg lösa olika vanliga fel.</li>
                    <li>
                      Skriva tydliga och sammanfattande eskaleringsmallar.
                    </li>
                    <li>Snabb åtkomst till användbara mallar och länkar.</li>
                  </ul>
                </div>
                <div className="subject">
                  <h4>Synpunkter</h4>
                  <p>
                    Stöter du på någon bugg eller har synpunkter på hur appen
                    kan utvecklas, får du gärna hojta till mig!
                    <br />
                    <br />
                    Du kan även rapportera detta till mig genom den röda knappen
                    nere till vänster som syns när detta fönster har stängts.
                  </p>
                </div>
                <div className="subject name">
                  <h4>Namn</h4>
                  <p>
                    För att komma igång kan du skriva ditt namn nedan. Detta
                    kommer enbart användas för att anpassa appen för dig i t.ex.
                    mallarna.
                    <br />
                    <br />
                    Det går självklart att ändra namnet i efterhand ifall det önskas!
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
                    <Button
                      text="Spara"
                      onClick={handleSaveName}
                      color="blue"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default InitialNameModal;
