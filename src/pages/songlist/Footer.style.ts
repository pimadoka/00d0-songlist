import { css } from '@emotion/css';
import { CommonStyles } from '@/common/styles';
import { useTheme } from '@/components/Theme';
import { px2rem } from '@/utils';

export const useStyles = () => {
  const { theme } = useTheme();

  const footer = css`
    padding: ${px2rem(60)} 0 ${px2rem(16)} 0;
    font-size: ${px2rem(14)};
    color: ${CommonStyles.Colors[theme].fg.low};
    text-align: center;
    a {
      color: ${CommonStyles.Colors[theme].fg.low};
    }
    > * {
      margin-top: ${px2rem(4)};
    }
  `;
  const action = css`
    display: inline-flex;
    align-items: center;
    &:hover {
      color: ${CommonStyles.Colors[theme].primary};
    }
  `;
  const githubIcon = css`
    font-size: 16px;
    margin-bottom: ${px2rem(2)};
    margin-right: ${px2rem(4)};
  `;
  const icp = css`
    font-size: ${px2rem(12)};
  `;

  return {
    footer,
    githubIcon,
    action,
    icp,
  };
}
