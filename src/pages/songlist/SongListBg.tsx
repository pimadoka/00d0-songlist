import { css } from '@emotion/css';
import React from 'react';
import { px2rem } from '@/utils';
import { useTheme } from '@/components/Theme';

import BgImgSrc from '@/assets/imgs/bg.png';
import DarkBgImgSrc from '@/assets/imgs/bg-dark.png';

const useStyles = () => {
  return {
    container: css`
      display: block;
      position: sticky;
      height: 0;
      bottom: 0;
    `,
    img: css`
      position: absolute;
      right: ${px2rem(80)};
      bottom: 0;
      width: ${px2rem(397)};
      height: ${px2rem(397)};
      opacity: 0.1;
      pointer-events: none;
      /* filter: blur(1px); */
      @media screen and (max-height: 580px) {
        display: none;
      }
    `,
  };
}

export const SongListBg: React.FC = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  return (
    <div className={styles.container}>
      <img className={styles.img} src={theme === 'light' ? BgImgSrc : DarkBgImgSrc} />
    </div>
  );
}
