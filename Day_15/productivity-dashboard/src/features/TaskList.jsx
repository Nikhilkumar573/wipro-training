import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask } from "../store/tasksSlice";

export default function TaskList() {
  const [title, setTitle] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <section>
      <h2>Your Tasks</h2>
      <div>
        <input
          type="text"
          placeholder="Add new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => dispatch(toggleTask(task.id))}
            />
            <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.title}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
