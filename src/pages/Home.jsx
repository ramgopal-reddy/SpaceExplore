// Home.jsx
import { Link } from "react-router-dom";
import NasaImage from "../assets/Nasa-Space.png";
import NasaImage1 from "../images/NasaImage1.jpg";
import NasaImage2 from "../images/NasaImage2.jpg";
import NasaImage3 from "../images/NasaImage3.jpg";
import NasaImage4 from "../images/NasaImage4.jpg";
import NasaImage5 from "../images/NasaImage5.jpg";
import NasaImage6 from "../images/NasaImage6.jpg";
import NasaImage7 from "../images/NasaImage7.jpg";
import React from "react";
import "../App.css";
import CardLeft from "../components/CardLeft";
import CardRight from "../components/CardRight";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white p-6"
      style={{ width: "99vw", height: "100%" }}
    >
      <div className=" text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Space Explorer/Research
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Explore the universe through real-time API's data — images, alerts,
          and discoveries.
        </p>
        {/* Responsive Image */}
        <div>
          <img
            src={NasaImage} // If in public folder
            alt="Space Banner"
            className="w-full max-w-3xl rounded-xl shadow-lg mb-8 object-cover justify-center mx-auto hover:scale-108 transition-transform duration-300"
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
            <h2 className="text-2xl font-semibold mb-2"> Gallery</h2>
            <p>View image's gallery from NASA collections.</p>
          </Link>
          <Link
            to="/pic"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Astronomy Picture of the Day
            </h2>
            <p>Get today’s featured photo from NASA’s APOD API.</p>
          </Link>

          <Link
            to="/alerts"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2"> Space Alerts</h2>
            <p>Check the latest space weather and solar alerts from NASA.</p>
          </Link>
          <Link
            to="/iss"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">ISS Tracker</h2>
            <p>Track the International Space Station (ISS) in real-time.</p>
          </Link>
          <Link
            to="/asteroids"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {" "}
              Asteroid Threat Chart
            </h2>
            <p>
              View today’s potentially hazardous asteroids approaching Earth.
            </p>
          </Link>
          <Link
            to="/space"
            className="p-6 bg-white hover:bg-gray-900 rounded-xl transition text-left shadow-xl backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">Solar System</h2>
            <p>Explore the universe with NASA’s Eyes on the Solar System.</p>
          </Link>
        </div>
        <Divider />
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Explore Our Features
        </h2>
        <Link to="/">
          <CardLeft
            name="NASA Space Explorer "
            designation="Dive into a beautifully interactive platform that brings real-time NASA data to your fingertips — images, alerts, live ISS tracking, and more. Start your space journey from here."
            image={NasaImage1}
          />
        </Link>
        <Link to="/nasa-gallery">
          <CardRight
            name="Space Image Gallery"
            designation="Browse through a vast collection of stunning images from NASA’s public database. Filter and view high-resolution photos of planets, galaxies, missions, and more."
            image={NasaImage2}
          />
        </Link>
        <Link to="/pic">
          <CardLeft
            name="Astronomy Picture of the Day"
            designation="Discover a new, awe-inspiring image every day from NASA’s Astronomy Picture of the Day (APOD) archive — complete with scientific explanation and media credits."
            image={NasaImage4}
          />
        </Link>
        <Link to="/alerts">
          <CardRight
            name="Real-Time NASA Space Weather Alerts "
            designation="Stay informed about the latest space weather events including solar flares, geomagnetic storms, and coronal mass ejections (CMEs) using NASA's DONKI API."
            image={NasaImage5}
          />
        </Link>
        <Link to="/iss">
          <CardLeft
            name="Live International Space Station Tracker"
            designation="Track the International Space Station (ISS) in real-time — see its current latitude, longitude, velocity, and altitude. Includes a live video feed from space."
            image={NasaImage6}
          />
        </Link>
        <Link to="/asteroids">
          <CardRight
            name="Near-Earth Object (NEO) Danger Monitor"
            designation="View today’s potentially hazardous asteroids approaching Earth. Visualized using interactive charts based on NASA’s NEO Feed API. Learn about size, speed, and proximity."
            image={NasaImage7}
          />
        </Link>
        <Link to="/space">
          <CardLeft
            name="Interactive Solar System Simulation"
            designation="Explore the universe with NASA’s Eyes on the Solar System — a fully interactive, 3D space experience directly into the app."
            image={NasaImage3}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
