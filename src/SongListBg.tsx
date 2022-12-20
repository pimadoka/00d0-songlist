import { css } from '@emotion/css';
import React from 'react';
import { px2rem } from './utils';

import BgImgSrc from './assets/imgs/avatar-1.jpg';

const ContainerStyle = css`
  display: block;
  position: sticky;
  height: 0;
  bottom: 0;
`;
const ImgStyle = css`
  position: absolute;
  right: ${px2rem(80)};
  bottom: 0;
  opacity: 0.1;
  pointer-events: none;
  /* filter: blur(1px); */
  @media screen and (max-height: 580px) {
    display: none;
  }
`;

export const SongListBg: React.FC = () => {
  return (
    <div className={ContainerStyle}>
      <img className={ImgStyle} src={BgImgSrc} />
    </div>
  );
}
