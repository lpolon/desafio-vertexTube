import React, { useState, useEffect } from 'react';
import './SearchResultList.css';

import { youtube } from '../../util/youtube';
import { useParams } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';

export default function SearchResultsList() {
  const { querySearch } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (querySearch) => {
    setIsLoading(true);
    const response = await youtube.search(querySearch);
    console.log(response);
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
  console.log(error);
  return isLoading ? (
    <h1
    className="content is-white has-text-info"
    style={{ textAlign: 'center' }}
  >
    loading...
  </h1>
    // <button className="button is-white has-text-info is-loading"></button>
  ) : error !== null ? (
    <h1
      className="content is-white has-text-danger"
      style={{ textAlign: 'center' }}
    >
      {error}
    </h1>
  ) : (
    items.map((item) => {
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
      if (typeof videoId === 'undefined') {
        return null;
      }
      return (
        <div key={videoId}>
          <VideoCard
            videoId={videoId}
            title={title}
            description={description}
            thumbnail={url}
          />
        </div>
      );
    })
  );
}