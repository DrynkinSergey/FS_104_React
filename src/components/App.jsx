import { useEffect } from 'react';
import List from './List/List';
import { useState } from 'react';
import { fetchNews } from '../services/api';
import { SearchBar } from './SearchBar/SearchBar';

export const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchNews(query, 25);
        setHits(response.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
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
