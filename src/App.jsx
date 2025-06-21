import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Gallery from "./pages/Gallery";
import NasaImageDetail from "./pages/NasaImageDetail";
import NasaGallery from "./pages/NasaGallery";
import NasaPictureOfDay from "./pages/NasaPictureOfDay";
import NasaAlerts from "./pages/NasaAlerts";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* <header className="p-4 text-center">
        <h1 className="text-2xl font-bold">Food Products App</h1>
        <p className="text-sm">Explore and search for food products</p>
      </header> */}
      {/* <Header /> */}
      <Router>
        <Header />
        <Divider text="*" />
        <Routes>
          {/* <Route path="/" element={<Gallery />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/nasa/:nasaId" element={<NasaImageDetail />} />
          <Route path="/nasa-gallery" element={<NasaGallery />} />
          <Route path="/pic" element={<NasaPictureOfDay />} />
          <Route path="/alerts" element={<NasaAlerts />} />
          <Route
            path="*"
            element={
              <div className="text-center text-red-500 mt-10">
                Page Not Found
              </div>
            }
          />
        </Routes>
        <Divider text="*" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
