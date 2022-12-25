import { css } from '@emotion/css';
import { transparentize } from 'polished';
import { CommonStyles } from './common/styles';
import { useTheme } from './components/Theme';
import { px2rem } from './utils';

export const useStyles = () => {
  const { theme } = useTheme();

  const container = css`
    position: relative;
    margin-top: ${px2rem(32)};
  `;

  const tableBg = css`
    box-shadow: ${CommonStyles.Shadows[theme].common};
    background: ${CommonStyles.Colors[theme].bg.secondary};
    overflow-x: auto;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.xl}) {
      overflow-x: hidden;
      overflow-y: hidden;
      border-radius: ${px2rem(4)};
    }
  `;

  const table = css`
    position: relative;
    z-index: ${CommonStyles.ZIndex.songlistContent};
    width: 100%;
  `;

  const headerRow = css`
    background: ${CommonStyles.Colors[theme].primary};
  `;
  const headerCell = css`
    padding: ${px2rem(24)} ${px2rem(24)};
    font-size: ${px2rem(18)};
    color: ${CommonStyles.Colors[theme].fg.reverse};
    font-weight: 500;
    text-align: left;
    white-space: nowrap;
  `;
  const bodyRow = css`
    border-top: 1px solid ${CommonStyles.Colors[theme].border.level1};
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${transparentize(0.75, CommonStyles.Colors[theme].primary)};
    }
  `;
  const bodyCell = css`
    padding: ${px2rem(20)} ${px2rem(24)};
    font-size: ${px2rem(16)};
    color: ${CommonStyles.Colors[theme].fg.primary};
    font-weight: 400;
    text-align: left;
  `;

  return {
    container,
    tableBg,
    table,
    headerRow,
    headerCell,
    bodyRow,
    bodyCell,
  };
}
