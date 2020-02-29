import React from 'react';

import './VideoCard.css';

export default function VideoCard({ videoId, title, description, thumbnail }) {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{thumbnail}</p>
      <p>{videoId}</p>
    </div>
  );
}
