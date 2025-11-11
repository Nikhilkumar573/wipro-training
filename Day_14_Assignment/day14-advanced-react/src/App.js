import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import ModalPortal from "./components/ModalPortal";

const CourseDetails = React.lazy(() => import("./components/CourseDetails"));
const InstructorProfile = React.lazy(() => import("./components/InstructorProfile"));

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);
  const [stats, setStats] = useState([
    { title: "Users", value: 100, lastUpdated: new Date().toLocaleTimeString() },
    { title: "Revenue", value: "$5000", lastUpdated: new Date().toLocaleTimeString() },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [causeError, setCauseError] = useState(false);

  const updateUsers = () => {
    const updated = [...stats];
    updated[0] = {
      ...updated[0],
      value: updated[0].value + 1,
      lastUpdated: new Date().toLocaleTimeString(),
    };
    setStats(updated);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React Advanced Concepts (Day 14)</h2>

      {/* Challenge 1 – Lazy Loading */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Challenge 1 : Lazy Loading</h4>
        <button className="btn btn-primary m-2" onClick={() => setShowCourse(true)}>
          View Course Details
        </button>
        <button className="btn btn-success m-2" onClick={() => setShowInstructor(true)}>
          View Instructor Profile
        </button>

        <Suspense fallback={<div className="spinner-border text-primary" role="status"></div>}>
          {showCourse && <CourseDetails />}
          {showInstructor && <InstructorProfile />}
        </Suspense>
      </div>

      {/* Challenge 2 – Pure Components */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Challenge 2 : Pure Components</h4>
        <div className="d-flex flex-wrap">
          {stats.map((stat, i) => (
            <StatsCard key={i} title={stat.title} value={stat.value} lastUpdated={stat.lastUpdated} />
          ))}
        </div>
        <button className="btn btn-warning mt-2" onClick={updateUsers}>
          Simulate Update
        </button>
      </div>

      {/* Challenge 3 – Error Boundary */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Challenge 3 : Error Boundary</h4>
        <ErrorBoundary>
          {causeError ? <BrokenComponent /> : <SafeComponent />}
        </ErrorBoundary>
        <button className="btn btn-danger mt-2" onClick={() => setCauseError(true)}>
          Trigger Error
        </button>
      </div>

      {/* Challenge 4 – Portals */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Challenge 4 : Portals</h4>
        <button className="btn btn-dark" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <ModalPortal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h3>React Portal Modal</h3>
          <p>This modal renders outside the root DOM hierarchy!</p>
        </ModalPortal>
      </div>
    </div>
  );
}

function BrokenComponent() {
  throw new Error("Simulated component crash!");
}
function SafeComponent() {
  return <p>No errors yet — click the red button to trigger an error.</p>;
}

export default App;
