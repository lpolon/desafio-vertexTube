import queryString from 'query-string';
import { decode } from 'he';

export default class YoutubeApi {
  constructor(part, key, resourceType) {
    this.part = part;
    this.key = key;
    this.maxResults = 10;
    this.queryParams = {
      part: this.part,
      key: this.key,
      maxResults: 10,
    };
    this.resourceType = resourceType;
    this._partialEndpoint = 'https://www.googleapis.com/youtube/v3';
  }

  get endpoint() {
    return `${this._partialEndpoint}/${this.resourceType}`;
  }

  get query() {
    const queryParams = queryString.stringify(this.queryParams);
    return `${this.endpoint}?${queryParams}`;
  }

  async search(searchValue) {
    if (typeof searchValue === 'undefined' || searchValue.trim() === '')
      return `missing search params`;
    this.queryParams.q = searchValue;
    try {
      const response = await fetch(this.query);
      const json = await response.json();
      if (json.hasOwnProperty('error')) {
        const {
          error: {
            errors: [{ reason, message }],
          },
        } = json;
        return `${reason} ${message}`;
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
          outputObj.pagination.prevPageToken = prevPageToken;
        } else {
          outputObj.pagination.prevPageToken = null;
        }
        return outputObj;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getVideoDetails(videoId) {
    if (typeof videoId === 'undefined' || videoId.trim() === '')
      return `missing search params`;
    this.queryParams.id = videoId;

    try {
      const response = await fetch(this.query);
      const json = await response.json();
      if (json.hasOwnProperty('error')) {
        const {
          error: {
            errors: [{ reason, message }],
          },
        } = json;
        return `${reason} ${message}`;
      } else {
        const {
          items: [
            {
              snippet: { title, description },
              statistics: { viewCount, likeCount, dislikeCount },
            },
          ],
        } = json;
        const decodedTitle = decode(title);
        const decodedDescription = decode(description);
        const outputObj = {
          decodedTitle,
          decodedDescription,
          viewCount,
          likeCount,
          dislikeCount,
        };
        return outputObj;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
