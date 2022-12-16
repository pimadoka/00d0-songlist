import { css } from '@emotion/css';
import { useState } from 'react';
import { CommonStyles } from './common/styles';
import { Header } from './Header';
import { SongList } from './SongList';
import { Search } from './Search';
import { px2rem } from './utils';
import { songList } from './data/songList';
import { ScrollToTop } from './ScrollToTop';

const MainStyle = css`
  width: 100%;
  background: ${CommonStyles.Colors.bg.primary};
  z-index: ${CommonStyles.ZIndex.content};
`;
const ContentStyle = css`
  max-width: ${px2rem(CommonStyles.ContentWidth)};
  margin: 0 auto;
  padding-bottom: ${px2rem(60)};
`;
const ActionBarStyle = css`
  margin-top: ${px2rem(32)};
`;

function App() {
  const [filterSongList, setFilterSongList] = useState(songList);

  const onSearch = (searchStr: string) => {
    setFilterSongList(
      songList.filter(item => {
        const reg = new RegExp(searchStr);
        return reg.test(item.song) || reg.test(item.singer) || reg.test(item.lang);
      })
    );
  }

  return (
    <main className={MainStyle}>
      <Header />
      <section className={ContentStyle}>
        <div className={ActionBarStyle}>
          <Search onSearch={onSearch} />
        </div>
        <SongList list={filterSongList} />
      </section>
      <ScrollToTop />
    </main>
  );
}

export default App;
