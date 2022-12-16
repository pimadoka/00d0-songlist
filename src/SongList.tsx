import React, { useState } from 'react';
import { Styles } from './SongList.style';
import SearchIcon from './assets/icon/search.svg';

interface SongDef {
  id: number;
  song: string;
  singer: string;
  lang: string;
}

interface SongListProps {
  list: SongDef[];
}

export const SongList = React.memo<SongListProps>(({
  list = [],
}) => {
  return (
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
  );
});
