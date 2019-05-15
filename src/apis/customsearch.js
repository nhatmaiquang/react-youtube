import axios from 'axios';

const KEY = 'AIzaSyAc77XZSAf0F6YItpgNJY-oW8Sn2m0CJPQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/customsearch/v1',
  params: {
    cx: '017926495029555864063:3imsmi8yaf0',
    key: KEY
  }
});
