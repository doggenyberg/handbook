import { useRef } from "react";
import ButtonAccent from "../../.buttons/ButtonAccent";
import { motion } from "framer-motion";

const Ärendereg = ({ name, selectedItem }) => {
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
          Ditt ärende gällande [FEL] har registrerats och tilldelats
          ärendenummer [ÄRENDENUMMER].
          <br />
          Vi hör av oss om vidare uppdateringar eller om ytterligare frågor
          dyker upp!
          <br />
          <br />
          Vänligen,
          <br />
          {name}
          <br />
          Tele2 Teknisk Support
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

export default Ärendereg;
