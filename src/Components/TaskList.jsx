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
                    <div>
                        <span>{task.text}</span>
                        <small>{task.category}, {task.priority}</small>
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