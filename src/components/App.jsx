import { useEffect } from 'react';
import List from './List/List';
import axios from 'axios';
import { useState } from 'react';

export const App = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react')
      .then(res => setHits(res.data.hits))
      .catch();
  }, []);
  return (
    <div>
      <List items={hits} />
    </div>
  );
};
//https://hn.algolia.com/api/v1/
