import { motion } from "framer-motion";
import "./help.css";

const Help = () => {
  return (
    <motion.div
      className="help-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="top">
        <h2>Hjälp</h2>
        <p>Frågor & svar på hur du använder appen</p>
      </div>
      <div className="help-body">
        <div className="question">
          <h5>Hur ändrar man namn?</h5>
          <p>Detta gör du under inställningarna. Inställningarna hittar du längst ned till vänster.</p>
        </div>
        <div className="question">
          <h5>Varför har jag förlorat alla mina sparde checklistor?</h5>
          <p>Troligtvis har du rensat cache och cookies i din webbläsare. Skulle du använda någon annan webbläsare kommer inte dina sparade checklistor följa med heller.</p>
        </div>
        <div className="question">
          <h5>Är det möjligt att återställa förlorade checklistor?</h5>
          <p>Nej, det är inte möjligt. Du behöver spara de på nytt.</p>
        </div>
        <div className="question">
          <h5>Hur rapporterar jag en bugg eller ger feedback?</h5>
          <p>Detta kan du göra antingen via den röda knappen nere till vänster. Annars går det bra att höra av sig direkt till mig!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Help;
