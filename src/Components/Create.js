import{useState} from "react";
const Create = ( {onAdd}) => {
    const[text, setText] = useState('');
    const[day, setDay] = useState('');
    const[reminder, setReminder] = useState(false);
    const[ispending, setIspending] = useState(false)
    
const handleSubmit= (e) => {
    e.preventDefault();
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
    const task ={text,day,reminder};
    fetch("http://localhost:8000/tasks",{
        method:"POST",
        headers:{"Content-Type": "aplication/json"},
        body:JSON.stringify(task)
    })
    .then(() => {
        console.log()
        setIspending(false)
    })
}

return(
    <form className= "add-form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input 
            type='text'
            required 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input 
            type='text' 
            placeholder='Add Day & Time'
            value={day}
            required
            onChange={(e) => setDay(e.target.value)}
            />

        </div>
        <div className="form-control form-control-check">
            <label  htmlFor="checked--style"> Set Reminder</label>
            <input
            id='checked--style' 
            type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
             />

        </div>
        {!ispending && <button className="btn btn-block">Add Blog</button>}
        {ispending && <button disabled>Adding blog...</button>}
    </form>
)
}
export default Create