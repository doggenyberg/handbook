import React, { useState, useRef } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./eskaleramodal.css";
import Button from "../../.buttons/Button";
import { motion } from "framer-motion";

const EskaleraModal = ({ handleSubmit, data }) => {
  const [modal, setModal] = useState(false);
  const [errorClass, setErrorClass] = useState("error-message-eskalera");
  const eskaleraFrameRef = useRef(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validate()) {
      toggleModal();
      handleSubmit(e);
    } else {
      setErrorClass("error-message-eskalera error-show-eskalera");
      setTimeout(() => {
        setErrorClass("error-message-eskalera");
      }, 4000);
    }
  };

  const validate = () => {
    if (data.problem === "" || data.troubleshooting === "") {
      return false;
    }
    if (!data.locationRel && data.address === "") {
      return false;
    }
    return true;
  };

  const copyToClipboard = () => {
    const eskaleraFrame = eskaleraFrameRef.current;
    if (eskaleraFrame) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(eskaleraFrame);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
    }
  };

  return (
    <>
      <div className={errorClass}>Fyll i alla fält!</div>
      <Button
        color="green"
        id="submit-btn"
        onClick={handleClick}
        text="Eskalera"
      />

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
              <h3>Eskalera</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <div className="eskalera-info">
                Kopiera & klistra in mallen i ditt ärende. Dubbelkolla även att
                all info finns med.
              </div>
              <div className="eskalera-frame" readOnly ref={eskaleraFrameRef}>
                <span>// PROBLEM</span>
                <br />
                {data.problem && <span>{data.problem}</span>}
                <br />
                <br />
                {data.problemStarted && (
                  <>
                    <span>Problem började: {data.problemStarted}</span>
                    <br />
                  </>
                )}
                {data.affectedUsers && (
                  <>
                    <span>Drabbade användare: {data.affectedUsers}</span>
                    <br />
                  </>
                )}

                {<span>Platsrelaterat: {data.locationRel ? "Nej" : "Ja"}</span>}
                <br />
                {data.address && !data.locationRel && (
                  <>
                    <span>Adress: {data.address}</span>
                    <br />
                  </>
                )}
                <br />
                <span>// FELSÖKNING & INFO</span>
                <br />
                {data.troubleshooting && <span>{data.troubleshooting}</span>}
                <br />
                <br />
                {data.examples.length >= 1 && <span>// EXEMPEL</span>}
                {data.examples.map((item, index) => (
                  <div className="example" key={index}>
                    <>
                      <span>A-part: {item.anumber}</span>
                      {item.aimsi && <span>| IMSI {item.aimsi}</span>}
                      <br />
                      <span>B-part: {item.bnumber}</span>
                      {item.bimsi && <span>| IMSI {item.bimsi}</span>}
                      <br />
                      <span>Datum: {item.date}</span>
                      <br />
                      <span>Tid: {item.time}</span>
                      <br />
                      {item.note && <span>Notering: {item.note}</span>}
                    </>
                    <br />
                  </div>
                ))}
              </div>
              <div className="buttons">
                <Button
                  color="green"
                  onClick={copyToClipboard}
                  text="Kopiera mall"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EskaleraModal;
