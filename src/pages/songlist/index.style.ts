import { css } from '@emotion/css';
import { CommonStyles } from '@/common/styles';
import { useTheme } from '@/components/Theme';
import { px2rem } from '@/utils';

export const useStyles = () => {
  const { theme } = useTheme();

  const main = css`
    min-height: 100vh;
    width: 100%;
    background: ${CommonStyles.Colors[theme].bg.secondary};
    z-index: ${CommonStyles.ZIndex.content};
  `;
  const content = css`
    max-width: ${px2rem(CommonStyles.ContentWidth)};
    margin: 0 auto;
    padding-bottom: ${px2rem(60)};
  `;
  const actionBar = css`
    margin-top: ${px2rem(32)};
    padding: 0 ${px2rem(16)};
    @media screen and (min-width: ${CommonStyles.ScreenBreakpoints.xl}) {
      padding: 0;
    }
  `;

  return {
    main,
    content,
    actionBar,
  }
}
