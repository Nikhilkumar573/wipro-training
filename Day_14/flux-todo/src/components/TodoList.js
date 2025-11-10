// src/components/TodoList.js
import React, { useEffect, useState } from "react";
import TodoStore from "../stores/TodoStore";

function TodoList() {
  const [todos, setTodos] = useState(TodoStore.getAll());

  useEffect(() => {
    const onChange = () => setTodos([...TodoStore.getAll()]);
    TodoStore.on("change", onChange);
    return () => TodoStore.removeListener("change", onChange);
  }, []);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
