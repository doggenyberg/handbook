import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import "./savebutton.css";
import { useState } from "react";

const SaveButton = ({ getSelectedItem, onSave }) => {
  const [style, setStyle] = useState("dialog");
  const [saveStyle, setSaveStyle] = useState("save-message-dialog");

  const saveFavourite = () => {
    const isDuplicate = onSave(getSelectedItem);

    if (isDuplicate) {
      setStyle("dialog dialog-show");
      setTimeout(() => {
        setStyle("dialog");
      }, 3000);
    } else {
      setSaveStyle("save-message-dialog show-save-message");
      setTimeout(() => {
        setSaveStyle("save-message-dialog");
      }, 3000);
    }
  };

  return (
    <>
      <div className={style}>Checklistan finns redan sparad!</div>
      <div className={saveStyle}>Sparat!</div>
      <div className="modal-save-btn" onClick={saveFavourite}>
        Spara som favorit
      </div>
    </>
  );
};

export default SaveButton;
