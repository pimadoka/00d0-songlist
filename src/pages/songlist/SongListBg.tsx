import { css } from '@emotion/css';
import React from 'react';
import { px2rem } from '@/utils';
import { useTheme } from '@/components/Theme';
import { Theme } from '@/common/styles';

import BgImgSrc from '@/assets/imgs/bg.png';
import DarkBgImgSrc from '@/assets/imgs/bg-dark.png';

const bgConfigs: Record<Theme, {
  src: string;
  width: number;
  height: number;
}> = {
  light: {
    src: BgImgSrc,
    width: 397,
    height: 397,
  },
  dark: {
    src: DarkBgImgSrc,
    width: 425,
    height: 425,
  },
};

const useStyles = () => {
  const { theme } = useTheme();
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
      width: ${px2rem(bgConfigs[theme].width)};
      height: ${px2rem(bgConfigs[theme].height)};
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
      <img className={styles.img} src={bgConfigs[theme].src} />
    </div>
  );
}
