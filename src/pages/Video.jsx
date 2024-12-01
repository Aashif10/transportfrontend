import React from "react";

const Video = () => {
  const videos = [{ id: 1, src: "https://youtube.com/shorts/DDKvKzjy3aM?si=_gf_dnb9c_FRGZoL", title: "Short 1" }, { id: 2, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Short 2" }, { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Short 3" }, { id: 4, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Short 4" }];

  const handlePlay = event => {
    event.target.play();
  };

  const handlePause = event => {
    event.target.pause();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">YouTube Shorts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {videos.map(video =>
          <div
            key={video.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full pt-[177.77%] bg-black">
              {" "}{/* Aspect ratio 9:16 */}
              <video
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
                onMouseEnter={handlePlay}
                onMouseLeave={handlePause}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">
                {video.title}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
