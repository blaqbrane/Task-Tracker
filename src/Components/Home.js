import TaskList from "./TaskList";
import Header from './Header'
import Create from "./Create";
import UseFetch from "./UseFetch";
const Home = () => {
    const{tasks,createTask,show,setShow,handleDelete,toggleReminder,error,isPending} = UseFetch("http://localhost:8000/tasks")
    return ( 
        <>
          <div className="task">
            {error && <div>{error} </div>}
            {isPending && <div> Loading... </div>}
            <Header  onShow={() => setShow(!show)} showAdd= {show}/>
            {show && <Create onAdd ={createTask}/>}
            {tasks && tasks.length > 0 ? <TaskList handleDelete={handleDelete} tasks={tasks} handleToggle={toggleReminder}/> : <h2>Add New Task</h2>}
          </div>
        </>
     );
}
 
export default Home;