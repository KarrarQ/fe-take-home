import ArticleCard from '../ArticleCard/ArticleCard.js'
import './Articles.css';

function Articles({ userSearch, articles }) {
  let articleDisplay;

  const mapArticles = (articleList) => {
    return articleList.map(article => {
      return (
        <ArticleCard
          key={article.id}
          article={article}
        />
      )
    })
  }

  if (!userSearch) {
    articleDisplay = mapArticles(articles);
  } else {
    const searchResults = articles.reduce((acc, article) => {
      if (article.title.toLowerCase().includes(userSearch.toLowerCase()) || article.byline.toLowerCase().includes(userSearch.toLowerCase())) {
        acc.push(article);
      }
      return acc;
    }, [])
    articleDisplay = mapArticles(searchResults);
  }

  let noArticles;
  if (articles.length && !articleDisplay.length) {
    noArticles = <h2>No articles match your search!</h2>
  }

  return (
    <section className="articles">
      {noArticles}
      {articleDisplay}
    </section>
  );
}

export default Articles;