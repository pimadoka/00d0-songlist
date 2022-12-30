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
    position: relative;
  `;
  const content = css`
    position: absolute;
    left: 0;
    right: 0;
    top: 15%;
    text-align: center;
  `;
  const title = css`
    font-size: ${px2rem(180)};
    color: ${CommonStyles.Colors[theme].fg.secondary};
  `;
  const backAction = css`
    font-size: ${px2rem(18)};
    color: ${CommonStyles.Colors[theme].fg.low};
  `;

  return {
    main,
    content,
    title,
    backAction,
  }
}
