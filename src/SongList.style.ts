import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export namespace Styles {
  export const Table = css`
    width: 100%;
    box-shadow: ${CommonStyles.Shadows.common};
    background: ${CommonStyles.Colors.bg.secondary};
    border-radius: ${px2rem(4)};
    overflow: hidden;
    margin-top: ${px2rem(32)};
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
