import './ArticleCard.css';

const nytIcon = require('../../assets/nyticon.png');

function ArticleCard({ article }) {
  const { title, byline, url, id } = article;
  const imgUrl = article.multimedia ? article.multimedia[0].url : nytIcon;
  const altText = article.multimedia ? article.multimedia[0].caption : 'The NY Times logo, as there is no image available for this article.'
  const learnMoreLink = `/details/${id}`;

  return (
    <article className="article-card">
      <h3>{title}</h3>
      <img src={imgUrl} alt={altText} />
      <h4>{byline}</h4>
      <p><a href={learnMoreLink}>Learn More</a> | <a href={url} target="_blank" rel="noopener noreferrer">Read This Article</a></p>
    </article>
  );
}

export default ArticleCard;