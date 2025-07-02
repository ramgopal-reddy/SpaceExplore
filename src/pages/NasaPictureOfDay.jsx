import React, { useEffect, useState } from "react";
import "../App.css"; // Ensure you have Tailwind CSS set up

const NasaPictureOfDay = () => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);

  const NASA_API_KEY = "DEMO_KEY"; // Replace with your actual API key

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=iToErIXVI2I0D1nGTTd2XfQIDC8obPGBUIOAZNS0`
        );
        const data = await res.json();
        setApod(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) {
    return (
      <p
        className="text-center text-blue-600 justify-center p-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        Loading NASA Picture of the Day...
      </p>
    );
  }

  if (!apod) {
    return (
      <p
        className="text-center text-red-500 mt-10 p-50"
        style={{ width: "100vw", height: "100%" }}
      >
        Could not load image.
      </p>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white py-10 px-4"
      style={{ width: "99vw", height: "100%" }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          NASA Picture of the Day
        </h1>
        <p className="text-lg text-gray-200 mb-8 italic">"{apod.title}"</p>

        {apod.media_type === "image" ? (
          <img
            src={apod.url}
            alt={apod.title}
            className="rounded-xl w-full max-h-[500px] object-cover mx-auto shadow-lg"
          />
        ) : (
          <div className="aspect-video max-w-4xl mx-auto mb-6">
            <iframe
              src={apod.url}
              title={apod.title}
              className="w-full h-full rounded-xl shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="mt-8 text-left bg-white text-black rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Explanation</h2>
          <p className="text-gray-800">{apod.explanation}</p>
          <p className="mt-4 text-sm text-right text-gray-600">
            📅 {apod.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NasaPictureOfDay;
