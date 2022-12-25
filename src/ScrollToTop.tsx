import React from 'react';
import classnames from 'classnames';
import { useStyles } from './ScrollToTop.style';
import { ReactComponent as ScrollToTopIcon } from './assets/icon/arrow-up.svg';

export const ScrollToTop = React.memo<{
  target?: HTMLElement | null;
  onClick?: () => void;
}>(({ target = window, onClick }) => {
  const styles = useStyles();

  const scrollToTop = () => {
    target?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      className={classnames(styles.scrollToTopButton, styles.scrollToTopPosition)}
      onClick={() => {
        scrollToTop();
        onClick?.();
      }}
    >
      <ScrollToTopIcon className={styles.scrollToTopIcon} />
    </button>
  );
});
