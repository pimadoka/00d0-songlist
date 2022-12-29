import { CommonStyles } from '@/common/styles';
import { SongDef } from '@/common/types';
import { csv2Records } from '@/utils/csv2Records';
import { css } from '@emotion/css';
import React, { useState } from 'react';

const SongFields = [
  'song',
  'singer',
  'lang',
  // 'url_00d0',
  // 'url_iris',
]

const Csv2JsonPage: React.FC = () => {
  const [json, setJson] = useState('');

  const onUpload = async (file: File) => {
    const csv = await file.text();
    const songList: Partial<SongDef>[] = csv2Records(csv, {
      skipFirstRow: true,
      fields: SongFields,
    });
    setJson(JSON.stringify(songList));
  }

  return (
    <div>
      <input
        type='file'
        accept='.csv'
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onUpload(file);
          }
        }}
      />
      <div className={css`
        background: ${CommonStyles.Colors.light.bg.secondary};
        color: ${CommonStyles.Colors.light.fg.primary};
      `}>
        {json}
      </div>
    </div>
  );
}

export default Csv2JsonPage;
