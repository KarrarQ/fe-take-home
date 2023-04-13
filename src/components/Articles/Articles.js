import ArticleCard from '../ArticleCard/ArticleCard.js'
import './Articles.css';

function Articles({ userSearch, articles }) {
  let articleDisplay;

  if (!userSearch) {
    articleDisplay = articles.map(article => {
      const uniqueKey = `${article.title}_${article.published_date}`
      return (
        <ArticleCard
          key={uniqueKey}
          article={article}
        />
      )
    })
  } else {
    articleDisplay = articles
    .reduce((acc, article) => {
      if (article.title.toLowerCase().includes(userSearch.toLowerCase()) || article.byline.toLowerCase().includes(userSearch.toLowerCase())) {
        acc.push(article)
      }
      return acc;
    }, [])
    .map(article => {
      const uniqueKey = `${article.title}_${article.published_date}`
      return (
        <ArticleCard
          key={uniqueKey}
          article={article}
        />
      )
    })
  }
  return (
    <section className="articles">
      I am Articles
      {articleDisplay}
    </section>
  );
}

export default Articles;