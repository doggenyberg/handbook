import Mallar from "./Mallar/Mallar";
import { motion } from "framer-motion";

const MallarPage = ({name, date}) => {
  return (
    <motion.div
    className="mallar-page page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
      <div className="top">
        <h2>Mallar</h2>
        <p>Copy-paste mallar som kan användas i dina mejl</p>
      </div>
      <Mallar name={name} date={date} />
    </motion.div>
  );
}
 
export default MallarPage;