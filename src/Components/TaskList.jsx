import React from "react";
export default function TaskList({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        updateTask(updatedTask, index);
    }
    return (
        <ul className="task-list">{
            tasks.map((task, index) => (
                <li key={index}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                        <span className="task-text" style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{task.text}</span>
                        <small className="task-timestamp" style={{ opacity: 0.8 }}>{task.category} • {task.priority}</small>
                    </div>
                    <div>
                        <button onClick={() => toggleComplete(index)}>
                            {task.completed ? "undo" : "complete"}
                        </button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))
        }
        </ul>
    )
}