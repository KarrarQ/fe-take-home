import { useState, useEffect } from 'react';
import Articles from '../Articles/Articles';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

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
      I am App
      <Articles
        articles={articles}
      />
    </main>
  );
}

export default App;
