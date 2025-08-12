import axios from 'axios';

export const httpClientPlugin = {
  get: async (url: string) => {
    // const resp = await fetch(url);
    const resp = await axios.get(url);
    // const data = await resp.json();
    return resp.data;
  },
  post: async (url: string, body: {}) => {},
  put: async (url: string, body: {}) => {},
  delete: async (url: string) => {},
};
