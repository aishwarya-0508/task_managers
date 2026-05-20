function TaskItem({ task, deleteTask }) {

  return (

    <div className="task-item">

      <span>{task.text}</span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>

    </div>

  );
}

export default TaskItem;