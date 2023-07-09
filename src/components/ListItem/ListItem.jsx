import clasess from "./ListItem.module.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import PropTypes from "prop-types";

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onActions: PropTypes.func,
  todo: PropTypes.object,
};

function ListItem({ children, onActions, todo }) {
  //
  const deleteHandler = () => {
    onActions({ type: "DELETE_TODO", id: todo.id });
  };

  const doneHandler = () => {
    onActions({ type: "CHANGE_STATUS_TO_DONE", id: todo.id });
  };

  return (
    <li className={clasess.listItem}>
      {children}
      <div className={clasess.icons}>
        <BsTrash onClick={deleteHandler} color="#FF6262" size={20} />
        <AiOutlineCheckCircle onClick={doneHandler} color="#05FF00" size={20} />
      </div>
    </li>
  );
}

export default ListItem;
