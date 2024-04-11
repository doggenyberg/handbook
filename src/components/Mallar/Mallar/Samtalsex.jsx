import { useRef } from "react";
import ButtonAccent from "../../.buttons/ButtonAccent";
import "./Mallar.css";
import { motion } from "framer-motion";

const Samtalsex = ({ name, selectedItem }) => {
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
          För att kunna fortsätta vår felsökning behöver vi samtalsexempel där
          problemet uppstår från er sida.
          Utgå gärna från nedanstående mall och svara i ett vändande mejl!
          <br />
          <br />
          A-nummer:
          <br />
          B-nummer:
          <br />
          Datum:
          <br />
          Tid:
          <br />
          Adress (inomhus eller utomhus?):
          <br />
          Felbeskrivning (t.ex. A hör inte mig, eller samtal bryts efter X tid):
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

export default Samtalsex;
