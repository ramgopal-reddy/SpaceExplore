import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTubeLiveEmbed from "../components/YouTubeLiveEmbed";

const ISSTracker = () => {
  const [issData, setIssData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchISSData = async () => {
    try {
      const response = await axios.get(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      setIssData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching ISS data:", error);
    }
  };

  useEffect(() => {
    fetchISSData();
    const interval = setInterval(fetchISSData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !issData) {
    return (
      <div
        className="bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 animate-pulse flex items-center justify-center min-h-screen"
        style={{ width: "99vw", height: "100%" }}
      >
        <p className="text-xl animate-pulse">Fetching ISS data...</p>
      </div>
    );
  }

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-black p-6"
      style={{ width: "99vw", height: "100%" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-cyan-300 mb -4">
          ISS Real-time Tracker
        </h1>
        <p className="text-lg text-gray-300">
          Track the International Space Station's current position, altitude,
          and velocity.
        </p>
      </div>
      <div className="aspect-w-16 aspect-h-9 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center justify-center space-y-8 lg:space-y-0 text-center lg:text-left shadow-lg rounded-xl p-8">
        {/* Data Panel */}
        <div className="bg-black bg-opacity-100 text-white backdrop-blur-lg rounded-xl p-8 shadow-lg space-y-4 border border-white">
          {/* <h2 className="text-3xl font-bold text-cyan-300 mb-4">
             ISS Real-time Tracker
          </h2> */}

          <div className="grid grid-cols-2 gap-6 text-lg">
            <div>
              <p>Latitude</p>
              <h3 className="text-2xl font-semibold">
                {issData.latitude.toFixed(2)}°
              </h3>
            </div>
            <div>
              <p>Longitude</p>
              <h3 className="text-2xl font-semibold">
                {issData.longitude.toFixed(2)}°
              </h3>
            </div>
            <div>
              <p>Altitude</p>
              <h3 className="text-2xl font-semibold">
                {issData.altitude.toFixed(2)} km
              </h3>
            </div>
            <div>
              <p>Velocity</p>
              <h3 className="text-2xl font-semibold">
                {issData.velocity.toFixed(2)} km/h
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            Last updated: {new Date().toLocaleTimeString()} (auto-refreshes
            every 5s)
          </p>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-300">
              Track the International Space Station in real-time and watch live
              streams from NASA.
            </p>
          </div>
        </div>

        {/* YouTube Live Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <YouTubeLiveEmbed />
        </div>
      </div>
    </div>
  );
};

export default ISSTracker;
