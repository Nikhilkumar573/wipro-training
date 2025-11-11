import Dispatcher from "../dispatcher/dispatcher";

class BookStore {
  constructor() {
    this.books = [];
    this.listeners = [];

    // Register with dispatcher
    Dispatcher.register(this.handleActions.bind(this));
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_BOOK":
        this.books.push(action.payload);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  getBooks() {
    return this.books;
  }

  emitChange() {
    this.listeners.forEach((listener) => listener());
  }

  addChangeListener(listener) {
    this.listeners.push(listener);
  }

  removeChangeListener(listener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }
}

//  Dependency Injection
const bookStore = new BookStore();
export default bookStore;
