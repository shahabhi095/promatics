import React, { useState } from "react";
import { createContext } from "react";

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [taskItem, setTaskItem] = useState([]);

  //for changing status of task
  const HandleUpdate = (id) => {
    let data = taskItem.map((el, i) => {
      if (i === +id) {
        return { ...el, isCompleted: !el.isCompleted };
      } else {
        return el;
      }
    });
    setTaskItem(data);
  };
  return (
    <todoContext.Provider value={{ taskItem, setTaskItem, HandleUpdate }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
