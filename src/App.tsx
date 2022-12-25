import { useState } from 'react';
import { Header } from './Header';
import { SongList } from './SongList';
import { Search } from './Search';
import { songList } from './data/songList';
import { ScrollToTop } from './ScrollToTop';
import { useStyles } from './App.style';
import { ThemeProvider } from './components/Theme';

const SongListPage: React.FC = () => {
  const styles = useStyles();

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
    <main className={styles.main}>
      <Header />
      <section className={styles.content}>
        <div className={styles.actionBar}>
          <Search onSearch={onSearch} />
        </div>
        <SongList list={filterSongList} />
      </section>
      <ScrollToTop />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <SongListPage />
    </ThemeProvider>
  );
}

export default App;
