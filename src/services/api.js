import axios from 'axios';

export const fetchNews = async (query, page = 0, perPage = 5) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
    params: {
      query,
      hitsPerPage: perPage,
      page,
    },
  });
  return response.data;
};
