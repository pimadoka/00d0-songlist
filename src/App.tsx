import { css } from '@emotion/css';
import { useRef, useState } from 'react';
import { CommonStyles } from './common/styles';
import { Header } from './Header';
import { SongList } from './SongList';
import { Search } from './Search';
import { px2rem } from './utils';
import { songList } from './data/songList';
import { ScrollToTop } from './ScrollToTop';

const MainStyle = css({
  width: '100%',
  height: '100vh',
  background: CommonStyles.Colors.bg.primary,
  overflow: 'auto',
});
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
  
  const mainContainerRef = useRef<HTMLElement>(null);

  const onSearch = (searchStr: string) => {
    setFilterSongList(
      songList.filter(item => {
        const reg = new RegExp(searchStr);
        return reg.test(item.song) || reg.test(item.singer) || reg.test(item.lang);
      })
    );
  }

  return (
    <main ref={mainContainerRef} className={MainStyle}>
      <Header />
      <section className={ContentStyle}>
        <div className={ActionBarStyle}>
          <Search onSearch={onSearch} />
        </div>
        <SongList list={filterSongList} />
      </section>
      {mainContainerRef.current && <ScrollToTop target={mainContainerRef.current} />}
    </main>
  );
}

export default App;
