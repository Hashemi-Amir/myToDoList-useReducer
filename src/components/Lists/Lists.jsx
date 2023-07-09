import ListItem from "../ListItem/ListItem";
import classes from "./Lists.module.css";
import PropTypes from "prop-types";

Lists.propTypes = {
  todos: PropTypes.array.isRequired,
  onActions: PropTypes.func,
};

function Lists({ todos, onActions }) {
  return (
    <div className={classes.lists}>
      <ul>
        {todos.map((todo) => (
          <ListItem todo={todo} onActions={onActions} key={todo.id}>
            {todo.value}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
