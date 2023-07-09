import classes from "./Filter.module.css";
import PropTypes from "prop-types";

Filter.propTypes = {
  children: PropTypes.node,
  onChangeFilter: PropTypes.func,
  filterType: PropTypes.string,
  filterActive: PropTypes.bool.isRequired,
};

function Filter({ children, onChangeFilter, filterType, filterActive }) {
  const clickHandler = () => {
    onChangeFilter({ type: "CHANGE_FILTER", filterType });
  };
  return (
    <button
      onClick={clickHandler}
      className={`${classes.filter} ${
        filterType === filterActive ? classes.active : ""
      }`}
    >
      {children}
    </button>
  );
}
export default Filter;
