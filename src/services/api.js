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

export const fetchUsers = async () => {
  const response = await axios.get('https://dummyjson.com/users?limit=100');
  return response.data.users;
};
export const fetchUsersById = async id => {
  const response = await axios.get(`https://dummyjson.com/users/${id}`);
  return response.data;
};
export const fetchPostsById = async id => {
  const response = await axios.get(`https://dummyjson.com/posts/user/${id}`);
  return response.data.posts;
};
