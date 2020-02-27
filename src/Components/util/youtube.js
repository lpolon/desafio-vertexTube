// key=API_KEY

import apiKey from './apiKey';
import queryString from 'query-string';

export const youtube = {
  endpoint: 'https://www.googleapis.com/youtube/v3/search',
  queryParams: {
    part: 'id,snippet',
    key: apiKey,
    maxResults: 10,
  },
  get query() {
    const queryParams = queryString.stringify(this.queryParams);
    return `${this.endpoint}?${queryParams}`;
  },
  
  async search(searchValue) {
    this.queryParams.q = searchValue;
    console.log(this.query);
    try {
      const response = await fetch(this.query);
      const json = await response.json();
      if (json.hasOwnProperty('error')) {
        const {
          error: {
            errors: [{ reason, message }],
          },
        } = json;
        return { error: `${reason} ${message}` };
      } else {
        const {
          pageInfo: { totalResults, resultsPerPage },
          items,
        } = json;
        const outputObj = {
          items,
          pagination: { totalResults, resultsPerPage },
        };
        if (json.hasOwnProperty('nextPageToken')) {
          const { nextPageToken } = json;
          outputObj.pagination.nextPageToken = nextPageToken;
        } else {
          outputObj.pagination.nextPageToken = null;
        }
        if (json.hasOwnProperty('prevPageToken')) {
          const { prevPageToken } = json;
          outputObj.pagination.nextPageToken = prevPageToken;
        } else {
          outputObj.pagination.nextPageToken = null;
        }
        return outputObj;
      }
    } catch (error) {
      console.log(error);
    }
  },
};