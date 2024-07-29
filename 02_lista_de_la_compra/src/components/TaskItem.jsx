function TaskItem({task}) {

  return (
    <p className= { task.completed  ? "completed" : "" }>
      {task.task}
    </p>
  );
}  
export default TaskItem;