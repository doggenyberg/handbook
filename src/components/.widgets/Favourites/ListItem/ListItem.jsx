import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const ListItem = ({ item, onDelete, onClick }) => {
  return (
    <div className="list-item">
      <h5 onClick={onClick}>{item}</h5>
      <DeleteRoundedIcon className="list-icon" onClick={() => onDelete(item)} />
    </div>
  );
};

export default ListItem;
