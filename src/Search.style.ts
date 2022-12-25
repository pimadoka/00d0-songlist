import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { useTheme } from './components/Theme';
import { px2rem } from './utils';

export const useStyles = () => {
  const { theme } = useTheme();

  const searchCard = css`
    background: ${CommonStyles.Colors[theme].bg.primary};
    box-shadow: ${CommonStyles.Shadows[theme].common};
    border-radius: ${px2rem(4)};
    width: 100%;
    height: ${px2rem(52)};
    display: flex;
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.sm}) {
      width: ${px2rem(375)};
    }
  `;
  const searchInput = css`
    outline: 0;
    border: 0;
    height: 100%;
    flex: 1;
    background: transparent;
    padding: 0 ${px2rem(16)};
    font-size: ${px2rem(16)};
    color: ${CommonStyles.Colors[theme].fg.primary};
  `;
  const searchButton = css`
    width: ${px2rem(52)};
    height: ${px2rem(52)};
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const searchIcon = css`
    width: ${px2rem(24)};
    height: ${px2rem(24)};
    color: ${CommonStyles.Colors[theme].fg.primary};
  `;

  return {
    searchCard,
    searchInput,
    searchButton,
    searchIcon,
  };
}
