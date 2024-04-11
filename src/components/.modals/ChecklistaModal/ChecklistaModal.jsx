import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "/src/components/.modals/modal.css";
import "./checklistamodal.css";
import { useState } from "react";
import SaveButton from "./SaveButton/SaveButton";
import { motion } from "framer-motion";

const ChecklistaModal = ({ props }) => {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleItemClick = (problem) => {
    setSelectedItem(problem);
  };

  const handleSave = () => {
    const item = selectedItem;
    const prevArrayJSON = localStorage.getItem("FAVOURITES");
    const prevArray = prevArrayJSON ? JSON.parse(prevArrayJSON) : [];
    const isDuplicate = prevArray.some(
      (favItem) => JSON.stringify(favItem) === JSON.stringify(item)
    );
    if (!isDuplicate) {
      prevArray.push(item);
      localStorage.setItem("FAVOURITES", JSON.stringify(prevArray));
    }
    return isDuplicate;
  };

  return (
    <>
      <li className="modal-btn" onClick={toggleModal}>
        {props.kategori}
      </li>

      {modal && (
        <motion.div
          id="checklista-modal-container"
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div id="checklista-modal" className="modal-container">
            <div className="modal-top">
              <h3>{props.kategori}</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <ul className="checklista-categories">
                {props.problem.map((problem, index) => (
                  <li
                    onClick={() => handleItemClick(problem)}
                    key={index}
                    className={selectedItem === problem ? "selected" : ""}
                  >
                    {problem.namn}
                    <span>#{index + 1}</span>
                  </li>
                ))}
              </ul>
              {selectedItem && (
                <>
                  <ul className="checklista-frame">
                    {selectedItem &&
                      selectedItem.checklistor &&
                      selectedItem.checklistor.map(
                        (checklistaItem, innerIndex) => (
                          <li key={innerIndex}>
                            {typeof checklistaItem === "string" ? (
                              checklistaItem
                            ) : (
                              <>
                                {checklistaItem.checklista}

                                {checklistaItem.länkar &&
                                  checklistaItem.länkar.length > 0 && (
                                    <ul className="sub-list">
                                      {checklistaItem.länkar.map(
                                        (link, subIndex) => (
                                          <li
                                            className="sub-item"
                                            key={subIndex}
                                          >
                                            <h5>{link.text}:</h5>
                                            <a
                                              href={link.url[0]}
                                              target="_blank"
                                            >
                                              iPhone
                                            </a>
                                            <span>|</span>
                                            <a
                                              href={link.url[1]}
                                              target="_blank"
                                            >
                                              Samsung
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}

                                {checklistaItem.title}
                                <ul className="sub-list">
                                  {checklistaItem.subList &&
                                    checklistaItem.subList.map(
                                      (item, subIndex) => (
                                        <li className="sub-item" key={subIndex}>
                                          {item}
                                        </li>
                                      )
                                    )}
                                </ul>
                              </>
                            )}
                          </li>
                        )
                      )}
                  </ul>
                  <SaveButton
                    getSelectedItem={selectedItem}
                    onSave={handleSave}
                  />
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChecklistaModal;
