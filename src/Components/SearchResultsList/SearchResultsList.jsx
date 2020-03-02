import React, { useState, useEffect, Fragment } from 'react';
import './SearchResultList.css';
import apiKey from '../../util/apiKey';
import YoutubeApi from '../../util/youtube';
import { decode } from 'he';

import { useParams } from 'react-router-dom';

import VideoCard from '../VideoCard/VideoCard';
import Pagination from '../Pagination/Pagination';

const youtube = new YoutubeApi('id,snippet', apiKey, 'search');

export default function SearchResultsList() {
  const { querySearch } = useParams();

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (querySearch, pagination) => {
    setIsLoading(true);
    const response = await youtube.search(querySearch, pagination);
    if (typeof response === 'string') {
      setError(response);
      setIsLoading(false);
    } else if (response.items.length === 0) {
      setError('no results found. Try different keywords');
      setIsLoading(false);
    } else {
      const { pagination, items } = response;
      setItems(items);
      setPagination(pagination);
      setIsLoading(false);
    }
  };
  /*
onClick:
component recebe fetchData, e pagination como props.
decide estado do botão dependendo se tem prev ou next token;
onClick roda fetchData passando o next ou prev
*/
  useEffect(() => {
    fetchData(querySearch);
  }, [querySearch]);

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
      <Pagination query={querySearch} pagination={pagination} handleClick={fetchData} />
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
    </Fragment>
  );
}
