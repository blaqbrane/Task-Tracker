import {FaTimes} from 'react-icons/fa'
const TaskList = ({tasks, handleDelete,onToggle}) => {
    console.log()
    return (
        <div> 
            {tasks.map((task)=> (
                //if the task.reminder is false, the classname, should be "event", while if true it should take the classname of event.reminder
            <div key={task.id} className={`event  ${task.reminder ? 'reminder' : ''}`} onDoubleClick ={() => onToggle(task.id)}>
                <h3>
                    {task.text}
                    <FaTimes style ={{color:'red', cursor: 'pointer'}}  onClick = {() => handleDelete(task.id)}/>
                </h3>
                <p>{task.day}</p>
            </div>
            ))}
        </div>
        
        
    );
}
 
export default TaskList;