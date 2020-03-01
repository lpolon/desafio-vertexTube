import React, { Fragment } from 'react';
import './DetailsContainer.css';

import Youtube from 'react-youtube';

import { fakeData } from './fakeDetailsFetchData';
import YouTube from 'react-youtube';

const videoId = 'PufZCu49X6k';

const {
  items: [
    {
      snippet: { title, description },
      statistics: { viewCount, likeCount, dislikeCount },
    },
  ],
} = fakeData;
export default function DetailsContainer() {
  return (
    <Fragment>
      <section className="hero is-dark">
        <YouTube videoId={videoId} containerClassName=" Youtube-container" />
      </section>
      <section>
        <div className="flex-container">
          <div className="left-container">
            <h1>{title}</h1>
          </div>
          <div className="right-container">
            <div className="stat-container">
              <p className="heading">view count:</p>
              <p className="title">{viewCount}</p>
            </div>
            <div className="stat-container">
              <p className="heading">Likes:</p>
              <p className="title">{likeCount}</p>
            </div>
            <div className="stat-container">
              <p className="heading">Dislikes:</p>
              <p className="title">{dislikeCount}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <hr />
        <p className="description">{description}</p>
        <hr />
      </section>
    </Fragment>
  );
}