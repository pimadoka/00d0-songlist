import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from '@/common/styles';
import { useTheme } from '@/components/Theme';
import { px2rem } from '@/utils';

const HeaderContentWidth = CommonStyles.ContentWidth;
const HeaderHeight = 72;

export const useStyles = () => {
  const { theme } = useTheme();

  const header = css`
    width: 100%;
    height: ${px2rem(HeaderHeight)};
    background: ${transparentize(0.25, CommonStyles.Colors[theme].bg.primary)};
    box-shadow: ${CommonStyles.Shadows[theme].common};
    backdrop-filter: blur(8px);
    position: sticky;
    top: 0;
    z-index: ${CommonStyles.ZIndex.header};
  `;
  const headerContent = css`
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
  const headerSide = css`
    display: flex;
    align-items: center;
  `;

  const title = css`
    display: inline-block;
    height: ${px2rem(HeaderHeight)};
    font-size: ${px2rem(24)};
    font-weight: 500;
    a {
      height: 100%;
      color: ${CommonStyles.Colors[theme].fg.primary};
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
    }
    a:hover {
      color: ${CommonStyles.Colors[theme].primary};
    }
  `;
  const titleIcon = css`
    width: ${px2rem(42)};
    height: ${px2rem(42)};
    margin-right: ${px2rem(4)};
    border-radius: 50%;
  `;
  const titleTextImage = css`
    width: ${px2rem(104)};
    height: ${px2rem(40)};
  `;

  const navList = css`
    display: none;
    margin-left: ${px2rem(20)};
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: inline-block;
    }
  `;
  const navItem = css`
    display: inline-block;
    height: ${px2rem(HeaderHeight)};
    padding: 0 ${px2rem(20)};
    font-size: ${px2rem(20)};
    a {
      height: 100%;
      color: ${CommonStyles.Colors[theme].fg.low};
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
    }
    a:hover {
      color: ${CommonStyles.Colors[theme].primary};
    }
  `;

  const themeSwitchInHeader = css`
    display: none;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: block;
    }
  `;
  const menuButton = css`
    width: ${px2rem(HeaderHeight)};
    height: ${px2rem(HeaderHeight)};
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      display: none;
    }
  `;
  const menuIcon = css`
    color: ${CommonStyles.Colors[theme].fg.primary};
    width: ${px2rem(24)};
    height: ${px2rem(24)};
  `;
  const overlay = css`
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
  const menu = css`
    background: ${transparentize(0.25, CommonStyles.Colors[theme].bg.primary)};
    box-shadow: ${CommonStyles.Shadows[theme].common};
    backdrop-filter: blur(8px);
    border-top: 1px solid ${CommonStyles.Colors[theme].border.level1};
  `;
  const menuRow = css`
    height: ${px2rem(56)};
    padding: 0 ${px2rem(16)};
    display: flex;
    align-items: center;
    color: ${CommonStyles.Colors[theme].fg.low};
  `;
  const menuItem = css(menuRow, `
    cursor: pointer;
    a {
      color: ${CommonStyles.Colors[theme].fg.low};
    }
    &:hover {
      background: ${transparentize(0.75, CommonStyles.Colors[theme].primary)};
    }
  `);
  const menuExtra = css`
    border-top: 1px solid ${CommonStyles.Colors[theme].border.level1};
  `;
  const menuLabel = css`
    margin-right: 0.5em;
  `;

  return {
    header,
    headerContent,
    headerSide,
    title,
    titleIcon,
    titleTextImage,
    navList,
    navItem,
    themeSwitchInHeader,
    menuButton,
    menuIcon,
    overlay,
    menu,
    menuRow,
    menuItem,
    menuExtra,
    menuLabel,
  };
}
