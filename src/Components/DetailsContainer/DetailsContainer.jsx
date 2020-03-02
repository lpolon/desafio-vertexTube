import React, { Fragment, useState, useEffect } from 'react';
import './DetailsContainer.css';

import apiKey from '../../util/apiKey';
import { useParams } from 'react-router-dom';

import YouTube from 'react-youtube';
import YoutubeApi from '../../util/youtube';
const youtube = new YoutubeApi('snippet,statistics', apiKey, 'videos');

export default function DetailsContainer() {
  const { videoId } = useParams();

  const [videoDetails, setVideoDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (videoId) => {
    setIsLoading(true);
    const response = await youtube.getVideoDetails(videoId);
    if (typeof response === 'string') {
      setError(response);
      setIsLoading(false);
    } else {
      setVideoDetails(response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(videoId);
  }, [videoId]);

  const {
    title,
    description,
    viewCount,
    likeCount,
    dislikeCount,
  } = videoDetails;

  return isLoading ? (
    <progress className="progress is-small is-info" max="100"></progress>
  ) : error !== null ? (
    <h1
      className="content is-white has-text-danger"
      style={{ textAlign: 'center' }}
    >
      {error}
    </h1>
  ) : (
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
