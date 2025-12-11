
# 🚀 NASA Explorer

Explore the universe with NASA's public APIs. This React-based web app lets you browse high-quality space images, get the Astronomy Picture of the Day, view live space weather alerts, and more — all in one beautifully styled interface.

---

## 🌌 Features

- 🖼️ **NASA Image Gallery** — Browse a rich gallery of space imagery from NASA.
- 📅 **Picture of the Day** — Daily updated images with descriptions using NASA's APOD API.
- 🚨 **Space Alerts** — Get real-time solar activity and space weather alerts.
- 🛰️ **ISS Tracker** — Live location, altitude, and velocity of the International Space Station with video feed.
- ☄️ **Asteroids Near Earth** — View close-approaching asteroids with interactive Chart.js visuals.
- 🌠 **NASA 3D Solar System** — Embedded 3D simulator from NASA's Eyes on the Solar System app.
- 🧠 **About Section** — Learn about data sources and the purpose of the project.

---

## 📸 Preview


## ![NASA Explorer Preview](./src/assets/Nasa-Space.png)

> Responsive UI powered by Tailwind CSS and React Router.

---

## 🛠️ Tech Stack

⚛️ React with Hooks

🌐 React Router DOM for page routing

🎨 Tailwind CSS for responsive design

📊 Chart.js for asteroid visualizations

🚀 NASA APIs

NASA Image & Video Library

APOD (Astronomy Picture of the Day)

DONKI (Alerts)

ISS Tracker

NEO Feed (Asteroids)

---

## 📦 Installation

```bash
git clone https://github.com/ramgopal-reddy/SpaceExplore.git
cd SpaceExplore
npm install
npm start
```

## 📁 Folder Structure

```
src/
├── assets/               # Images and static assets
├── components/           # Header, Footer, and shared components
├── pages/                # Home, Gallery, Alerts, etc.
│   ├── Home.jsx
│   ├── NasaGallery.jsx
│   ├── AstronomyPictureOfDay.jsx
│   ├── NasaAlerts.jsx
│   └── NasaImageDetail.jsx
|   ├── ISSTracker.jsx
│   ├── Asteroids.jsx
│   └── SpaceSimulator.jsx
├── App.jsx               # Main routing setup
├── App.css
└── index.js

```

## ![NASA Explorer Structure](./src/assets/NasaStructure.png)

---

## 🌐 Live Demo

🔗 [https://space-explore-beige.vercel.app](https://space-explore-beige.vercel.app)

---

## 🔑 API Key Setup

This project uses NASA's public APIs. You can get your own API key at [https://api.nasa.gov](https://api.nasa.gov) and:

1. Create a `.env` file in the root:

   ```env
   REACT_APP_NASA_API_KEY=your_api_key_here
   ```

2. Access it in components:

   ```js
   const apiKey = process.env.REACT_APP_NASA_API_KEY;
   ```

---

## 👤 Author

**Your Name**
🔗 [Portfolio](https://yourportfolio.com)
🔗 [LinkedIn](https://linkedin.com/in/ramgopal-reddy)
🔗 [GitHub](https://github.com/ramgopal-reddy)
🔗 [Devpost](https://devpost.com/redabothularamgopalreddy)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

### 🌟 Show your support

If you like this project, feel free to ⭐️ the repo or contribute!

```
