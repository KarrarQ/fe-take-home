import './ArticleDetails.css';

const nytIcon = require('../../assets/nyticon.png');

function ArticleDetails({ article, loading, error }) {
  const displayArticle = (articleInfo) => {
    const { title, abstract, byline, published_date, section, url } = articleInfo;
    const displayAbstract = abstract ? abstract : 'No summary provided.';
    const imgUrl = article.multimedia ? article.multimedia[0].url : nytIcon;
    const altText = article.multimedia ? article.multimedia[0].caption : 'There is no image available for this article.';
    const publishedDates = published_date.split('T')[0].split('-');
    const publishedDate = `${publishedDates[1]}/${publishedDates[2]}/${publishedDates[0]}`;
    const sectionCap = section.length > 2 ? section.charAt(0).toUpperCase() + section.slice(1) : section.toUpperCase();
    return (
      <article className="details-article">
        <h2>{title}</h2>
        <img src={imgUrl} alt={altText} />
        <h3>{byline}</h3>
        <span>Published on {publishedDate} in the "{sectionCap}" NY Times section.</span>
        <p>"{displayAbstract}"</p>
        <p><a href="/">Go Home</a> | <a href={url} target="_blank" rel="noopener noreferrer">Read This Article</a></p>
      </article>
    )
  }

  const displayMessage = (string) => {
    return (
      <h2>{string}</h2>
    )
  }

  let display = '';
  if (article) {
    display = displayArticle(article);
  } else if (loading) {
    display = displayMessage(loading);
  } else if (error) {
    display = displayMessage(error);
  }

  return (
    <section className="details-section">
      {display}
    </section>
  );
}

export default ArticleDetails;