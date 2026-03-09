import React from "react";
export default function Tasklist(tasks, updateTask, deleteTask) {
    return (
        <ul className="task-list">{
            task.map(({ task, index }) => (
                <li>
                    <div>
                        <span>{task.text}</span>
                        <small>{task.category}, {task.priority}</small>
                    </div>
                    <div>
                        <button onClick={() => toggleCompletes(index)}
                        >{task.completed ? "undo" : "complete"}</button>
                        <button>Delete</button>
                    </div>
                </li>
            ))
        }
        </ul>
    )
}