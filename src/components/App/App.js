import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from '../Articles/Articles';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
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
      .then(data => {
        const newData = data.results.reduce((acc, result) => {
          const id = result.short_url.split('/')[3]
          result.id = id;
          acc.push(result);
          return acc;
        }, [])
        setArticles(newData);
      })
  }, [])

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <h1>NY Times News Reader</h1>
          <Search
            userSearch={userSearch}
            setUserSearch={setUserSearch} 
          />
          <Articles
            userSearch={userSearch}
            articles={articles}
          />
        </Route>
        <Route exact path="/details/:id" render={({ match })=> {
          const articleToRender = articles.find(article => article.id === match.params.id)
          return <ArticleDetails
                    article={articleToRender}
                 />
          }
         } 
        />
      </Switch>
    </main>
  );
}

export default App;
