import { css } from '@emotion/css';
import { CommonStyles } from '../../common/styles';
import { useTheme } from '../../components/Theme';
import { px2rem } from '../../utils';

const SwitchTriggerSize = 24;
const Padding = 2;
const SwitchWidth = Padding * 2 + SwitchTriggerSize * 2;
const SwitchHeight = Padding * 2 + SwitchTriggerSize;

export const useStyles = () => {
  const { theme } = useTheme();

  return {
    container: css`
      width: ${px2rem(SwitchWidth)};
      height: ${px2rem(SwitchHeight)};
      border-radius: 9999px;
      display: flex;
      align-items: center;
      position: relative;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    `,
    containerUnchecked: css`
      background: ${CommonStyles.Colors[theme].bg.low};
    `,
    containerChecked: css`
      background: ${CommonStyles.Colors[theme].primary};
    `,
    trigger: css`
      width: ${px2rem(SwitchTriggerSize)};
      height: ${px2rem(SwitchTriggerSize)};
      border-radius: 50%;
      background: ${CommonStyles.Colors[theme].bg.primary};
      box-shadow: ${CommonStyles.Shadows[theme].common};
      position: absolute;
      transition: all 0.3s ease-in-out;
    `,
    triggerUnchecked: css`
      transform: ${`translateX(${px2rem(Padding)})`};
    `,
    triggerChecked: css`
      transform: ${`translateX(${px2rem(SwitchWidth - Padding - SwitchTriggerSize)})`};
    `,
  };
}
