import axios from 'axios';

const KEY = 'AIzaSyAc77XZSAf0F6YItpgNJY-oW8Sn2m0CJPQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
