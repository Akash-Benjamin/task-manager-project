import React from "react"
import { useState } from "react"

export default function TaskForm() {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium')
    const [category, setCategory] = useState('General')
    return (
        <form className="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter the task"
                    onChange={(e) => setTask(e.target.value)} />
                <span><button type="submit">ADD</button></span>
            </div>
            <div id="btns">
                <select onChange={(e) => setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}