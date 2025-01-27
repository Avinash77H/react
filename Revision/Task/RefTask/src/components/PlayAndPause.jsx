import React from "react";

function PlayAndPause() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <iframe

        width="560"
        height="315"
        src="https://www.youtube.com/embed/-Nr31VymCYM?si=g4Cxcm7GrOVAlgTg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex gap-4">
      <button className="btn">play</button>
      <button className="btn bg-red-500">Pause</button>
      </div>
    </div>
  );
}

export default PlayAndPause;
