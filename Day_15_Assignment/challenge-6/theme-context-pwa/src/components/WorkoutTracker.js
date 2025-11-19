import React, { useState } from "react";
import useTimer from "../hooks/useTimer";

function WorkoutTracker() {
  const { seconds, start, stop, reset, running } = useTimer();
  const [sets, setSets] = useState(1);

  const nextSet = () => {
    reset();
    setSets(prev => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Workout Tracker</h2>
      <h3>Set: {sets}</h3>
      <h1>{seconds}s</h1>

      <button onClick={start} disabled={running}>▶ Start</button>
      <button onClick={stop} disabled={!running}>⏹ Stop</button>
      <button onClick={nextSet}> Next Set</button>
    </div>
  );
}

export default WorkoutTracker;
