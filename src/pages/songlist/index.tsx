import { useState } from 'react';
import { songList } from '@/data/songList';
import ScrollToTop from '@/components/ScrollToTop';
import { Header } from './Header';
import { Footer } from './Footer';
import { SongList } from './SongList';
import { Search } from './Search';
import { useStyles } from './index.style';

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
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default SongListPage;
