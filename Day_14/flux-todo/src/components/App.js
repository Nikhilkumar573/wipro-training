// src/components/App.js
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Flux Todo App</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
