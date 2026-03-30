import React, { useEffect } from "react";
import TaskForm from "./Components/TaskForm.jsx";
import Tasklist from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import "./style.css"
import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }
  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className="App">
      <header>
        <h1 className="title">Task Manager</h1>
        <p className="tagline">your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <Tasklist tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />
      {tasks.length > 0 && (<button className="clear-btn" onClick={clearTasks}>Clear All Task</button>)}
    </div>
  )
}