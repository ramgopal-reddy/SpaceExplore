import React from "react";

const YouTubeLiveEmbed = () => {
  const videoId = "xRPjKQtRXR8"; // Your live stream video ID
  const autoplay = 1;

  return (
    <div className="aspect-w-16 aspect-h-9 w-full ml-10 items-center rounded-xl shadow-lg flex flex-col pt-5 justify-center items-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=1`}
        title="YouTube Live Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className="text-white text-center mt-4">
        Live stream from NASA's official YouTube channel.
      </p>
    </div>
  );
};

export default YouTubeLiveEmbed;
