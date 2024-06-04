import { useEffect, useState } from 'react';
import SearchInfo from '../components/SearchInfo';

function Search() {
  const [title, setTitle] = useState('');
  const [submittedTitle, setSubmittedTitle] = useState('');
  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmittedTitle(title);
  };

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <div>
      <h1>검색창임</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onChange} placeholder="movieTitle"></input>
        <button type="submit"> 검색하기 </button>
      </form>
      <SearchInfo text={submittedTitle} />
    </div>
  );
}

export default Search;
