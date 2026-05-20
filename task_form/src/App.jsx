import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    console.log("Resources Updated");
  }, [resources]);

  const addResource = (resource) => {
    setResources([...resources, resource]);
  };

  const deleteResource = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (

    <div className="container">

      <h1>ShareSphere</h1>

      <p className="subtitle">
        Smart Community Resource Sharing Platform
      </p>

      <div className="info-box">

        <p>✔ Share books and study materials</p>

        <p>✔ Add useful community resources</p>

        <p>✔ Manage resources dynamically</p>

      </div>

      <TaskForm addResource={addResource} />

      <TaskList
        resources={resources}
        deleteResource={deleteResource}
      />

    </div>

  );
}

export default App;
