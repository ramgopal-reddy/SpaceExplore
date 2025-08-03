import React, { useEffect, useState } from "react";
import "../App.css";

const NasaSpaceAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  const NASA_API_KEY = "DEMO_KEY"; // Replace with your actual API key

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/DONKI/notifications?type=all&api_key=${NASA_API_KEY}`
        );
        const data = await res.json();
        setAlerts(data.reverse().slice(0, 10)); // Get latest 10
      } catch (error) {
        console.error("Error fetching space alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) {
    return (
      <div
        className="text-center text-blue-600 justify-center p-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        Loading space alerts...
      </div>
    );
  }

  if (!alerts.length) {
    return (
      <div
        className="text-center text-red-500 mt-10"
        style={{ width: "99vw", height: "100%" }}
      >
        No space weather alerts available.
      </div>
    );
  }

  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white p-4"
      style={{ width: "99vw", height: "100%" }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Space Alerts
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg transition hover:bg-opacity-20 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{alert.messageType}</h2>
                <p className="text-sm text-black mt-1">
                  Category:{" "}
                  <span className="font-medium">{alert.messageID}</span>
                </p>
                <p className="text-sm text-black mt-1">
                  Issued: {new Date(alert.messageIssueTime).toLocaleString()}
                </p>
              </div>

              <div className="mt-4">
                {alert.messageBody && (
                  <details className="text-sm text-black whitespace-pre-wrap">
                    <summary className="cursor-pointer text-cyan-300 underline">
                      Details
                    </summary>
                    <p className="mt-2">{alert.messageBody}</p>
                  </details>
                )}
              </div>

              <a
                href={alert.messageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
              >
                View Full Alert
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NasaSpaceAlerts;
