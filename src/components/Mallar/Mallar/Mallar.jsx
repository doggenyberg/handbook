import { useState } from "react";
import "./mallar.css";
import Ärendereg from "./Ärendereg";
import Samtalsex from "./Samtalsex";
import Nordea from "./Nordea";

const Mallar = ({ name, date }) => {
  const [selectedItem, setSelectedItem] = useState("");

  function handleClick(item) {
    setSelectedItem(item);
  }

  return (
    <div className="mallar-container">
      <div className="mallar">
        <ul className="mallar-nav">
          <li onClick={() => handleClick("reg")}>Ärendereg.</li>
          <li onClick={() => handleClick("exm")}>Samtalsex.</li>
          <li onClick={() => handleClick("nor")}>Nordea</li>
        </ul>
        <div className="mallar-content">
          {selectedItem === "" && (
            <div className="none-selected">Välj mall på vänster sida</div>
            )}
          {selectedItem === "reg" && <Ärendereg selectedItem={selectedItem} name={name} />}
          {selectedItem === "exm" && <Samtalsex selectedItem={selectedItem} name={name} />}
          {selectedItem === "nor" && <Nordea selectedItem={selectedItem} name={name} date={date} />}
        </div>
      </div>
    </div>
  );
};

export default Mallar;
