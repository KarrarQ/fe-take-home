import './Search.css';

function Search({ userSearch, setUserSearch }) {

  return (
    <input
      type="text" 
      value={userSearch}
      name="userSearch"
      placeholder="Search articles by title or author!"
      onChange={(event) => setUserSearch(event.target.value)}
    />
  );
}

export default Search;