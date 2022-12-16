import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export namespace Styles {
  export const ScrollToTopPosition = css`
    position: fixed;
    left: ${`calc((100% + ${px2rem(CommonStyles.ContentWidth)}) / 2 + ${px2rem(56)})`};
    bottom: ${px2rem(56)};
  `;
  export const ScrollToTopButton = css`
    width: ${px2rem(80)};
    height: ${px2rem(80)};
    background: ${CommonStyles.Colors.bg.secondary};
    box-shadow: ${CommonStyles.Shadows.common};
    border-radius: ${px2rem(4)};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${transparentize(0.75, CommonStyles.Colors.primary)};
    }
  `;
  export const ScrollToTopIcon = css`
    width: ${px2rem(36)};
    height: ${px2rem(36)};
  `;
}
