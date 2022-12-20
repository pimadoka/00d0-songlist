import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export namespace Styles {
  export const Container = css`
    position: relative;
    margin-top: ${px2rem(32)};
  `;

  export const TableBg = css`
    box-shadow: ${CommonStyles.Shadows.common};
    background: ${CommonStyles.Colors.bg.secondary};
    overflow-x: auto;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.xl}) {
      overflow-x: hidden;
      overflow-y: hidden;
      border-radius: ${px2rem(4)};
    }
  `;

  export const Table = css`
    position: relative;
    z-index: ${CommonStyles.ZIndex.songlistContent};
    width: 100%;
  `;

  export const HeaderRow = css`
    background: ${CommonStyles.Colors.primary};
  `;
  export const HeaderCell = css`
    padding: ${px2rem(24)} ${px2rem(24)};
    font-size: ${px2rem(18)};
    color: #FFFFFF;
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
  `;
  export const BodyRow = css`
    border-top: 1px solid ${CommonStyles.Colors.border.level1};
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${transparentize(0.75, CommonStyles.Colors.primary)};
    }
  `;
  export const BodyCell = css`
    padding: ${px2rem(20)} ${px2rem(24)};
    font-size: ${px2rem(16)};
    color: ${CommonStyles.Colors.fg.primary};
    font-weight: 400;
    text-align: left;
  `;
}
