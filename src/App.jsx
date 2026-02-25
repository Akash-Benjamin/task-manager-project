import React from "react";
import TaskForm from "./Components/TaskForm.jsx";
import Tasklist from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";

export default function App() {
  return (
    <div>
      <header>
        <h1>Task Manager</h1>
        <p>your friendly task Manager</p>
      </header>
      <TaskForm />
      <Tasklist />
      <ProgressTracker />
    </div>
  )
}