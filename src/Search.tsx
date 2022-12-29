import React, { useState } from 'react';
import { useStyles } from '@/Search.style';
import { ReactComponent as SearchIcon } from '@/assets/icon/search.svg';

export const Search = React.memo<{
  onSearch: (text: string) => void;
}>(({ onSearch }) => {
  const [searchStr, setSearchStr] = useState('');

  const styles = useStyles();

  return (
    <div className={styles.searchCard}>
      <input
        className={styles.searchInput}
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(searchStr);
          }
        }}
      />
      <button className={styles.searchButton} onClick={() => onSearch(searchStr)}>
        <SearchIcon className={styles.searchIcon} />
      </button>
    </div>
  );
});
