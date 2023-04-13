import './BadUrl.css';

function BadUrl() {
  return (
    <section className="badurl-section">
      <h2>Oops, that's not a valid URL!</h2>
      <h3><a href="/">Go Home</a></h3>
    </section>
  );
}

export default BadUrl;