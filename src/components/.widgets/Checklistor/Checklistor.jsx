import ChecklistaModal from '../../.modals/ChecklistaModal/ChecklistaModal';
import "./checklistor.css";
import data from "./checklistor.json";
import { v4 as uuidv4 } from 'uuid';

const Checklistor = () => {
  return (
    <ul className="checklistor">
      {data && data.checklistor.map((checklista, index) => (
        <ChecklistaModal key={uuidv4()}  props={checklista} />
      ))}
    </ul>
  );
};

export default Checklistor;
