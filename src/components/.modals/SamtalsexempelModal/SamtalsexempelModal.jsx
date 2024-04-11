import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./samtalsexempelmodal.css";
import { motion } from "framer-motion";

const SamtalsexempelModal = ({ setExamples, examples }) => {
  const [modal, setModal] = useState(false);
  const [anumber, setAnumber] = useState("");
  const [aimsi, setAimsi] = useState("");
  const [bnumber, setBnumber] = useState("");
  const [bimsi, setBimsi] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [errorClass, setErrorClass] = useState("error-message");
  const [saveClass, setSaveClass] = useState("save-message");

  const toggleModal = () => {
    setModal(!modal);
  };

  const saveExample = () => {
    if (validate()) {
      const example = {
        anumber: anumber,
        aimsi: aimsi,
        bnumber: bnumber,
        bimsi: bimsi,
        date: date,
        time: time,
        note: note,
      };
      setSaveClass("save-message save-show");
      setTimeout(() => {
        setSaveClass("save-message");
      }, 4000);
      setExamples([...examples, example]);
      resetValues();
    } else {
      setErrorClass("error-message error-show");
      setTimeout(() => {
        setErrorClass("error-message");
      }, 4000);
    }
  };

  const validate = () => {
    let isValid = true;
    if (anumber === "" || bnumber === "" || date === "" || time === "") {
      isValid = false;
    }
    return isValid;
  };

  const resetValues = () => {
    setTime("");
    setNote("");
  };

  return (
    <>
      <button
        type="button"
        id="examples-btn"
        onClick={toggleModal}
        className="example-btn"
      >
        Lägg till exempel
      </button>

      {modal && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal-container">
            <div className="modal-top">
              <h3>Samtalsexempel</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <div className="sub-form">
                <div className="form-group" id="a-number">
                  <div className="form-top">
                    <label>
                      A-nummer <span>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Telefonnummer"
                    value={anumber}
                    onChange={(e) => setAnumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="IMSI (valfri)"
                    value={aimsi}
                    onChange={(e) => setAimsi(e.target.value)}
                  />
                </div>
                <div className="form-group" id="b-number">
                  <div className="form-top">
                    <label>
                      B-nummer <span>*</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Telefonnummer"
                    value={bnumber}
                    onChange={(e) => setBnumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="IMSI (valfri)"
                    value={bimsi}
                    onChange={(e) => setBimsi(e.target.value)}
                  />
                </div>
                <div className="form-group" id="date-time">
                  <div className="form-top">
                    <label>
                      Datum & tid <span>*</span>
                    </label>
                  </div>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Tid"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="form-top">
                    <label>Notering</label>
                  </div>
                  <textarea
                    placeholder='ex. "RTP Timeout sker efter 10min" (valfri)'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  ></textarea>
                </div>
                <button type="button" onClick={saveExample}>
                  Spara
                </button>
                <div className={saveClass}>Sparat!</div>
                <div className={errorClass}>Fyll i alla nödvändiga fält!</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SamtalsexempelModal;
