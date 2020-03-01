import React from 'react';

import './VideoCard.css';


// TODO: Link with videoId and router

export default function VideoCard({ videoId, title, description, thumbnail }) {
  return (
    <div className="VideoCard card is-shadowless">
      <div className="card-content">
        {/* adjust margin */}
        <div className="media is-marginless is-flex">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={thumbnail} alt="thumbnail" />
            </figure>
          </div>
          <div className="title media-content">
            <p className="title">{title}</p>
            {/* <p>{videoId}</p> */}
          </div>
        </div>
        <div className="content description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
