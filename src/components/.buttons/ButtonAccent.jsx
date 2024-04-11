import { motion } from "framer-motion";
import { useState } from "react";
import "./buttons.css";

const ButtonAccent = ({ title, handleCopy, selectedItem }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    if (selectedItem) {
      handleCopy();
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={handleButtonClick}>{title}</button>
      {showPopup && selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: -50 }}
          animate={{ opacity: 1, y: -95, x: -50 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="popup"
        >
          Mallen är kopierad!
        </motion.div>
      )}
    </div>
  );
};

export default ButtonAccent;
