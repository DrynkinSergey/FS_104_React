import axios from 'axios';

export const fetchNews = async (query, perPage = 5) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
    params: {
      query,
      hitsPerPage: perPage,
    },
  });
  return response.data;
};
