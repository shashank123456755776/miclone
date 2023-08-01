import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/modal.css";

const VideoCard = ({ image, name, modalImg, vdourl }) => {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalVideo, setModalVideo] = useState("");

  const toggleModal = () => {
    setModal(!modal);
    setModalImage(modalImg);
    setModalName(name);
    setModalVideo(vdourl);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div
        className="videoCard"
        onClick={toggleModal}
        style={{ backgroundImage: `url(${image})`, cursor: "pointer" }}
      >
        <div className="playbtn">
          <div>
            <PlayArrowIcon />
          </div>
        </div>
        <p>{name}</p>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h3>{modalName}</h3>
            <a href={modalVideo} target="_blank" rel="noreferrer">
              <img src={modalImage} alt="img" />
              <YouTubeIcon className="youtube-icon" />
            </a>
            <span className="close-modal" onClick={toggleModal}>
              <CloseIcon className="CloseIcon" />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
