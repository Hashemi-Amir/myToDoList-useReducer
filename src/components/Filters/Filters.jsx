import Filter from "../Filter/Filter";
import clasess from "./Filters.module.css";
import PropTypes from "prop-types";

Filters.propTypes = {
  onChangeFilter: PropTypes.func,
  filterActive: PropTypes.string.isRequired,
};

function Filters({ onChangeFilter, filterActive }) {
  return (
    <div className={clasess.filters}>
      <Filter
        filterType={"progress"}
        onChangeFilter={onChangeFilter}
        filterActive={filterActive}
      >
        In progress todos
      </Filter>
      <Filter
        filterType={"done"}
        onChangeFilter={onChangeFilter}
        filterActive={filterActive}
      >
        Done todos
      </Filter>
    </div>
  );
}

export default Filters;
