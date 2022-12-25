import React, { useState } from 'react';
import { useStyles } from './Header.style';
import AvatarImg from './assets/imgs/avatar.jpg';
import TitleImg from './assets/imgs/title.png';
import { ReactComponent as MenuIcon } from './assets/icon/menu.svg';

const titleText = '凜凜蝶凜';
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

  const styles = useStyles();

  return <>
    <header className={styles.header}>
      <div className={styles.headerContent}>

        <div className={styles.headerSide}>
          <Title
            icon={AvatarImg}
            content={
              <img className={styles.titleTextImage} src={TitleImg} />
            }
          />
          <NavList list={navList.map(item => ({ ...item, content: item.label }))} />
        </div>
        
        <div className={styles.headerSide}>
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
        </div>
      </div>
    )}
  </>;
}