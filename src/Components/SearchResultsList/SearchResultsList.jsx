import React, { useState, useEffect } from 'react';
import './SearchResultList.css';

import { youtube } from '../../util/youtube';
import { useParams } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';

import { fakeQuery } from './fakeDataTemp';

export default function SearchResultsList() {
  // const { querySearch } = useParams();

  const items = fakeQuery.items;
  const isLoading = false;
  const error = null;

  // const [items, setItems] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchData = async (querySearch) => {
  //   setIsLoading(true);
  //   const response = await youtube.search(querySearch);
  //   if (typeof response === 'string') {
  //     setError(response);
  //     setIsLoading(false);
  //   } else if (response.items.length === 0) {
  //     setError('no results found. Try different keywords');
  //     setIsLoading(false);
  //   } else {
  //     const { pagination, items } = response;
  //     setItems(items);
  //     // pagination here
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(querySearch);
  // }, [querySearch]); // TODO: is this ok for pagination?

  return isLoading ? (
    <h1
      className="content is-white has-text-info"
      style={{ textAlign: 'center' }}
    >
      loading...
    </h1>
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
