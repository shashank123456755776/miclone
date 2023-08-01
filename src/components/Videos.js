import React from "react";
import "../styles/videos.css";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item) => (
        <VideoCard image={item.image} name={item.name} modalImg={item.modalImg} vdourl={item.url}/>
      ))}
    </div>
  );
};

export default Videos;
