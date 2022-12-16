import React, { useMemo } from 'react';
import { SongListBg } from './SongListBg';
import { Styles } from './SongList.style';

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

  return (
    <section className={Styles.Container}>
      <div className={Styles.TableBg}>
        <table className={Styles.Table}>
          <thead>
            <tr className={Styles.HeaderRow}>
              <th className={Styles.HeaderCell}></th>
              <th className={Styles.HeaderCell}>歌名</th>
              <th className={Styles.HeaderCell}>歌手</th>
              <th className={Styles.HeaderCell}>语言</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={item.id} className={Styles.BodyRow}>
                <td className={Styles.BodyCell}>{i + 1}</td>
                <td className={Styles.BodyCell}>{item.song}</td>
                <td className={Styles.BodyCell}>{item.singer}</td>
                <td className={Styles.BodyCell}>{item.lang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showBgImg && <SongListBg />}
    </section>
  );
});
