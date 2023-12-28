import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodolist([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodolist(todoList.filter((task) => task !== taskName));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (<div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}> X </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
