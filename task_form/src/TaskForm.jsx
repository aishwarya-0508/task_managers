import { useState } from "react";

function TaskForm({ addTask }) {

  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setError("Task cannot be empty");
      return;
    }

    addTask({
      id: Date.now(),
      text: task
    });

    setTask("");
    setError("");
  };

  return (

    <form onSubmit={handleSubmit} className="task-form">

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">Add</button>

      <p className="error">{error}</p>

    </form>
  );
}

export default TaskForm;