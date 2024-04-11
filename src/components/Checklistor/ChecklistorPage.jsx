import Checklistor from "../.widgets/Checklistor/Checklistor";
import { motion } from "framer-motion";
import "./checklistorpage.css";

const ChecklistorPage = () => {
  return (
    <motion.div
      className="checklista-page page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="top">
        <h2>Checklistor</h2>
        <p>Lös enkla & generella problem steg för steg</p>
      </div>
      <Checklistor />
    </motion.div>
  );
};

export default ChecklistorPage;
