import React, { useContext, useEffect, useState } from "react";
import "../styles/todoList.css"
import { Link } from "react-router-dom";
import { todoContext } from "../Context/TodoContext";

const TodoList = () => {
  const [addTask, setAddTask] = useState({
    task: "",
    isCompleted: false,
  });
  // taskItem is array of todo item
  const { taskItem, setTaskItem } = useContext(todoContext);
  const [Completed, setCompleted] = useState(0);

  const HandleChange = (e) => {
    setAddTask({ ...addTask, task: e.target.value });
  };

  //Add toto function
  const HandleAddTodo = () => {
    if (addTask.task){
        setTaskItem([...taskItem, addTask]);
    } 
    setAddTask({ task: "", isCompleted: false });
  };

  //count completed task
  useEffect(() => {
    let count = 0;
    taskItem.forEach((el) => {
      if (el.isCompleted === true) {
        count++;
      }
    });
    setCompleted(count);
  }, [taskItem]);

  const HandleDelete = (id) => {
    let data = taskItem.filter((el, i) => i !== id);
    setTaskItem(data);
  };

  return (
    <div className="Container">
      <div className="itemCount">
        {/* total and completed todo */}
        <h1>Total Task:{taskItem.length}</h1>
        <h1>Completed Task:{Completed}</h1>
      </div>
      <div>
        <div className="AddTodo">
          <input
            required
            placeholder="Add new task"
            value={addTask.task}
            onChange={HandleChange}
          />
          <button onClick={HandleAddTodo}>Add task</button>
        </div>

        <ul className="todolist">
          {taskItem &&
            taskItem.map((el, i) => (
              <li key={i}>
                <p
                  style={{
                    backgroundColor:
                      el.isCompleted === true ? "#46e153" : "#da623e",
                    padding: "5px 20px",
                  }}
                >
                  <Link  className="todo" to={`/todoitem/${i}`}>
                    {el.task}
                  </Link>
                </p>
                <button onClick={() => HandleDelete(i)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
