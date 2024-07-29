import TaskItem from "./TaskItem"

function TaskList({tasks}) {
  return (
      <ul className="list">
        {tasks.map(task => <li className="list" key={task.task}><TaskItem task={task} /></li> )}
      </ul>
  );
}

export default TaskList;

{/*Este componente se encarga de renderizar los ul y li */}
