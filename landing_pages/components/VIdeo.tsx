import React, { useEffect, useRef } from 'react';

const Video = ({ ref, className, autoPlay, playsInline, muted, track }) => {

  useEffect(() => {
    if (track) {
      ref.current.srcObject = new MediaStream([track]);
    }
  }, [track]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay={autoPlay}
      playsInline={playsInline}
      muted={muted}
    />
  );
};

export default Video;
