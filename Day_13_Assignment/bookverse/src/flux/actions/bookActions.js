import Dispatcher from "../dispatcher/dispatcher";

const BookActions = {
  addBook(book) {
    Dispatcher.dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  },
};

export default BookActions;
