import './ArticleDetails.css';

function ArticleDetails({ article }) {
  const displayArticle = (articleInfo) => {
    const { title, abstract, byline, published_date, section, url } = articleInfo;
    const imgUrl = articleInfo.multimedia[0].url;
    const altText = articleInfo.multimedia[0].caption;
    const publishedDates = published_date.split('T')[0].split('-');
    const publishedDate = `${publishedDates[1]}/${publishedDates[2]}/${publishedDates[0]}`;
    const sectionCap = section.length > 2 ? section.charAt(0).toUpperCase() + section.slice(1) : section.toUpperCase();
    return (
      <article className="details-article">
        <h2>{title}</h2>
        <img src={imgUrl} alt={altText} />
        <h3>{byline}</h3>
        <span>Published on {publishedDate} in the "{sectionCap}" NY Times section.</span>
        <p>"{abstract}"</p>
        <p><a href="/">Go Home</a> | <a href={url} target="_blank" rel="noopener noreferrer">Read This Article</a></p>
      </article>
    )
  }

  const display = article ? displayArticle(article) : <h2>Loading...</h2>

  return (
    <section className="details-section">
      {display}
    </section>
  );
}

export default ArticleDetails;