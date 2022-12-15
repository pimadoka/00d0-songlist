import React from 'react';
import { songList } from './data/songList';
import { Styles } from './SongList.style';

export const SongList = React.memo(() => {
  return (
    <table className={Styles.Table}>
      <thead>
        <tr className={Styles.HeaderRow}>
          <th className={Styles.HeaderCell}>歌名</th>
          <th className={Styles.HeaderCell}>歌手</th>
          <th className={Styles.HeaderCell}>语言</th>
        </tr>
      </thead>
      <tbody>
        {songList.map(item => (
          <tr key={item.id} className={Styles.BodyRow}>
            <td className={Styles.BodyCell}>{item.song}</td>
            <td className={Styles.BodyCell}>{item.singer}</td>
            <td className={Styles.BodyCell}>{item.lang}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
