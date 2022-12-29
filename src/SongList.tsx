import React, { useMemo } from 'react';
import { SongListBg } from '@/SongListBg';
import { useStyles } from '@/SongList.style';

interface SongDef {
  id: number;
  song: string;
  singer: string;
  lang: string;
}

interface SongListProps {
  list: SongDef[];
}

const MinRowHeight = 65;
const ShowBgImgHeight = 400;

export const SongList = React.memo<SongListProps>(({
  list = [],
}) => {
  const showBgImg = useMemo(() => MinRowHeight * list.length >= ShowBgImgHeight, [list.length]);

  const styles = useStyles();

  return (
    <section className={styles.container}>
      <div className={styles.tableBg}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCell}></th>
              <th className={styles.headerCell}>歌名</th>
              <th className={styles.headerCell}>歌手</th>
              <th className={styles.headerCell}>语言</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={item.id} className={styles.bodyRow}>
                <td className={styles.bodyCell}>{i + 1}</td>
                <td className={styles.bodyCell}>{item.song}</td>
                <td className={styles.bodyCell}>{item.singer}</td>
                <td className={styles.bodyCell}>{item.lang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showBgImg && <SongListBg />}
    </section>
  );
});
