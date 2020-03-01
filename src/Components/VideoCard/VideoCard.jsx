import React from 'react';

import './VideoCard.css';

export default function VideoCard({ videoId, title, description, thumbnail }) {
  return (
    <div className="VideoCard card test is-shadowless">
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

/*
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
    </div>
  </div>
*/
