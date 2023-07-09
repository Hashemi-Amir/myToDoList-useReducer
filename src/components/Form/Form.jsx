import { useRef } from "react";
import classes from "./Form.module.css";
import PropTypes from "prop-types";

Form.propTypes = {
  onAddToDos: PropTypes.func.isRequired,
};

function Form({ onAddToDos }) {
  const inputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userInp = inputRef.current.value;
    inputRef.current.value = "";
    onAddToDos({ type: "ADD_TODO", value: userInp, status: "progress" });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input ref={inputRef} type="text" placeholder="Enter your task..." />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
