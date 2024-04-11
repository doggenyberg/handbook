import { useEffect, useState } from "react";
import FavouriteModal from "../../.modals/FavouriteModal/FavouriteModal";
import "./favourites.css";
import { motion } from "framer-motion";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("FAVOURITES"));
    if (storedFavourites) {
      // Sort the favourites by the first letter of the name property
      storedFavourites.sort((a, b) =>
        a.namn.toLowerCase().localeCompare(b.namn.toLowerCase())
      );
      setFavourites(storedFavourites);
    }
  }, []);

  const handleDelete = (name) => {
    const updatedFavourites = favourites.filter((item) => item.namn !== name);
    localStorage.setItem("FAVOURITES", JSON.stringify(updatedFavourites));
    setFavourites(updatedFavourites);
  };

  return (
    <div className="widget favourites">
      <h4>Favoriter</h4>
      <motion.div
        className="fav-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {favourites.length > 0 ? (
          favourites.map((item, index) => (
            <FavouriteModal key={index} item={item} onDelete={handleDelete} />
          ))
        ) : (
          <>
            <h3>Du har inte lagt till några favoriter</h3>
            <p>Gå till "Checklistor" för att spara favoriter</p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Favourites;
