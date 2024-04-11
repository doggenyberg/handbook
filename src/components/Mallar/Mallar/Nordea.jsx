import { useRef } from "react";
import ButtonAccent from "../../.buttons/ButtonAccent";
import "./Mallar.css";
import { motion } from "framer-motion";

const Nordea = ({ name, selectedItem, date }) => {
  const canvasRef = useRef(null);

  function handleCopy() {
    const canvas = canvasRef.current;
    if (canvas) {
      const text = canvas.innerText;

      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = text;
      document.body.appendChild(tempTextArea);

      tempTextArea.select();
      try {
        document.execCommand("copy");
      } catch (error) {
        console.log("Couldn't copy text to clipboard.");
      }

      document.body.removeChild(tempTextArea);
    }
  }

  // Convert date string to Date object
  const currentDate = new Date(date);
  // Add 7 days to the current date
  const newDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  // Format the new date to a string with leading zeros
  const formattedDate = `${newDate.getFullYear()}-${
    ("0" + (newDate.getMonth() + 1)).slice(-2)
  }-${("0" + newDate.getDate()).slice(-2)}`;

  console.log(formattedDate);

  return (
    <>
      <motion.div
        className="mall-canvas"
        ref={canvasRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Hej,
          <br />
          <br />
          Som Nordeas mobiloperatör utför Tele2 regelbundna uppföljningar på användarnas upplevelse av mobiltjänsten. Vi noterade i våra mätningar att du under föregående månad låg under de gränsvärden på tillgänglighet vi har definierat, vilket kan innebära att du upplevt vissa mindre störningar. Om detta är fallet, vänligen kontakta Tele2 Support på telefonnummer 08-51981800. Numret är tillgängligt att ringa på fram till {formattedDate}. 
          <br />
          <br />
          Mvh Tele2
        </p>
      </motion.div>
      <ButtonAccent
        title="Kopiera"
        handleCopy={handleCopy}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default Nordea;
