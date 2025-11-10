export const fetchFakeData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Async data loaded!"), 1500);
  });
