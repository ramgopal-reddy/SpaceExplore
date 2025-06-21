import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NasaGallery = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("galaxy");
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [nasaId, setNasaId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://images-api.nasa.gov/search?q=${encodeURIComponent(
            search
          )}&media_type=image`
        );
        const data = await res.json();
        const items = data.collection?.items || [];
        setImages(items);
        setVisibleCount(12);
      } catch (err) {
        console.error("Error fetching NASA images:", err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [search]);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const handleNasaIdSubmit = () => {
    if (nasaId.trim()) navigate(`/nasa/${nasaId.trim()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleNasaIdSubmit();
  };

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-black via-gray-900 to-black p-6"
      style={{ width: "100%", height: "100%" }}
    >
      <h1 className="text-3xl font-bold text-center text-blue mb-2">
        NASA Image Gallery
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Browse NASA images using keywords like <em>"Mars"</em>,{" "}
        <em>"Galaxy"</em>, <em>"Moon"</em>, etc.
      </p>

      {/* Search Bar & NASA ID */}
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Search NASA images..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 p-3 rounded w-full text-black lg:w-96 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <input
            type="text"
            placeholder="NASA ID"
            value={nasaId}
            onChange={(e) => setNasaId(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border border-gray-300 p-3 rounded text-black shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleNasaIdSubmit}
            className="bg-[#0B3D91] text-white px-4 py-2 rounded hover:bg-[#062c6a] shadow"
          >
            View
          </button>
        </div>
      </div>

      {/* Loading or Gallery */}
      {loading ? (
        <div
          className="flex-1 flex justify-center items-center text-blue-600 text-lg"
          style={{ width: "100vw", height: "100%" }}
        >
          Loading...
        </div>
      ) : visibleImages.length === 0 ? (
        <div
          className="flex-1 flex justify-center items-center text-red-500 text-lg"
          style={{ width: "100vw", height: "100%" }}
        >
          No images found.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {visibleImages.map((item, idx) => {
              const data = item.data?.[0];
              const thumbnail = item.links?.[0]?.href;

              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E0E0E0] p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
                >
                  <Link to={`/nasa/${encodeURIComponent(data.nasa_id)}`}>
                    <img
                      src={thumbnail}
                      alt={data.title || "NASA image"}
                      className="w-full h-48 object-cover rounded mb-4"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/300x200?text=Image+Not+Available")
                      }
                    />
                    <h2 className="text-lg font-semibold text-center text-[#0B3D91]">
                      {data.title || "Untitled"}
                    </h2>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      {data.description
                        ? data.description.slice(0, 80) + "..."
                        : "No description available"}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < images.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 bg-[#0B3D91] text-white font-medium rounded hover:bg-[#062c6a] transition shadow-lg"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NasaGallery;
