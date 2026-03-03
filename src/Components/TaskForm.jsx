import React from "react"
import { useState } from "react"

export default function TaskForm() {
    const [task, setTask,] = useState('');
    const { priority, setPriority } = useState('Medium')
    const { category, setCategory } = useState('General')
    return (
        <form className="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter the task"
                    onChange={(e) => setTask(e.target.value)} />
                <span><button type="submit">ADD</button></span>
                <h1>{task}</h1>
            </div>
            <div id="btns">
                <select>
                    <option value="">high</option>
                    <option value="">Medium</option>
                    <option value="">Low</option>
                </select>
                <select>
                    <option value="">General</option>
                    <option value="">Work</option>
                    <option value="">Personal</option>
                </select>
            </div>
        </form>
    )
}