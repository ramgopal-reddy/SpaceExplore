import React from "react";

const SpaceSimulator = () => {
  return (
    <div className="text-white p-6" style={{ width: "99vw", height: "150vh" }}>
      <iframe
        src="https://eyes.nasa.gov/apps/solar-system/#/home" // Replace with the target website
        title="Space Website"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default SpaceSimulator;
