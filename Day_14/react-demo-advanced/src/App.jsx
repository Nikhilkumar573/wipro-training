import React, { useState, lazy, Suspense } from "react";
import Home from "./pages/Home";
import PureDisplay from "./components/PureDisplay";
import ErrorBoundary from "./components/ErrorBoundary";
import ModalPortal from "./components/ModalPortal";

// Lazy load the heavy page
const HeavyPage = lazy(() => import("./pages/HeavyPage"));

function App() {
  const [section, setSection] = useState("home");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <h1>⚛ React Advanced Demo</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setSection("lazy")}>Lazy Load</button>
        <button onClick={() => setSection("pure")}>Pure Component</button>
        <button onClick={() => setSection("error")}>Error Boundary</button>
        <button onClick={() => setSection("portal")}>Portal (Modal)</button>
      </nav>

      {/* Sections */}
      {section === "home" && <Home />}

      {section === "lazy" && (
        <Suspense fallback={<p>Loading heavy page...</p>}>
          <HeavyPage />
        </Suspense>
      )}

      {section === "pure" && <PureDisplay message="I render efficiently 🚀" />}

      {section === "error" && (
        <ErrorBoundary>
          <button onClick={() => { throw new Error("Boom! Test error!"); }}>
            Throw Error
          </button>
        </ErrorBoundary>
      )}

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
