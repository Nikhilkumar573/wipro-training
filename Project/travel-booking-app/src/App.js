import React from "react";
import AppRouter from "./router/AppRouter";
import ErrorBoundary from "./error/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
