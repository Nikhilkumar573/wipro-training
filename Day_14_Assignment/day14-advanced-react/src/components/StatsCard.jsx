import React from "react";

const StatsCard = React.memo(({ title, value, lastUpdated }) => {
  console.log(`${title} re-rendered`);
  return (
    <div className="card p-3 m-2 shadow-sm" style={{ width: "200px" }}>
      <h5>{title}</h5>
      <h6>{value}</h6>
      <small className="text-muted">Updated : {lastUpdated}</small>
    </div>
  );
});

export default StatsCard;
