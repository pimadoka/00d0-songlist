import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/Header';
import { SongList } from '@/SongList';
import { Search } from '@/Search';
import { songList } from '@/data/songList';
import { ScrollToTop } from '@/ScrollToTop';
import { useStyles } from '@/App.style';
import { ThemeProvider } from '@/components/Theme';
import Csv2JsonPage from '@/pages/csv2json';

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
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path='/' element={<SongListPage />} />
          <Route path='/csv2json' element={<Csv2JsonPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
