import React, { useState } from 'react';
import { Styles } from './Search.style';
import SearchIcon from './assets/icon/search.svg';

export const Search = React.memo<{
  onSearch: (text: string) => void;
}>(({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');

  return (
    <div className={Styles.SearchCard}>
      <input
        className={Styles.SearchInput}
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(searchStr);
          }
        }}
      />
      <button className={Styles.SearchButton} onClick={() => onSearch(searchStr)}>
        <img className={Styles.SearchIcon} src={SearchIcon} />
      </button>
    </div>
  );
});