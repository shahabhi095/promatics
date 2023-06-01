import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { todoContext } from "../Context/TodoContext";
import "../styles/todoItem.css";

const TodoItem = () => {
  // taskItem is array of todo item
  const { taskItem, HandleUpdate } = useContext(todoContext);
  const { id } = useParams();

  const { task, isCompleted } = taskItem[id];
  return (
    <div className="ItemContainer">
      <div className="nav">
        <button>
          {" "}
          <Link className="navLink" to={"/"}>Home</Link>
        </button>
      </div>
      <div className="item" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => HandleUpdate(id)}
        />
        <h4>{task}</h4>
        <p style={{ color: isCompleted === true ? "green" : "red" }}>
          {isCompleted === true ? "Completed" : "Pending"}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
