import { useState } from 'react';
import SearchInfo from '../components/SearchInfo';
import style from '../styles/Search.module.css';

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={onChange} placeholder="검색어를 입력해주세요."></input>
        <button type="submit" className={style.subBtn}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <SearchInfo text={submittedTitle} />
    </div>
  );
}

export default Search;
