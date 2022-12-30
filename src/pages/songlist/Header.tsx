import React, { useState } from 'react';
import Switch from '@/components/Switch';
import { useTheme } from '@/components/Theme';
import { HomePageTitle } from '@/common';
import { useStyles } from './Header.style';

import { ReactComponent as MenuIcon } from '@/assets/icon/menu.svg';
import AvatarImg from '@/assets/imgs/avatar.jpg';
import TitleImg from '@/assets/imgs/title.png';

const navList = [
  {
    key: 'bilibili-space',
    label: 'bilibili主页',
    url: 'https://space.bilibili.com/1220317431',
  },
  {
    key: 'bilibili-live',
    label: 'bilibili直播间',
    url: 'https://live.bilibili.com/25290861',
  },
];

interface NavItemDef {
  key: string;
  content: React.ReactNode;
  url: string;
}

const NavList: React.FC<{
  list: NavItemDef[];
}> = ({
  list = [],
}) => {
  const styles = useStyles();

  return (
    <nav className={styles.navList}>
      <ul>
        {list.map((item) => (
          <li key={item.key} className={styles.navItem}>
            <a href={item.url} target='_blank'>{item.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const Title: React.FC<{
  icon: string;
  content: React.ReactNode;
}> = ({
  icon,
  content,
}) => {
  const styles = useStyles();
  
  return (
    <h1 className={styles.title}>
      <a href='/'>
        <img className={styles.titleIcon} src={icon} />
        {content}
      </a>
    </h1>
  );
}

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  const styles = useStyles();

  return <>
    <header className={styles.header}>
      <div className={styles.headerContent}>

        <div className={styles.headerSide}>
          <Title
            icon={AvatarImg}
            content={
              <>
                <img className={styles.titleTextImage} src={TitleImg} alt={HomePageTitle} />
                <h1 className={styles.titleHiddenText}>{HomePageTitle}</h1>
              </>
            }
          />
          <NavList list={navList.map(item => ({ ...item, content: item.label }))} />
        </div>
        
        <div className={styles.headerSide}>
          <div className={styles.themeSwitchInHeader}>
            <Switch checked={theme === 'light'} onChange={v => setTheme(v ? 'light' : 'dark')} />
          </div>
          <button className={styles.menuButton} onClick={() => {
            setShowMenu(!showMenu);
          }}>
            <MenuIcon className={styles.menuIcon} />
          </button>
        </div>
      </div>
    </header>

    {showMenu && (
      <div className={styles.overlay}>
        <div className={styles.menu}>
          <nav>
            <ul>
              {navList.map(item => (
                <li key={item.key} className={styles.menuItem}>
                  <a href={item.url}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.menuExtra}>
            <div className={styles.menuRow}>
              <span className={styles.menuLabel}>主题</span>
              <Switch checked={theme === 'light'} onChange={v => setTheme(v ? 'light' : 'dark')} />
            </div>
          </div>
        </div>
      </div>
    )}
  </>;
}