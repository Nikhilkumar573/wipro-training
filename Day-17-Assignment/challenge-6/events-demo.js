import { EventEmitter } from "events";

// Create EventEmitter instance
const eventEmitter = new EventEmitter();

// Register event listeners
eventEmitter.on("userLoggedIn", (user) => {
  console.log(`User ${user} logged in.`);
});

eventEmitter.on("userLoggedOut", (user) => {
  console.log(`User ${user} logged out.`);
});

// BONUS: sessionExpired event
eventEmitter.on("sessionExpired", (user) => {
  console.log(`Session expired for ${user}.`);
});

// Emit the events
const userName = "John";

// Trigger login event
eventEmitter.emit("userLoggedIn", userName);

// Trigger logout event (after 2 seconds for demo)
setTimeout(() => {
  eventEmitter.emit("userLoggedOut", userName);
}, 2000);

// Trigger sessionExpired after 5 seconds
setTimeout(() => {
  eventEmitter.emit("sessionExpired", userName);
}, 5000);
