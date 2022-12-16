import React from 'react';
import classnames from 'classnames';
import { Styles } from './ScrollToTop.style';
import ScrollToTopIcon from './assets/icon/arrow-up.svg';

export const ScrollToTop = React.memo<{
  target?: HTMLElement | null;
  onClick?: () => void;
}>(({ target = window, onClick }) => {
  const scrollToTop = () => {
    target?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <button
      className={classnames(Styles.ScrollToTopButton, Styles.ScrollToTopPosition)}
      onClick={() => {
        scrollToTop();
        onClick?.();
      }}
    >
      <img className={Styles.ScrollToTopIcon} src={ScrollToTopIcon} />
    </button>
  );
});
