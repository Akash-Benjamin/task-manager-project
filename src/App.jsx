import React, { useEffect } from "react";
import TaskForm from "./Components/TaskForm.jsx";
import Tasklist from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useState } from "react"

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks(task)
  }
  const updatedTask = (updatedTask, index) => {
    const newtask = [...task];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = () => { }
  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <p>your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <Tasklist tasks={tasks}
        updatedTask={updatedTask}
        deleteTask={deleteTask} />
      <ProgressTracker />
    </div>
  )
}