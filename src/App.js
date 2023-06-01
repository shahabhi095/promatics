import logo from './logo.svg';
import './App.css';
import TodoList from "./Components/TodoList";
import { useEffect, useState } from 'react';


function App() {
  const [addTask, setAddTask] = useState({ task: "", isCompleted: false });
  const [tastItem, setTaskItem] = useState([])
  const [Completed, setCompleted] = useState(0)
const HandleChange=(e)=>{
setAddTask({...addTask, task:e.target.value})
}

const HandleAddTask=()=>{
  setTaskItem([...tastItem, addTask]);
  setAddTask({ task: "", isCompleted: false });
}
console.log(tastItem);
useEffect(() => {
  let count = 0
  tastItem.forEach((el)=>{
    if(el.isCompleted===true){
      count++
    }
  });
  setCompleted(count);

}, [tastItem]);

const HandleUpdate=(val,id)=>{
  if(val){

  }
  let data = tastItem.map((el,i)=>{
    if(i===id){
     return {...el, isCompleted:val}

    }else{
    return  el
    }
  })
setTaskItem(data);

}

const HandleDelete=(id)=>{
  console.log(id)
let data = tastItem.filter((el,i)=> i!==id);
setTaskItem(data);
}
 return (
   <>
     <div style={{ width: "30%", margin: "auto" }}>
       <input
         placeholder="Add new task"
         value={addTask.task}
         onChange={HandleChange}
       />
       <button onClick={HandleAddTask}>Add task</button>
     </div>
     <div>
       <h1>Total Task:{tastItem.length}</h1>
       <h1>Completed Task:{Completed}</h1>
     </div>
     <div>
       <TodoList
         tastItem={tastItem}
         HandleDelete={HandleDelete}
         HandleUpdate={HandleUpdate}
       />
      
     </div>
   </>
 );
}

export default App;
