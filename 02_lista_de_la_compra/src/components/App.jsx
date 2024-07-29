import '../styles/App.scss';
import {useState} from 'react';
import TaskList from './TaskList';
import Header from './Header';



function App() {

  const originalTasks = [ 
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    { task: "Comerme las croquetas mirando a la gente que entra en el gimnasio", completed: false },
  ];
  const [ newTask, setnewsTask ] = useState('');
  const [ tasks, setTasks ] = useState( originalTasks );

  const handleInputAddTask = (ev) => {
    setnewsTask(ev.currentTarget.value);
  }
  const handleClickTasks = (ev) => {
    ev.preventDefault();

    {/*tasks.push({
      task: newTask,
      completed: true
    })*/}

    setTasks([
      ...tasks,
      {
        task: newTask,
        completed: false
      }
    ]);

    setnewsTask('');
  }

  return (
    <>
      <main>
        <Header tasks={tasks}/>
       <div className="tasksContainer">
          <h2 className="title">Lista de la compra</h2>
          <section className='formulario'>
          <p htmlFor="addTask">Actividad:</p>
          <form className='form'>
              <input
                value={newTask}
                onChange={handleInputAddTask}
                type="text" 
                name="addTask" 
                id="addTask"
              />

              <input
              className="btn form"
                onClick={handleClickTasks}
                type="submit"
                value="Guardar" 
              />
          </form>
          <TaskList tasks={tasks}/>
          </section>
        </div> 
      </main>
    </>
  )
}

export default App;



                       
