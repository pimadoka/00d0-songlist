import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export namespace Styles {
  export const SearchCard = css`
    background: ${CommonStyles.Colors.bg.secondary};
    box-shadow: ${CommonStyles.Shadows.common};
    border-radius: ${px2rem(4)};
    width: 100%;
    height: ${px2rem(52)};
    display: flex;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      width: ${px2rem(375)};
    }
  `;
  export const SearchInput = css`
    outline: 0;
    border: 0;
    height: 100%;
    flex: 1;
    background: transparent;
    padding: 0 ${px2rem(16)};
    font-size: ${px2rem(16)};
    color: ${CommonStyles.Colors.fg.primary};
  `;
  export const SearchButton = css`
    width: ${px2rem(52)};
    height: ${px2rem(52)};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  export const SearchIcon = css`
    width: ${px2rem(24)};
    height: ${px2rem(24)};
    color: ${CommonStyles.Colors.fg.primary};
  `;
}
