// src/stores/TodoStore.js
import { EventEmitter } from "events";
import AppDispatcher from "../dispatcher/Dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];

    AppDispatcher.register((action) => {
      switch (action.type) {
        case "ADD_TODO":
          this.todos.push(action.payload);
          this.emit("change");
          break;
        default:
      }
    });
  }

  getAll() {
    return this.todos;
  }
}

export default new TodoStore();
