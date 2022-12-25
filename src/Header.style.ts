// import { css } from 'styled-components';
import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from './common/styles';
import { px2rem } from './utils';

export const HeaderContentWidth = CommonStyles.ContentWidth;
export const HeaderHeight = 72;

export namespace Styles {
  export const Header = css`
    width: 100%;
    height: ${px2rem(HeaderHeight)};
    background: ${transparentize(0.25, CommonStyles.Colors.bg.secondary)};
    box-shadow: ${CommonStyles.Shadows.common};
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: ${CommonStyles.ZIndex.header};
  `;
  export const HeaderContent = css`
    max-width: ${px2rem(HeaderContentWidth)};
    height: ${px2rem(HeaderHeight)};
    margin: 0 auto;
    padding: 0 0 0 ${px2rem(16)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.xl}) {
      padding: 0;
    }
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      padding: 0 ${px2rem(16)};
    }
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
      transition: all 0.15s ease-in-out;
    }
    a:hover {
      color: ${CommonStyles.Colors.primary};
    }
  `;
  export const TitleIcon = css`
    width: ${px2rem(42)};
    height: ${px2rem(42)};
    margin-right: ${px2rem(4)};
    border-radius: 50%;
  `;
  export const TitleTextImage = css`
    width: ${px2rem(104)};
    height: ${px2rem(40)};
  `;

  export const NavList = css`
    display: none;
    margin-left: ${px2rem(20)};
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: inline-block;
    }
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
      transition: all 0.15s ease-in-out;
    }
    a:hover {
      color: ${CommonStyles.Colors.primary};
    }
  `;

  export const MenuButton = css`
    width: ${px2rem(HeaderHeight)};
    height: ${px2rem(HeaderHeight)};
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: none;
    }
  `;
  export const MenuIcon = css`
    color: ${CommonStyles.Colors.fg.primary};
    width: ${px2rem(24)};
    height: ${px2rem(24)};
  `;
  export const Overlay = css`
    position: sticky;
    height: 0;
    top: ${px2rem(HeaderHeight)};
    left: 0;
    right: 0;
    z-index: ${CommonStyles.ZIndex.header};
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: none;
    }
  `;
  export const Menu = css`
    background: ${transparentize(0.25, CommonStyles.Colors.bg.secondary)};
    box-shadow: ${CommonStyles.Shadows.common};
    backdrop-filter: blur(8px);
  `;
  export const MenuItem = css`
    height: ${px2rem(56)};
    padding: 0 ${px2rem(16)};
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
      color: ${CommonStyles.Colors.fg.low};
    }
    &:hover {
      background: ${transparentize(0.75, CommonStyles.Colors.primary)};
    }
  `;
};
