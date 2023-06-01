import "./styles/App.css";
import TodoList from "./Components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoItem from "./Components/TodoItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todoitem/:id" element={<TodoItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
