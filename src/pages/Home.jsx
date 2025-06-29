// Home.jsx
import { Link } from "react-router-dom";
import NasaImage from "../assets/Nasa-Space.png"; // Adjust path as needed
import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white p-6"
      style={{ width: "99vw", height: "150vh" }}
    >
      <div className=" text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🚀 NASA Research Explorer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Explore the universe through real-time NASA data — images, alerts, and
          discoveries.
        </p>
        {/* Responsive Image */}
        <div>
          <img
            src={NasaImage} // If in public folder
            alt="Space Banner"
            className="w-full max-w-4xl rounded-xl shadow-lg mb-8 object-cover justify-center mx-auto"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            Discover the Wonders of Space
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-300 mb-8">
            Dive into NASA's vast collections of images, alerts, and daily
            discoveries. From stunning space photography to real-time solar
            weather updates, explore the universe like never before.
          </p> */}
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          <Link
            to="/nasa-gallery"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">🖼️ Gallery</h2>
            <p>View image's gallery from NASA collections.</p>
          </Link>
          <Link
            to="/pic"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">
              📅 Picture of the Day
            </h2>
            <p>Get today’s featured photo from NASA’s APOD API.</p>
          </Link>

          <Link
            to="/alerts"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">🚨 Space Alerts</h2>
            <p>Check the latest space weather and solar alerts from NASA.</p>
          </Link>
          <Link
            to="/gallery"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">🧠 About</h2>
            <p>Learn more about the data sources and project purpose.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
