import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import Search from '../Search/Search';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [userSearch, setUserSearch] = useState('');

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ybisF2CGGDEAJBCUhCzPdJMIdJoBGGDo')
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then(data => setArticles(data.results))
  }, [])

  return (
    <main>
      <h1>NY Times News Reader</h1>
      <Search
        userSearch={userSearch}
        setUserSearch={setUserSearch} 
      />
      <Articles
        articles={articles}
      />
    </main>
  );
}

export default App;
