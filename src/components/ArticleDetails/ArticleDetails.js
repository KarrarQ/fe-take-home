import './ArticleDetails.css';

function ArticleDetails({ article }) {
  return (
    <section>
      I am ArticleDetails, here are some details: {article.title}
    </section>
  );
}

export default ArticleDetails;