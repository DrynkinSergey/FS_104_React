import { useEffect } from 'react';
import List from './List/List';
import { useState } from 'react';
import { fetchNews } from '../services/api';

export const App = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchNews('vue');
        setHits(response.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <List items={hits} />
    </div>
  );
};
//https://hn.algolia.com/api/v1/
// useEffect(() => {
//   axios
//     .get('https://hn.algolia.com/api/v1/search?query=react')
//     .then(res => setHits(res.data.hits))
//     .catch();
// }, []);
