import React, { useState, useRef } from 'react';
import '../styles/styles.scss';

const Videos = (props) => {
  const { content } = props;
  const videos = useRef();
  const [hover, setHover] = useState(false);
  return (
    <div
      className="videos"
      onMouseEnter={() => {
        setHover(true);
        videos.current.pause();
      }}
      onMouseLeave={() => {
        setHover(false);
        videos.current.play();
      }}
    >
      <div className="videos-text-wrap">
        <div className="videos-title">{content.title}</div>
        <div className="videos-since">{`since ${content.since}`}</div>
      </div>
      <video
        className="videos-content"
        ref={videos}
        preload
        muted
        loop
        autoPlay
        playsinline
      >
        <source src={content.src} />
        재생할 수 없습니다.
      </video>
      {hover && <div>{content.description}</div>}
    </div>
  );
};

export default Videos;
