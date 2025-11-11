class Dispatcher {
  constructor() {
    this.listeners = [];
  }

  register(callback) {
    this.listeners.push(callback);
  }

  dispatch(action) {
    this.listeners.forEach((callback) => callback(action));
  }
}

export default new Dispatcher();
