import {useEffect, useState} from 'react'
const UseFetch = (url) => {
    const[show ,setShow] = useState(false)
    const[tasks, setTasks]= useState(null)
    const[error ,setError] = useState(null)
    const[isPending,setIsPending] = useState(true)
   
    const handleDelete= (id) => {
        const newBlogs= tasks.filter(task=> task.id!==id)
        setTasks(newBlogs);
    }

    const toggleReminder = (id) => {
        const newReminder= tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task )
        setTasks(newReminder)
    };

    const createTask = (old_id) => {
        console.log(old_id)
        const new_id = Math.floor(Math.random() * 1000) + 1
        const newTask = { new_id, ...old_id}
        setTasks([ ...tasks, newTask])
    }
    useEffect(() =>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Ther's an error")
            }
            return res.json()
        })
        .then(data => {
            setTasks(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            setIsPending(false)
            setError(err.message)
        })
    },[url])
    return{
        tasks,
        show,
        error,
        isPending,
        handleDelete,
        toggleReminder,
        createTask,
        setShow,
    };
}
export default UseFetch;