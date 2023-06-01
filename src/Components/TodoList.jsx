import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tastItem, HandleDelete, HandleUpdate }) => {
    console.log(tastItem);
  return (
    <div>
      {tastItem &&
        tastItem.map((el, i) => (
          <TodoItem
            key={i}
            item={el}
            id={i}
            HandleDelete={HandleDelete}
            HandleUpdate={HandleUpdate}
          />
        ))}
    </div>
  );
};

export default TodoList;
