
function fetchDataCallback(callback) {
  console.log("Fetching data (Callback)...");

  setTimeout(() => {
    callback(" Data received using CALLBACK");
  }, 2000);
}

fetchDataCallback((result) => {
  console.log(result);
});




function fetchDataPromise() {
  console.log("Fetching data (Promise)...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Data received using PROMISE");
    }, 2000);
  });
}

fetchDataPromise().then((result) => {
  console.log(result);
});




async function fetchDataAsync() {
  console.log("Fetching data (Async/Await)...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Data received using ASYNC/AWAIT");
    }, 2000);
  });
}

async function run() {
  const result = await fetchDataAsync();
  console.log(result);
}

run();
