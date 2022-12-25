import { css } from '@emotion/css';
import { CommonStyles } from './common/styles';
import { useTheme } from './components/Theme';
import { px2rem } from './utils';

export const useStyles = () => {
  const { theme } = useTheme();

  const scrollToTopPosition = css`
    position: fixed;
    right: ${px2rem(20)};
    bottom: ${px2rem(56)};
    z-index: ${CommonStyles.ZIndex.scrollToTop};
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints['2xl']}) {
      left: ${`calc((100% + ${px2rem(CommonStyles.ContentWidth)}) / 2 + ${px2rem(36)})`};
      right: unset;
    }
  `;
  const scrollToTopButton = css`
    width: ${px2rem(80)};
    height: ${px2rem(80)};
    background: ${CommonStyles.Colors[theme].bg.primary};
    box-shadow: ${CommonStyles.Shadows[theme].common};
    border-radius: ${px2rem(4)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${CommonStyles.Colors[theme].fg.primary};
    transition: all 0.3s ease-in-out;
    &:hover {
      background: ${CommonStyles.Colors[theme].primary};
      color: ${CommonStyles.Colors[theme].fg.reverse};
    }
  `;
  const scrollToTopIcon = css`
    width: ${px2rem(36)};
    height: ${px2rem(36)};
  `;

  return {
    scrollToTopPosition,
    scrollToTopButton,
    scrollToTopIcon,
  };
}
