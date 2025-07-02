import { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const API_KEY = "bOO0M1rfgLc63dHZ2LLHPVKjGGoAGtPHFCpAP06F";

export default function Asteroids() {
  const [today] = useState(new Date().toISOString().split("T")[0]);
  const [asteroidData, setAsteroidData] = useState([]);
  const [closest, setClosest] = useState(null);
  const [hazardousCount, setHazardousCount] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const asteroids = data.near_earth_objects?.[today] || [];
        const names = [];
        const distances = [];
        let closestAsteroid = null;
        let minDistance = Number.MAX_VALUE;
        let hazardous = 0;

        asteroids.forEach((a) => {
          const distance = parseFloat(
            a.close_approach_data[0].miss_distance.kilometers
          );
          const velocity = parseFloat(
            a.close_approach_data[0].relative_velocity.kilometers_per_second
          );
          const diameter = parseFloat(
            a.estimated_diameter.kilometers.estimated_diameter_max
          );
          const name = a.name
            .replace(/[\(\)]/g, "")
            .split(" ")
            .pop();

          names.push(name);
          distances.push(distance);

          if (distance < minDistance) {
            minDistance = distance;
            closestAsteroid = {
              name,
              distance: distance.toLocaleString() + " km",
              velocity: velocity.toFixed(2) + " km/s",
              diameter: diameter.toFixed(2) + " km",
              hazardous: a.is_potentially_hazardous_asteroid,
            };
          }

          if (a.is_potentially_hazardous_asteroid) hazardous++;
        });

        setAsteroidData({ names, distances });
        setClosest(closestAsteroid);
        setHazardousCount(hazardous);
        renderChart(names, distances);
      })
      .catch(console.error);
  }, [today]);

  function renderChart(labels, distances) {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Miss Distance (km)",
            data: distances,
            backgroundColor: distances.map((d) => {
              const ratio = Math.min(1, d / 5000000);
              const r = Math.floor(124 * ratio);
              const g = Math.floor(124 * ratio);
              const b = Math.floor(124 * (1 - ratio));
              return `rgba(${r},${g},${b},0.7)`;
            }),
            borderColor: "rgba(255,255,255,0.9)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) =>
                `Distance: ${context.parsed.y.toLocaleString()} km`,
            },
          },
        },
        scales: {
          y: {
            ticks: {
              callback: (value) => `${value.toLocaleString()} km`,
            },
          },
        },
      },
    });
  }

  return (
    <section
      className="bg-gradient-to-b from-black via-gray-900 to-black text-black "
      style={{ width: "99vw", height: "100%" }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-300 mb-8">
        ☄️ Near-Earth Asteroids on {today}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Chart Column */}
        <div className="lg:col-span-2 bg-white bg-opacity-10 rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="h-[300px] sm:h-[400px] relative">
            <canvas ref={chartRef} id="asteroidChart" />
          </div>
        </div>

        {/* Data Column */}
        <div className="bg-white bg-opacity-10 rounded-xl p-4 sm:p-6 shadow-lg space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
            🌌 Closest Approach
          </h3>
          {closest && (
            <div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-meteor text-red-400 text-2xl sm:text-3xl" />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold">
                    {closest.name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Diameter: {closest.diameter}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Miss Distance</span>
                  <span>{closest.distance}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  (1 LD ≈ 384,400 km)
                </p>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <span className="text-gray-400">Velocity</span>
                <span>{closest.velocity}</span>
              </div>

              <div
                className={`mt-6 px-4 py-3 rounded-md text-sm font-medium ${
                  hazardousCount > 0
                    ? "bg-red-600/30 text-red-300"
                    : "bg-green-100 text-green-300"
                }`}
              >
                <i className="fas fa-info-circle mr-2" />
                {hazardousCount > 0
                  ? `${hazardousCount} potentially hazardous asteroid${
                      hazardousCount > 1 ? "s" : ""
                    } detected today`
                  : "No potentially hazardous asteroids detected today"}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
