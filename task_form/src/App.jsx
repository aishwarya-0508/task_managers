import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tasks Updated");
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
  <div className="container">

  <h1>Task Manager</h1>

  <p className="subtitle">
    Organize your daily tasks efficiently.
  </p>

  <div className="info-box">
<center>
    <p>✔Add new tasks easily</p>

    <p>✔Delete completed tasks</p>
</center>
  </div>

  <TaskForm addTask={addTask} />

  <TaskList tasks={tasks} deleteTask={deleteTask} />

</div>
  );
}

export default App;