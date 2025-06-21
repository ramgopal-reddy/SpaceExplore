import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const NasaImageDetail = () => {
  const { nasaId } = useParams();
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://images-api.nasa.gov/search?nasa_id=${nasaId}`
        );
        const data = await res.json();
        const item = data.collection?.items?.[0];
        setImageData(item?.data?.[0]);
      } catch (err) {
        console.error("Error fetching NASA image detail:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [nasaId]);

  if (loading)
    return (
      <p
        className="text-center mt-10 text-blue-600"
        style={{ width: "100vw", height: "100vh" }}
      >
        Loading...
      </p>
    );
  if (!imageData)
    return (
      <p
        className="text-center mt-10 text-red-500"
        style={{ width: "100vw", height: "100vh" }}
      >
        Image not found.
      </p>
    );

  return (
    <div
      className="p-6 bg-[#FAFAFA] border border-[#E0E0E0] rounded-lg shadow mt-8"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h1 className="text-3xl font-bold mb-4 text-[#0B3D91]">
        {imageData.title}
      </h1>

      <div className="mb-6">
        <img
          src={`https://images-assets.nasa.gov/image/${nasaId}/${nasaId}~orig.jpg`}
          alt={imageData.title}
          className="w-full rounded shadow-md object-contain max-h-[500px] bg-white"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/600x400?text=Image+Unavailable")
          }
        />
      </div>

      <p className="text-gray-700 mb-4">
        <strong className="text-[#0B6623]">Description:</strong> <br />
        {imageData.description || "No description available."}
      </p>

      <p className="text-gray-700 mb-2">
        <strong className="text-[#0B6623]">Photographer:</strong>{" "}
        {imageData.photographer || "Unknown"}
      </p>

      <p className="text-gray-700 mb-2">
        <strong className="text-[#0B6623]">Location:</strong>{" "}
        {imageData.location || "Unknown"}
      </p>

      <p className="text-gray-700 mb-2">
        <strong className="text-[#0B6623]">Date Created:</strong>{" "}
        {imageData.date_created?.split("T")[0] || "Unknown"}
      </p>

      <p className="text-gray-700 mt-4 text-sm italic">
        NASA ID: {imageData.nasa_id}
      </p>
    </div>
  );
};

export default NasaImageDetail;
