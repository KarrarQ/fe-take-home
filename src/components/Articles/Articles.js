import ArticleCard from '../ArticleCard/ArticleCard.js'
import './Articles.css';

function Articles({ articles }) {
  const articleDisplay = articles.map(article => {
    const uniqueKey = `${article.title}_${article.published_date}`
    return (
      <ArticleCard
        key={uniqueKey}
        article={article}
      />
    )
  })
  return (
    <section className="articles">
      I am Articles
      {articleDisplay}
    </section>
  );
}

export default Articles;