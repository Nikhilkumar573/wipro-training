import React, { useState, lazy, Suspense } from "react";
import Home from "./pages/Home";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import ModalPortal from "./components/ModalPortal";
import "./index.css"; // optional styling

// Lazy load the heavy component
const HeavyPage = lazy(() => import("./pages/HeavyPage"));

function App() {
  const [section, setSection] = useState("home");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>⚛ React Advanced Demo</h1>

      {/* Navigation Buttons */}
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setSection("lazy")}>Lazy Load</button>
        <button onClick={() => setSection("pure")}>Pure Component</button>
        <button onClick={() => setSection("error")}>Error Boundary</button>
        <button onClick={() => setSection("portal")}>Portal (Modal)</button>
      </nav>

      {/* Default Home Section */}
      {section === "home" && <Home />}

      {/* Lazy Loading Example */}
      {section === "lazy" && (
        <Suspense fallback={<p>Loading heavy page...</p>}>
          <HeavyPage />
        </Suspense>
      )}

      {/* Pure Component Example */}
      {section === "pure" && <PureDisplay message="I render efficiently 🚀" />}

      {/* Error Boundary Example */}
      {section === "error" && (
        <ErrorBoundary>
          <button
            onClick={() => {
              throw new Error("This is a test error!");
            }}
          >
            Throw Error
          </button>
        </ErrorBoundary>
      )}

      {/* Portal Example */}
      {section === "portal" && (
        <>
          <button onClick={() => setShowModal(true)}>Open Modal</button>
          {showModal && (
            <ModalPortal onClose={() => setShowModal(false)}>
              <h2>Portal Modal</h2>
              <p>This modal renders outside the root DOM!</p>
            </ModalPortal>
          )}
        </>
      )}
    </div>
  );
}

export default App;
