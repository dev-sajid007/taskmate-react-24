import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Header from './components/Header'
import ShowTask from './components/ShowTask'

function App() {

  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [task,setTask] = useState({});

  useEffect(() => {
    localStorage.setItem('tasklist',JSON.stringify(taskList));
  },[taskList]);

  return (
    <>
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </>
  )
}

export default App
