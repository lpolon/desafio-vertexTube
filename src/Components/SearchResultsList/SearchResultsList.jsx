import React, { useState, useEffect, Fragment } from 'react';
import './SearchResultList.css';
import apiKey from '../../util/apiKey';
import YoutubeApi from '../../util/youtube';
import { decode } from 'he';

import { useParams } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';

// import { fakeQuery } from './fakeDataTemp';
// const items = fakeQuery.items;
// const isLoading = false;
// const error = null;

const youtube = new YoutubeApi('id,snippet', apiKey, 'search');

export default function SearchResultsList() {
  const { querySearch } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (querySearch) => {
    setIsLoading(true);
    const response = await youtube.search(querySearch);
    if (typeof response === 'string') {
      setError(response);
      setIsLoading(false);
    } else if (response.items.length === 0) {
      setError('no results found. Try different keywords');
      setIsLoading(false);
    } else {
      const { pagination, items } = response;
      setItems(items);
      // pagination here
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(querySearch);
  }, [querySearch]); // TODO: is this ok for pagination?

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
    <div className="VideoCards-container">
      {items.map((item) => {
        let {
          id: { videoId },
          snippet: {
            title,
            description,
            thumbnails: {
              default: { url },
            },
          },
        } = item;
        const decodedTitle = decode(title);
        const decodedDescription = decode(description);

        if (typeof videoId === 'undefined') {
          return null;
        }
        return (
          <Fragment key={videoId}>
            <VideoCard
              videoId={videoId}
              title={decodedTitle}
              description={decodedDescription}
              thumbnail={url}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
