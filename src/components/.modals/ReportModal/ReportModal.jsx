import { useState } from "react";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "/src/components/.modals/modal.css";
import "./report-modal.css";
import { motion } from "framer-motion";

const ReportModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    const message = event.target.elements.message.value.trim();
    if (message === '') {
      event.preventDefault();
      alert('Meddelande får inte vara tomt');
    }
  };

  return (
    <>
      <button id="report-button" className="nav-button" onClick={toggleModal}>
        <FeedbackRoundedIcon />
      </button>

      {modal && (
        <motion.div
          className="modal"
          id="report-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal-container">
            <div className="modal-top">
              <h3>Rapportera</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <p>
                Här kan du rapportera eventuella buggar och/eller bidra med
                idéer för att utveckla appen vidare.
                <br />
                Det går även bra att ladda upp en bild som kan bifogas i
                meddelandet.
                <br />
                <br />
                När du sedan klickar på "Skicka" kommer du att dirigeras vidare
                till en annan sida.
              </p>
              <form action="https://formbold.com/s/oP2Wz" method="POST" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ditt namn (valfritt)" name="name" />
                <select name="subject">
                  <option value="fault">Fel</option>
                  <option value="tips">Tips</option>
                </select>
                <input type="file" placeholder="Fil" name="file" />
                <textarea name="message" placeholder="Meddelande" />

                <button type="submit">Skicka</button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ReportModal;