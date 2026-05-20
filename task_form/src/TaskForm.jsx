import { useState } from "react";

function TaskForm({ addResource }) {

  const [resource, setResource] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (resource.trim() === "") {

      setError("Resource name cannot be empty");

      return;
    }

    addResource({
      id: Date.now(),
      text: resource
    });

    setResource("");
    setError("");
  };

  return (

    <form onSubmit={handleSubmit} className="task-form">

      <input
        type="text"
        placeholder="Enter Resource Name"
        value={resource}
        onChange={(e) => setResource(e.target.value)}
      />

      <button type="submit">
        Add Resource
      </button>

      <p className="error">{error}</p>

    </form>

  );
}

export default TaskForm;
