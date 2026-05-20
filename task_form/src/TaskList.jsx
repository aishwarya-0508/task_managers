import TaskItem from "./TaskItem";

function TaskList({ resources, deleteResource }) {

  return (

    <div>

      {resources.map((resource) => (

        <TaskItem
          key={resource.id}
          resource={resource}
          deleteResource={deleteResource}
        />

      ))}

    </div>

  );
}

export default TaskList;
