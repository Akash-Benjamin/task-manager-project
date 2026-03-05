import React, { useEffect } from "react";
import TaskForm from "./Components/TaskForm.jsx";
import Tasklist from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks(task)

  }
  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <p>your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <Tasklist />
      <ProgressTracker />
    </div>
  )
}