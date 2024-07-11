
const ShowTask = ({ taskList, setTaskList, task, setTask }) => {


    const handleEdit = (id) => {
        const selectedTask = taskList.find((todo) => todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTask = taskList.filter((todo) => todo.id !== id);
        setTaskList(updatedTask);
    }

    return (
        <section className='showTask'>
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </span>
                <span className="clearAll" onClick={() => setTaskList([])} >Clear All</span>
            </p>
            <ul>
                {taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ShowTask
