import classes from "./App.module.css";
import Form from "./components/Form/Form";
import Lists from "./components/Lists/Lists";
import Filters from "./components/Filters/Filters";
import { useReducer } from "react";

const reducerToDos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        lists: [
          ...state.lists,
          { value: action.value, status: action.status, id: Date.now() },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        lists: state.lists.filter((todo) => todo.id !== action.id),
      };

    case "CHANGE_STATUS_TO_DONE":
      return {
        ...state,
        lists: state.lists.map((todo) =>
          todo.id === action.id ? { ...todo, status: "done" } : todo
        ),
      };

    case "CHANGE_FILTER": {
      return {
        ...state,
        filter: action.filterType,
      };
    }

    default:
      return {
        filter: "progress",
        lists: [],
      };
  }
};

function App() {
  const [todos, dispatchToDos] = useReducer(reducerToDos, {
    filter: "progress",
    lists: [],
  });

  const filteredTodos = todos.lists.filter(
    (todo) => todo.status === todos.filter
  );

  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>MY TO DO LIST</header>
        <Form onAddToDos={dispatchToDos}></Form>
        {todos.lists.length > 0 && (
          <Filters
            onChangeFilter={dispatchToDos}
            filterActive={todos.filter}
          ></Filters>
        )}
        <Lists onActions={dispatchToDos} todos={filteredTodos}></Lists>
      </div>
    </>
  );
}

export default App;
