import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0db33542259b1268ec37623419064c0636f5ed10a6aba192751c4f6b53ca7c46'
  }
});
