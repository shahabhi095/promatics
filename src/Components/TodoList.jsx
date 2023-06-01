import React, { useState } from 'react'

const TodoList = ({ item, id, HandleUpdate, HandleDelete }) => {
  const { task, isCompleted } = item;
  const [update, setUpdate] = useState(isCompleted)
  const HandleStatus=()=>{
    setUpdate(!update);
    HandleUpdate(update, id);
  }
  console.log(update)
  return (
    <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
      <input type="checkbox" checked={update===true?true:false} onChange={HandleStatus}/>
      <h4>{task}</h4>
      <p style={{color: isCompleted===true?"green":"red"}}>{isCompleted === true ? "Completed" : "Pending"}</p>
      <button onClick={() => HandleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoList
