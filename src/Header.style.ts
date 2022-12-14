// import { css } from 'styled-components';
import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export const HeaderContentWidth = 1280;
export const HeaderHeight = 72;

export namespace Styles {
  export const Header = css`
    width: 100%;
    height: ${px2rem(HeaderHeight)};
    background: ${CommonStyles.Colors.bg.secondary};
    box-shadow: ${CommonStyles.Shadows.common};
  `;
  export const HeaderContent = css`
    max-width: ${px2rem(HeaderContentWidth)};
    height: ${px2rem(HeaderHeight)};
    margin: 0 auto;
    padding: 0 ${px2rem(16)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  export const HeaderSide = css`
    display: flex;
  `;

  export const Title = css`
    display: inline-block;
    height: ${px2rem(HeaderHeight)};
    font-size: ${px2rem(24)};
    font-weight: 500;
    a {
      height: 100%;
      color: ${CommonStyles.Colors.fg.primary};
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    a:hover {
      color: ${CommonStyles.Colors.primary};
    }
  `;
  export const TitleIcon = css`
    width: ${px2rem(42)};
    height: ${px2rem(42)};
    margin-right: ${px2rem(16)};
    border-radius: 50%;
  `;

  export const NavList = css`
    display: inline-block;
    margin-left: ${px2rem(20)};
  `;
  export const NavItem = css`
    display: inline-block;
    height: ${px2rem(HeaderHeight)};
    padding: 0 ${px2rem(20)};
    font-size: ${px2rem(20)};
    a {
      height: 100%;
      color: ${CommonStyles.Colors.fg.low};
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    a:hover {
      color: ${CommonStyles.Colors.primary};
    }
  `;
};
