import { useState } from "react";
import ListItem from "../../.widgets/Favourites/ListItem/ListItem";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../ChecklistaModal/checklistamodal.css";
import { motion } from "framer-motion";

const FavouriteModal = ({ item, onDelete }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <ListItem item={item.namn} onDelete={onDelete} onClick={toggleModal} />

      {modal && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-overlay" onClick={toggleModal}></div>
          <div className="modal-container">
            <div className="modal-top">
              <h3>{item.namn}</h3>
              <CloseRoundedIcon
                onClick={toggleModal}
                className="modal-close-btn"
              />
            </div>
            <div className="modal-body">
              <ul className="checklista-frame">
                {item &&
                  item.checklistor &&
                  item.checklistor.map((checklistaItem, innerIndex) => (
                    <li key={innerIndex}>
                      {typeof checklistaItem === "string" ? (
                        checklistaItem
                      ) : (
                        <>
                          {checklistaItem.checklista && (
                            <>
                              {checklistaItem.checklista}
                              <ul className="sub-list">
                                {checklistaItem.länkar &&
                                  checklistaItem.länkar.map(
                                    (link, subIndex) => (
                                      <li className="sub-item" key={subIndex}>
                                        <h5>{link.text}</h5>
                                        <a href={link.url[0]} target="_blank">
                                          iPhone
                                        </a>
                                        <span>|</span>
                                        <a href={link.url[1]} target="_blank">
                                          Samsung
                                        </a>
                                      </li>
                                    )
                                  )}
                              </ul>
                            </>
                          )}
                          {checklistaItem.title}
                          <ul className="sub-list">
                            {checklistaItem.subList &&
                              checklistaItem.subList.map((item, subIndex) => (
                                <li className="sub-item" key={subIndex}>
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FavouriteModal;
