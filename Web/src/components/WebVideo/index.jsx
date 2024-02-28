import React from "react";
import { Video, Title } from "./style";

const WebVideo = ({ video }) => {
  return (
    <>
      <Video>
        <Title>
          <div className="title_page">
            <h1 className="section-title-01">
              <i className="fas fa-film"></i> VIDEO
            </h1>
            <h2 className="section-title-02">RESULTADO FINAL</h2>
          </div>
        </Title>

        <div className="video_web d-flex justify-content-center">
          <iframe
            src={video.link}
            title={video.name}
            allow="accelerometer; autoplay; picture-in-picture; fullscreen"
          ></iframe>
        </div>
      </Video>
    </>
  );
};

export default WebVideo;
