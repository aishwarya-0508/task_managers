function TaskItem({ resource, deleteResource }) {

  return (

    <div className="task-item">

      <span>{resource.text}</span>

      <button onClick={() => deleteResource(resource.id)}>
        Delete
      </button>

    </div>

  );
}

export default TaskItem;
